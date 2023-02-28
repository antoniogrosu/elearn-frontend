import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashboardPage";
import CoursesPage from "./Pages/CoursesPage";
import CoursePage from "./Pages/CoursePage";
import "./index.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/course" element={<CoursePage />} />
    </Routes>
  );
}
