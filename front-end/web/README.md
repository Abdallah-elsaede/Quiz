# Web Dev Challenge Quiz
Created a single page application coding quiz, with original questions, html, css, bootstrap and JavaScript

### [View Deployed Site](https://gedalyakrycer.github.io/web-dev-challenge-quiz/)

## Objective
All content and interactions happen on one page and dynamically appear when directed. Once starting the quiz, a countdown timer begins which also acts as the final score. For every question answered wrong, 10sec is deducted from the timer. At the end of the quiz, the available time is used as the score. The score and quiz taker's initials can then be logged in a JavaScript generated list.

## Features
* Custom design to fit within my personal banding. Special detail was paid towards colors, buttons and typography.

* Includes favicon

* Includes logo that refreshes the page 

* Highscore section can be viewed at any time. 

* Layout it built with bootstrap and custom CSS. It is friendly for mobile. 

* Emoji's and custom colors were added to the feedback responses, when you get an answer right or wrong. 

* The quiz ends when the 5th question is answered or the timer runs out. 

* Timer resets when starting the quiz over without refreshing

* `li` elements in the Highscore section generate with JS. They are also styled dynamically based on odd/even/lastchild

* Quiz can be retaken without refreshing, as well as the high score section being cleared

* This project was a great practice in functions, changing class and other DOM elements with Java script and working with event delegation. 

* Ran code through HTML, CSS and JS validators



## Bugs / Future Improvements 
1. When taking the quiz a second time, the final score does not save the number at the end in the highlights screen

2. This application does not yet save the highscore results to local storage, but would be a great opportunity to implement. 

3. During the project a bug was discovered when clicking on a `<button>` that contained a `<span>` or `<code>` children elements. In this case the area that was occupied by the children element was not responding to clicks. The short term solution was to remove the child elements, but sacrifice some design detail.

4. On line 399 a `for loop` is used to force the "time left" interval to stop. While this is working, I am assuming there is a better and less forceful way to accomplish the same thing. 
