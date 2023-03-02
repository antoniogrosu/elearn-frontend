import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CoursesPageContent from "../Components/CoursesPage/CoursesPageContent";
export default function CoursesPage() {
  return (
    <div className="w-full">
      <Navbar />
      <CoursesPageContent />
      <Footer />
    </div>
  );
}
