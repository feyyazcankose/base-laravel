/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IAdminResponseP, IAdminRole } from "../core/models/admin.interface";
import { getAdmin } from "../core/api/admin.request";
import Loader from "@base/layout/components/loader/Loader";
import moment from "@base/helpers/enhencers/Moment";
import toast from "react-hot-toast";
import { ERole } from "@base/enums/role.enum";

import { useDebounce } from "@uidotdev/usehooks";
import { FetchStatus } from "@base/enums/api.enum";
import {
    getAdminRoles,
    getAllAdminRoles,
    updateAdminRoles,
} from "@app/modules/admin/core/api/admin-role.request";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";

const AdminRole = () => {
    const navigate = useNavigate();
    const { id: adminId } = useParams();
    const [roleSearch, setRoleSearch] = useState<string>("");
    const debouncedRoleSearch = useDebounce(roleSearch, 500);
    const [initialLoad, setInitialLoad] = useState<boolean>(true);

    const [updateStatus, setUpdateStatus] = useState<FetchStatus>(
        FetchStatus.IDLE
    );
    const [allRoles, setAllRoles] = useState<IAdminRole[]>([]);
    const [selectedRoles, setSelectedRoles] = useState<ERole[]>([]);
    const [admin, setAdmin] = useState<IAdminResponseP | null>(null);
    const [fetchStatus, setFetchStatus] = useState<FetchStatus>(
        FetchStatus.IDLE
    );
    const [adminRoles, setAdminRoles] = useState<ERole[] | null>(null);

    useEffect(() => {
        setFetchStatus(FetchStatus.LOADING);
        getAdminRoles(parseInt(adminId!)).then((res) => {
            setAdminRoles(res);
            setFetchStatus(FetchStatus.SUCCEEDED);
        });
        getAdmin(parseInt(adminId!)).then((res) => {
            setAdmin(res);
        });
    }, [adminId]);

    useEffect(() => {
        if (initialLoad && adminRoles?.length && allRoles?.length) {
            // set the selectedRoles at initial if adminRoles has it
            const newArr = allRoles.filter((role) =>
                adminRoles.includes(role.name)
            );
            setSelectedRoles(newArr.map((role) => role.name));
            setInitialLoad(false);
        }
    }, [adminRoles, initialLoad, allRoles]);

    useEffect(() => {
        console.log(selectedRoles);
    }, [selectedRoles]);

    useEffect(() => {
        getAllAdminRoles({ search: debouncedRoleSearch }).then((res) => {
            setAllRoles(res);
        });
    }, [debouncedRoleSearch]);

    const handleSaveRoles = () => {
        setUpdateStatus(FetchStatus.LOADING);
        updateAdminRoles({
            id: parseInt(adminId!),
            data: {
                roles: selectedRoles,
            },
        })
            .then(() => {
                setUpdateStatus(FetchStatus.SUCCEEDED);
                toast.success("Roller başarıyla güncellendi");
                navigate(-1);
            })
            .catch((error) => {
                setUpdateStatus(FetchStatus.FAILED);
                toast.error("Roller güncellenirken bir hata oluştu");
                console.error(error);
            });
    };

    if (fetchStatus !== FetchStatus.SUCCEEDED && !allRoles?.length)
        return <Loader />;

    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative h-[calc(100vh-8rem)] overflow-auto fancy-scrollbar pr-2">
                <div className="md:sticky md:top-6 flex flex-col w-[32%] max-md:ml-0 max-md:w-full ">
                    {admin ? (
                        <Card className="max-w-[400px] shadow-sm" shadow="none">
                            <CardHeader className="flex gap-3">
                                <Avatar
                                    as="button"
                                    color="success"
                                    name={
                                        admin?.name?.charAt(0) ??
                                        "" +
                                            admin?.name
                                                .split(" ")?.[1]
                                                ?.charAt(0) ??
                                        ""
                                    }
                                    showFallback
                                    size="md"
                                />
                                <div className="flex flex-col">
                                    <p className="text-md">{admin?.name}</p>
                                    <p className="text-small text-default-500">
                                        {admin?.email}
                                    </p>
                                </div>
                            </CardHeader>
                            {/* <Divider /> */}
                            <CardBody>
                                <div className="text-sm ">
                                    <p>Oluşturulma tarihi:</p>
                                    <p>
                                        {moment(admin?.created_at).format(
                                            "DD MMMM YYYY"
                                        )}
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                    ) : null}
                </div>
                <main className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <Table
                        selectionMode="multiple"
                        selectedKeys={selectedRoles as any}
                        aria-label="Example static collection table"
                        shadow="none"
                        className="shadow-sm p-0"
                        onSelectionChange={(keys) => {
                            if (keys === "all") {
                                setSelectedRoles(
                                    allRoles.map((role) => role.name)
                                );
                            } else {
                                const roles = [...keys];
                                if (roles.length) {
                                    setSelectedRoles(roles);
                                } else {
                                    setSelectedRoles([]);
                                }
                            }
                        }}
                        onChange={(e) => console.log(e)}
                        topContent={
                            <div className="flex justify-between items-center w-full gap-3">
                                <div className="w-[68%]">
                                    <Input
                                        value={roleSearch}
                                        onChange={(e) =>
                                            setRoleSearch(e.target.value)
                                        }
                                        type="search"
                                        id="default-search"
                                        placeholder="Yetki Ara"
                                    />
                                </div>
                                <div className="flex justify-end w-[32%] ">
                                    <Button
                                        isLoading={
                                            updateStatus === FetchStatus.LOADING
                                        }
                                        color="primary"
                                        onClick={handleSaveRoles}
                                        disabled={
                                            updateStatus === FetchStatus.LOADING
                                        }
                                    >
                                        Güncelle
                                    </Button>
                                </div>
                            </div>
                        }
                    >
                        <TableHeader>
                            <TableColumn>YETKİ</TableColumn>
                        </TableHeader>
                        <TableBody className="p-0">
                            {allRoles.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </main>
            </div>
        </div>
    );
};

export default AdminRole;
