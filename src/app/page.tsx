'use client';

import { useState } from 'react';
import { programmingLanguages } from '@/types/problem';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [currentProblem, setCurrentProblem] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const problems = programmingLanguages.find(
    (lang) => lang.id === selectedLanguage
  )?.problems;
  const currentProblemData = problems?.[currentProblem];

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
    setCurrentProblem(0);
    setResult(null);
    setShowExplanation(false);
    setUserAnswer('');
  };

  const handleSubmit = () => {
    if (currentProblemData) {
      setResult(
        userAnswer.trim().toLowerCase() ===
          currentProblemData.answer.toLowerCase()
          ? 'correct'
          : 'incorrect'
      );
    }
  };

  return (
    <div className='min-h-screen p-8'>
      <main className='max-w-2xl mx-auto'>
        <h1 className='text-2xl font-bold mb-8'>프로그래밍 문제 풀이</h1>

        {/* 언어 선택 */}
        <div className='mb-8'>
          <h2 className='text-xl mb-4'>언어를 선택하세요:</h2>
          <div className='flex gap-4'>
            {programmingLanguages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => handleLanguageSelect(lang.id)}
                className={`px-4 py-2 rounded ${
                  selectedLanguage === lang.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* 문제 영역 */}
        {currentProblemData && (
          <div className='space-y-6'>
            <div className='bg-gray-100 p-6 rounded'>
              <pre className='whitespace-pre-wrap'>
                {currentProblemData.question}
              </pre>
            </div>

            <div className='space-y-4'>
              <input
                type='text'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className='w-full p-2 border rounded'
                placeholder='답을 입력하세요'
              />

              <button
                onClick={handleSubmit}
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
              >
                제출
              </button>

              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className='ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
              >
                해설 보기
              </button>
            </div>

            {/* 결과 표시 */}
            {result && (
              <div
                className={`p-4 rounded ${
                  result === 'correct'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {result === 'correct' ? '정답입니다!' : '오답입니다!'}
              </div>
            )}

            {/* 해설 */}
            {showExplanation && (
              <div className='bg-yellow-100 p-4 rounded'>
                <h3 className='font-bold mb-2'>해설:</h3>
                <p>{currentProblemData.explanation}</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
