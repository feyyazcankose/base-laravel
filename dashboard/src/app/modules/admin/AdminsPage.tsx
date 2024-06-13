import { Route, Routes } from "react-router";
import AdminList from "./list/AdminList";
import AddAdmin from "./add/AddAdmin";
import EditAdmin from "./edit/EditAdmin";
import AdminRole from "@app/modules/admin/role/AdminRole";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Link } from "react-router-dom";

const AdminsPage = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Breadcrumbs className="mb-5">
                            <BreadcrumbItem>
                                <Link to="/anasayfa">Ana Sayfa</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>Yöneticiler</BreadcrumbItem>
                        </Breadcrumbs>
                        <AdminList />
                    </>
                }
            />
            <Route
                path="/ekle"
                element={
                    <>
                        <Breadcrumbs className="mb-5">
                            <BreadcrumbItem>
                                <Link to="/anasayfa">Ana Sayfa</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/yoneticiler">Yöneticiler</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>Yönetici Ekle</BreadcrumbItem>
                        </Breadcrumbs>
                        <AddAdmin />
                    </>
                }
            />
            <Route
                path="/duzenle/:id"
                element={
                    <>
                        <Breadcrumbs className="mb-5">
                            <BreadcrumbItem>
                                <Link to="/anasayfa">Ana Sayfa</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/yoneticiler">Yöneticiler</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>Yönetici Düzenle</BreadcrumbItem>
                        </Breadcrumbs>
                        <EditAdmin />
                    </>
                }
            />
            <Route
                path="/yetki/:id"
                element={
                    <>
                        <Breadcrumbs className="mb-5">
                            <BreadcrumbItem>
                                <Link to="/anasayfa">Ana Sayfa</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/yoneticiler">Yöneticiler</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>Yönetici Yetkiler</BreadcrumbItem>
                        </Breadcrumbs>
                        <AdminRole />
                    </>
                }
            />
        </Routes>
    );
};

export default AdminsPage;
