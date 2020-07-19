import React, {useState} from 'react';
import './App.css';
import { QuestionCard } from './components/QuestionCard';

const TOTAL_QUESTION = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => { };
  const nextQuestion = async () => { };
  
  return (
    <div>
      <h1>Quiz</h1>
      <button className="btn" onClick={startQuiz}>start</button>
      <p className="score">
        Score: 
      </p>
      <p>
        Loading
      </p>
      <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined }
      />
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
