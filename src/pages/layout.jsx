import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../assets/styles/global.css"
import Home from "./home";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Project, ProjectGroup, ProjectLayout, Projects } from "./projects";
import About from "./about";
import HireUs from "./hireUs";

export default function Layout() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/hireUs" element={<HireUs />} />
                        <Route path="/projects" element={<ProjectLayout />}>
                            <Route index element={<Projects />} />
                            <Route path="/projects/:group" element={<ProjectGroup />} />
                            <Route path="/projects/:group/:projectName" element={<Project />} />
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    )
} 