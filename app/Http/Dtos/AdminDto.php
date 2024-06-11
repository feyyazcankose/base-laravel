<?php

namespace App\Http\Dtos;

use App\Models\Admin;

class AdminDto
{
    public int $id;
    public string $name;
    public string $email;
    public string $createdAt;

    public function __construct(Admin $admin)
    {
        $this->id = $admin->id;
        $this->name = $admin->name;
        $this->email = $admin->email;
        $this->createdAt = $admin->created_at;
    }
}
