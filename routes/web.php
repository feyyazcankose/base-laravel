<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;


if (env("APP_ENV") !== "production") {
    Route::get("/api/doc", function () {
        Artisan::call("scramble:export");
        return view("docs.stoplight");
    });
}


Route::get('/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '^(?!.*\.(json|png|jpg)$).*$');
