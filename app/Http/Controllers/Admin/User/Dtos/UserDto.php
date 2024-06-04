<?php

namespace App\Http\Controllers\Admin\User\Dtos;


use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="AdminDto",
 *     type="object",
 *     title="Admin",
 *     required={"id", "first_name", "last_name", "email", "phone", "phone_code", "account_status", "created_at"},
 *     @OA\Property(
 *         property="id",
 *         type="integer",
 *         example="svm2yb3aeq"
 *     ),
 *     @OA\Property(
 *         property="first_name",
 *         type="string",
 *         example="feyyaz"
 *     ),
 *     @OA\Property(
 *         property="last_name",
 *         type="string",
 *         example="Admin"
 *     ),
 *     @OA\Property(
 *         property="image",
 *         type="string",
 *         example="feyyaz"
 *     ),
 *     @OA\Property(
 *         property="email",
 *         type="string",
 *         example="dev@feyyaz.com.tr"
 *     ),
 *     @OA\Property(
 *         property="phone",
 *         type="string",
 *         example="905429322605"
 *     ),
 *     @OA\Property(
 *         property="phone_code",
 *         type="string",
 *         example="+90"
 *     ),
 *     @OA\Property(
 *         property="account_status",
 *         type="boolean",
 *         example=true
 *     ),
 *     @OA\Property(
 *         property="created_at",
 *         type="string",
 *         format="date-time"
 *     )
 * )
 */
class UserDto
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $first_name;

    /**
     * @var string
     */
    public $last_name;

    /**
     * @var string|null
     */
    public $image;

    /**
     * @var string
     */
    public $email;

    /**
     * @var string
     */
    public $phone;

    /**
     * @var string
     */
    public $phone_code;

    /**
     * @var bool
     */
    public $account_status;

    /**
     * @var string
     */
    public $created_at;

    public function __construct($admin)
    {
        $this->id = $admin['id'] ?? null;
        $this->first_name = $admin['first_name'] ?? 'Kullanıcı';
        $this->last_name = $admin['last_name'] ?? 'Kullanıcı';
        $this->image = $admin['image'] ?? null;
        $this->email = $admin['email'] ?? null;
        $this->phone = $admin['phone'] ?? null;
        $this->phone_code = $admin['phone_code'] ?? null;
        $this->account_status = $admin['account_status'] ?? null;
        $this->created_at = $admin['created_at'] ?? null;
    }
}
