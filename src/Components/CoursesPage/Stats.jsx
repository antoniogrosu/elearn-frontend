import { data } from "../../../DUMMY_DATA";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5, // change this to adjust when the animation triggers
    triggerOnce: true, // change this to trigger the animation multiple times
  });
  const object = data.stats;
  const courseStats = object.map((item) => {
    return (
      <p className="mb-4 px-4 py-2 rounded-md text-gray-50 bg-gray-800 open-sans text-sm">
        You completed {item.chapters} chapters in{" "}
        <span className="font-semibold">{item.course}</span>
      </p>
    );
  });

  return (
    <div>
      <h1 className="w-2/4 text-gray-50 text-2xl urbanist font-semibold">
        Your Learning Statistics
      </h1>
      <p className="text-xs opacity-50 text-gray-50 uppercase mt-6">
        this week
      </p>
      <div className="flex items-start justify-start md:flex-row flex-col-reverse w-full mt-6">
        <div className="flex flex-col">{courseStats}</div>

        <div className="md:ml-16 mb-6 md:mb-0 w-full md:w-2/4 p-6 bg-gradient-to-tr from-purple-800/5 to-fuchsia-400/5 flex flex-col rounded-2xl">
          <h1 className="text-md text-gray-50 open-sans font-semibold">
            19 Hours Spent on Learning
          </h1>
          <div className="max-w-sms w-full flex justify-between mt-2">
            <div className="bg-purple-800 w-7/12 p-1 rounded-l-full"></div>
            <div className="bg-fuchsia-400 w-5/12 p-1 rounded-r-full"></div>
          </div>
          <div className="flex w-full items-center justify-start mt-4">
            <p className="px-2 py-1 text-xs bg-purple-800 text-gray-50 open-sans rounded-md">
              Programming 10h
            </p>
            <p className="ml-4 px-2 py-1 text-xs bg-fuchsia-400 text-gray-50 open-sans rounded-md">
              Marketing 9h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
