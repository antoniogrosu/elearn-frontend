import Curriculum from "./Curriculum";
import InteractiveCourse from "./InteractiveCourse";
import Progress from "./Progress";
export default function CourseDynamic(props) {
  const obj = props.object;
  const id = props.id;
  return (
    <div className="select-none px-8 pt-12 md:pt-7 md:pb-32 md:px-24 bg-gray-900">
      <div className="flex items-center justify-start">
        <h1 className="text-4xl urbanist text-gray-50 font-bold mr-6">
          {obj.title}
        </h1>
        <div className="flex items-center justify-start">
          <div className="w-16 h-16">
            <img src={obj.img} />
          </div>
          <p className="open-sans text-gray-50 text-sm ml-4">
            by <span className="font-semibold">{obj.author}</span>
          </p>
        </div>
      </div>
      <InteractiveCourse id={id} />
      <h1 className="text-2xl urbanist text-gray-50 font-semibold mt-16">
        Curriculum
      </h1>
      <div className="flex items-start justify-between flex-col md:flex-row">
        <Progress />
        <Curriculum id={id} />
      </div>
    </div>
  );
}
