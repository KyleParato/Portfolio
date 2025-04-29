import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import PhotosPage from "@/pages/photos";
import SkillsPage from "@/pages/skills";
import ContactPage from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectsPage />} path="/projects"/>
      <Route element={<PhotosPage />} path="/photos"/>
      <Route element={<SkillsPage />} path="/skills"/>
      <Route element={<ContactPage/>} path="/contact"/>
    </Routes>
  );
}

export default App;
