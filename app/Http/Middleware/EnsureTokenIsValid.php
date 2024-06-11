<?php

namespace App\Http\Middleware;

use App\Models\Session;
use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class EnsureTokenIsValid
{
    public function handle($request, Closure $next)
    {
        if (!JWTAuth::getToken()) {
            return response()->json(['error' => 'Token not provided'], 401);
        }

        try {
            $user = JWTAuth::parseToken()->authenticate();
            Auth::guard('admin-api')->setUser($user);
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['error' => 'Token expired'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['error' => 'Token invalid'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'Token absent'], 401);
        }

        $token = JWTAuth::parseToken()->getToken();
        $session = Session::where('token', $token)->first();

        if (!$session) {
            return response()->json(['message' => 'Oturumunuz sonlandırıldı.'], 401);
        }

        $session->update(['last_activity' => now()]);

        return $next($request);
    }
}
