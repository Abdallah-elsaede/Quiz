# Pseudo Code

## Things Needed
* Timer that counts down
* Link to Highscores
* Initial screen with descriptive text and button to start
* H1 With questions (5x)
* 4 buttons for multiple choice answers, per question
* Feedback if answer is correct 
* Feedback if answer is wrong
* If answer is wrong, reduce time by 5 seconds
* Screen that shows final score and an input for a name
* Screen that shows final score with name, way to clear score and restart the game. 

## Notes on Execution  
1. Create layout with bootstrap
    * **Highscores** link and **Timer** will go in a nav component    
    * Initial Screen, questions, end screen and score screen will either be carousel items or have their CSS display turned off/on 

2. Correct / Wrong Answer will need to be added via JS

3. Moving to the final screen will be controlled by a function in a conditional. Either by getting to the end or by having the timer run out. 