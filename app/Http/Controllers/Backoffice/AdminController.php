<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Http\Dtos\UserDto;
use App\Http\Requests\AdminRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Modules\Filter\FilterService;
use App\Modules\Filter\FilterTableRequest;
use Illuminate\Support\Facades\Hash;
use OpenApi\Annotations as OA;

/**
 * @tags 2) Dashboard > Admin
 */
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
     * List Admin
     *
     * Bu servis yönetici listelemek için kullanılmaktadır. Pagianble bir şekilde listeler
     */
    public function index(FilterTableRequest $request)
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
            $query->where($where);
            $totalCount->where($where);
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

    /**
     * Create Admin
     *
     * Bu servis yönetici oluşturmak için kullanılmaktadır.
     */
    public function store(AdminRequest $request)
    {
        $admin = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Yönetici oluşturuldu.',
            'admin' => new UserDto($admin)
        ], 201);
    }
}
