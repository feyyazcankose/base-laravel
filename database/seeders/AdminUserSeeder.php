<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        // Create default admin user
        Admin::create(
            [
                'name' => 'Splintern',
                'email' => 'dev@splintern.com',
                'password' => Hash::make('123456'), // Change the password as needed
            ]
        );
    }
}
