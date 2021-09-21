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
let q6Display = document.querySelector("#question-6");
let q7Display = document.querySelector("#question-7");
let q8Display = document.querySelector("#question-8");
let q9Display = document.querySelector("#question-9");
let q10Display = document.querySelector("#question-10");
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
    },
    question6: {
        answer1: document.querySelector("#q6A1"),
        answer2: document.querySelector("#q6A2"),
        answer3: document.querySelector("#q6A3"),
        answer4: document.querySelector("#q6A4")
    },
    question7: {
        answer1: document.querySelector("#q7A1"),
        answer2: document.querySelector("#q7A2"),
        answer3: document.querySelector("#q7A3"),
        answer4: document.querySelector("#q7A4")
    },
    question8: {
        answer1: document.querySelector("#q8A1"),
        answer2: document.querySelector("#q8A2"),
        answer3: document.querySelector("#q8A3"),
        answer4: document.querySelector("#q8A4")
    },
    question9: {
        answer1: document.querySelector("#q9A1"),
        answer2: document.querySelector("#q9A2"),
        answer3: document.querySelector("#q9A3"),
        answer4: document.querySelector("#q9A4")
    },
    question10: {
        answer1: document.querySelector("#q10A1"),
        answer2: document.querySelector("#q10A2"),
        answer3: document.querySelector("#q10A3"),
        answer4: document.querySelector("#q10A4")
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
    q6Display.classList.add("hide");
    q7Display.classList.add("hide");
    q8Display.classList.add("hide");
    q9Display.classList.add("hide");
    q10Display.classList.add("hide");

    q1Display.classList.remove("show");
    q2Display.classList.remove("show");
    q3Display.classList.remove("show");
    q4Display.classList.remove("show");
    q5Display.classList.remove("show");
    q6Display.classList.remove("show");
    q7Display.classList.remove("show");
    q8Display.classList.remove("show");
    q9Display.classList.remove("show");
    q10Display.classList.remove("show");
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
    
    q1Display.classList.add("show");
    q1Display.classList.remove("hide");

    q1Display.addEventListener("click", function (event) {
        
    if (event.target.type === "button" && event.target === answers.question1.answer2) {
        showCorrect();
        q1Display.classList.remove("show"); 
        q1Display.classList.add("hide");

        question2();

    } else if (event.target.type === "button" &&
        event.target === answers.question1.answer1 ||
        event.target === answers.question1.answer3 ||
        event.target === answers.question1.answer4) {

        showWrong();
    }
    });
}


// —————————————————————————————————————————————————————


