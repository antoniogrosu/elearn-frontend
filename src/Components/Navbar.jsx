import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function Navbar() {
  const [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn" || false)
  );
  return (
    <nav className="py-6 px-8 bg-gray-900 text-2xl md:px-24 md:py-8 flex justify-between">
      <h1 className="open-sans text-gray-50 font-bold">
        <Link to="/">Elearn.</Link>
      </h1>
      {!signedIn && (
        <div className="p-1 text-sm open-sans font-semibold text-gray-50 bg-gradient-to-l from-purple-800 to-fuchsia-400 rounded-full back">
          <div
            className="w-full bg-gray-900 px-8 py-2 cursor-pointer rounded-full"
            onClick={() => {
              setSignedIn(true);
              localStorage.setItem("signedIn", JSON.stringify(signedIn));
            }}
          >
            Sign in
          </div>
        </div>
      )}
      {signedIn && (
        <>
          <div className="hidden w-2/12 md:flex items-center justify-between">
            <p className="text-xs text-gray-50 urbanist">
              <Link to="/dashboard">Dashboard</Link>
            </p>
            <p className="text-xs text-gray-50 urbanist">
              <Link to="/courses">Courses</Link>
            </p>
          </div>
          <div className="md:hidden flex items-center">
            <Burger />
          </div>
        </>
      )}
    </nav>
  );
}
