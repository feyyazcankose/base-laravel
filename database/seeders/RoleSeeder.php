<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Enums\RoleTypes;

class RoleSeeder extends Seeder
{
    public function run()
    {
        foreach ($this->items() as $item) {
            if (!@Role::where("name", $item["name"])->first()->id) {
                Role::create([
                    'name' => $item["name"],
                    'description' => $item["description"]
                ]);
            }
        }
    }

    private function items()
    {
        return [
            [
                "name" => RoleTypes::USER_VIEW,
                "description" => "Kullanıcıları görüntüleme"
            ],
            [
                "name" => RoleTypes::USER_CREATE,
                "description" => "Kullanıcı Oluşturma"
            ],
            [
                "name" => RoleTypes::USER_DELETE,
                "description" => "Kullanıcı Silme"
            ],
            [
                "name" => RoleTypes::USER_UPDATE,
                "description" => "Kullanıcı Güncelleme"
            ],
            [
                "name" => RoleTypes::ADMIN_VIEW,
                "description" => "Yöneticileri görüntüleme"
            ],
            [
                "name" => RoleTypes::ADMIN_CREATE,
                "description" => "Yönetici Oluşturma"
            ],
            [
                "name" => RoleTypes::ADMIN_DELETE,
                "description" => "Yönetici Silme"
            ],
            [
                "name" => RoleTypes::ADMIN_UPDATE,
                "description" => "Yönetici Güncelleme"
            ],
            [
                "name" => RoleTypes::ADMIN_ROLE,
                "description" => "Yönetici Rol Güncelleme"
            ],
            [
                "name" => RoleTypes::COMPANY_VIEW,
                "description" => "Şirketleri görüntüleme"
            ],
            [
                "name" => RoleTypes::COMPANY_CREATE,
                "description" => "Şirket Oluşturma"
            ],
            [
                "name" => RoleTypes::COMPANY_DELETE,
                "description" => "Şirket Silme"
            ],
            [
                "name" => RoleTypes::COMPANY_UPDATE,
                "description" => "Şirket Güncelleme"
            ],
        ];
    }
}
