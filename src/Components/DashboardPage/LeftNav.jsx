import profilePic from "/ProfilePic.svg";
import ProgressIcon from "/ProgressIcon.svg";
import SettingsIcon from "/SettingsIcon.svg";
import SkillsIcon from "/SkillsIcon.svg";
import { Link } from "react-router-dom";
export default function LeftNav() {
  return (
    <>
      <h1 className="open-sans text-gray-50 font-bold text-2xl">
        <Link to="/">Elearn.</Link>
      </h1>
      <div className=" h-3/4 flex flex-col justify-between mt-8">
        <div className="w-full flex items-center">
          <div className="rounded-full w-16 h-16 p-1">
            <img src={profilePic} />
          </div>
          <div className="ml-2">
            <p className="open-sans text-xs font-semibold text-gray-50">
              John Doe
            </p>
            <p className="open-sans text-xs opacity-75 text-gray-50">
              Bucharest, Romania
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-50 text-sm open-sans font-semibold mb-2">
            New Learner
          </p>
          <div className="w-full bg-gray-900 rounded-full">
            <div className="w-1/2 bg-gradient-to-r from-teal-100 pt-2 rounded-full"></div>
          </div>
          <p className="text-xs opacity-40 text-gray-50 open-sans mt-1">
            50% to Experienced Learner
          </p>
        </div>
        <div>
          <p className="text-gray-50 text-sm open-sans font-semibold mb-2">
            Personal{" "}
          </p>
          <div className="flex justify-start">
            <div className="w-8 h-8 p-1 rounded-md bg-slate-300 cursor-pointer flex items-center justify-center mr-4 opacity-50">
              <img src={ProgressIcon} className="w-3/4" />
            </div>
            <div className="w-8 h-8 p-1 rounded-md bg-slate-300 cursor-pointer flex items-center justify-center mr-4 opacity-50">
              <img src={SettingsIcon} className="w-3/4" />
            </div>
            <div className=" w-8 h-8 p-1 rounded-md bg-slate-300 cursor-pointer flex items-center justify-center opacity-50">
              <img src={SkillsIcon} className="w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
