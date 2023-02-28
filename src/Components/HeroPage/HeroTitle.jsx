import sphere from "/sphere.png";
export default function HeroTitle() {
  return (
    <div className="capitalize flex items-center flex-col md:w-3/4 w-full px-8 md:px-0 md:ml-24 mb-10 md:mb-0">
      <div>
        <div className="flex items-center">
          <h1 className="text-gray-50 md:text-5xl text-4xl urbanist font-bold">
            Empower your{" "}
          </h1>
          <div className="w-2/12 ml-2">
            <img src={sphere} className="object-cover" />
          </div>
        </div>
        <h1 className="capitalize mt-1 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-fuchsia-400 text-4xl md:text-5xl urbanist font-extrabold">
          Learning Journey
        </h1>
      </div>
    </div>
  );
}
