export default function DashboardTaskComp() {
  return (
    <div className="p-1 w-full h-1/3">
      <h1 className="text-gray-50 urbanist font-semibold text-lg mb-2">
        Tasks
      </h1>

      <div className="w-full  flex md:items-center md:flex-row flex-col md:justify-start">
        <div className="md:w-2/4 w-full flex items-center">
          <div className="px-4 py-2 border-l-4 rounded-lg bg-gray-800 border-fuchsia-400">
            <h2 className="urbanist text-md text-gray-50 font-semibold">
              Python Calculator
            </h2>
          </div>
          <div className="px-2 py-1  ml-4 border-2  text-gray-50 border-red-200 rounded-full bg-red-900 bg-opacity-30 text-xs">
            DUE 3 MAR
          </div>
        </div>
        <div className="py-3 md:hidden"></div>
        <div className=" md:w-2/4 w-full flex items-center">
          <div className="px-4 py-2 border-l-4  rounded-lg bg-gray-800 border-fuchsia-400">
            <h2 className="urbanist text-md text-gray-50 font-semibold">
              Write 2 paragraphs
            </h2>
          </div>
          <div className="px-2 py-1  ml-4 border-2  text-gray-50 border-red-200 rounded-full bg-red-900 bg-opacity-30 text-xs">
            DUE 10 MAR
          </div>
        </div>
      </div>
    </div>
  );
}
