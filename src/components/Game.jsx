import React from 'React'
import QuestionAnswers from './QuestionAnswers'
import '../index.css'


export default function Game(props) {

    const questionAnswersElement = props.quizData.map(item => {
        return (
            <QuestionAnswers
              key={item.key}
              index={item.key}
              question={item.question} 
              answers={item.answers}
              holdAnswer={props.holdAnswer}
              selectedAnswers={props.selectedAnswers}
              checkingAnswers={props.checkingAnswers}
              endGame={props.endGame}
            />
    
        )
      })

      return (
        <div >
          {questionAnswersElement}
          <div className="bottom-div">
            {props.checkingAnswers && <h4 className="score-message">{props.scoreMessage}</h4>}
            {props.endGame ? <button className="game-btn" onClick={props.restartGame}>Play Again</button> : <button className="game-btn" onClick={props.checkAnswers}>Check Answers</button>}
            <button className="game-btn" onClick={props.backToPreferences}>Back to Preferences</button>
          </div>
        </div>
    
      )
} 