// This runs Question 2
function question2() {
    
    q2Display.classList.add("show");
    q2Display.classList.remove("hide");

    q2Display.addEventListener("click", function (event) {
        // Conditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question2.answer2) {

            showCorrect();

            q2Display.classList.remove("show"); 
            q2Display.classList.add("hide");

            // Goes to next question
            question3();

        } else if (event.target.type === "button" &&
            event.target === answers.question2.answer1 ||
            event.target === answers.question2.answer3 ||
            event.target === answers.question2.answer4) {


            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————


// This runs Question 3
function question3() {
    
    q3Display.classList.add("show");
    q3Display.classList.remove("hide");

    q3Display.addEventListener("click", function (event) {
        
        if (event.target.type === "button" && event.target === answers.question3.answer3) {

            showCorrect();

            q3Display.classList.remove("show"); 
            q3Display.classList.add("hide");

            // Goes to next question
            question4();

        } else if (event.target.type === "button" &&
            event.target === answers.question3.answer1 ||
            event.target === answers.question3.answer2 ||
            event.target === answers.question3.answer4) {


            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 4
function question4() {
    
    q4Display.classList.add("show");
    q4Display.classList.remove("hide");

    q4Display.addEventListener("click", function (event) {
        
        if (event.target.type === "button" && 
        event.target === answers.question4.answer1) {

            showCorrect();

            q4Display.classList.remove("show"); 
            q4Display.classList.add("hide");

            question5();

        } else if (event.target.type === "button" &&
            event.target === answers.question4.answer2 ||
            event.target === answers.question4.answer3 ||
            event.target === answers.question4.answer4) {


            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 5
function question5() {
    
    q5Display.classList.add("show");
    q5Display.classList.remove("hide");

    q5Display.addEventListener("click", function (event) {
        
        if (event.target.type === "button" && event.target === answers.question5.answer2) {

            showCorrect();

            q5Display.classList.remove("show"); 
            q5Display.classList.add("hide");

            question6();

        } else if (event.target.type === "button" &&
            event.target === answers.question5.answer1 ||
            event.target === answers.question5.answer4 ||
            event.target === answers.question5.answer3) {


            showWrong();
        }
    });
}

// This runs Question 6
function question6() {
    
    q6Display.classList.add("show");
    q6Display.classList.remove("hide");

    q6Display.addEventListener("click", function (event) {
        
    if (event.target.type === "button" && event.target === answers.question6.answer2) {
        showCorrect();
        q6Display.classList.remove("show"); 
        q6Display.classList.add("hide");

        // Goes to next question
        question7();

    } else if (event.target.type === "button" &&
        event.target === answers.question6.answer1 ||
        event.target === answers.question6.answer3 ||
        event.target === answers.question6.answer4) {

        showWrong();
    }
    });
}


// —————————————————————————————————————————————————————


// This runs Question 7
function question7() {
    
    q7Display.classList.add("show");
    q7Display.classList.remove("hide");

    q7Display.addEventListener("click", function (event) {
       
        if (event.target.type === "button" && event.target === answers.question7.answer2) {

            showCorrect();

            q7Display.classList.remove("show"); 
            q7Display.classList.add("hide");

            // Goes to next question
            question8();

        } else if (event.target.type === "button" &&
            event.target === answers.question7.answer1 ||
            event.target === answers.question7.answer3 ||
            event.target === answers.question7.answer4) {


            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————


// This runs Question 8
function question8() {
    
    q8Display.classList.add("show");
    q8Display.classList.remove("hide");

    q8Display.addEventListener("click", function (event) {
        
        if (event.target.type === "button" && event.target === answers.question8.answer3) {

            showCorrect();

            q8Display.classList.remove("show"); 
            q8Display.classList.add("hide");

            // Goes to next question
            question9();

        } else if (event.target.type === "button" &&
            event.target === answers.question8.answer1 ||
            event.target === answers.question8.answer2 ||
            event.target === answers.question8.answer4) {


            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 9
function question9() {
    
    q9Display.classList.add("show");
    q9Display.classList.remove("hide");

    q9Display.addEventListener("click", function (event) {
        
        if (event.target.type === "button" &&  event.target === answers.question9.answer1) {

            showCorrect();

            q9Display.classList.remove("show"); 
            q9Display.classList.add("hide");

            // Goes to next question
            question10();

        } else if (event.target.type === "button" &&
            event.target === answers.question9.answer2 ||
            event.target === answers.question9.answer3 ||
            event.target === answers.question9.answer4) {


            showWrong();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 10
function question10() {
    
    q10Display.classList.add("show");
    q10Display.classList.remove("hide");

    q10Display.addEventListener("click", function (event) {
        
        if (event.target.type === "button" && event.target === answers.question10.answer2) {

            showCorrect();

            q10Display.classList.remove("show"); 
            q10Display.classList.add("hide");

            // Goes to completed screen
            quizComplete();

        } else if (event.target.type === "button" &&
            event.target === answers.question10.answer1 ||
            event.target === answers.question10.answer4 ||
            event.target === answers.question10.answer3) {


            showWrong();
        }
    });
}

function quizComplete() {

    completedDisplay.classList.remove("show"); 
    completedDisplay.classList.add("hide");
    hideFeedbackSection();
    
    for(let a=0; a<100; a++){
        window.clearInterval(a);
    }

    finalScore.textContent = timerAmount;

    timeLeft.textContent = "0";
        
    hideAllQuestions();

    completedDisplay.classList.add("show");
    completedDisplay.classList.remove("hide");

    completedDisplay.addEventListener("click", function (event) {
        
        if (event.target.type === "submit") {
            event.preventDefault();
            inputValue = inputId.value; 

            completedDisplay.classList.remove("show"); 
            completedDisplay.classList.add("hide");

            // Goes to highscore section
            highscores();

        }
    });
}

function highscores() {


    highscoreDisplay.classList.add("show");
    highscoreDisplay.classList.remove("hide");

    if (inputValue) {
        let userScore = document.createElement("li");
        finalScore = finalScore.textContent;
        userScore.textContent = `${inputValue} scored ${finalScore} points`; 

        scoreList.append(userScore);
    }

    
    highscoreDisplay.addEventListener("click", function (event) {
        
        if (event.target.type === "button" && event.target === playAgainBtn) {

            highscoreDisplay.classList.remove("show"); 
            highscoreDisplay.classList.add("hide");

            startQuizDisplay.classList.add("show");
            startQuizDisplay.classList.remove("hide");
        }

        else if (event.target.type === "button" && event.target === clearBtn) { 

            scoreList.innerHTML = "";
        }
    });


}

navHighscore.addEventListener("click", function(event) {
    if (event.target.type === "button" && event.target === this) {
        hideStartSection();
        hideFeedbackSection();
        hideAllQuestions();
        highscores();

    }
});