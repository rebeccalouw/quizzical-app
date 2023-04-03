import React from 'react'
import {nanoid} from 'nanoid'
import './index.css'
import Home from './components/Home'
import Game from './components/Game'

export default function App() {
  const [gameStarted, setGameStarted] = React.useState(false)
  const [quizPreference, setQuizPreference] = React.useState({category:"", difficulty:"easy"})
  const [quizData, setQuizData] = React.useState([])
  const [reachAPI, setReachAPI] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [selectedAnswers, setSelectedAnswers] = React.useState([])
  const [endGame, setEndGame] = React.useState(false)
  const [checkingAnswers, setCheckingAnswers] = React.useState(false)
  const [scoreMessage, setScoreMessage] = React.useState("")


  function startGame() {
    setGameStarted(true)
  }


  function restartGame() {
    setIsLoading(true)
    setEndGame(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    setCheckingAnswers(false)
    setReachAPI(prevState => !prevState)
  }

  function backToPreferences() {
    setGameStarted(false)
    setSelectedAnswers([])
    setReachAPI(prevState => !prevState)
  }


  function handleChangeQuizPreference(event) {
    setReachAPI(prevState => !prevState)
    const {name, value} = event.target
    setQuizPreference(prevPreference => {
      return {
        ...prevPreference, 
        [name]: value
      }
    })
  }


  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5${quizPreference.category}&difficulty=${quizPreference.difficulty}&type=multiple&encode=url3986`)
      .then(res => res.json())
      .then(data => {
        const dataEl = data.results.map((result, index) => {
          function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
          }

          const allAnswerOptions = shuffle([...result.incorrect_answers, result.correct_answer])

          const answersArray = allAnswerOptions.map((answer, index) => {
            return {
              text: decodeURIComponent(answer),
              key: `key${index}`,
              id: nanoid(),
              isCorrect: answer === result.correct_answer ? true : false,
              isHeld: false,
            }
          })

          return {
            question: decodeURIComponent(result.question),
            answers: answersArray,
            category: quizPreference.category,
            difficulty: quizPreference.difficulty,
            key: index
          }
        })

        setTimeout(() => {
          setIsLoading(false)
        }, 1200)

        setQuizData(dataEl)
      })
  }, [reachAPI])


  function holdAnswer(questionIndex, id) {
    console.log(questionIndex, id)
    setQuizData(oldData => {
      return oldData.map(quizItem => {
        if (oldData.indexOf(quizItem) === questionIndex) {
          return {
            ...quizItem, 
            answers: quizItem.answers.map(answerObj => {
              if (answerObj.id === id) {
                return {...answerObj, isHeld: true}
              } else {
                return {...answerObj, isHeld: false}
              }})
          }
        }
        else return quizItem
      })
    })
    }


  React.useEffect(() => {
    let updatedSelectedAnswers = []
    quizData.map(quizItem => {
      quizItem.answers.map(answer => {
        if (answer.isHeld) {
          updatedSelectedAnswers.push(answer)
        } else {
          return
        }
      })
    })
    setSelectedAnswers(updatedSelectedAnswers)
  }, [quizData])


  function checkAnswers() {
    setCheckingAnswers(true)
    let userCorrectAnswers = []
    if (selectedAnswers.length === 5) {
      setEndGame(true)
      selectedAnswers.map(selectedAnswer => {
        return selectedAnswer.isCorrect && userCorrectAnswers.push(selectedAnswer)
        })
      const points = userCorrectAnswers.length
      setScoreMessage(`You scored ${points}/5 correct answers`)
    }
    else {
      setScoreMessage("Please choose answers to all 5 questions")
      setTimeout(() => setCheckingAnswers(false), 2000)
    }
  }

  const loadingPage = (
    <div className="loading">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )


  return (
    <div className="app-screen">
      {!gameStarted && <Home handleClick={startGame} handleChange={handleChangeQuizPreference} quizPreference={quizPreference}/> }
      {gameStarted && (isLoading ? loadingPage : 
        <Game 
          quizData={quizData}
          holdAnswer={holdAnswer}
          checkAnswers={checkAnswers}
          checkingAnswers={checkingAnswers}
          restartGame={restartGame}
          endGame={endGame}
          scoreMessage={scoreMessage}
          backToPreferences={backToPreferences}
        />)}
    </div>
  )
}


