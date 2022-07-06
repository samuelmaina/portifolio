export const projects = [
  {
    title: "Sokoni",
    description: [
      `An web-based application developed in Node.js, Express, Ejs and MongoDb 
    `,
      "Jest is used for unit and integration testing while selenium is used for end-to-end testing",
      `An web-based online shop prevents user from impulsive buying. User recharge their account periodically.
       When adding to cart they shown their current total and balance so that they can make informed buying.`,
    ],
    images: ["/images/sokoni.png"],
    tags: ["Mongo", "Express", "Node", "Jest", "selenium", "EJS"],
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
    images: ["/images/mifugoCare.png"],
    tags: ["React", "Express", "MongoDb", "Jest"],
    skills: ["Comprehensive testing (unit, integrated)", "TDD", "Refactoring"],
    source: "https://github.com/samuelmaina/mifugoCare",
    visit: "https://serene-taiga-98483.herokuapp.com/",
    id: 1,
  },
  {
    title: "MasokoFedha",
    description: [
      "A react frontend application that shows cryptocurrency stats and price trends",
      "Application also shows new for different crytos",
    ],
    images: ["/images/masoko_5.png"],
    tags: ["React", "Redux", "Flux", "Ant Design"],
    skills: ["Refactoring", "Visual Design"],
    source: "https://github.com/samuelmaina/mosokoFedha",
    visit: "https://masoko-fedha.vercel.app/",
    id: 2,
  },
  {
    title: "Ray-Tracer",
    description: [
      "A 3D rendering application made in C++",
      "Uses linear algebra and Mathematics to create objects and lights ",
      "Some of the concepts covered include Matrix multiplication, Markov Chains, Determinants",
    ],
    images: ["/images/raytracer.png"],
    tags: ["C++", "CMake", "SDL2"],
    skills: ["OOP concepts", "OOP design"],
    source: "https://github.com/samuelmaina/Ray-Tracer",
    id: 3,
  },

  {
    title: "Guess Game",
    description: ["A simple guess game app build using React Native"],
    images: ["/images/guess_game.webp"],
    tags: ["React Native", "Java"],
    skills: ["Refactor"],
    source: "https://github.com/samuelmaina/kiambu_high_school",
    visit: "https://kiambu-high.herokuapp.com/",
    id: 5,
  },
  {
    title:
      "Java Implementation of Different Encryption Methods and Prime Number theories",
    description: [
      "A java implementation of the RSA encryption in a TDD manner.",
      "Have done other Security algorithms using TDD  which can be found at my github profile",
      "Such algorithms include Sieve of Erasthones, Rabin-Miller Primarity test etc.",
    ],
    images: ["/images/encryption.jpg"],
    tags: ["java", "junit"],
    skills: ["OOP concepts", "Unit Testing"],
    source: "https://github.com/samuelmaina/Ray-Tracer",
    id: 4,
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
