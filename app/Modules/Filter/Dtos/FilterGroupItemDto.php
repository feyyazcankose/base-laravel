<?php

namespace App\Modules\Filter\Dtos;

use Illuminate\Support\Arr;

/**
 * @OA\Schema(
 *     schema="FilterGroupItemDto",
 *     type="object",
 *     title="Filter Group Item",
 *     @OA\Property(
 *         property="key",
 *         type="string",
 *         example="Konutkonfor"
 *     )
 * )
 */
class FilterGroupItemDto
{
    /**
     * @var string
     */
    public $key;

    public function __construct($item)
    {
        $this->key = Arr::get($item, 'key', 'Konutkonfor');
    }
}
