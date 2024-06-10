<?php

namespace App\Http\Controllers\Backoffice;

use App\Dtos\User\UserDto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'accessToken' => $token,
            'user' => new UserDto(auth()->user())
        ]);
    }


    public function logout()
    {
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out']);
    }


    public function current()
    {
        return response()->json(new UserDto(auth()->user()));
    }
}
