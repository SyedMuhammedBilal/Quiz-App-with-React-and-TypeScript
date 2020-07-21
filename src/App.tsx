import React, {useState} from 'react';
import './App.css';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState, Question } from './API';

const TOTAL_QUESTION = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTION, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const nextQuestion = async () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  };
  
  return (
    <div>
      <h1>Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <button className="btn" onClick={startQuiz}>
          start
        </button>) : null}
      
      {!gameOver ? (
        <p className="score">
          Score: {score}
        </p>) : null}
      
      {loading ? (
        <p>
          Loading
        </p>) : null}
      
      {!loading && !gameOver ? (
        <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
        />) : null}
      
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ? (   
        <button className="next" onClick={nextQuestion}>
          Next
        </button>) : null }
    </div>
  );
}

export default App;
