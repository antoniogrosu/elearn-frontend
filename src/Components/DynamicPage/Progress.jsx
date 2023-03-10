export default function Progress() {
  return (
    <div className="w-full md:w-1/3">
      <p className="urbanist text-md font-semibold mt-8 mb-2 text-gray-50">
        You're almost there!
      </p>
      <div className="bg-gradient-to-r from-purple-800/20 to-fuchsia-400/20 rounded-full w-full">
        <div className="w-3/4 pt-5 bg-gradient-to-r from-purple-800 to-fuchsia-400 rounded-l-full"></div>
      </div>
      <p className="urbanist text-sm font-semibold mt-2 text-gray-50">
        75% Complete
      </p>
    </div>
  );
}
