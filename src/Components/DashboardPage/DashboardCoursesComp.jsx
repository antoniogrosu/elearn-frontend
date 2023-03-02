import DashboardCourse from "./DashboardCourse";
import { data } from "../../../DUMMY_DATA";
export default function DashboardCoursesComp() {
  const arr = data.courses;
  const courses = arr.map((item) => {
    return (
      <DashboardCourse
        title={item.title}
        domain={item.domain}
        lesson={item.lesson}
        id={item.id}
      />
    );
  });
  return (
    <div className="w-full p-1 flex flex-col justify-between">
      <h1 className="text-gray-50 urbanist font-semibold text-lg mb-2">
        Courses
      </h1>
      <div className="p-1 w-full h-1/3 mb-6 flex flex-col md:flex-row justify-start">
        {courses}
      </div>
    </div>
  );
}
