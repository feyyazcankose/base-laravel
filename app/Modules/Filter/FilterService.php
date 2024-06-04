<?php

namespace App\Modules\Filter;

use Carbon\Carbon;

class FilterService
{
    protected $whereFilter = [];

    // Filter parse and items loop
    public function setFilter($filter, $softDelete = true)
    {
        $items = json_decode($filter ?? '[]', true);
        $andArr = [];

        foreach ($items as $item) {
            switch ($item['type']) {
                case 'SEARCH':
                    $orArrSearch = [];
                    foreach ($item['columns'] as $column) {
                        if (is_numeric($item['value']) && $column['type'] === 'number') {
                            $orArrSearch[] = [$column['id'], '=', (int) $item['value']];
                        } elseif ($column['type'] === 'string') {
                            $orArrSearch[] = [$column['id'], 'ILIKE', '%' . $item['value'] . '%'];
                        } elseif (in_array($item['value'], ['true', 'false']) && $column['type'] === 'boolean') {
                            $orArrSearch[] = [$column['id'], '=', $item['value'] === 'true'];
                        }
                    }
                    $andArr[] = function ($query) use ($orArrSearch) {
                        $query->orWhere($orArrSearch);
                    };
                    break;
                case 'SELECT':
                    $orArr = [];
                    foreach ($item['selecteds'] as $select) {
                        $orArr[] = [$item['id'], '=', $select];
                    }
                    if ($item['operation'] === 'NOT_EQUAL') {
                        $andArr[] = function ($query) use ($orArr) {
                            $query->whereNot($orArr);
                        };
                    } else {
                        $andArr[] = function ($query) use ($orArr) {
                            $query->orWhere($orArr);
                        };
                    }
                    break;
                case 'NUMBER':
                    $andArr[] = [$item['id'], '>=', $item['min'] ?? 0];
                    $andArr[] = [$item['id'], '<=', $item['max'] ?? 0];
                    break;
                case 'DATE':
                    $andArr[] = [$item['id'], '>=', new Carbon($item['min'] ?? 'now')];
                    $andArr[] = [$item['id'], '<=', new Carbon($item['max'] ?? 'now')];
                    break;
                default:
                    break;
            }
        }

        if ($softDelete) {
            $this->whereFilter = function ($query) use ($andArr) {
                $query->where($andArr)->whereNull('deleted_at');
            };
        } else {
            $this->whereFilter = function ($query) use ($andArr) {
                $query->where($andArr);
            };
        }
    }

    // Get where items
    public function getWhereFilter($filter, $softDelete = true)
    {
        $this->setFilter($filter, $softDelete);
        $localFilter = $this->whereFilter;
        $this->whereFilter = [];
        return $localFilter;
    }

    // Get selector object
    public function selector($selector, $value, $type = 'where', $mode = null)
    {
        if ($type === 'select') {
            // Eloquent does not require special handling for select
            return [$selector => $value];
        } elseif ($type === 'where') {
            if ($mode === 'insensitive') {
                return [$selector, 'ILIKE', '%' . $value . '%'];
            } else {
                return [$selector, '=', $value];
            }
        } elseif ($type === 'order') {
            return [$selector => $value === 'asc' ? 'asc' : 'desc'];
        }
    }

    // Get unique values
    public function getUniqueValues($data, $selector)
    {
        $uniqueValues = collect($data)->pluck($selector)->unique();
        return $uniqueValues->values()->all();
    }

    // Get dynamic group list
    public function getGroups($options, $model, $softDelete = true)
    {
        $group = json_decode($options['group'], true);
        if (count($group)) {
            $selector = $this->selector($group[0]['selector'], true, 'select');
            $where = $this->selector($group[0]['selector'], $group[0]['search'], 'where', 'insensitive');

            if ($group[0]['filter']) {
                $this->setFilter(json_encode($group[0]['filter']));
            }

            $query = $model::select($selector)->skip(($options['skip'] - 1) * $options['take'])->take($options['take']);

            if ($where) {
                $query->where($where)->where($this->whereFilter);
            }

            if ($softDelete) {
                $query->whereNull('deleted_at');
            }

            $items = $query->get();
            $totalCounts = $model::whereNull('deleted_at')->count();

            $uniques = $this->getUniqueValues($items, $group[0]['selector']);
            return [
                'items' => $uniques,
                'totalCount' => $totalCounts,
            ];
        }

        return [
            'items' => [],
            'totalCount' => 0,
        ];
    }
}
