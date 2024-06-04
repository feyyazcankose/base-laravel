<?php

namespace App\Http\Controllers\Admin\User;

use App\Filter\Dtos\FilterGroupDto;
use App\Filter\FilterService;
use App\Http\Controllers\Admin\User\Dtos\UserListDto;
use App\Http\Controllers\Controller;
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
     *     summary="Get paginated list of admins",
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Successful responses",
     *     )
     * )
     */
    public function gets(Request $request)
    {
        $options = json_decode($request->input('options'));
        if (count($options)) {
            return new FilterGroupDto($this->filterService->getGroups($options, new User, true));
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

        $admins = User::where($whereItems)
            ->orderBy(key($orderBy), current($orderBy))
            ->skip(($options['skip'] - 1) * $options['take'])
            ->take($options['take'] ?? 10)
            ->get();

        $totalCount = User::where($whereItems)->count();

        $response = new UserListDto([
            'items' => $admins,
            'meta' => [
                'totalItems' => $totalCount,
                'itemCount' => $admins->count(),
                'itemsPerPage' => $options['take'],
                'totalPages' => ceil($totalCount / $options['take']),
                'currentPage' => $options['skip'],
            ],
        ]);

        return response()->json($response);
    }
}
