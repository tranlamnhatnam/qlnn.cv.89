const numberOfQuestionsInput = document.getElementById("number-of-questions-input");
const storageKey = "numberOfQuestions";

let numberOfQuestions = localStorage.getItem(storageKey) || 50;
numberOfQuestionsInput.value = numberOfQuestions;

function handleNumberOfQuestionsChange() {
  numberOfQuestions = numberOfQuestionsInput.value;
  localStorage.setItem(storageKey, numberOfQuestions);
}

numberOfQuestionsInput.addEventListener("change", handleNumberOfQuestionsChange);
