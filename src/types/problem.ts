export interface Problem {
  id: number;
  question: string;
  answer: string;
  explanation: string;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  problems: Problem[];
}

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: "javascript",
    name: "JavaScript",
    problems: [
      {
        id: 1,
        question: "다음 코드의 출력값은?\n\nconsole.log(typeof typeof 1);",
        answer: "string",
        explanation:
          'typeof 1은 "number"를 반환하고, typeof "number"는 "string"을 반환합니다. typeof 연산자는 항상 문자열을 반환하기 때문입니다.',
      },
      // 더 많은 문제 추가 가능
    ],
  },
  {
    id: "python",
    name: "Python",
    problems: [
      {
        id: 1,
        question:
          "Python에서 리스트 [1, 2, 3, 4, 5]를 역순으로 출력하는 슬라이싱 문법은?",
        answer: "[::-1]",
        explanation:
          "Python의 슬라이싱에서 step 값을 -1로 지정하면 역순으로 요소들을 가져올 수 있습니다. 따라서 [::-1]을 사용하면 리스트를 역순으로 만들 수 있습니다.",
      },
    ],
  },
];
