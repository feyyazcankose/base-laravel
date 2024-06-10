<?php

namespace App\Modules\Filter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FilterService extends Controller
{
    private $whereFilter = [];
    public $softDelete = false;
    public $skip = 1;
    public $take = 10;

    // Get dynamic group list
    public function getGroups(Request $request, $model)
    {
        $group = json_decode($request->group, true);

        if (empty($group)) {
            return response()->json([
                'items' => [],
                'totalCount' => 0
            ]);
        }

        // Filter Group Where
        $where = null;
        $selector = $this->selector($group[0]['selector'], true, 'select');
        if (@$group[0]['search']) {
            $where = $this->selector(
                $group[0]['selector'],
                $group[0]['search'] ?? null,
                'where',
                'insensitive'
            );
        }

        if (isset($group[0]['filter'])) {
            $this->setFilter(json_encode($group[0]['filter']));
        }

        $query = $model::select($selector);

        if ($where) {
            $query->where(...$where);
        }

        if ($request->has('skip') && $request->has('take')) {
            $query->skip(($this->skip - 1) * $this->take)
                ->take($this->take);
        }

        // Soft delete kontrolü
        if ($this->softDelete ?? true) {
            $query->whereNull('deleted_at');
        }

        $items = $query->get();
        $totalCount = $model::count();

        // Benzersiz değerlerin alınması
        $uniques = $this->getUniqueValues($items, $group[0]['selector']);

        return [
            'items' => $uniques,
            'totalCount' => $totalCount
        ];
    }

    // Set filter method
    public function setFilter($filter)
    {
        $items = json_decode($filter ?? '[]', true);
        $andArr = [];
        foreach ($items as $item) {
            switch ($item['type']) {
                case 'SEARCH':
                    $orArrSearch = [];
                    foreach ($item['columns'] as $column) {
                        if (is_numeric($item['value']) && $column['type'] === 'number') {
                            $orArrSearch[] = [$column['id'], '=', (int)$item['value']];
                        } elseif ($column['type'] === 'string') {
                            $orArrSearch[] = [$column['id'], 'LIKE', '%' . $item['value'] . '%'];
                        } elseif (in_array($item['value'], ['true', 'false']) && $column['type'] === 'boolean') {
                            $orArrSearch[] = [$column['id'], '=', $item['value'] === 'true'];
                        }
                    }
                    $andArr[] = function ($query) use ($orArrSearch) {
                        foreach ($orArrSearch as $orItem) {
                            $query->orWhere($orItem[0], $orItem[1], $orItem[2]);
                        }
                    };
                    break;
                case 'SELECT':
                    $orArr = [];
                    foreach ($item['selecteds'] as $select) {
                        $orArr[] = [$item['id'], '=', $select];
                    }
                    if ($item['operation'] === 'NOT_EQUAL') {
                        $andArr[] = function ($query) use ($orArr) {
                            foreach ($orArr as $orItem) {
                                $query->where($orItem[0], '!=', $orItem[2]);
                            }
                        };
                    } else {
                        $andArr[] = function ($query) use ($orArr) {
                            foreach ($orArr as $orItem) {
                                $query->orWhere($orItem[0], $orItem[1], $orItem[2]);
                            }
                        };
                    }
                    break;
                case 'NUMBER':
                    $andArr[] = [$item['id'], '>=', $item['min'] ?? 0];
                    $andArr[] = [$item['id'], '<=', $item['max'] ?? 0];
                    break;
                case 'DATE':
                    $andArr[] = [$item['id'], '>=', $item['min'] ? new \DateTime($item['min']) : new \DateTime()];
                    $andArr[] = [$item['id'], '<=', $item['max'] ? new \DateTime($item['max']) : new \DateTime()];
                    break;
                default:
                    break;
            }
        }
        if ($this->softDelete) {
            $this->whereFilter = array_merge($andArr, [['deleted_at', '=', null]]);
        } else {
            $this->whereFilter = $andArr;
        }
    }

    // Get where items
    public function getWhereFilter($options, $softDelete = true)
    {
        $this->setFilter(@$options["filter"], $softDelete);
        $localFilter = $this->whereFilter;
        $this->whereFilter = [];

        return ["where" => $localFilter, "orderBy" => $this->getOrderBy($options)];
    }

    // Get selector object
    public function selector($selector, $value, $type = 'where', $mode = null)
    {
        if ($type === 'select') {
            return [$selector];
        } elseif ($type === 'where') {
            return $mode ? [$selector, 'LIKE', '%' . $value . '%'] : [$selector, '=', $value];
        } elseif ($type === 'order') {
            return [$selector, $value === 'asc' ? 'asc' : 'desc'];
        }
    }

    // Get unique values
    public function getUniqueValues($data, $selector)
    {
        $uniqueValues = [];
        foreach ($data as $item) {
            $selectedValue = $this->getValueBySelector($item, $selector);
            if ($selectedValue && !in_array($selectedValue, $uniqueValues)) {
                $uniqueValues[] = $selectedValue;
            }
        }
        return $uniqueValues;
    }

    // Get selector in value
    public function getValueBySelector($object, $selector)
    {
        $selectors = explode('.', $selector);
        $value = $object;
        foreach ($selectors as $prop) {
            if (!isset($value->$prop)) {
                return null;
            }
            $value = $value->$prop;
        }
        return $value;
    }

    //Get order by
    private function getOrderBy($options)
    {
        $orderBy = [];
        try {
            $sortSplit = explode(',', @$options['sort']);
            $orderBy = $this->selector($sortSplit[0], $sortSplit[1], 'order');
        } catch (\Exception $e) {
            $orderBy = ['created_at', 'DESC'];
        }

        return  $orderBy;
    }
}
