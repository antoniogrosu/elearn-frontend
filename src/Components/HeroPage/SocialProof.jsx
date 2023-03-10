import udemy from "/UdemySvg.svg";
import skillshare from "/SkillShareSvg.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function SocialProof() {
  const { ref, inView } = useInView({
    threshold: 0.5, // change this to adjust when the animation triggers
    triggerOnce: true, // change this to trigger the animation multiple times
  });
  return (
    <motion.div
      className="md:ml-24 md:w-3/4 w-full md:mt-8"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full pt-1 bg-gradient-to-r from-teal-100"></div>
      <p className="open-sans text-xs mt-1 text-gray-50">TRUSTED BY</p>
      <div className="flex items-start w-full my-4 ">
        <img src={udemy} />
        <img src={skillshare} className="ml-4" />
      </div>
      <div className="w-full pt-1  bg-gradient-to-l from-teal-100"></div>
    </motion.div>
  );
}
