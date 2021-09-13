// Global Scope Variables For DOM Element

// Targets Correct Feedback for Questions
let correctFeedback = document.querySelector("#correctFeedback");

// Targets Wrong Feedback for Questions
let wrongFeedback = document.querySelector("#wrongFeedback");

// Targets Timer
let timeLeft = document.querySelector("#timeLeft");

// Targets Final Score
let finalScore = document.querySelector("#finalScore");

// Holds Final Score value
let inputValue;


// Initials Input Element
let inputId = document.querySelector("#inputId");

// ul List for High Scores
let scoreList = document.querySelector(".scores");


// Target Display Sections
let startQuizDisplay = document.querySelector(".start-content");
let q1Display = document.querySelector("#question-1");
let q2Display = document.querySelector("#question-2");
let q3Display = document.querySelector("#question-3");
let q4Display = document.querySelector("#question-4");
let q5Display = document.querySelector("#question-5");
let completedDisplay = document.querySelector("#completedDisplay");
let highscoreDisplay = document.querySelector("#highscoreDisplay");



// Target Buttons
let startQuizBtn = document.querySelector("#startQuiz");
let navHighscore = document.querySelector("#viewScore");
let playAgainBtn = document.querySelector("#playAgainBtn");
let clearBtn = document.querySelector("#clearBtn");


// —————————————————————————————————————————————————————


// Object that holds all the answers  
let answers = {
    question1: {
        answer1: document.querySelector("#q1A1"),
        answer2: document.querySelector("#q1A2"),
        answer3: document.querySelector("#q1A3"),
        answer4: document.querySelector("#q1A4")
    },
    question2: {
        answer1: document.querySelector("#q2A1"),
        answer2: document.querySelector("#q2A2"),
        answer3: document.querySelector("#q2A3"),
        answer4: document.querySelector("#q2A4")
    },
    question3: {
        answer1: document.querySelector("#q3A1"),
        answer2: document.querySelector("#q3A2"),
        answer3: document.querySelector("#q3A3"),
        answer4: document.querySelector("#q3A4")
    },
    question4: {
        answer1: document.querySelector("#q4A1"),
        answer2: document.querySelector("#q4A2"),
        answer3: document.querySelector("#q4A3"),
        answer4: document.querySelector("#q4A4")
    },
    question5: {
        answer1: document.querySelector("#q5A1"),
        answer2: document.querySelector("#q5A2"),
        answer3: document.querySelector("#q5A3"),
        answer4: document.querySelector("#q5A4")
    }
};


// —————————————————————————————————————————————————————


// Start Time 
let timerAmount = 100;
timeLeft.textContent = timerAmount;

// Count Down Function
function timer() {
    timerAmount = 100;
    // Sets up count down
    const countDown = setInterval(count, 1000);

    // Sets up conditionals for when counter hits 0
    function count() {
        if (timerAmount <= 0) {
            clearInterval(countDown);

            // Displays to Completed screen
            quizComplete();

        } else {
            timerAmount--;
            timeLeft.textContent = timerAmount;
        }
    }
}

// —————————————————————————————————————————————————————


// Correct/Wrong Feedback Controls
function showCorrect() {

    // Clears Wrong Answer
    wrongFeedback.classList.remove("show"); 
    wrongFeedback.classList.add("hide");

    // Shows Correct Text
    correctFeedback.classList.remove("hide"); 
    correctFeedback.classList.add("show");

    // Removes Correct text after 1.5 sec
    setTimeout(function () {
        correctFeedback.classList.remove("show"); 
        correctFeedback.classList.add("hide");
    }, 1500);

}

function showWrong() {
    // Clears Correct Answer
    correctFeedback.classList.remove("show"); 
    correctFeedback.classList.add("hide");

    // Shows Wrong Text
    wrongFeedback.classList.remove("hide"); 
    wrongFeedback.classList.add("show");

    // Reduces Timer
    for (let i = 0; i < 10; i++) {
        timerAmount--;
    }

    // Displays time amount to HTML
    timeLeft.textContent = timerAmount;

    // Removes Wrong text after 1.5 sec
    setTimeout(function () {
        wrongFeedback.classList.remove("show"); 
        wrongFeedback.classList.add("hide");
    }, 1500);
}


// —————————————————————————————————————————————————————

// Hides all the question sections in the HTML
function hideAllQuestions() {
    q1Display.classList.add("hide");
    q2Display.classList.add("hide");
    q3Display.classList.add("hide");
    q4Display.classList.add("hide");
    q5Display.classList.add("hide");

    q1Display.classList.remove("show");
    q2Display.classList.remove("show");
    q3Display.classList.remove("show");
    q4Display.classList.remove("show");
    q5Display.classList.remove("show");
}


// Hides start section
function hideStartSection() {
    startQuizDisplay.classList.add("hide");
    startQuizDisplay.classList.remove("show");
}


// Hides feedback section
function hideFeedbackSection() {
    wrongFeedback.classList.remove("show"); 
    wrongFeedback.classList.add("hide");
    correctFeedback.classList.remove("show"); 
    correctFeedback.classList.add("hide");
}

// —————————————————————————————————————————————————————


startQuizDisplay.addEventListener("click", function (event) {
    
    // This only works if the Start button is clicked
    if (event.target.type === "button" && event.target === startQuizBtn) {

        // Hide Start Section 
        startQuizDisplay.classList.remove("show"); 
        startQuizDisplay.classList.add("hide");

        // Start Timer 
        timer();

        // Shows Question 1
        question1();
    }
});


