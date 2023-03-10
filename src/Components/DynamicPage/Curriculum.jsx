import { data } from "../../../DUMMY_DATA";
import { useState } from "react";
export default function Curriculum(props) {
  const [lessons, setLessons] = useState(false);
  const arr = data.courses;
  const id = props.id;
  const index = arr.findIndex((item) => item.id === id);
  const content = arr[index].chapters.map((item) => {
    return (
      <>
        <div
          className="bg-gray-900 w-full px-4 py-3 rounded-sm mt-2"
          onClick={() => {
            setLessons(!lessons);
          }}
        >
          <div className="flex item-center justify-between">
            <p className="urbanist text-gray-50 font-bold text-md">
              Chapter {arr[index].chapters.indexOf(item) + 1}
            </p>
            <p className="open-sans text-gray-50 opacity-20 text-sm">
              {item.lessons.length} lessons
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center py-2">
          {lessons &&
            item.lessons.map((lesson) => {
              return (
                <p className="mb-2 px-4 py-2 rounded-sm text-sm text-gray-50 w-10/12 bg-gray-900">
                  Lesson
                </p>
              );
            })}
        </div>
      </>
    );
  });
  return (
    <div className="w-full md:w-7/12 bg-gray-700 pb-4 px-6 pt-6 rounded-lg mt-8 mb-16">
      {content}
    </div>
  );
}
