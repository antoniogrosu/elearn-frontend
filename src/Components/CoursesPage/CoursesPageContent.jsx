import Courses from "../CoursesPage/Courses";
import Stats from "./Stats";
import Suggestion from "./Suggestion";
export default function CoursesPageContent() {
  return (
    <div className="px-8 pt-12 md:pt-7 pb-32 md:px-24 bg-gray-900">
      <Courses />
      <div className="py-16"></div>
      <Stats />
      <div className="py-16"></div>
      <Suggestion />
    </div>
  );
}
