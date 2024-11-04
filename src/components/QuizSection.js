import React, { useState } from "react";
import "./QuizSection.css";

const programmingLanguages = [
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "cpp", name: "C++" },
];

function QuizSection() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleLanguageSelect = (languageId) => {
    setSelectedLanguage(languageId);
    setShowAnswer(false);
    setCurrentQuiz(getRandomQuiz(languageId));
    setUserAnswer("");
    setIsCorrect(null);
  };

  const getRandomQuiz = (languageId) => {
    const quizzes = quizData[languageId] || [];
    return quizzes[Math.floor(Math.random() * quizzes.length)];
  };

  const handleSubmitAnswer = () => {
    const isAnswerCorrect = userAnswer.trim() === currentQuiz.answer.trim();
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <div className="quiz-section">
      <div className="language-selector">
        {programmingLanguages.map((lang) => (
          <button
            key={lang.id}
            className={`language-button ${
              selectedLanguage === lang.id ? "selected" : ""
            }`}
            onClick={() => handleLanguageSelect(lang.id)}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {currentQuiz && (
        <div className="quiz-container">
          <h2>문제</h2>
          <pre className="question-code">{currentQuiz.question}</pre>

          <div className="answer-input-section">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="여기에 답을 입력하세요"
              className="answer-input"
            />
            <button
              className="submit-answer-button"
              onClick={handleSubmitAnswer}
            >
              정답 제출
            </button>
          </div>

          {isCorrect !== null && (
            <div
              className={`result-message ${
                isCorrect ? "correct" : "incorrect"
              }`}
            >
              {isCorrect ? "정답입니다! 🎉" : "오답입니다 ㅜㅜ"}
            </div>
          )}

          <button
            className="show-answer-button"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? "해답 숨기기" : "해답 보기"}
          </button>

          {showAnswer && (
            <div className="answer-section">
              <h3>해설</h3>
              <pre className="answer-code">{currentQuiz.answer}</pre>
              <p className="explanation">{currentQuiz.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const quizData = {
  javascript: [
    {
      question: `다음 코드의 출력 결과는 무엇일까요?\n\nconst arr = [1, 2, 3];\nconst result = arr.map(x => x * 2);\nconsole.log(result);`,
      answer: "[2, 4, 6]",
      explanation:
        "map 메서드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과로 새로운 배열을 만듭니다. 여기서는 각 요소에 2를 곱한 새로운 배열이 생성됩니다.",
    },
  ],
  python: [
    {
      question: `다음 코드의 출력 결과는 무엇일까요?\n\nlist = [1, 2, 3, 4, 5]\nprint([x*x for x in list])`,
      answer: "[1, 4, 9, 16, 25]",
      explanation:
        "리스트 컴프리헨션을 사용하여 각 요소를 제곱한 새로운 리스트를 생성합니다. 파이썬의 리스트 컴프리헨션은 간단하고 읽기 쉬운 방식으로 리스트를 생성할 수 있게 해줍니다.",
    },
  ],
};

export default QuizSection;
