export interface Problem {
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
    id: 'javascript',
    name: 'JavaScript',
    problems: [
      {
        question: '자바스크립트에서 배열의 마지막 요소를 제거하는 메서드는?',
        answer: 'pop',
        explanation: 'pop() 메서드는 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.',
      },
      {
        question: '자바스크립트에서 비동기 작업을 처리하기 위한 객체는?',
        answer: 'promise',
        explanation: 'Promise는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다.',
      },
      {
        question: '자바스크립트에서 객체의 모든 키를 배열로 반환하는 메서드는?',
        answer: 'Object.keys',
        explanation: 'Object.keys()는 객체의 열거 가능한 속성의 이름들을 배열로 반환합니다.',
      },
      {
        question: '자바스크립트에서 문자열을 숫자로 변환하는 함수는?',
        answer: 'parseInt',
        explanation: 'parseInt()는 문자열을 정수로 변환합니다. parseFloat()는 부동소수점 숫자로 변환합니다.',
      },
      {
        question: '자바스크립트에서 배열의 모든 요소를 연결하여 하나의 문자열로 만드는 메서드는?',
        answer: 'join',
        explanation: 'join() 메서드는 배열의 모든 요소를 연결하여 하나의 문자열로 만듭니다.',
      },
      {
        question: '자바스크립트에서 특정 시간 후에 함수를 실행하는 메서드는?',
        answer: 'setTimeout',
        explanation: 'setTimeout()은 지정된 시간(밀리초) 후에 함수를 실행합니다.',
      },
      {
        question: '자바스크립트에서 배열을 역순으로 정렬하는 메서드는?',
        answer: 'reverse',
        explanation: 'reverse() 메서드는 배열의 순서를 반대로 바꿉니다.',
      }
    ],
  },
  {
    id: 'python',
    name: 'Python',
    problems: [
      {
        question: 'Python에서 리스트의 길이를 반환하는 함수는?',
        answer: 'len',
        explanation: 'len() 함수는 시퀀스(문자열, 리스트, 튜플 등)의 길이를 반환합니다.',
      },
      {
        question: 'Python에서 문자열을 소문자로 변환하는 메서드는?',
        answer: 'lower',
        explanation: 'lower() 메서드는 문자열의 모든 문자를 소문자로 변환합니다.',
      },
      {
        question: 'Python에서 리스트에 새로운 요소를 추가하는 메서드는?',
        answer: 'append',
        explanation: 'append() 메서드는 리스트의 끝에 새로운 요소를 추가합니다.',
      },
      {
        question: 'Python에서 딕셔너리의 모든 키를 반환하는 메서드는?',
        answer: 'keys',
        explanation: 'keys() 메서드는 딕셔너리의 모든 키를 반환합니다.',
      },
      {
        question: 'Python에서 문자열을 분할하는 메서드는?',
        answer: 'split',
        explanation: 'split() 메서드는 문자열을 지정된 구분자를 기준으로 분할하여 리스트로 반환합니다.',
      },
      {
        question: 'Python에서 리스트를 정렬하는 메서드는?',
        answer: 'sort',
        explanation: 'sort() 메서드는 리스트를 오름차순으로 정렬합니다.',
      },
      {
        question: 'Python에서 반복 가능한 객체의 모든 요소를 합산하는 함수는?',
        answer: 'sum',
        explanation: 'sum() 함수는 반복 가능한 객체(리스트 등)의 모든 요소를 더한 값을 반환합니다.',
      }
    ],
  },
  {
    id: 'java',
    name: 'Java',
    problems: [
      {
        question: 'Java에서 문자열을 비교하는 올바른 메서드는?',
        answer: 'equals',
        explanation: 'equals() 메서드는 문자열의 내용을 비교합니다. == 연산자는 참조를 비교합니다.',
      },
      {
        question: 'Java에서 ArrayList에 새로운 요소를 추가하는 메서드는?',
        answer: 'add',
        explanation: 'add() 메서드는 ArrayList에 새로운 요소를 추가합니다.',
      },
      {
        question: 'Java에서 클래스의 생성자 이름은?',
        answer: 'class',
        explanation: '생성자의 이름은 클래스의 이름과 동일해야 합니다.',
      },
      {
        question: 'Java에서 상속을 나타내는 키워드는?',
        answer: 'extends',
        explanation: 'extends 키워드는 한 클래스가 다른 클래스를 상속받을 때 사용됩니다.',
      },
      {
        question: 'Java에서 인터페이스를 구현할 때 사용하는 키워드는?',
        answer: 'implements',
        explanation: 'implements 키워드는 클래스가 인터페이스를 구현할 때 사용됩니다.',
      }
    ],
  },
  {
    id: 'cpp',
    name: 'C++',
    problems: [
      {
        question: 'C++에서 동적 메모리 할당을 위한 연산자는?',
        answer: 'new',
        explanation: 'new 연산자는 힙 메모리에 동적으로 메모리를 할당합니다.',
      },
      {
        question: 'C++에서 참조 변수를 선언할 때 사용하는 기호는?',
        answer: '&',
        explanation: '& 기호는 변수의 참조를 선언할 때 사용됩니다.',
      },
      {
        question: 'C++에서 포인터의 값을 참조할 때 사용하는 연산자는?',
        answer: '*',
        explanation: '* 연산자는 포인터가 가리키는 값을 참조할 때 사용됩니다.',
      },
      {
        question: 'C++에서 클래스의 멤버에 접근할 때 사용하는 연산자는?',
        answer: '.',
        explanation: '점(.) 연산자는 객체의 멤버에 접근할 때 사용됩니다.',
      },
      {
        question: 'C++에서 표준 입력 스트림의 이름은?',
        answer: 'cin',
        explanation: 'cin은 C++의 표준 입력 스트림으로, 키보드로부터 입력을 받을 때 사용됩니다.',
      }
    ],
  }
];
