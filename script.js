const generateButton = document.querySelector("#generate-button");
const minInput = document.querySelector("#min");
const maxInput = document.querySelector("#max");
const resultSpan = document.querySelector("#result");

generateButton.addEventListener("click", function() {
  const min = Number(minInput.value);
  const max = Number(maxInput.value);
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  resultSpan.textContent = result;
});
