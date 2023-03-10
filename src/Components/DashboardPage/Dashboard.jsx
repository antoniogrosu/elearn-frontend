import DashboardCoursesComp from "./DashboardCoursesComp";
import DashboardStatisticsComp from "./DashboardStatisticsComp";
import DashboardTaskComp from "./DashboardTasksComp";
export default function Dashboard() {
  return (
    <div className="select-none overflow-y-scroll bg-gray-900 w-full md:w-9/12 pt-8 px-8 pb-20">
      <h1 className="text-gray-50 urbanist font-semibold text-2xl mb-6">
        Dashboard
      </h1>
      <DashboardCoursesComp />
      <div className="py-5"></div>
      <DashboardStatisticsComp />
      <div className="py-5"></div>
      <DashboardTaskComp />
    </div>
  );
}
