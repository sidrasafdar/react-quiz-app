import { useState } from "react";
import "./Quiz.css";

function Quiz() {

  const questions = [
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Thailand", "Japan", "South Korea"],
    answer: "Japan"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"],
    answer: "Nile River"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Lion", "Leopard", "Elephant"],
    answer: "Lion"
  },
  {
    question: "Which country gifted the Statue of Liberty to the United States?",
    options: ["England", "France", "Germany", "Canada"],
    answer: "France"
  },
  {
    question: "Which is the smallest continent?",
    options: ["Europe", "Australia", "South America", "Antarctica"],
    answer: "Australia"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: "Au"
  },
  {
    question: "Which bird is the national bird of the United States?",
    options: ["Eagle", "Falcon", "Owl", "Peacock"],
    answer: "Eagle"
  },
  {
    question: "In which country are the Pyramids of Giza located?",
    options: ["Mexico", "India", "Egypt", "Greece"],
    answer: "Egypt"
  },
  {
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    answer: "366"
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Antarctic Desert", "Gobi Desert"],
    answer: "Antarctic Desert"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Yen", "Ringgit"],
    answer: "Yen"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who was the first person to step on the Moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    answer: "Neil Armstrong"
  },
  {
    question: "Which is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  }
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleAnswer(selectedOption) {

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  }

function handleStartAgain() {

  setCurrentQuestion(0);
  setScore(0);
  setShowResult(false);
  setSelectedAnswer(null);
  setShowAnswer(false);

}
  function handleAnswer(option) {

  setSelectedAnswer(option);
  setShowAnswer(true);

  if (option === questions[currentQuestion].answer) {
    setScore(prev => prev + 1);
  }

}
function handleNext() {

  if (currentQuestion === questions.length - 1) {

    setShowResult(true);

  } else {

    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswer(null);
    setShowAnswer(false);

  }

}

  return (
  <div className="quiz-container">

    <h1>General Knowledge Quiz</h1>

    {showResult ? (

      <div className="result">

        <h2>Quiz Finished! 🎉</h2>

        <p>
          You scored <strong>{score}</strong> out of{" "}
          <strong>{questions.length}</strong>
        </p>

        <button onClick={handleStartAgain}>
          Play Again
        </button>

      </div>

    ) : (

      <div className="quiz-box">

        <div className="question-number">
          Question {currentQuestion + 1} / {questions.length}
        </div>

        <h2 className="question">
          {questions[currentQuestion].question}
        </h2>

        <div className="options">

          {questions[currentQuestion].options.map((option) => (

            <button
              key={option}
              disabled={showAnswer}
              className={`option-btn ${
                showAnswer
                  ? option === questions[currentQuestion].answer
                    ? "correct"
                    : option === selectedAnswer
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>

          ))}

        </div>

        {showAnswer && (

          <div className="answer-message">

            {selectedAnswer === questions[currentQuestion].answer ? (

              <p className="correct-text">
                ✅ Correct!
              </p>

            ) : (

              <>
                <p className="wrong-text">
                  ❌ Wrong!
                </p>

                <p>
                  Correct Answer:
                  <strong>
                    {" "}
                    {questions[currentQuestion].answer}
                  </strong>
                </p>
              </>

            )}

            <button
              className="next-btn"
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>

        )}

        <div className="score">
          Current Score: {score}
        </div>

      </div>

    )}

  </div>
);
}

export default Quiz;