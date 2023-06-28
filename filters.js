// Get the input field and result container
const input = document.getElementById("filter-input");
const resultContainer = document.getElementById("quiz-container");

// Event listener for input changes
input.addEventListener("input", performSearch);

function performSearch() {
  const searchTerm = input.value.trim();

  if (searchTerm === "") {
    resultContainer.innerHTML = "Hãy nhập từ khóa.";
    return;
  }

  const filteredQuestions = quizData.questions.filter((question) => question.question.includes(searchTerm));

  let resultHTML = "";

  filteredQuestions.forEach((question) => {
    const questionText = question.question;
    const options = question.options;
    const answer = question.answer;

    resultHTML += `<p><strong>Câu hỏi:</strong> ${questionText}</p>`;
    resultHTML += "<p><strong>Câu trả lời:</strong></p>";

    options.forEach((option) => {
      const optionText = option.slice(3); // Extract the option text without the label (e.g., "A. ")
      const isCorrect = option.startsWith(answer); // Check if the option is the correct answer

      const optionHTML = isCorrect ? `<span class="text-green-500">${option}</span>` : option;
      resultHTML += `<p>${optionHTML}</p>`;
    });

    resultHTML += "<hr class='my-4'>";
  });

  resultContainer.innerHTML = resultHTML;
}
