// CONTENT FOR THE QUIZ APPLICATION
const questions = [
    {
        question: "What can a variable best be described as?",
        options: ["A drawer with compartments", "A bookshelf full of books", "A box with a label", "An envelope with a stamp"],
        answer: 2
    },    
    {
        question: "Why might we use an array?",
        options: ["To store a list of values", "To make a button hide when clicked", "To store a single value", "To filter a list of names"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a type of JavaScript loop?",
        options: ["for loop", "else loop", "while loop", "do...while loop"],
        answer: 1
    },
    {
        question: "Which of the following is the best definition for conditional logic?",
        options: ["creates a function that filters a list based on a condition", "removes objects from a page based on event listeners", "skips over an item in an array, then continues the loop", "uses conditions to allow programs to take different paths"],
        answer: 3
    },
        {
        question: "Which of the following is NOT a common variable type in JavaScript?",
        options: ["let", "return", "const", "var"],
        answer: 1
    },
]

// QUIZ FUNCTIONALITY
let currentQuestionIndex = 0;
let score = 0;

// FUNCTION TO DISPLAY A QUESTION
function showQuestion() {
    // Display question and options
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option");
    const question = questions[currentQuestionIndex];
// Populate question and options data from the questions array
questionElement.textContent = question.question;
optionButtons.forEach((button, index) => {
    button.textContent = question.options[index];
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
    });
// Reset state
answered = false;
// Update button visibility and state
document.getElementById("next-btn").style.display = "inline";
document.getElementById("restart-btn").style.display = "none";
document.getElementById("next-btn").disabled = true;
document.querySelector(".option").style.display = "inline-block";
}

// FUNCTION TO HANDLE ANSWER SELECTION
function selectAnswer(selectedOptionIndex) {
    // Check if already answered
    if (answered) return;
    // Provides constants for question and option buttons
    const question = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option");

    // Uses a conditional to check if the selected answer is correct
    if(selectedOptionIndex === question.answer) {
        // Increments score and highlights correct answer
        score++;
        optionButtons[selectedOptionIndex].classList.add("correct");
    } else {
        // Highlights incorrect answer and shows correct answer
        optionButtons[selectedOptionIndex].classList.add("incorrect");
        optionButtons[question.answer].classList.add("correct");
    }
    // Sets answered to true and enables next button
    answered = true;
    document.getElementById("next-btn").disabled = false;
    // Updates score
    document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
    // Disables all other option buttons
    optionButtons.forEach(button => button.disabled = true);
}

// FUNCTION TO MOVE TO THE NEXT QUESTION
function nextQuestion() {
    // Increments question index and checks if there are more questions
    currentQuestionIndex++;
    // Displays next question or ends quiz
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// FUNCTION TO END THE QUIZ
function endQuiz() {
    // Replaces "question" with "Quiz Complete!" 
    document.getElementById("question").textContent = `Quiz Complete!`;
    // Hides answer buttons and next button
    document.getElementById("answer-buttons").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    // Displays final score
    document.getElementById("score").textContent = `Final Score: ${score}/${questions.length}`;
    // Shows restart button
    document.getElementById("restart-btn").style.display = "inline";
}

// FUNCTION TO RESTART THE QUIZ
function restartQuiz() {
    // Resets the current question index and score
    currentQuestionIndex = 0;
    score = 0;
    // Resets score display 
    document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
    // Shows the answer button div container and option buttons
    document.getElementById("answer-buttons").style.display = "inline-block";
    document.querySelector(".option").style.display = "inline-block";
    // Runs showQuestion function to display the first question
    showQuestion();
}

// INITIALIZE QUIZ ON PAGE LOAD
window.onload = showQuestion;