<?php

use App\Http\Controllers\Admin\User\UserController;
use App\Http\Controllers\Dashboard\AuthController;
use App\Http\Controllers\Dashboard\RolePermissionController;
use App\Http\Middleware\EnsureTokenIsValid;
use Illuminate\Support\Facades\Route;


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware([EnsureTokenIsValid::class])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);
    Route::post('create-role', [RolePermissionController::class, 'createRole']);
    Route::post('create-permission', [RolePermissionController::class, 'createPermission']);
    Route::post('assign-role', [RolePermissionController::class, 'assignRole']);
    Route::post('assign-permission', [RolePermissionController::class, 'assignPermission']);
    Route::get('', [UserController::class, 'me']);
    Route::prefix("users")->group(function () {
        Route::get('', [UserController::class, 'gets']);
    });
});
