export default function DashboardCourse(props) {
  return (
    <div className="mb-6  md:mb-0 border-y-4 border-fuchsia-400 bg-gray-800 p-4 md:mr-8 max-w-md  md:w-1/3 rounded-md">
      <h1 className="open-sans font-bold text-gray-50 text-lg">
        {props.title}
      </h1>
      <p className="open-sans text-gray-50 opacity-50 uppercase text-xs">
        {props.domain}
      </p>
      <div className="w-full open-sans text-gray-50 text-xs font-semibold bg-slate-500 p-2 rounded-md mt-4">
        Next lesson : {props.lesson}
      </div>
      <div className="w-full mt-4">
        <p className="text-xs text-gray-50 open-sans opacity-50">
          50% complete
        </p>
        <div className="w-full bg-gray-900 rounded-full">
          <div className="w-1/2 h-full bg-gradient-to-r from-teal-100 pb-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
