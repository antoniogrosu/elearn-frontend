export const data = {
  courses: [
    {
      id: "python-basic",
      title: "Python Basics",
      domain: "computer programming",
      img: "/Author2.svg",
      author: "Magnus Thunderbolt",
      lesson: "For Loops",
      duration: "8h",
      chapters: [
        { lessons: ["A lesson", "A second lesson"] },
        { lessons: ["A lesson", "A second lesson"] },
        { lessons: ["A lesson", "A second lesson"] },
        {
          lessons: [
            "A lesson",
            "A second lesson",
            {
              title: "For loops",
              question:
                "Which one of the following represents the correct way of writing a for loop in Python 3?",
              choices: [
                "for x in range: \n print x",
                "for( int i=1; i<=n; i++ ) \n { \n cout<<i; \n }",
                "for( let i=1; i<=n; i++ ) \n { \n console.log(i); \n }",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "copy-writing",
      title: "Copy Writing",
      domain: "marketing",
      img: "/Author1.svg",
      author: "Lyla Rosewood",
      lesson: "Powerful Words",
      duration: "2h",
      chapters: [
        { lessons: ["A lesson", "A second lesson"] },
        { lessons: ["A lesson", "A second lesson"] },
        { lessons: ["A lesson", "A second lesson"] },
        {
          lessons: [
            "A lesson",
            "A second lesson",
            {
              title: "Powerful Words",
              question:
                "Which one these combinations of words would you use to describe a digital product",
              choices: [
                "well engineered software",
                "useful software",
                "all your solutions and answers in a software",
              ],
            },
          ],
        },
      ],
    },
  ],
  promotion: {
    id: "copy-writing",
    title: "Python Masterclass",
    domain: "computer programming",
    img: "/Author2.svg",
    author: "Magnus Thunderbolt",
    duration: "12h",
    students: 8.574,
  },
  stats: [
    {
      course: "Python Basics",
      hours: 10,
      chapters: 3,
    },
    {
      course: "Copy Writing",
      hours: 10,
      chapters: 4,
    },
  ],
};
