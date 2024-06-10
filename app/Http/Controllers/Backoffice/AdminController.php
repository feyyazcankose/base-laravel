<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Modules\Filter\FilterService;
use OpenApi\Annotations as OA;

class AdminController extends Controller
{
    protected $filterService;

    public function __construct(FilterService $filterService, Request $request)
    {
        $this->filterService = $filterService;
        if (@$request->skip) {
            $this->filterService->skip = intval($request->skip);
        }

        if (@$request->take) {
            $this->filterService->take = intval($request->take);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/backoffice/admin",
     *     summary="Get list of admins",
     *     tags={"Dashboard > Admin"},
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
        $model = new User();
        $options = $request->all();

        if (!empty($options['group'])) {
            return response()->json(
                $this->filterService->getGroups($request, $model)
            );
        }

        $filter = $this->filterService->getWhereFilter($options);
        $where = $filter["where"];
        $orderBy = $filter["orderBy"];

        $query = $model::orderBy(...$orderBy)
            ->skip(($this->filterService->skip - 1) * $this->filterService->take)
            ->take($this->filterService->take);

        $totalCount = $model;
        if (count($where)) {
            $query->where(...$where);
            $totalCount->where(...$where);
        }
        $totalCount = $totalCount->count();
        $items = $query->get(['id', 'name', "email", 'created_at', 'role_id']);

        return response()->json([
            'items' => $items,
            'meta' => [
                'totalItems' => $totalCount,
                'itemCount' => $items->count(),
                'itemsPerPage' => (int) $this->filterService->take,
                'totalPages' => ceil($totalCount / (int) $this->filterService->take),
                'currentPage' => (int) $this->filterService->skip,
            ],
        ]);
    }
}
