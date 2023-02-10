const generateButton = document.querySelector("#generate-button");
const resultSpan = document.querySelector("#result");
const languageSelect = document.querySelector("#language");
const experienceLevelSelect = document.querySelector("#experience-level");

const projectIdeas = {
  javascript: {
    beginner: [
      "Build a to-do list web application",
      "Create a weather app using APIs",
      "Build a rock-paper-scissors game",
      "Create a simple calculator",
      "Build a random quote generator"
    ],
    intermediate: [
      "Build a e-commerce website",
      "Create a chat application using websockets",
      "Build a real-time stock tracker",
      "Create a weather app with a map view using APIs",
      "Build a to-do list app with user authentication"
    ],
    advanced: [
      "Build a real-time multiplayer game",
      "Create a social media platform",
      "Build a recommendation system using machine learning",
      "Create a real-time translation app",
      "Build a blockchain-based voting system"
    ]
  },
  react: {
    beginner: [
      "Build a to-do list web application with React",
      "Create a weather app using React and APIs",
      "Build a rock-paper-scissors game with React",
      "Create a simple calculator with React",
      "Build a random quote generator with React"
    ],
    intermediate: [
      "Build a e-commerce website with React",
      "Create a chat application using websockets and React",
      "Build a real-time stock tracker with React",
      "Create a weather app with a map view using React and APIs",
      "Build a to-do list app with user authentication using React"
    ],
    advanced: [
      "Build a real-time multiplayer game with React",
      "Create a social media platform with React",
      "Build a recommendation system using machine learning and React",
      "Create a real-time translation app with React",
      "Build a blockchain-based voting system with React"
    ]
  },
  python: {
    beginner: [
      "Build a to-do list command line application with Python",
      "Create a weather app using Python and APIs",
      "Build a rock-paper-scissors game with Python",
      "Create a simple calculator with Python",
      "Build a random quote generator with Python"
    ],
    intermediate: [
      "Build a e-commerce website with Python and Django",
      "Create a chat application using websockets and Python",
      "Build a real-time stock tracker with Python",
      "Create a weather app with a map view using Python and APIs",
      "Build a to-do list app with user authentication using Python and Django"
    ],
    advanced: [
      "Build a recommendation system using machine learning and Python",
      "Create a real-time translation app with Python",
      "Build a blockchain-based voting system with Python",
      "Create a sentiment analysis tool using Python and NLP",
      "Build a predictive model for stock prices using Python and machine learning"
    ]
  }
};

generateButton.addEventListener("click", function() {
    const selectedLanguage = languageSelect.value;
    const selectedExperienceLevel = experienceLevelSelect.value;
  
    if (!selectedLanguage || !selectedExperienceLevel) {
      resultSpan.textContent = "Please select a language and experience level.";
      return;
    }
  
    const ideas = projectIdeas[selectedLanguage][selectedExperienceLevel];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    resultSpan.textContent = randomIdea;
  });
  