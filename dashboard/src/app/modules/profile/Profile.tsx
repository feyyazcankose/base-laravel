/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "@base/helpers/enhencers/Moment";

import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
} from "@nextui-org/react";
import { useAuth } from "../auth/core/contexts/AuthContext";
import { useFormik } from "formik";
import { IAdminCreateRequest } from "./core/models/admin.interface";
import { updateAdmin } from "./core/api/admin.request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ad alanı zorunludur"),
    email: Yup.string()
        .email("Geçerli bir email adresi giriniz")
        .required("Email alanı zorunludur"),
});

const Profile = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: currentUser?.email,
            name: currentUser?.name,
            password: "",
            password_confirmation: "",
        } as IAdminCreateRequest,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            updateAdmin({
                id: currentUser?.id ?? 0,
                data: values,
            }).then(() => {
                toast.success("Yönetici başarıyla güncellendi");
                navigate(-1);
            });
        },
    });

    return (
        <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative h-[calc(100vh-8rem)] overflow-auto fancy-scrollbar pr-2">
                <div className="md:sticky md:top-6 flex flex-col w-[32%] max-md:ml-0 max-md:w-full ">
                    {currentUser ? (
                        <Card className="max-w-[400px] shadow-sm" shadow="none">
                            <CardHeader className="flex gap-3">
                                <Avatar
                                    as="button"
                                    color="success"
                                    name={
                                        currentUser?.name?.charAt(0) ??
                                        "" +
                                            currentUser?.name
                                                .split(" ")?.[1]
                                                ?.charAt(0) ??
                                        ""
                                    }
                                    showFallback
                                    size="md"
                                />
                                <div className="flex flex-col">
                                    <p className="text-md">
                                        {currentUser?.name}
                                    </p>
                                    <p className="text-small text-default-500">
                                        {currentUser?.email}
                                    </p>
                                </div>
                            </CardHeader>
                            {/* <Divider /> */}
                            <CardBody>
                                <div className="text-sm ">
                                    <p>Oluşturulma tarihi:</p>
                                    <p>
                                        {moment(currentUser?.created_at).format(
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
                    <form onSubmit={formik.handleSubmit}>
                        <Card className="w-full p-4 shadow-sm" shadow="none">
                            <CardHeader className="flex gap-3 pl-4">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-bold">
                                        Hesabım Düzenle
                                    </h2>
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
                                        {formik.touched.name &&
                                            formik.errors.name && (
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
                                        {formik.touched.email &&
                                            formik.errors.email && (
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
                                            value={
                                                formik.values
                                                    .password_confirmation
                                            }
                                            onChange={formik.handleChange}
                                        />
                                        {formik.touched.password_confirmation &&
                                            formik.errors
                                                .password_confirmation && (
                                                <p className="mt-2 text-sm text-red-500">
                                                    {
                                                        formik.errors
                                                            .password_confirmation
                                                    }
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
                </main>
            </div>
        </div>
    );
};

export default Profile;
