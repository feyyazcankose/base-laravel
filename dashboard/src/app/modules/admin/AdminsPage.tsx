import { Route, Routes } from "react-router";
import AdminList from "./list/AdminList";
import AddAdmin from "./add/AddAdmin";
import EditAdmin from "./edit/EditAdmin";

const AdminsPage = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminList />} />
            <Route path="/ekle" element={<AddAdmin />} />
            <Route path="/duzenle/:id" element={<EditAdmin />} />
        </Routes>
    );
};

export default AdminsPage;
