<?php

namespace App\Modules\Filter\Decorator;

use OpenApi\Annotations as OA;

trait FilterDecorator
{
    /**
     * @OA\Parameter(
     *     name="skip",
     *     in="query",
     *     required=false,
     *     @OA\Schema(type="integer", example=1)
     * )
     * @OA\Parameter(
     *     name="take",
     *     in="query",
     *     required=false,
     *     @OA\Schema(type="integer", example=10)
     * )
     * @OA\Parameter(
     *     name="sort",
     *     in="query",
     *     required=false,
     *     @OA\Schema(type="string", example="yourSelector,asc")
     * )
     * @OA\Parameter(
     *     name="filter",
     *     in="query",
     *     required=false,
     *     description="Array string",
     *     @OA\Schema(
     *         type="string",
     *     )
     * )
     * @OA\Parameter(
     *     name="group",
     *     in="query",
     *     required=false,
     *     description="Array object",
     *     @OA\Schema(
     *         type="string",
     *     )
     * )
     */
    public function swaggerQueryParameters()
    {
        // This method is intended to provide Swagger annotations.
    }
}
