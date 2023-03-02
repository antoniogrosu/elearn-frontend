import LeftNav from "../Components/DashboardPage/LeftNav";
import Dashboard from "../Components/DashboardPage/Dashboard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Navbar />
      </div>
      <div className="bg-gray-900 flex justify-start">
        <div className="hidden md:block bg-gray-800 w-3/12 h-screen rounded-r-lg py-12 px-8">
          <LeftNav />
        </div>
        <Dashboard />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
}
