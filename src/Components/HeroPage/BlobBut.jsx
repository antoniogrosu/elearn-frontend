import { Link } from "react-router-dom";
import blob from "/blobSvg.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function BlobBut() {
  const { ref, inView } = useInView({
    threshold: 0.5, // change this to adjust when the animation triggers
    triggerOnce: true, // change this to trigger the animation multiple times
  });
  return (
    <div className="w-12/12 md:w-5/12 md:mt-8">
      <div className="w-10/12 md:w-12/12 placeholder:">
        <img src={blob} />
      </div>
      <div className="px-8">
        <Link to="/courses">
          <motion.button
            className="w-full py-3 mt-14 md:ml-24 md:w-auto bg-fuchsia-400 open-sans md:px-20 md:py-3 text-sm md:mt-20 text-gray-50 rounded-lg"
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            explore courses
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
