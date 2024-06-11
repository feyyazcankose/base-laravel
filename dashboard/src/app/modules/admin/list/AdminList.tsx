import React from "react";
import { FetchStatus } from "@base/enums/api.enum";
import { fetchAdmins } from "../core/api/admin.request";
import { IAdminResponseP } from "../core/models/admin.interface";
import Loader from "@base/layout/components/loader/Loader";
import { PageableResponseModel } from "@app/core/models/app.interfaces";

import DynamoTable from "@base/components/common/dynamo-table/DynamoTable";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    EColumnType,
    EFilterType,
    IColumn,
} from "@base/components/common/dynamo-table/types/dynamo-table.types";
import { ERole } from "@base/enums/role.enum";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Tooltip } from "@nextui-org/react";

const AdminList = () => {
    const [adminListResponse, setAdminListResponse] = React.useState<
        PageableResponseModel<IAdminResponseP> | undefined
    >();
    const navigate = useNavigate();
    const [fetchStatus, setFetchStatus] = React.useState<FetchStatus>(
        FetchStatus.IDLE
    );

    const [searchParams] = useSearchParams();
    const skip = parseInt(searchParams.get("skip") ?? "1");
    const take = parseInt(searchParams.get("take") ?? "10");
    const sort = searchParams.get("sort") ?? undefined;
    const filter = searchParams.get("filter") ?? "[]";

    React.useEffect(() => {
        setFetchStatus(FetchStatus.LOADING);
        fetchAdmins({ skip, take, sort, filter })
            .then((res) => {
                setFetchStatus(FetchStatus.SUCCEEDED);
                setAdminListResponse(res);
            })
            .catch(() => {
                setFetchStatus(FetchStatus.FAILED);
            });
    }, [skip, take, sort, filter]);

    const columns: IColumn[] = [
        {
            key: "name",
            label: "Ad",
            filterType: EFilterType.SELECT,
        },
        {
            key: "email",
            label: "Eposta",
            filterType: EFilterType.SELECT,
            customCell: (row) => (
                <div>
                    {row.name}
                    <br />
                    {row.email}
                </div>
            ),
        },
        {
            key: "created_at",
            label: "Oluşturma Tarihi",
            filterType: EFilterType.DATE,
            config: {
                date: {
                    format: "DD MMM YYYY, HH:mm",
                },
            },
            type: EColumnType.DATE,
        },
        {
            type: EColumnType.OPERATIONS,
            label: "İşlemler",
            operations: [
                {
                    name: "edit",
                    icon: <Icon icon="fluent:edit-48-filled" />,
                    text: "Düzenle",
                    handle: (id: number) => {
                        navigate(`/yoneticiler/duzenle/${id}`);
                    },
                    role: ERole.Public,
                },
                {
                    name: "delete",
                    icon: <Icon icon="ic:round-delete" />,
                    text: "Sil",
                    handle: () => {
                        console.log("delete");
                    },
                    role: ERole.Public,
                },
                {
                    name: "password",
                    icon: <Icon icon="bx:bxs-lock-alt" />,
                    text: "Şifre Güncelle",
                    handle: () => {
                        console.log("password");
                    },
                    role: ERole.AdminUpdate,
                },
            ],
        },
    ];

    if (fetchStatus === FetchStatus.IDLE) return <Loader />;

    return (
        adminListResponse && (
            <DynamoTable
                filterPath="admin"
                title="Yöneticiler"
                meta={adminListResponse?.meta}
                columns={columns}
                rows={adminListResponse.items}
                loadStatus={fetchStatus}
                headerContent={
                    <Tooltip content="Yönetici Ekle">
                        <Button
                            size="sm"
                            color="default"
                            isIconOnly
                            onClick={() => {
                                navigate("/yoneticiler/ekle");
                            }}
                        >
                            <Icon
                                icon="lets-icons:add-round"
                                width="1.2rem"
                                height="1.2rem"
                            />
                        </Button>
                    </Tooltip>
                }
                searchColumns={[
                    { id: "name", type: "string" },
                    { id: "email", type: "string" },
                ]}
            />
        )
    );
};

export default AdminList;