// —————————————————————————————————————————————————————


// This runs Question 1
function question1() {
    
    // Displays Section Content
    q1Display.classList.add("show");
    q1Display.classList.remove("hide");

    q1Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
    if (event.target.type === "button" && event.target === answers.question1.answer2) {

        // Flashes correct text
        showCorrect();

        // Hides Current Question Section
        q1Display.classList.remove("show"); 
        q1Display.classList.add("hide");

        // Goes to next question
        question2();

    } else if (event.target.type === "button" &&
        event.target === answers.question1.answer1 ||
        event.target === answers.question1.answer3 ||
        event.target === answers.question1.answer4) {

        // Flashes wrong text
        showWrong();
    }
    });
}


// —————————————————————————————————————————————————————


// This runs Question 2
function question2() {
    
    // Displays Section Content
    q2Display.classList.add("show");
    q2Display.classList.remove("hide");

    q2Display.addEventListener("click", function (event) {
        // Conditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question2.answer1) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q2Display.classList.remove("show"); 
            q2Display.classList.add("hide");

            // Goes to next question
            question3();

        } else if (event.target.type === "button" &&
            event.target === answers.question2.answer2 ||
            event.target === answers.question2.answer3 ||
            event.target === answers.question2.answer4) {

            // Flashes wrong text
            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————


// This runs Question 3
function question3() {
    
    // Displays Section Content
    q3Display.classList.add("show");
    q3Display.classList.remove("hide");

    q3Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question3.answer3) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q3Display.classList.remove("show"); 
            q3Display.classList.add("hide");

            // Goes to next question
            question4();

        } else if (event.target.type === "button" &&
            event.target === answers.question3.answer1 ||
            event.target === answers.question3.answer2 ||
            event.target === answers.question3.answer4) {

            // Flashes wrong text
            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 4
function question4() {
    
    // Displays Section Content
    q4Display.classList.add("show");
    q4Display.classList.remove("hide");

    q4Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "button" && 
        event.target === answers.question4.answer1) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q4Display.classList.remove("show"); 
            q4Display.classList.add("hide");

            // Goes to next question
            question5();

        } else if (event.target.type === "button" &&
            event.target === answers.question4.answer2 ||
            event.target === answers.question4.answer3 ||
            event.target === answers.question4.answer4) {

            // Flashes wrong text
            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 5
function question5() {
    
    // Displays Section Content
    q5Display.classList.add("show");
    q5Display.classList.remove("hide");

    q5Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question5.answer4) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q5Display.classList.remove("show"); 
            q5Display.classList.add("hide");

            // Goes to completed screen
            quizComplete();

        } else if (event.target.type === "button" &&
            event.target === answers.question5.answer1 ||
            event.target === answers.question5.answer2 ||
            event.target === answers.question5.answer3) {

            // Flashes wrong text
            showWrong();
        }
    });
}


// —————————————————————————————————————————————————————


// This runs the Completed Screen
function quizComplete() {

    // ensures that last section and the feedback section do not appear
    completedDisplay.classList.remove("show"); 
    completedDisplay.classList.add("hide");
    hideFeedbackSection();
    
    // Forces Interval to Clear
    for(let a=0; a<100; a++){
        window.clearInterval(a);
    }

    // Displays final score based on time left
    finalScore.textContent = timerAmount;

    // Replaces timer text with 0
    timeLeft.textContent = "0";
        
    // Hide all Sections
    hideAllQuestions();

    // Displays Section Content
    completedDisplay.classList.add("show");
    completedDisplay.classList.remove("hide");

    completedDisplay.addEventListener("click", function (event) {
        
        // Coniditionals to validate if form was submitted
        if (event.target.type === "submit") {
            event.preventDefault();
            inputValue = inputId.value; 

            // Hides Completed Screen
            completedDisplay.classList.remove("show"); 
            completedDisplay.classList.add("hide");

            // Goes to highscore section
            highscores();

        }
    });
}


// —————————————————————————————————————————————————————


// This runs the highscore Screen
function highscores() {


    // Displays Section Content
    highscoreDisplay.classList.add("show");
    highscoreDisplay.classList.remove("hide");

    // This makes sure the list only generates if a form inout is made
    if (inputValue) {
        let userScore = document.createElement("li");
        finalScore = finalScore.textContent;
        userScore.textContent = `${inputValue} scored ${finalScore} points`; 

        // Adds li with initals and score to the "scores" ul element
        scoreList.append(userScore);
    }

    
    // Controls high score buttons
    highscoreDisplay.addEventListener("click", function (event) {
        
        // Coniditionals to validate if form was submitted
        if (event.target.type === "button" && event.target === playAgainBtn) { 

            // Hides Completed Screen
            highscoreDisplay.classList.remove("show"); 
            highscoreDisplay.classList.add("hide");

            // Goes to start section
            startQuizDisplay.classList.add("show");
            startQuizDisplay.classList.remove("hide");
        }

        // Coniditionals to validate if form was submitted
        else if (event.target.type === "button" && event.target === clearBtn) { 

            // Deletes all the li elements
            scoreList.innerHTML = "";
        }
    });


}


// —————————————————————————————————————————————————————


// Navbar Highscore Event Listner 
navHighscore.addEventListener("click", function(event) {
    if (event.target.type === "button" && event.target === this) {
        hideStartSection();
        hideFeedbackSection();
        hideAllQuestions();
        highscores();

    }
});