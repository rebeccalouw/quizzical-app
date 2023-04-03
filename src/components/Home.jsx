import '../index.css'

export default function Home(props) {
    return (
        <div className="home-screen">
            <h1 className="game-title">Quizzical</h1>
            <h4 className="game-description">Choose your preferences and put your trivia skills to the test!</h4>
            <form>
                <label htmlFor="category">Select category</label>
                <select
                    id="category"
                    value={props.quizPreference.category}
                    onChange={(event) => props.handleChange(event)}
                    name="category"
                    className="first-select"
                >
                    <option value="">Any</option>
                    <option value="&category=9">General Knowledge</option>
                    <option value="&category=10">Entertainment: Books</option>
                    <option value="&category=11">Entertainment: Film</option>
                    <option value="&category=12">Entertainment: Music</option>
                    <option value="&category=14">Entertainment: Television</option>
                    <option value="&category=32">Entertainment: Cartoon & Animations</option>
                    <option value="&category=15">Entertainment: Video Games</option>
                    <option value="&category=16">Entertainment: Board Games</option>
                    <option value="&category=17">Science & Nature</option>
                    <option value="&category=18">Science: Computers</option>
                    <option value="&category=19">Science: Mathematics</option>
                    <option value="&category=30">Science: Gadgets</option>
                    <option value="&category=20">Mythology</option>
                    <option value="&category=21">Sports</option>
                    <option value="&category=22">Geography</option>
                    <option value="&category=23">History</option>
                    <option value="&category=24">Politics</option>
                    <option value="&category=25">Art</option>
                    <option value="&category=26">Celebrities</option>
                    <option value="&category=27">Animals</option>
                    <option value="&category=28">Vehicles</option>
                </select>
                <br/>
                <label htmlFor="difficulty">Select difficulty</label>
                <select
                    id="difficulty"
                    value={props.quizPreference.difficulty}
                    onChange={(event) => props.handleChange(event)}
                    name="difficulty"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br/>
                <div className="start-btn-div">
                    <button className="start-btn" onClick={props.handleClick}>Start quiz</button>
                </div>
            </form>
        </div>
    )
}
