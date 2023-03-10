import FullCourse from "./FullCourse";
import author2 from "/Author2.svg";
import { data } from "../../../DUMMY_DATA";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export default function Suggestion() {
  const object = data.promotion;
  const { ref, inView } = useInView({
    threshold: 0.5, // change this to adjust when the animation triggers
    triggerOnce: true, // change this to trigger the animation multiple times
  });
  return (
    <div className="w-full max-w-2xl md:w-10/12 2xl:w-4/12 bg-gradient-to-r from-purple-800 to-fuchsia-400 p-6 md:p-8 rounded-2xl flex md:flex-row flex-col items-start justify-around ">
      <div className="w-full md:w-4/12">
        <h1 className="text-gray-50 urbanist font-bold text-2xl">
          Do you want to take it to the next level?
        </h1>
        <p className="text-gray-50 open-sans text-sm mt-4">
          Because you enjoyed Python Basic, we would love to recommend you:{" "}
        </p>
      </div>
      <div className="md:pl-16 mt-4 md:mt-0 w-full md:w-8/12">
        <div className="bg-gray-800 p-6 w-full md:w-10/12 border-y-4 border-teal-100 rounded-md">
          <h1 className="open-sans font-bold text-gray-50 text-lg">
            {object.title}
          </h1>
          <p className="open-sans text-xs opacity-50 text-gray-50 uppercase">
            {object.domain}
          </p>
          <div className="mt-4 flex items-center justify-start w-full">
            <div className="w-12 h-12 rounded-full">
              <img src={object.img} />
            </div>
            <p className="text-xs text-gray-50 open-sans ml-4">
              by <span className="font-semibold">{object.author}</span>
            </p>
          </div>
          <div className="w-full mt-4">
            <p className="text-xs text-gray-50 open-sans mt-1 open-sans">
              <span className="opacity-50">Duration</span> :{" "}
              <span className="font-semibold">{object.duration}</span>
            </p>
            <p className="text-xs text-gray-50 font-semibold open-sans mt-1 open-sans">
              {object.students} Students Enrolled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
