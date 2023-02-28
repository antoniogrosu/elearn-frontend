export default function Navbar() {
  return (
    <nav className="py-6 px-8 bg-gray-900 text-2xl md:px-24 md:py-8 flex justify-between">
      <h1 className="open-sans text-gray-50 font-bold">Elearn.</h1>
      <div className="p-1 text-sm open-sans font-semibold text-gray-50 bg-gradient-to-l from-purple-800 to-fuchsia-400 rounded-full back">
        <div className="w-full bg-gray-900 px-8 py-2 cursor-pointer rounded-full">
          Sign in
        </div>
      </div>
    </nav>
  );
}
