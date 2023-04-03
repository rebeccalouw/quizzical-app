export default function Question(props) {
    const answersOptions = props.answers

    const individualAnswers = answersOptions.map(answer => {
        let styles 

        if (!props.endGame) {
            styles = {
                backgroundColor: answer.isHeld ? "#D6DBF5" : "white",
                border: answer.isHeld ? "1px solid #D6DBF5" : "1px solid #4D5B9E"
            }
        } else if (props.endGame && answer.isCorrect) {
            styles = {
                backgroundColor: "#94D7A2",
                border: "1px solid #94D7A2"
            }
        } else if (props.endGame) {
            styles = {
                backgroundColor: answer.isHeld ? "#F8BCBC" : "white",
                border: answer.isHeld ? "1px solid #F8BCBC" : "1px solid #4D5B9E",
                color: "#4D5B9E"
            }
        } 

        return <p key={answer.key} className="answer" style={styles} onClick={() => props.holdAnswer(props.index, answer.id)}>{answer.text}</p>
    })


    return (
        <div className="question-card">
            <h3 className="question">{props.question}</h3>
            <div className="answers-div">
                {individualAnswers}
            </div>
            <hr></hr>
        </div>
    )
}