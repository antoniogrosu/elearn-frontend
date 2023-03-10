import Courses from "../CoursesPage/Courses";
import Stats from "./Stats";
import Suggestion from "./Suggestion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function CoursesPageContent() {
  const { ref, inView } = useInView({
    threshold: 0.5, // change this to adjust when the animation triggers
    triggerOnce: true, // change this to trigger the animation multiple times
  });
  return (
    <div className="px-8 pt-12 md:pt-7 pb-32 md:px-24 bg-gray-900">
      <Courses />
      <div className="py-16"></div>
      <Stats />
      <div className="py-16"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Suggestion />
      </motion.div>
    </div>
  );
}
