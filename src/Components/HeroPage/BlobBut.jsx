import { Link } from "react-router-dom";
import blob from "/blobSvg.svg";
export default function BlobBut() {
  return (
    <div className="w-12/12 md:w-5/12 md:mt-8">
      <div className="w-10/12 md:w-12/12 placeholder:">
        <img src={blob} />
      </div>
      <div className="px-8">
        <Link to="/courses">
          <button className="w-full py-3 mt-14 md:ml-24 md:w-auto bg-fuchsia-400 open-sans md:px-20 md:py-3 text-sm md:mt-20 text-gray-50 rounded-lg">
            explore courses
          </button>
        </Link>
      </div>
    </div>
  );
}
