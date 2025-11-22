# javascript-fundamentals-quiz

This quiz was created using a combination of HTML, CSS and JavaScript to showcase my course knowledge thus far.

HTML:
-The HTML is structured very simply to ensure the code is clean, readable and reusable
-It consists of a page header outside of the div container, a div container containing the contents of the quiz, and links to external CSS and JavaScript Files
-The HTML employs a few "onclick" attributes to call certain functions from the app.js file
-The restart button has a style attribute of "display:none;" to disable the button's visibility on page load.

CSS:
-Imported the "Montserrat" font using the Google Fonts API
-Used the "body" selector to apply universal style modifications such as font-family, background-color, margin and padding
-The "h1" selector modifies the title of the quiz and employs text-align and text-shadow to center the text on the page and add a drop shadow underneath the text
-The .quiz-container section modifies the content within the div, utilizing a flex display and aligning all content to the center
-The option buttons are styled with hover fx as well as "correct" and "incorrect" states 
-.correct and .incorrect both include "!important" to override other CSS styles for the buttons
-The navigation buttons (#next-btn + #restart-button) are styled cohesively and given hover fx

JavaScript:
-The "questions" array stores the information for the questions, options, and correct answer
-"currentQuestionIndex" and "score" are both set to 0 at the start of the quiz to ensure functionality
-The showQuestion() function uses "questionElement.textContent" to replace the HTML ID "question" with the "question:" portion at the currentQuestionIndex; it also populates the options using a for-each loop, enables the buttons to be clicked, and disables correct/incorrect CSS styling classes until the question is answered
-The selectAnswer() function first checks to see if the question has been answered, then uses conditional logic to determine whether or not the answer is correct, apply the correct styling, and update the score; once the question has been answered, the "#next-btn" is re-enabled, allowing the user to move forward to the next question
-The nextQuestion() increments the currentQuestionIndex by 1 and uses conditional logic to either show the next question or end the quiz, depending on the length of the "questions" array
-The endQuiz() function replaces the content in "question" (from the HTML doc) with a message that reads "Quiz Complete!"; it also hides the questions, answers & next button and displays a final score; finally, it displays the "restart-btn", allowing the user to retake the quiz
-The restartQuiz() function restarts the currentQuestionIndex & score, ensures the option buttons display properly upon restart, and runs the showQuestion() function to restart the quiz from the beginning
-Finally -> "window.onload = showQuestion;" calls the "showQuestion()" function on page load


