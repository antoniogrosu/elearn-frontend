export default function Question(props) {
  const data = props.arr;
  const index = props.index;
  const obj = data[index];
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <h1 className="text-2xl urbanist text-gray-50 font-bold mb-12 md:mb-16 w-full md:text-center">
        {obj.chapters[3].lessons[2].title}
      </h1>
      <div className="mb-12 md:mb-16">
        <p className="open-sans text-xs opacity-30 text-gray-50 upperacase">
          MULTIPLE CHOICE QUESTION
        </p>
        <p className="text-lg text-gray-50 open-sans mt-2 font-semibold">
          {obj.chapters[3].lessons[2].question}
        </p>
      </div>
      <div className="text-sm w-full flex md:flex-row flex-col justify-between md:items-center">
        <input type="radio" className="fixed w-96 bg-red-200" />
        <label className="md:mr-2 inline-block bg-gray-900 px-4 py-2 mb-5 md:mb-0 text-gray-50 bg-opacity-60  rounded-md">
          {obj.chapters[3].lessons[2].choices[0]}
        </label>
        <input type="radio" className="fixed opacity-0" />
        <label className="md:mr-2 inline-block bg-gray-900 px-4 py-2 mb-5 md:mb-0 text-gray-50 bg-opacity-60  rounded-md">
          {obj.chapters[3].lessons[2].choices[1]}
        </label>
        <input type="radio" className="fixed opacity-0" />
        <label className="inline-block bg-gray-900 px-4 py-2 mb-5 md:mb-0 text-gray-50 bg-opacity-60 rounded-md">
          {obj.chapters[3].lessons[2].choices[2]}
        </label>
      </div>
      <button className="bg-gray-900 rounded-lg px-4 py-2 mt-10 w-full md:w-1/3 text-gray-50">
        Submit
      </button>
    </div>
  );
}
