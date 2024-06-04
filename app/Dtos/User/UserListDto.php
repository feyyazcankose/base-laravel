<?php

namespace App\Dtos\User;

use OpenApi\Annotations as OA;

/**
 * @OA\Get(
 *     path="/api/admins",
 *     summary="Get paginated list of admins",
 *     @OA\Response(
 *         response=200,
 *         description="Successful responses"
 *     )
 * )
 */
class UserListDto
{
    /**
     * @var UserDto[]
     */
    public $items;

    /**
     * @var FilterMetaDto
     */
    public $meta;

    /**
     * @var array
     */
    public $links;

    public function __construct($params)
    {
        $this->items = array_map(function ($row) {
            return new UserDto($row);
        }, $params['items']);

        $this->meta = $params['meta'];
        $this->links = [
            'first' => 'string',
            'previous' => 'string',
            'next' => 'string',
            'last' => 'string',
        ];
    }
}
