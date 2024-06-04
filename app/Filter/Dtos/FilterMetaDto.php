<?php

namespace App\Filter\Dtos;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="FilterMetaDto",
 *     type="object",
 *     title="Filter Meta",
 *     @OA\Property(
 *         property="totalItems",
 *         type="integer",
 *         example=100
 *     ),
 *     @OA\Property(
 *         property="itemCount",
 *         type="integer",
 *         example=10
 *     ),
 *     @OA\Property(
 *         property="itemsPerPage",
 *         type="integer",
 *         example=10
 *     ),
 *     @OA\Property(
 *         property="totalPages",
 *         type="integer",
 *         example=10
 *     ),
 *     @OA\Property(
 *         property="currentPage",
 *         type="integer",
 *         example=1
 *     )
 * )
 */
class FilterMetaDto
{
    /**
     * @var int
     */
    public $totalItems;

    /**
     * @var int
     */
    public $itemCount;

    /**
     * @var int
     */
    public $itemsPerPage;

    /**
     * @var int
     */
    public $totalPages;

    /**
     * @var int
     */
    public $currentPage;

    public function __construct($meta)
    {
        $this->totalItems = $meta['totalItems'];
        $this->itemCount = $meta['itemCount'];
        $this->itemsPerPage = $meta['itemsPerPage'];
        $this->totalPages = $meta['totalPages'];
        $this->currentPage = $meta['currentPage'];
    }
}
