<?php
// app/Models/User.php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Mockery\Undefined;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasRoles;

    // JWTSubject interface methods
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }


    public function getJWTCustomClaims()
    {
        $user = $this;
        $user["roles"] = [
            "AdminView",
            "AdminCreate",
            "AdminUpdate",
            "AdminDelete",
            "AdminRole",
            "UserView",
            "UserCreate",
            "UserUpdate",
            "UserDelete",
            "ContractView",
        ];

        unset($user["password"]);
        unset($user["email_verified_at"]);
        unset($user["remember_token"]);
        unset($user["updated_at"]);
        unset($user["role_id"]);
        return [
            'user' => $user // Eğer roller ilişkisi tanımlıysa
        ];
    }
}
