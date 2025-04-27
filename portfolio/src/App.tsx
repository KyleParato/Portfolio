import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutMePage from "@/pages/aboutme";
import ProjectsPage from "@/pages/projects";
import PhotosPage from "@/pages/photos";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutMePage />} path="/aboutme"/>
      <Route element={<ProjectsPage />} path="/projects"/>
      <Route element={<PhotosPage />} path="/photos"/>
    </Routes>
  );
}

export default App;
