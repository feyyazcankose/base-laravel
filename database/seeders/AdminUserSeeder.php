<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Role;
use App\Models\AdminRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        foreach ($this->items() as $item) {
            $admin = Admin::where("email", $item["email"])->first();

            if (!$admin) {
                $admin = Admin::create([
                    'name' => $item["name"],
                    'email' => $item["email"],
                    'password' => Hash::make($item["password"]),
                ]);
            }

            $this->assignRolesToAdmin($admin);
        }
    }

    private function items()
    {
        return [
            [
                'name' => 'Splintern',
                'email' => 'dev@splintern.com',
                'password' => "123456",
            ]
        ];
    }

    private function assignRolesToAdmin($admin)
    {
        $roles = Role::all();

        foreach ($roles as $role) {
            AdminRole::firstOrCreate([
                'admin_id' => $admin->id,
                'role_id' => $role->id,
            ]);
        }
    }
}
