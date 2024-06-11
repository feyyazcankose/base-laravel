<?php

use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\Backoffice\AdminController;
use App\Http\Controllers\Backoffice\RoleController;
use App\Http\Middleware\AdminRoles;
use App\Http\Middleware\EnsureTokenIsValid;
use Illuminate\Support\Facades\Route;

Route::prefix("backoffice")->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::middleware([EnsureTokenIsValid::class])->group(function () {
        Route::get('current', [AuthController::class, 'current']);
        Route::get('logout', [AuthController::class, 'logout']);
        Route::prefix("admin")->group(function () {
            Route::get('/', [AdminController::class, 'index'])->middleware("AdminRoles:ADMIN_VIEW");
            Route::post('/', [AdminController::class, 'store'])->middleware("AdminRoles:ADMIN_CREATE");
            Route::get('/{id}', [AdminController::class, 'get'])->middleware("AdminRoles:ADMIN_VIEW");
            Route::put('/{id}', [AdminController::class, 'update'])->middleware("AdminRoles:ADMIN_UPDATE");
            Route::delete('/{id}', [AdminController::class, 'delete'])->middleware("AdminRoles:ADMIN_DELETE");
        });

        Route::prefix("role")->group(function () {
            Route::get('/', [RoleController::class, 'index']);
            Route::get('/{id}', [RoleController::class, 'get']);
            Route::put('/{id}', [RoleController::class, 'update']);
        });
    });
});
