<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;

class EnsureTokenIsValid
{
    public function handle($request, Closure $next)
    {
        var_dump(JWTAuth::getToken());
        if (!$token = JWTAuth::getToken()) {
            return response()->json(['error' => 'Token not provided'], 401);
        }

        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['error' => 'Token expired'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['error' => 'Token invalid'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'Token absent'], 401);
        }

        return $next($request);
    }
}
