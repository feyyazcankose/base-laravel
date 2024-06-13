import { Route, Routes } from "react-router";
import { AddProject } from "./add/AddProject";

const ProjectsPage = () => {
    return (
        <Routes>
            <Route path="/ekle" element={<AddProject />} />
        </Routes>
    );
};

export default ProjectsPage;
