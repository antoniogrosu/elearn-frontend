export default function DashboardStatisticsComp() {
  return (
    <div className="p-1 w-full md:h-1/3 mb-6">
      <h1 className="text-gray-50 urbanist font-semibold text-lg mb-2">
        Statistics
      </h1>
      <div className="w-full flex md:flex-row flex-col justify-start">
        <div className="text-gray-50 p-2 flex flex-col open-sans justify-center items-center w-32 h-32 rounded-full bg-gray-800 border-2 border-fuchsia-400 shadow-[0_5px_50px_5px_rgba(232,121,249,0.15)] ">
          <p className="text-lg w-full text-center font-semibold">19</p>
          <p className="text-xs text-center w-full opacity-20">hours spent</p>
        </div>
        <div className="mt-6 md:mt-0 ml-0 md:ml-12 flex justify-center flex-col">
          <p className="mb-4 px-4 py-2 bg-gray-800 rounded-md text-gray-50 text-sm">
            Computer Programming <span className="font-bold">10h</span>
          </p>
          <p className="px-4 py-2 bg-gray-800 rounded-md text-gray-50 text-sm">
            Marketing <span className="font-bold">9h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
