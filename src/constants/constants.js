export const projects = [
  {
    title: "Sokoni",
    description: [
      `An web-based application developed in Node.js and ejs. 
    `,
      `Sokoni is a Swahili(a language spoken in Eastern Africa)word for a market.
       The application prevents user from impulsive buying. User recharge their account periodically.
       When adding to cart they shown their current total and balance.`,
    ],
    images: ["/images/1.png"],
    tags: ["Mongo", "Express", "Node", "Jest", "EJS"],
    skills: [
      "Comprehensive testing (unit, integrated, end-to-end)",
      "TDD",
      "Refactoring",
      "GOF design patterns",
      "SOLID principles",
      "Dependancy Injection",
    ],
    source: "https://github.com/samuelmaina/sokoni",
    visit: "https://sm-online-shop.herokuapp.com/",
    id: 0,
  },
  {
    title: "MifugoCare",
    description: [
      "A MERN application developed using React 16.8+.",
      "Application connects livestock farmers to vet officers. Vet assigned to farmer based on their specialization,location and previous rating",
    ],
    images: ["/images/1.png"],
    tags: ["React", "Express", "MongoDb", "Jest"],
    skills: ["Comprehensive testing (unit, integrated)", "TDD", "Refactoring"],
    source: "https://github.com/samuelmaina/mifugoCare",
    visit: "https://serene-taiga-98483.herokuapp.com/",
    id: 1,
  },
  {
    title: "MasokoFedha",
    description: [
      "This is a  repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    ],
    images: ["/images/1.png"],
    tags: ["React", "Redux", "Flux"],
    skills: ["Refactoring", "Visual Design"],
    source: "https://github.com/samuelmaina/mosokoFedha",
    visit: "https://masoko-fedha.vercel.app/",
    id: 2,
  },
  {
    title: "Ray-Tracer",
    description: [""],
    images: ["/images/1.png"],
    tags: ["C++", "CMake", "SDL2"],
    skills: ["OOP concepts", "OOP design"],
    source: "https://github.com/samuelmaina/Ray-Tracer",
    id: 3,
  },

  {
    title: "RSA encryption",
    description: [
      "A java implementation of the RSA encryption in a TDD manner.",
      "Have done other Security algorithms using TDD  which can be found at the github profile.",
    ],
    images: ["/images/1.png"],
    tags: ["java", "junit"],
    skills: ["OOP concepts", "Unit Testing"],
    source: "https://github.com/samuelmaina/Ray-Tracer",
    id: 4,
  },
  {
    title: "Kiambu High School Website",
    description: ["A website for my previous High School"],
    images: ["/images/1.png"],
    tags: ["PHP", "SQL", "HTML", "CSS"],
    skills: ["Refactor"],
    source: "https://github.com/samuelmaina/kiambu_high_school",
    visit: "https://kiambu-high.herokuapp.com/",
    id: 5,
  },
];

export const Experiece = [
  {
    from: "09/2017",
    to: "08/2022",
    school: "BSc. Computer Science, Moi University - Kenya",
    courses: [
      {
        text: "Software Engineering Principles and Practices, ",
      },
      {
        text: "Data Structures and Algorithms",
      },
      {
        text: "Discrete Mathematics, Linear Algebra.",
      },
      {
        text: "Artificial Intelligence, Data Science and Machine Learning",
      },
    ],
    organizations: [
      "Google Developer Student Clubs-Member",
      "Facebook DevC Commmunity-Member",
    ],
  },

  {
    from: "01/2013",
    to: "12/2016",
    school: "High School Diploma, Kiambu High School - Kenya",
    courses: [
      {
        text: "Literature and  Languages(English and Swahili)",
      },
      {
        text: "Mathematics and Sciences",
      },
      {
        text: "Computer Studies and History",
      },
    ],
    organizations: ["Math Club- Vice Chair", "Academic Captain"],
  },
];
