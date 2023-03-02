import { Link } from "react-router-dom";
export default function NotFound(props) {
  return (
    <div className="bg-gray-900 py-32 px-8 text-gray-50 urbanist font-semibold pt-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl w-full text-center pt-12">
        "{props.id}" page not found
      </h1>
      <button className="bg-fuchsia-400 px-4 py-2 text-md md:w-1/3 mt-4 rounded-md">
        <Link to="/dashboard">Back to Dashboard</Link>
      </button>
    </div>
  );
}
