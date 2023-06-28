const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const generateButton = document.getElementById("generate-button");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");

resultContainer.style.display = "none";

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate a random quiz with a specified number of questions
function generateQuiz(numQuestions) {
  // Clear previous quiz and result
  quizContainer.innerHTML = "";

  resultContainer.style.display = "none";
  resultText.innerText = "";

  // Get a random subset of questions from the quizData
  const randomQuestions = [];
  const totalQuestions = quizData.questions.length;

  while (randomQuestions.length < numQuestions) {
    const randomIndex = getRandomNumber(0, totalQuestions - 1);
    if (!randomQuestions.includes(randomIndex)) {
      randomQuestions.push(randomIndex);
    }
  }

  // Generate HTML for each question
  randomQuestions.forEach((questionIndex) => {
    const questionData = quizData.questions[questionIndex];
    const questionElement = createQuestionElement(questionData, questionIndex);
    quizContainer.appendChild(questionElement);
  });

  // Enable submit button and disable reset button
  submitButton.disabled = false;
  resetButton.disabled = true;
}

// Function to create a question element
function createQuestionElement(questionData, questionNumber) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.dataset.questionIndex = questionNumber; // Set data-question-index attribute

  const questionText = document.createElement("p");
  questionText.innerText = questionData.question;
  questionText.classList.add("font-bold");
  questionElement.appendChild(questionText);

  const optionsContainer = document.createElement("div");

  questionData.options.forEach((option, optionIndex) => {
    const optionLabel = document.createElement("label");
    optionLabel.classList.add("block", "my-2");

    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = `question${questionNumber}`;
    optionInput.value = option.charAt(0);
    optionInput.dataset.optionIndex = optionIndex;
    optionInput.classList.add(
      "mr-2",
      "rounded-full",
      "border-gray-300",
      "text-blue-500",
      "shadow-sm",
      "focus:border-blue-500",
      "focus:ring",
      "focus:ring-offset-0",
      "focus:ring-blue-200",
      "focus:ring-opacity-50"
    );

    optionLabel.appendChild(optionInput);

    const optionText = document.createElement("span");
    optionText.innerText = option;
    optionLabel.appendChild(optionText);

    optionsContainer.appendChild(optionLabel);
  });

  questionElement.appendChild(optionsContainer);

  return questionElement;
}

// Function to calculate and display the quiz result
function showResult() {
  let score = 0;
  let unanswered = 0;
  const selectedAnswers = [];

  resultContainer.style.display = "block";

  const questions = Array.from(document.querySelectorAll(".question"));

  questions.forEach((question, questionIndex) => {
    const quizDataIndex = question.getAttribute("data-question-index");
    const selectedOption = question.querySelector('input[type="radio"]:checked');
    if (!selectedOption) {
      unanswered++;
      const questionData = quizData.questions[quizDataIndex];
      const correctOptionIndex = questionData.options.findIndex((opt) => opt.startsWith(questionData.answer));
      const correctOptionElement = question.querySelector(`[data-option-index="${correctOptionIndex}"]`);
      correctOptionElement.parentElement.classList.add("text-orange-500", "font-bold");
    } else {
      const selectedAnswer = selectedOption.value;
      selectedAnswers.push({ questionIndex, selectedAnswer, quizDataIndex });
    }
  });

  selectedAnswers.forEach(({ questionIndex, selectedAnswer, quizDataIndex }) => {
    const question = quizData.questions[quizDataIndex];
    const questionElement = questions[questionIndex];

    if (selectedAnswer === question.answer || selectedAnswer === question.answer.charAt(0)) {
      score++;
      const selectedOption = questionElement.querySelector(`input[value="${selectedAnswer}"]`);
      selectedOption.parentElement.classList.add("text-green-500", "font-bold");
      selectedOption.classList.add("text-green-500");
    } else {
      const correctOptionIndex = question.options.findIndex((opt) => opt.startsWith(question.answer));

      const correctOptionElement = questionElement.querySelector(`[data-option-index="${correctOptionIndex}"]`);
      correctOptionElement.parentElement.classList.add("text-green-500", "font-bold");
      correctOptionElement.classList.add("text-green-500");

      const selectedOption = questionElement.querySelector(`input[value="${selectedAnswer}"]`);
      selectedOption.parentElement.classList.add("text-red-500", "font-bold");
      selectedOption.classList.remove("text-blue-500");
      selectedOption.classList.add("text-red-500");
    }
  });

  const options = document.querySelectorAll('input[type="radio"]');
  options.forEach((option) => {
    option.disabled = true; // Disable all options
    option.classList.add("opacity-50", "cursor-not-allowed"); // Apply Tailwind CSS classes
  });

  if (unanswered > 0) {
    resultText.innerHTML = `Đúng <strong class="underline">${score}</strong>/${numberOfQuestions} câu hỏi <br/> <strong class="underline">${unanswered}</strong> câu chưa trả lời`;
  } else {
    resultText.innerHTML = `Đúng <strong class="underline">${score}</strong>/${numberOfQuestions} câu hỏi`;
  }

  submitButton.disabled = true; // Disable the submit button after showing the result
  resetButton.disabled = false; // Enable the reset button
}
// Function to reset the quiz and clear the result
function resetQuiz() {
  const allOptions = document.querySelectorAll('input[type="radio"]');

  allOptions.forEach((option) => {
    option.checked = false;
    option.disabled = false;
    option.parentElement.classList.remove(
      "text-green-500",
      "text-red-500",
      "font-bold",
      "underline",
      "text-orange-500"
    );
    option.classList.remove("text-red-500", "text-orange-500", "text-green-500");
    option.classList.add("text-blue-500");
  });

  resultText.innerText = "";
  resultContainer.style.display = "none";

  submitButton.disabled = false; // Enable the submit button
  resetButton.disabled = true; // Disable the reset button
}

generateButton.addEventListener("click", () => {
  generateQuiz(numberOfQuestions); // Generate a quiz with 5 questions (you can change the number as per your requirement)
});

submitButton.addEventListener("click", showResult);
resetButton.addEventListener("click", resetQuiz);
