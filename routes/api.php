<?php

use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\Backoffice\RolePermissionController;
use App\Http\Controllers\Backoffice\AdminController;
use App\Http\Middleware\EnsureTokenIsValid;
use Illuminate\Support\Facades\Route;

Route::prefix("backoffice")->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);

    Route::middleware([EnsureTokenIsValid::class])->group(function () {
        Route::get('current', [AuthController::class, 'current']);

        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('create-role', [RolePermissionController::class, 'createRole']);
        Route::post('create-permission', [RolePermissionController::class, 'createPermission']);
        Route::post('assign-role', [RolePermissionController::class, 'assignRole']);
        Route::post('assign-permission', [RolePermissionController::class, 'assignPermission']);
    });

    Route::prefix("admin")->group(function () {
        Route::get('', [AdminController::class, 'gets']);
    });
});
