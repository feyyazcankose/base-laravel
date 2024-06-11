<?php

namespace App\Http\Dtos;

use App\Models\User;

class UserDto
{
    public int $id;
    public string $name;
    public string $email;
    public string $createdAt;

    public function __construct(User $user)
    {
        $this->id = $user->id;
        $this->name = $user->name;
        $this->email = $user->email;
        $this->createdAt = $user->created_at;
    }
}
