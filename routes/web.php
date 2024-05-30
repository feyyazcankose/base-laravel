<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;


Route::get("/api/doc",function(){
    return view("docs.stoplight");
});

Route::get('/config-json', function () {
    $path = storage_path('api-docs/config.json');
    if (!File::exists($path)) {
        abort(500);
    }
    return response()->file($path);
});

Route::get('/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');
