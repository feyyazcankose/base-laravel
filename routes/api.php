<?php

use App\Http\Controllers\Backoffice\AuthController;
use App\Http\Controllers\Backoffice\AdminController;
use App\Http\Middleware\EnsureTokenIsValid;
use Illuminate\Support\Facades\Route;

Route::prefix("backoffice")->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::middleware([EnsureTokenIsValid::class])->group(function () {
        Route::get('current', [AuthController::class, 'current']);
        Route::get('logout', [AuthController::class, 'logout']);
        Route::prefix("admin")->group(function () {
            Route::get('/', [AdminController::class, 'index']);
            Route::post('/', [AdminController::class, 'store']);
            Route::get('/{id}', [AdminController::class, 'get']);
            Route::put('/{id}', [AdminController::class, 'update']);
            Route::delete('/{id}', [AdminController::class, 'delete']);
        });
    });
});
