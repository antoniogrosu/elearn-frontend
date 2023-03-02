import FullCourse from "./FullCourse";
import author2 from "/Author1.svg";
import author1 from "/Author2.svg";
export default function Courses() {
  return (
    <div>
      <h1 className=" w-3/4 md:w-2/4 text-gray-50 text-2xl urbanist font-semibold mb-12">
        Your Learning Journey- the courses you’ve enrolled to achieve your
        goals.
      </h1>
      <div className="flex w-full justify-start md:flex-row flex-col">
        <FullCourse
          duration="8h"
          author="Magnus Thunderbolt"
          title="Python Basics"
          domain="computer programming"
          lesson="For Loops"
          img={author1}
        />
        <div className="py-6 md:hidden"></div>
        <div className="hidden md:block px-6"></div>
        <FullCourse
          img={author2}
          duration="2h"
          author="Lyla Rosewood"
          title="Copy Writing"
          domain="marketing"
          lesson="Powerful Words"
        />
      </div>
    </div>
  );
}
