import udemy from "/UdemySvg.svg";
import skillshare from "/SkillShareSvg.svg";
export default function SocialProof() {
  return (
    <div className="md:ml-24 md:w-3/4 w-full md:mt-8">
      <div className="w-full pt-1 bg-gradient-to-r from-teal-100"></div>
      <p className="open-sans text-xs mt-1 text-gray-50">TRUSTED BY</p>
      <div className="flex items-start w-full my-4 ">
        <img src={udemy} />
        <img src={skillshare} className="ml-4" />
      </div>
      <div className="w-full pt-1  bg-gradient-to-l from-teal-100"></div>
    </div>
  );
}
