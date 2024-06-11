<?php
// app/Models/User.php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Admin extends Authenticatable implements JWTSubject
{
    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
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
        return [
            'user' => $user // Eğer roller ilişkisi tanımlıysa
        ];
    }
}
