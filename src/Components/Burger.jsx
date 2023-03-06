import profilePic from "/ProfilePic.svg";
import ProgressIcon from "/ProgressIcon.svg";
import SettingsIcon from "/SettingsIcon.svg";
import SkillsIcon from "/SkillsIcon.svg";

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
          <div className="z-10 bg-gray-900 p-2 absolute w-8/12  right-0 top-0 h-full flex flex-col items-start px-6 pt-6">
            <h1 className="text-2xl urbanist font-semibold text-gray-50">
              Menu
            </h1>
            <div className="w-full flex items-center mt-8">
              <div className="rounded-full w-16 h-16 p-1">
                <img src={profilePic} />
              </div>
              <div className="ml-2">
                <p className="open-sans text-sm font-semibold text-gray-50">
                  John Doe
                </p>
                <p className="open-sans text-sm opacity-75 text-gray-50">
                  Bucharest, Romania
                </p>
              </div>
            </div>
            <div className="w-full h-60 flex flex-col justify-around mt-16">
              <div>
                <p className="text-gray-50 text-md urbanist font-semibold mb-2">
                  New Learner
                </p>
                <div className="w-full bg-gray-900 rounded-full">
                  <div className="w-1/2 bg-gradient-to-r from-teal-100 py-1 rounded-full"></div>
                </div>
                <p className="text-sm opacity-40 text-gray-50 open-sans mt-2">
                  50% to Experienced Learner
                </p>
              </div>
              <Link to="/dashboard">
                <p className="text-md urbanist font-semibold text-gray-50 ">
                  Dashboard
                </p>
              </Link>
              <Link to="/courses">
                <p className="text-md urbanist font-semibold text-gray-50 ">
                  Courses
                </p>
              </Link>
            </div>
            <div className="mt-16">
              <p className="text-gray-50 text-md urbanist font-semibold mb-4">
                Personal{" "}
              </p>
              <div className="flex justify-start">
                <div className="w-12 h-12 p-3 rounded-md bg-slate-300 cursor-pointer flex items-center justify-center mr-4 opacity-50">
                  <img src={ProgressIcon} className="w-full" />
                </div>
                <div className="w-12 h-12 p-3 rounded-md bg-slate-300 cursor-pointer flex items-center justify-center mr-4 opacity-50">
                  <img src={SettingsIcon} className="w-full" />
                </div>
                <div className=" w-12 h-12 p-3 rounded-md bg-slate-300 cursor-pointer flex items-center justify-center opacity-50">
                  <img src={SkillsIcon} className="w-full" />
                </div>
              </div>
            </div>
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
