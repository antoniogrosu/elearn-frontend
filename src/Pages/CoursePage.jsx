import { useParams } from "react-router-dom";
import CourseDynamic from "../Components/DynamicPage/CourseDynamic";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NotFound from "../Components/DynamicPage/NotFound";
import { data } from "./../../DUMMY_DATA";

export default function CoursePage() {
  let { id } = useParams();
  const array = data.courses;
  let index = array.findIndex((item) => item.id === id);
  return (
    <>
      <Navbar />
      {index != -1 ? (
        <CourseDynamic object={array[index]} />
      ) : (
        <NotFound id={id} />
      )}
      <Footer />
    </>
  );
}
