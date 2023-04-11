# Quizzical App ❔✅

#### ✨ Deployed/demo version ![https://rebecca-quizzical.netlify.app/](https://rebecca-quizzical.netlify.app/)

## Demo overview
Quizzical is a trivia game built in React.js using the 'Open Trivia DB'. 

Possible actions:
- The inital page allows the user to choose the category and difficulty
- On the questions page, 5 questions are displayed with respective answer options
- The user chooses (clicks to hold) the answers for all questions
- The game checks for the user score and displays the correct and incorrect answers
- The user can choose to play again or change the preferences on the homepage


## Developer overview
This is the first time I built a React app from scratch by myself and it was a challenging and rewarding exercise.
- All the 'state' pieces are held and managed on the main App file and passed downed to the components making use of 'props'
- In the initial page the user selects the category and difficulty level for the questions. The value from those input fields informs how the API call should happen
- Upon receiving the data, the incorrect and correct answers are joined in one array and shuffled to be in a random order
- The relevant data is used to create the elements to be displayed on the screen
- Using conditional rendering, the answers that are chosen by the user and clicked are displayed with a different colour. The selected answers are held in an array updated using state
- Once an answer to each question is chosen, the app checks the selected answers array to see which ones match the correct answer property
- The app displays the correct answers in green and wrong answers in red using conditional rendering and it displays the score
- By choosing to play again a new API call is made with the same settings and a new set of 5 questions is displayed
- By choosing to go back to preferences the user can choose a different category and level and start the game from scratch


<br/>

<img alt="." src="public/quizzical-demo1.png" height="400px"/> <img alt="." src="public/quizzical-demo2.png" height="400px"/>

<br/>




## API
- ![Open Trivia Database](https://opentdb.com/)

## Author: 
👩‍💻 Rebecca Louw ![@rebeccalouw](https://github.com/rebeccalouw)

## Built with:

<p align="left"> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> 
<a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> 
