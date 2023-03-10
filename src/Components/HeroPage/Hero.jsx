import HeroTitle from "./HeroTitle";
import BlobBut from "./BlobBut";
import SocialProof from "./SocialProof";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="bg-gray-900 flex flex-col items-center md:flex-row md:justify-start pb-40">
      <div className="block md:hidden pt-20">
        <HeroTitle />
      </div>
      <BlobBut />
      <div className="w-full px-8 md:px-0 flex flex-col md:w-2/4 md:mt-24 mt-10">
        <div className="hidden md:block">
          <HeroTitle />
        </div>
        <SocialProof />
      </div>
    </div>
  );
}
