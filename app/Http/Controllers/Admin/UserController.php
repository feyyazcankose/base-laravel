<?php

namespace App\Http\Controllers\Admin;

use App\Modules\Filter\Dtos\FilterGroupDto;
use App\Modules\Filter\FilterService;
use App\Http\Controllers\Controller;
use App\Dtos\User\UserListDto;
use Illuminate\Http\Request;
use App\Models\User; // Assuming you have a User model
use OpenApi\Annotations as OA;

class UserController extends Controller
{
    protected $filterService;

    public function __construct(FilterService $filterService)
    {
        $this->filterService = $filterService;
    }

    /**
     * @OA\Get(
     *     path="/api/users",
     *     summary="Get list of users",
     *     tags={"Dashboard > User"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(ref="#/components/parameters/skip"),
     *     @OA\Parameter(ref="#/components/parameters/take"),
     *     @OA\Parameter(ref="#/components/parameters/sort"),
     *     @OA\Parameter(ref="#/components/parameters/group"),
     *     @OA\Parameter(ref="#/components/parameters/filter"),
     *     @OA\Response(
     *         response=200,
     *         description="Successfully logged out"
     *     )
     * )
     */
    public function gets(Request $request)
    {

        $options = json_decode($request->input('options'));
        if ($options) {
            if (is_array($options) && count($options) > 0) {
                return new FilterGroupDto($this->filterService->getGroups($options, new User, true));
            }
        }
        $whereItems = $this->filterService->getWhereFilter($options['filter'] ?? null);

        $orderBy = ['created_at' => 'desc'];

        try {
            if (!empty($options['sort'])) {
                $sortSplit = explode(',', $options['sort']);
                $orderBy = $this->filterService->selector($sortSplit[0], $sortSplit[1], 'order');
            }
        } catch (\Exception $error) {
            // If there is an error, we use the default order by
        }

        if (!@$options['skip']) {
            $options['skip'] = 1;
        }

        if (!@$options['take']) {
            $options['take'] = 10;
        }


        $users = User::orderBy(key($orderBy), current($orderBy))
            ->skip(($options['skip'] - 1) * $options['take'])
            ->take($options['take'])
            ->get();



        $totalCount = User::count();

        $response = new UserListDto([
            'items' => $users->toArray(),
            'meta' => [
                'totalItems' => $totalCount,
                'itemCount' => $users->count(),
                'itemsPerPage' => $options['take'],
                'totalPages' => ceil($totalCount / $options['take']),
                'currentPage' => $options['skip'],
            ],
        ]);

        return response()->json($response);
    }
}
