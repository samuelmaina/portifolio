export const projects = [
  {
    title: "Sokoni",
    description: [
      `An web-based online shop prevents user from impulsive buying. User recharge their account periodically.
      When adding to cart they are shown their current total and balance so that they can make informed purchases.`,
      "The shop allows Seller to add new products, edit product details and see their sales trends and profits",
    ],
    images: ["/images/sokoni.png"],
    tags: ["Mongo DB", "Express", "Node", "Jest", "selenium", "EJS"],
    skills: [
      "Comprehensive Automated testing (unit, integrated, end-to-end)",
      "Test Driven Development",
      "Refactoring",
      "Clean Architecture",
      "GOF design patterns",
      "SOLID principles",
      "Dependancy Injection",
    ],
    source: "https://github.com/samuelmaina/sokoni",
    visit: "https://sm-online-shop.herokuapp.com/",
    id: 0,
  },
  {
    title: "Mifugo Care",
    description: [
      "A MERN web-based application that connects livestock farmers to vet services.",
      "Farmers post the symptoms and images of their ill animals. The systems then assigns the best vet based on nearness to customer,area of specialization and previous ratings.",
      "After the vet services, farmer rate services offered and make payment. ",
    ],
    images: ["/images/mifugoCare.png"],
    tags: ["React 16.8+ ", "Express", "Mongo DB", "Jest"],
    skills: [
      "Comprehensive Automatedd testing (unit, integrated)",
      "Test Driven Development",
      "Refactoring",
      "GOF Design patterns",
    ],
    source: "https://github.com/samuelmaina/mifugo-care",
    visit: "https://serene-taiga-98483.herokuapp.com/",
    id: 1,
  },
  {
    title: "Masoko Fedha",
    description: [
      "A react frontend application that shows cryptocurrency stats and news",
      "Shows overall cryptocurrency news and stats as well as for individual cryptos",
      "Application developed using React 16.8+.",
    ],
    images: ["/images/masoko_5.png"],
    tags: ["React", "Redux", "Ant Design"],
    skills: ["Refactoring", "Visual Design"],
    source: "https://github.com/samuelmaina/masoko-fedha",
    visit: "https://masoko-fedha.vercel.app/",
    id: 2,
  },
  {
    title: "Ray Tracer",
    description: [
      "A 3D rendering application made in C++",
      "Uses linear algebra and mathematics to simulate real world placement of objects.",
      "Objects can be of different colors, materials, refractivity and reflectivity",
      "Some of the concepts covered include Matrix multiplication, Markov Chains, Determinants",
    ],
    images: ["/images/raytracer.png"],
    tags: ["C++", "CMake", "SDL2"],
    skills: ["OOP concepts", "OOP design"],
    source: "https://github.com/samuelmaina/ray-tracer",
    id: 3,
  },

  {
    title: "Guess Game",
    description: [
      "A simple guess game app build using React Native",
      "The system guesses a number and continuously prompt the user to enter a guess",
      "Systems responds to with 'higher' and 'lower' messages until a correct guess(more like  a binary search)",
    ],
    images: ["/images/guess_game.webp"],
    tags: ["React Native", "React-Components"],
    skills: ["Refactor"],
    source: "https://github.com/samuelmaina/guess-game",
    id: 5,
  },
];

export const Experiece = [
  {
    from: "09/2017",
    to: "12/2022",
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
      "Facebook DevC Commmunity-Tech Specialist",
      "Google Developer Student Clubs-Member",
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
