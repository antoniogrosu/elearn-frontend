import Question from "./Question";
import { data } from "../../../DUMMY_DATA";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InteractiveCourse(props) {
  const { ref, inView } = useInView({
    threshold: 0.5, // change this to adjust when the animation triggers
    triggerOnce: true, // change this to trigger the animation multiple times
  });
  const arr = data.courses;
  const index = arr.findIndex((item) => item.id === props.id);
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row justify-start mt-24 bg-gradient-to-r from-purple-800 to-fuchsia-400 rounded-3xl"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-3/12 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none bg-teal-100 bg-opacity-40 pt-6 px-6 py-4 md:py-12">
        <h1 className="text-lg urbanist font-bold text-gray-50">Chapter III</h1>
        <h3 className="urbanist text-sm font-semibold mt-2 text-gray-50">
          Lesson 3/3
        </h3>
        <div className="flex md:flex-col items-center md:h-80 justify-between md:justify-evenly mt-6 w-2/3 md:w-full">
          <div className="open-sans font-semibold p-1 rounded-full w-10 h-10 md:w-12 md:h-12 bg-green-200 text-md flex items-center justify-center">
            1
          </div>
          <p className="text-lg font-bold opacity-50 mb-2">.</p>
          <div className="open-sans font-semibold p-1 rounded-full w-10 h-10 md:w-12 md:h-12 bg-green-200 text-md flex items-center justify-center">
            2
          </div>
          <p className="text-lg font-bold opacity-50 mb-2 ">.</p>
          <div className="open-sans font-semibold p-1 rounded-full w-10 h-10 md:w-12 md:h-12 bg-yellow-200 text-md flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:w-9/12 md:px-16 py-8 bg-gradient-to-r from-purple-800 to-fuchsia-400 rounded-bl-3xl md:rounded-bl-none rounded-r-3xl">
        <Question arr={arr} index={index} />
      </div>
    </motion.div>
  );
}
