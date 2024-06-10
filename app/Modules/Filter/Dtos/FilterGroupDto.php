<?php

namespace App\Modules\Filter\Dtos;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="FilterGroupDto",
 *     type="object",
 *     title="Filter Group",
 *     @OA\Property(
 *         property="data",
 *         type="array",
 *         @OA\Items(ref="#/components/schemas/FilterGroupItemDto")
 *     ),
 *     @OA\Property(
 *         property="totalCount",
 *         type="integer",
 *         example=100
 *     )
 * )
 */
class FilterGroupDto
{
    /**
     * @var FilterGroupItemDto[]
     */
    public $data;

    /**
     * @var int
     */
    public $totalCount;

    public function __construct($data)
    {
        $this->data = array_map(function ($item) {
            return new FilterGroupItemDto($item);
        }, $data['items']);

        $this->totalCount = $data['totalCount'];
    }
}
