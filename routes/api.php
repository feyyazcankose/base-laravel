<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RolePermissionController;
use Illuminate\Routing\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);
});

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('create-role', [RolePermissionController::class, 'createRole']);
    Route::post('create-permission', [RolePermissionController::class, 'createPermission']);
    Route::post('assign-role', [RolePermissionController::class, 'assignRole']);
    Route::post('assign-permission', [RolePermissionController::class, 'assignPermission']);
});
