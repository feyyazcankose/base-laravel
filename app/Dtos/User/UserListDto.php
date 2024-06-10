<?php

namespace App\Dtos\User;

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

    public function __construct($params)
    {
        $this->items = array_map(function ($row) {
            return new UserDto($row);
        }, $params['items']);

        $this->meta = $params['meta'];
    }
}
