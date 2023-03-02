import FullCourse from "./FullCourse";
import author2 from "/Author1.svg";
import author1 from "/Author2.svg";
import { data } from "../../../DUMMY_DATA";
export default function Courses() {
  const courses = data.courses.map((item) => {
    return (
      <FullCourse
        title={item.title}
        author={item.author}
        domain={item.domain}
        img={item.img}
        lesson={item.lesson}
        duration={item.duration}
        id={item.id}
      />
    );
  });
  return (
    <div>
      <h1 className=" w-3/4 md:w-2/4 text-gray-50 text-2xl urbanist font-semibold mb-12">
        Your Learning Journey- the courses you’ve enrolled to achieve your
        goals.
      </h1>
      <div className="flex w-full justify-start md:flex-row flex-col">
        {courses}
      </div>
    </div>
  );
}
