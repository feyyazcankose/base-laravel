<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRoleUpdateRequest;
use App\Http\Requests\RoleIndexRequest;
use App\Models\Admin;
use App\Models\AdminRole;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

/**
 * @tags 3) Dashboard > Role
 */
class RoleController extends Controller
{
    /**
     * Get Roles
     *
     * Bu servis yöneticinin rollerini getirmesini sağlar
     */
    public function get(Request $request)
    {
        $id = intval(@$request->id ?? "0");
        $roles = [];
        $admin = Admin::where("id", $id)->with(['roles'])->first();
        foreach ($admin->roles as $role) {
            array_push($roles, $role->name);
        }
        return $roles;
    }

    /**
     * List Role
     *
     * Bu servis rolleri listelemek için kullanılmaktadır. Tüm rolleri getirir
     *
     * @return Role[]
     */
    public function index(RoleIndexRequest $request): Collection|array
    {
        $admin = Auth::guard('admin-api')->user();
        $roles = [];
        if (@$admin->id) {
            $adminRoles = AdminRole::where("admin_id", $admin->id)->with("role")->get();
            foreach ($adminRoles as $role) {
                array_push($roles, @$role->role->name);
            }
        }

        $search = @$request->search;
        return Role::whereIn("name", $roles)->where(function ($query) use ($search) {
            if ($search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            }
        })
            ->get(["id", "name", "description"]);
    }

    /**
     * Update Role
     *
     * Bu servis yöneticilerin rollerinin düzenlenmesini sağlar
     */
    public function update(AdminRoleUpdateRequest $request)
    {
        $id = intval($request->id ?? "0");
        $roles = $request->roles ?? [];

        $admin = Admin::with('roles')->findOrFail($id);
        $newRoles = Role::whereIn('name', $roles)->get()->pluck('id')->toArray();
        $admin->roles()->sync($newRoles);

        return response()->json([
            'status' => 'success',
            'data' => $admin
        ], 200);
    }
}
