<?php

use App\Modules\FileManager\FileManagerModule;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

if (env("APP_ENV") !== "production") {
    Route::get("/api/doc", function () {
        Artisan::call("scramble:export");
        return view("docs.stoplight");
    });
}

Route::get('/media/{path}', [FileManagerModule::class, "getFile"])->where('path', '.*\.(jpg|jpeg|png|gif|bmp|svg)$');
Route::get('/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '^(?!.*\.(json|png|jpg)$).*$');
