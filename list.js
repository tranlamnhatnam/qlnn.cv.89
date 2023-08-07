// Function to create the list of quiz questions
function createQuizList() {
  const quizListElement = document.getElementById("list-container");

  // Loop through each question and create list items
  quizData.questions.forEach((questionData) => {
    const listItem = document.createElement("li");
    listItem.classList.add("p-4", "border", "border-gray-300", "rounded-lg");

    // Add the question text to the list item
    const questionText = document.createElement("p");
    questionText.classList.add("font-semibold", "mb-2");
    questionText.innerText = questionData.question;
    listItem.appendChild(questionText);

    // Loop through options and add them to the list item
    questionData.options.forEach((option) => {
      const optionElement = document.createElement("p");
      optionElement.classList.add("mb-1");

      // Highlight the correct answer in green
      if (option.startsWith(questionData.answer + ".")) {
        optionElement.classList.add("text-green-500", "font-semibold");
      }

      optionElement.innerText = option;
      listItem.appendChild(optionElement);
    });

    quizListElement.appendChild(listItem);
  });
}

// Call the function to create the quiz list on page load
window.onload = createQuizList;
