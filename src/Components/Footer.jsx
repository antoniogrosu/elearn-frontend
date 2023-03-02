export default function Footer() {
  return (
    <footer className="bg-teal-100 md:px-32 md:py-20 px-8 py-20 flex md:flex-row flex-col justify-center items-start">
      <div className="md:w-4/12 w-full mb-10 md:mb-0">
        <h1 className="open-sans text-gray-900 text-2xl font-bold">Elearn.</h1>
        <h2 className="mt-6 open-sans opacity-50 ">Copyright © Elearn 2023</h2>
      </div>
      <div className="flex flex-col md:items-center w-full md:w-2/4 mr-0 items-start mb-10 md:mb-0">
        <h1 className="urbanist font-semibold text-lg">More About Us</h1>
        <p className="py-4 text-sm open-sans cursor-pointer">Teachers</p>
        <p className="py-4 text-sm open-sans cursor-pointer">Courses</p>
        <p className="py-4 text-sm open-sans cursor-pointer">Legal</p>
        <p className="py-4 text-sm open-sans cursor-pointer">Refund</p>
      </div>
      <div className="flex flex-col md:items-center items-start w-full md:w-2/4">
        <h1 className="urbanist font-semibold text-lg">Follow Us</h1>
        <p className="py-4 text-sm open-sans cursor-pointer">LinedIn</p>
        <p className="py-4 text-sm open-sans cursor-pointer">Twitter</p>
      </div>
    </footer>
  );
}
