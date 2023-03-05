import { Link } from "react-router-dom";
export default function FullCourse(props) {
  return (
    <div className="mb-6 md:mb-0 bg-gray-800 p-6 w-full md:w-1/3 border-y-4 border-fuchsia-400 rounded-md md:mr-16">
      <h1 className="open-sans font-bold text-gray-50 text-lg">
        {props.title}
      </h1>
      <p className="open-sans text-xs opacity-50 text-gray-50 uppercase">
        {props.domain}
      </p>
      <div className="mt-4 flex items-center justify-start w-full">
        <div className="w-12 h-12 bg-red-200 rounded-full">
          <img src={props.img} />
        </div>
        <p className="text-xs text-gray-50 open-sans ml-4">
          by <span className="font-semibold">{props.author}</span>
        </p>
      </div>
      <div className="rounded-md text-xs mt-6 py-2 px-4 open-sans bg-slate-500 text-gray-50 font-semibold">
        Next Lesson : {props.lesson}
      </div>
      <div className="w-full mt-4">
        <p className="text-xs text-gray-50 open-sans opacity-50 mb-1">
          50% complete
        </p>
        <div className="w-full bg-gray-900 rounded-full">
          <div className="w-1/2 h-full bg-gradient-to-r from-teal-100 pb-1 rounded-full"></div>
        </div>
        <p className="text-xs text-gray-50 open-sans mt-1 open-sans">
          <span className="opacity-50">Duration</span> :{" "}
          <span className="font-semibold">{props.duration}</span>
        </p>
      </div>
    </div>
  );
}
