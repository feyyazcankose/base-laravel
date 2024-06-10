<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/create-role",
     *     tags={"Dashboard > Role Management"},
     *     summary="Create a new role",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name"},
     *             @OA\Property(property="name", type="string", example="admin")
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Role created successfully"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad Request"
     *     )
     * )
     */
    public function createRole(Request $request)
    {
        $role = Role::create(['name' => $request->name]);
        return response()->json($role);
    }

    /**
     * @OA\Post(
     *     path="/api/create-permission",
     *     tags={"Dashboard > Role Management"},
     *     summary="Create a new permission",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name"},
     *             @OA\Property(property="name", type="string", example="edit articles")
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Permission created successfully"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad Request"
     *     )
     * )
     */
    public function createPermission(Request $request)
    {
        $permission = Permission::create(['name' => $request->name]);
        return response()->json($permission);
    }

    /**
     * @OA\Post(
     *     path="/api/assign-role",
     *     tags={"Dashboard > Role Management"},
     *     summary="Assign a role to a user",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id", "role"},
     *             @OA\Property(property="user_id", type="integer", example=1),
     *             @OA\Property(property="role", type="string", example="admin")
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Role assigned successfully"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad Request"
     *     )
     * )
     */
    public function assignRole(Request $request)
    {
        $user = User::find($request->user_id);
        $user->assignRole($request->role);
        return response()->json(['message' => 'Role assigned successfully']);
    }

    /**
     * @OA\Post(
     *     path="/api/assign-permission",
     *     tags={"Dashboard > Role Management"},
     *     summary="Assign a permission to a role",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"role", "permission"},
     *             @OA\Property(property="role", type="string", example="admin"),
     *             @OA\Property(property="permission", type="string", example="edit articles")
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Permission assigned successfully"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad Request"
     *     )
     * )
     */
    public function assignPermission(Request $request)
    {
        $role = Role::findByName($request->role);
        $role->givePermissionTo($request->permission);
        return response()->json(['message' => 'Permission assigned successfully']);
    }
}
