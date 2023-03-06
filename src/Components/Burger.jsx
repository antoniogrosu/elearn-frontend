import { useState } from "react";
import { Link } from "react-router-dom";
export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="pb-1 bg-gray-50 rounded-2xl w-7 mb-1"></div>
          <div className="pb-1 bg-gray-50 rounded-full w-7 mb-1"></div>
          <div className="pb-1 bg-gray-50 rounded-full w-7"></div>
        </div>
      ) : (
        <div className="w-full">
          <div className="z-10 bg-gray-900 p-2 absolute w-8/12  right-0 top-0 h-full flex flex-col items-center pt-6">
            <h1 className="text-2xl urbanist font-semibold text-gray-50">
              Menu
            </h1>
            <Link to="/dashboard">
              <p className="text-sm open-sans text-gray-50 my-6 w-full text-center py-2">
                Dashboard
              </p>
            </Link>
            <Link to="/courses">
              <p className="text-sm open-sans text-gray-50 first-letter: w-full text-left py-2">
                Courses
              </p>
            </Link>
          </div>
          <div
            className="bg-gray-500 opacity-25 p-2 absolute w-full z-0 left-0 top-0 h-full"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>
      )}
    </>
  );
}
