const generateButton = document.querySelector("#generate-button");
const resultSpan = document.querySelector("#result");

const projectIdeas = [
  "Build a to-do list app",
  "Create a weather app",
  "Develop a recipe search engine",
  "Build a job board platform",
  "Create a news aggregator",
  "Develop a workout tracker",
  "Build a music player app",
  "Create a budgeting tool",
  "Develop a habit tracker",
  "Build a real-time chat app"
];

generateButton.addEventListener("click", function() {
  const result = projectIdeas[Math.floor(Math.random() * projectIdeas.length)];
  resultSpan.textContent = result;
});
