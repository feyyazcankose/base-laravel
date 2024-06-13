import { useFormik } from "formik";
import {
    IAdminCreateRequest,
    IAdminResponseP,
} from "../core/models/admin.interface";
import * as Yup from "yup";
import { getAdmin, updateAdmin } from "../core/api/admin.request";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { FetchStatus } from "@base/enums/api.enum";
import Loader from "@base/layout/components/loader/Loader";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ad alanı zorunludur"),
    email: Yup.string()
        .email("Geçerli bir email adresi giriniz")
        .required("Email alanı zorunludur"),
});

const EditAdmin = () => {
    const navigate = useNavigate();
    const { id: adminId } = useParams();
    const [admin, setAdmin] = React.useState<IAdminResponseP | null>(null);
    const [fetchStatus, setFetchStatus] = React.useState<FetchStatus>(
        FetchStatus.IDLE
    );

    useEffect(() => {
        if (adminId) {
            setFetchStatus(FetchStatus.LOADING);
            getAdmin(parseInt(adminId)).then((res) => {
                setAdmin(res);
                setFetchStatus(FetchStatus.SUCCEEDED);
            });
        }
    }, [adminId]);

    const formik = useFormik({
        initialValues: {
            email: admin?.email,
            name: admin?.name,
            password: "",
            password_confirmation: "",
        } as IAdminCreateRequest,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            updateAdmin({
                id: parseInt(adminId ?? "0"),
                data: values,
            }).then(() => {
                toast.success("Yönetici başarıyla güncellendi");
                navigate(-1);
            });
        },
    });

    if (fetchStatus !== FetchStatus.SUCCEEDED) return <Loader />;

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card className="w-full p-4 shadow-sm" shadow="none">
                <CardHeader className="flex gap-3 pl-4">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold">Yönetici Düzenle</h2>
                    </div>
                </CardHeader>
                <CardBody className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-normal text-gray-600 "
                            >
                                Ad*
                            </label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className="mt-2 text-sm text-red-500">
                                    {formik.errors.name}
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-normal text-gray-600 "
                            >
                                E-posta*
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ornek@uplide.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="mt-2 text-sm text-red-500">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-normal text-gray-600 "
                            >
                                Şifre*
                            </label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="****"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password &&
                                formik.errors.password && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {formik.errors.password}
                                    </p>
                                )}
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password_confirmation"
                                className="block mb-2 text-sm font-normal text-gray-600 "
                            >
                                Şifre Doğrulama*
                            </label>
                            <Input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                placeholder="*****"
                                value={formik.values.password_confirmation}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password_confirmation &&
                                formik.errors.password_confirmation && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {formik.errors.password_confirmation}
                                    </p>
                                )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button
                            isLoading={formik.isSubmitting}
                            type="submit"
                            color="primary"
                            // loader={formik.isSubmitting}
                        >
                            Kaydet
                        </Button>
                    </div>
                </CardBody>
                <CardFooter className="p-0"></CardFooter>
            </Card>
        </form>
    );
};

export default EditAdmin;
