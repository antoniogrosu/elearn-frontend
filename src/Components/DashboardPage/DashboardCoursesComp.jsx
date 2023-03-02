import DashboardCourse from "./DashboardCourse";
export default function DashboardCoursesComp() {
  return (
    <div className="w-full p-1 md:h-3/4 flex flex-col justify-between">
      <h1 className="text-gray-50 urbanist font-semibold text-lg mb-2">
        Courses
      </h1>
      <div className="p-1 w-full h-1/3 mb-6 flex flex-col md:flex-row justify-start">
        <DashboardCourse
          title="Python Basics"
          domain="computer programming"
          lesson="For Loops"
        />
        <div className="py-4"></div>
        <div className="px-4"></div>
        <DashboardCourse
          title="Copy Writing"
          domain="marketing"
          lesson="Powerful Words"
        />
      </div>
    </div>
  );
}
