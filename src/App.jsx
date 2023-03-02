import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashboardPage";
import CoursesPage from "./Pages/CoursesPage";
import CoursePage from "./Pages/CoursePage";
import "./index.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:id" element={<CoursePage />} />
    </Routes>
  );
}
