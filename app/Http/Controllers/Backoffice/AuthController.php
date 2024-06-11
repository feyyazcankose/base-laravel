<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Http\Dtos\AdminDto;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

/**
 * @tags 1) Dashboard > Auth
 */
class AuthController extends Controller
{

    /**
     * Auth Login
     *
     * Bu servis sisteme giriş yapmak için kullanılır.
     * @unauthenticated
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (!$token = Auth::guard('admin-api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $auth = Auth::guard('admin-api')->user();
        return response()->json([
            'accessToken' => $token,
            'user' =>  new AdminDto($auth)
        ]);
    }


    /**
     * Auth Logout
     *
     * Bu servis sisteme çıkış yapmak için kullanılır.
     *
     */
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out']);
    }


    /**
     * Auth Current
     *
     * Bu servis paneldeki giriş yapmış kullanıcının bilgilerini getirir.
     *
     * @response array{id: int, name: string, email: string, created_at: string}
     */
    public function current()
    {
        // Kullanıcının kimlik doğrulaması yapılmış mı kontrol edin
        if (!$user = Auth::guard('admin-api')->user()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($user);
    }
}
