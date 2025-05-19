/**
 * 콘솔 활용하기
 */
console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});
console.log('Hi!', 100, true, [1,2,3]);


/**
 * 주석과 세미콜론
 */
console.log('Hello');
// 사뿐히 즈려밟고 가시옵소서
// console.log('나를 밟고 가라');
console.log('World');
// 한 줄 짜리 주석
console.log('Hello'); // 이렇게 코드 옆에 다는 것도 가능
/*
  주석은 이와 같이 여러 줄에 걸쳐 작성할 수도 있습니다.
  console.log('안찍힘');
  console.log('이것도 안찍힘');
  장문의 주석을 달거나 위와 같이 코드의 일부를 주석처리하여 비활성화하는 등의 목적으로 사용됩니다.
*/
console.log('찍힘');
console.log('찍힘');


/**
 * 변수와 상수 - 데이터를 담는 주머니
 */
console.log('Hello', '철수');
// 값들을 주머니에 담아 사용하기
const SALUTATION = 'Hello,';
let person = '철수';
console.log(SALUTATION, person);
person = '영희';
console.log(SALUTATION, person);


/**
 * 자료형 - 데이터의 종류
 */
let d;
console.log(d, typeof d);
d = null;
console.log(d, typeof d); // 'object' 반환
const e = Symbol('hello');
console.log(typeof e); // 이건 나중에


/**
 * 문자열(string) - 텍스트 데이터
 */
/* 
  템플릿 리터럴
  ${}안에 상수나 변수, 표현식 등을 삽입 가능
  다른 자료형도 사용할 수 있음
*/
const NAME = '홍길동';
let age = 20;
let married = false;
console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);


/**
 * 문자열에 사용되는 연산자
 */
// <, <=, >, >= - 사전순 비교
// 일반적으로 사전순(알파벳 순서)은 대문자가 소문자보다 먼저 온다.
console.log(
  'ABC' < 'abc', // 왼쪽 문자열이 오른쪽 문자열보다 사전순으로 앞서면 참
  'apple' <= 'banana',
  '가나다' > '라마바',
  '안녕' >= '안녕'
);

// 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교
  '100' > '12', // 문자는 사전순으로 비교('1'과 '1'은 같고, 다음으로 '0'과 '2'를 비교하게 됩니다.)
  '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환
);

// 다수의 문자열 이어붙이기
const lyric1 = '노는 게 제일 좋아'
+ '\n친구들 모여라'
+ '\n언제나 즐거워'
+ '\n개구쟁이 뽀로로';
console.log(lyric1);

let lyric2 = '눈 덮인 숲 속 마을';
lyric2 += '\n꼬마펭귄 나가신다';
lyric2 += '\n언제나 즐거워';
lyric2 += '\n뽀롱뽀롱뽀롱뽀롱 뽀로로';
console.log(lyric2);

// 다른 자료형과 더하면 문자열 반환
let result = '안녕' + 1 + true;
result += null;
result += undefined;
console.log(result);
console.log(typeof result);


/**
 * 숫자(Number)와 관련 연산자
 */
// isNaN과 Number.isNaN의 차이
// 구분							isNaN()												Number.isNaN()
// 강제 변환 여부			O (인자를 숫자로 변환 후 검사)		X (인자를 그대로 검사)
// 정확성						문자열 등도 NaN 으로 간주 가능		실제 NaN(숫자 자료형)인 지 여부만 판단

// 특정 숫자로 변환 가능한 문자
console.log(
  typeof '1', isNaN('1'), Number.isNaN('1') // string false false
);
// true는 1, false는 0으로 변환됨
console.log(
  typeof true, isNaN(true), Number.isNaN(true) // boolean false false
); 
// ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이
console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a') // string true false
); 
// NaN 인 경우
console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a') // number true true
); 


/**
 * 부동소수점과 실수계산 오차
 */
console.log(
  0.1 + 0.2,
  0.1 + 0.2 === 0.3
);

let x = 0.1 * 10;
let y = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1;
console.log(
  x, y, x === y
);

console.log(
  0.2 * 0.7,
  0.4 * 3,
  0.9 - 0.6,
  0.9 - 0.3
);

// 2의 거듭제곱으로 나눈 수의 계산은 정확
console.log(
  0.25 * 0.5,
  0.5 + 0.25 + 0.125 + 0.125,
  0.0625 / 0.25
);


/**
 * 불리언(boolean)과 관련 연산자
 */
// 드 모르간의 법칙
let a = true;
// a = false;
let b = true;
// b = false;
console.log(
  !(a && b) === (!a || !b),
  !(a || b) === (!a && !b)
); // 항상 true

x = true;
// x = false;
// &&, || 연산자는 값 자체를 반환
y = x && 'abc';
let z = x || 123;
console.log(y, z); // 'abc' true

x = 2;
y = 3;
console.log(
  x % 2 ? '홀' : '짝',
  y % 2 ? '홀' : '짝'
);

// boolean으로 직접변환
console.log(
  1, -999, 'hello',
  0, '', null
);

// 한 번 부정
console.log(
  !1, !-999, !'hello',
  !0, !'', !null
);

// 두 번 부정하여 해당 boolean값으로
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);

x = 123;
console.log(
  'x는 홀수인가?',
  !!(x % 2)
);


/**
 * 연산자 마무리
 */
// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y) // 12
);

let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함
const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';
console.log(nameTag1, nameTag2); // 홍길동 2번 아기
  
console.log(
  2 > 3 || 4 % 2 === 0, // true
  2 > (3 || 4) % 2 === 0, // false
  2 > 3 || 4 % (2 === 0) // NaN
);


/**
 * 객체와 배열 미리보기
 */
const person1 = {
  name: '김철수',
  age: 25,
  married: false
};
console.log(typeof person1); // object 
console.log(person1); // {"name": "김철수", "age": 25, "married": false}

// 존재하지 않는 키로 접근시 undefined 반환
console.log(person1.birthdate); // undefined
console.log(person1['job']); // undefined

// (키) in (객체) - 특정 키 포함 여부 확인
console.log(
  'age' in person1, // true
  'job' in person1 // false
);

// 새 프로퍼티 추가
person1.job = 'developer';
person1['bloodtype'] = 'AB'
console.log(person1);

// 특정 프로퍼티의 값 변경 - const 임에도 그 내용은 수정할 수 있음에 주목!
person1.age = 26;
person1['married'] = true
console.log(person1);

const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
// 자료형에 관계없이 한 배열에 넣을 수 있음
const randoms = ['홍길동', -24, true, null, undefined];
console.log(typeof winners);
console.log(winners, weekdays, randoms);

// 특정 순서의 값에 접근하는 법 (0부터 시작)
console.log(winners[0], weekdays[6], randoms[3]);

// 배열의 길이(요소의 갯수)를 얻는 법
console.log(winners.length, weekdays.length, randoms.length);

// 마지막 요소 얻기
console.log(winners[winners.length - 1]);

// 특정 위치의 값 수정
const numbers = [1, 2, 3];
numbers[2] = 5;
console.log(numbers); // [1, 2, 5]

// 맨 끝에 값 추가
numbers.push(10);
console.log(numbers); // [1, 2, 5, 10]

const groups = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
const weapons = [
  { name: '롱소드', damage: 30, design: ['화룡검', '뇌신검'] },
  { name: '활', damage: 12 },
  { name: '워해머', damage: 48 },
];
console.log(groups[1][2]); // 5
console.log(weapons[2].damage); // 48
console.log(weapons[0].design[0]); // 화룡검


/**
 * 원시 타입 vs 참조 타입
 */
// 콜스택/메모리힙 구조, 데이터 저장/참조 원리
// https://charming-kyu.tistory.com/19


/**
 * 블록문과 스코프
 */
const xx = 0;
let yy = 'Hello!';
console.log(xx, yy); // 0 'Hello!'
{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~';
  console.log(xx, yy); // 1 '안녕하세요~'
  // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}
console.log(xx, yy); // 0 'Hello!'

/**
 * if / else
 */
x = 21;
if (x % 2) {
  console.log('홀수입니다.');
} else if (x % 4) {
  console.log('짝수입니다.');
} else {
  console.log('4의 배수입니다.');
}

// 보다 권장되는 방식
function evalNum () {
  const x = 21;
  if (x % 2) {
    console.log('홀수입니다.');
    return;
  }
  if (x % 4) {
    console.log('짝수입니다.');
    return;
  }
  console.log('4의 배수입니다.');
}
evalNum();


/**
 * switch
 */
const direction = 'north'
let directionKor;
switch (direction) {
  case 'north':
    directionKor = '북';
    break;
  case 'south':
    directionKor = '남';
    break;
  case 'east':
    directionKor = '동';
    break;
  case 'west':
    directionKor = '서';
    break;
  default:
    directionKor = '무효';
}
console.log(directionKor);

// 객체를 사용한 방법
const directionKor2 = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[direction] ?? '무효'
console.log(directionKor2);


/**
 * for 루프
 */
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 객체
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}
for (const key in lunch) { 
  console.log(key, ':', lunch[key])
}

// 배열
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];
for (let num of numbers1) {
  num++; // 복사된 값
  numbers2.push(num + 1);
}
console.log(numbers1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers2); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(numbers2); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// label - 중첩된 반복문을 명명하여 continue 또는 break에 사용 (널리 사용되지는 않음)
outer:
for (let i = 1; i < 10; i++) {
  inner:
  for (let j = 1; j < 10; j++) {
    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    if (j > 8) break inner;
    if (i - j > 7) break outer;
    console.log(i, j, i * j);
  }
}


/**
 * while과 do while
 */
// 무한반복
x = 0;
while (x < 14) {
  if (x % 2 === 0) continue;
  if (x > 7) break;
  console.log(x++);
}

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
x = 0;
while (x < 14) {
  const toContinue = x % 2 === 0;
  const toBreak = x > 7;
  const xNow = x++;

  if (toContinue) continue;
  if (toBreak) break;
  console.log(xNow);
}

// 더 짧고도 직관성을 유지한 코드의 예
x = 0;
while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;
  console.log(xNow);
}

// do while - 일단 수행하고 조건을 평가
x = 12;
do {
  x++
} while (x < 10);
console.log(x); // 13


/**
 * 함수의 의미와 사용법
 */
function isOdd (x) {
  return !!(x % 2);
}
function isEven (x) {
  return !(x % 2);
}
let num = 12;
console.log(
  `${num}(는)은 ${isOdd(num) ? '홀' : '짝'}수입니다.`,
  `${num}(는)은 ${isEven(num) ? '짝' : '홀'}수입니다.`
);

let currentTemp = 24.5;
function logCurrentTemp () {
  console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
  return `${currentTemp}`;
}
console.log('반환값:', logCurrentTemp()); // 반환값: undefined
// undefined 가 뜨는 이유
// return 문이 정의되어 있지 않으면 undefined 반환

// 호이스팅 (hoisting)
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));
function add (x, y) {
  return x + y;
}

// 함수 생성 시점이 다르기 때문에 이 방법으로 선언한 함수는 호이스팅되지 않음
console.log(div(8, 4));
const div = function (x, y) {
  return x / y;
}

console.log(div(8, 4));
const div2 = (x, y) => x / y;


/**
 * 일급 함수
 */
// 객체와 배열의 값으로도 할당 가능
person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function (formal) {
    // 객체의 함수 프로퍼티를 메서드 method 라고 불렀음
    // ⚠️ ES6부터는 메서드의 정의가 달라짐 - 이후 배울 단축 표현 메서드만 가리킴
    return formal
    ? '안녕하십니까. 홍길동 대리라고 합니다.'
    : '안녕하세요, 홍길동이라고 해요.';
  }
};
console.log(person.introduce(true)); // 안녕하십니까. 홍길동 대리라고 합니다.
console.log(person.introduce(false)); // 안녕하세요, 홍길동이라고 해요.

// 객체에 함수 프로퍼티를 포함할 때 기억할 것
// 화살표 함수로 바꾸고 실행해보기
person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function () {
    // 💡 객체의 다른 프로퍼티에 접근: this 사용
    // ⚠️ 객체 리터럴의 프로퍼티로는 this 사용하는 화살표 함수 권장하지 않음
    // 자세한 내용은 이후 this 섹션에서 다룰 것
    return `저는 ${this.name}, ${this.age}살이고 ${this.married ? '기혼' : '미혼'}입니다.`;
  },
  introduce2: () => `저는 ${this.name}, ${this.age}살이고 ${this.married ? '기혼' : '미혼'}입니다.`
}
console.log(person.introduce()); // 저는 홍길동, 30살이고 기혼입니다.
console.log(person.introduce2()); // 저는 , undefined살이고 미혼입니다.

// 익명 함수
// calc
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
// eval
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y) {
  return eval(calc(x, y));
}
console.log(
  calcAndEval(add, isOdd, 5, 7), // false
  calcAndEval(sub, isPositive, 5, 7), // false
  calcAndEval(mul, isOdd, 5, 7) // true
);
// calcAndEval : 고차 함수
// add, sub, mul, isOdd, isPositive : 콜백 함수

// 커링 : 필요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 인자로 받는 다른 함수를 반환
function curryAddMultSub (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      }
    }
  }
}
console.log(
  curryAddMultSub(2)(3)(4)(5),
  curryAddMultSub(2)(3)(4)(5)
);
const curryAddMultSubFrom2 = curryAddMultSub(2);
const curryMultSubFrom5 = curryAddMultSub(2)(3);
const currySubFrom20 = curryAddMultSub(2)(3)(4);
console.log(curryAddMultSubFrom2);
console.log(curryMultSubFrom5);
console.log(currySubFrom20);
console.log(
  curryAddMultSubFrom2(3)(4)(5),
  curryMultSubFrom5(4)(5),
  currySubFrom20(5)
);

// 화살표 함수로 바꾸어 다시 실행해 볼 것
const curryAddMultSub2 = a => b => c => d => (a + b) * c - d;
console.log(
  curryAddMultSub2(2)(3)(4)(5),
  curryAddMultSub2(2)(3)(4)(5)
);
const curry2AddMultSubFrom2 = curryAddMultSub2(2);
const curry2MultSubFrom5 = curryAddMultSub2(2)(3);
const curry2SubFrom20 = curryAddMultSub2(2)(3)(4);
console.log(curry2AddMultSubFrom2); // b => c => d => (a + b) * c - d
console.log(curry2MultSubFrom5); // c => d => (a + b) * c - d
console.log(curry2SubFrom20); // d => (a + b) * c - d
console.log(
  curry2AddMultSubFrom2(3)(4)(5),
  curry2MultSubFrom5(4)(5),
  curry2SubFrom20(5)
);


/**
 * 매개변수
 */
// 오류를 일으키지 않고 무시됨
function add(a, b) {
  return a + b;
}
console.log(
  add(1, 3),
  add(1, 3, 5), 
  add(1, 3, 5, 7)
);

// 기본값 매개변수
function add(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}
console.log(
  add(),
  add(1),
  add(1, 3)
);

// arguments
function add(a, b) {
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}
console.log(
  add(1, 3, 5, 7)
);

// 화살표 함수에서는 arguments 사용 불가! 
let add = (a, b) => {
  for (const arg of arguments) { // arguments is not defined
    console.log(arg);
  }
  return a + b;
}
console.log(
  add(1, 3, 5, 7)
);

// ... 나머지 변수 (rest parameters)
// arguments와는 달리 실제 배열임
// 마지막 인자로만 사용 가능
console.log(
  '3.',
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅
function classIntro (classNo, teacher, ...children) {
  console.log('1.', children); // ["영희", "철수", "보라"]
  console.log('2.', arguments); // {"0": 3, "1": "김민지", "2": "영희", "3": "철수", "4": "보라"}
  let childrenStr = '';
  for (const child of children) {
    if (childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher}, 학생들은 ${childrenStr}입니다.`;
}

// arguments 활용예
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
function combineArms () {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}
const add_mul = combineArms(add, mul, 1, true);
const add_mul_sub = combineArms(add, mul, sub);
const add_mul_sub_div = combineArms(add, mul, sub, div);
// 💡 익명 함수 사용됨
const add_mul_sub_div_pow = combineArms(add, mul, sub, div, (x, y) => x ** y);
console.log(
  add_mul(8, 3), // 33
  add_mul_sub(8, 3), // 30
  add_mul_sub_div(8, 3), // 10
  add_mul_sub_div_pow(8, 3) // 1000
);

// ... 활용예
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
function combineArms (x, y, ...arms) {
  let result = x;
  for (const arm of arms) {
    if (typeof arm !== 'function') continue;
    result = arm(result, y);
  }
  return result;
}
console.log(
  combineArms(8, 3, add, mul, 1, true),
  combineArms(8, 3, add, mul, sub),
  combineArms(8, 3, add, mul, sub, div),
  combineArms(8, 3, add, mul, sub, div, (x, y) => x ** y)
);


/**
 * 함수 더 알아보기
 */
// 중첩된 함수
function addMulSub (x, y) {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  return sub(mul(add(x, y), y), y);
}
console.log(addMulSub(8, 3)); // 30

// 재귀 함수
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

// 꼬리 재귀 함수
function sumTail(n, acc = 0) {
  if (n === 0) return acc;
  return sumTail(n - 1, acc + n);
}

// 즉시 실행 함수 - IIFE (Immideately Invoked Function Expression)
// 과거 - IIFE
const initialMessage = (function () {
  var month = 8;
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;
  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
})();
console.log(initialMessage); // 8월 15일 평균기온은 섭씨 29.25도입니다.
console.log(month); // Uncaught ReferenceError: month is not defined

// 오늘날 - 블록문 사용
let initialMessage;
  const month = 8;
  const day = 15;
  const temps = [28, 27, 27, 30, 32, 32, 30, 28];
  let avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;
  initialMessage = `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
};
console.log(initialMessage); // 8월 15일 평균기온은 섭씨 29.25도입니다.
console.log(month); // // Uncaught ReferenceError: month is not defined

// 불변성 (immutability)
let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];
function changeValue (a, b, c) {
  a++;
  b.name = '전우치';
  b.age++;
  c[0]++;
  console.log(a, b, c); // 2 {name: '전우치', age: 16} (3) [2, 2, 3]
}
changeValue(x, y, z);
console.log(x, y, z); // 1 {name: '전우치', age: 16} (3) [2, 2, 3]


/**
 * 객체의 기본 사용법들
 */
// 식별자 명명 규칙에 벗어나는 키 이름 사용시		
const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space'
}
// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);
// 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 객체나 배열을 키값으로 사용 시 문제
// 객체나 배열은 []로 표기
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];
const obj = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
}
// 객체와 배열이 그 자체가 아니라 문자열로 치환되어 키가 되는 것
console.log(obj);
// [object Object] : "객체를 키값으로"
// 1,2,3 : "배열을 키값으로"

// 문제 발생
console.log(
  obj['[object Object]'] // 문자열
);
console.log(
  obj[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체이지만 동일한 [object Object]
  obj['1,2,3'] // 문자열
);

// 프로퍼티 삭제
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};
delete person1.age;
delete person1['major'];
delete person1.hobby; // 💡 오류가 발생하지는 않음

// 키의 동적 사용
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}
function addModifyProperty (obj, key, value) {
  // obj.key = value; // 'key'라는 키를 찾음 -의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // 'key'라는 키를 찾음 -의도와 다른 작업 수행
  delete obj[key];
}

// ES6 추가 문법 - 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현
const x = 1, y = 2;
const obj1 = { x, y }
console.log(obj1);

function createProduct (name, price, quantity) {
  return { name, price, quantity };
}
const product1 = createProduct('선풍기', 50000, 50);
const product2 = createProduct('청소기', 125000, 32);
console.log(product1, product2);

// ES6 추가 문법 - 메서드 (method)
// 객체에 축약표현으로 정의된 함수 프로퍼티
// ES6 부터는 아래의 표현으로 정의된 함수만 메서드라고 부름
const person = {
  name: '홍길동',
  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));


/**
 * 생성자 함수
 */
// 객체 리터럴
const chain1 = {
  name: '판교',
  no: 3,
  introduce: function () { // 일반 함수 프로퍼티 정의
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};
console.log(chain1, chain1 instanceof YalcoChicken); // {name: '판교', no: 3, introduce: ƒ} false

// 객체 반환 함수
function createYalcoChicken (name, no) {
  return {
    name, 
    no,
    introduce () { // 메서드 정의
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}
const chain2 = createYalcoChicken('판교', 3)
console.log(chain2, chain2 instanceof YalcoChicken); // {name: '판교', no: 3, introduce: ƒ} false

// 생성자 함수
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () { // 생성자 함수 정의
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
const chain3 = new YalcoChicken('판교', 3); // 생성자 함수는 new 연산자와 함께 사용
console.log(chain3, chain3 instanceof YalcoChicken); // YalcoChicken {name: '판교', no: 3, introduce: ƒ} true

// 프로토타입 정의
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain3.introEng()); // Welcome to Yalco Chicken at 판교!
console.log(new YalcoChicken('판교', 3).introEng()); // Welcome to Yalco Chicken at 판교!

// 생성자 함수 자체의 프로퍼티와 함수
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};
const chain4 = new YalcoChicken('판교', 3);
console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?
console.log(chain1.contact()); // chain1.contact is not a function

// new 생략 실수 방지
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  // 해당 함수가 new 연산자 없이 호출되었을 경우 재귀호출을 통해 생성해 내보냄
  if (!new.target) {
    return new YalcoChicken(name, no); 
  }
}
console.log(new YalcoChicken('판교', 3)); // YalcoChicken {name: '판교', no: 3, introduce: ƒ}
console.log(YalcoChicken('판교', 3)); // YalcoChicken {name: '판교', no: 3, introduce: ƒ}


/**
 * 클래스
 */
// 생성자 함수와 차이 - 클래스는 프로토타입으로 들어감
class Dog {
  bark () {
    return '멍멍';
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());

function Dog2 () {
  this.bark = function () {
    return '멍멍';
  }
}
const badugi2 = new Dog2();
console.log(badugi2, badugi2.bark());

// 필드
class Slime {
  hp = 50;
  op = 4;
  attack (enemy) {
    enemy.hp -= this.op;
    this.hp += this.op/4;
  }
}
const slime1 = new Slime();
const slime2 = new Slime();
slime1.attack(slime2);
console.log(slime1, slime2);
class YalcoChicken {
  no = 0;
  menu = { 
    '후라이드': 10000, 
    '양념치킨': 12000 
  };
  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}
const chain1 = new YalcoChicken('(미정)');
const chain2 = new YalcoChicken('판교', 3);
console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
chain1.menu['양념치킨'] = 13000;
console.log(chain1.order('양념치킨'));

// 정적 static 필드와 메서드
class YalcoChicken {
  // 정적 변수와 메서드
  static brand = '얄코치킨';
  static contact () {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }
  constructor (name = '미정', no = 0) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
const chain1 = new YalcoChicken();
console.log(chain1);
console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?
console.log(chain1.contact()); // chain1.contact is not a function


/**
 * 접근자 프로퍼티와 은닉
 */
// 접근자 프로퍼티
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get chainTitle() {
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo) {
    if (typeof chainNo !== 'number') return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}
const chain1 = new YalcoChicken('판교', 3);
chain1.chainNo = 4;
console.log(chain1, chain1.chainTitle);
// YalcoChicken {name: '판교', no: 4}
//   name: "판교"
//   no: 4
//   chainTitle: "4호 판교점"
//   [[Prototype]]: Object
//     chainTitle: "4호 판교점"
//     constructor: class YalcoChicken
//     set chainNo: ƒ chainNo(chainNo)
//     get chainTitle: ƒ chainTitle()

// 필드 이름과 setter의 이름이 같을 때 - 해결책
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get no () { 
    return this._no + '호점'; 
  }
  set no (no) { 
    this._no = no; // 무한반복
  }
}
const chain1 = new YalcoChicken('판교', 3);
console.log(chain1, chain1.no);	
// YalcoChicken {name: '판교', _no: 3}
//   name: "판교"
//   _no: 3 // constructor의 no는 setter를 가리키고 실제 필드명은 _no가 됨
//   no: "3호점"

// private 필드를 통한 은닉
class Employee {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name () {
    // [n]: n + 1 번째 글자를 반환
    return this.#name[0] + '모씨';
  }
  get age () {
    return this.#age - (this.#age % 10) + '대';
  }
  set age (age) {
    if (typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
}
const emp1 = new Employee('김복동', 22);
emp1.age = 35;
console.log(emp1.name, emp1.age); // 김모씨 30대


/**
 * 상속
 */
// super
class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };
  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}
class ConceptYalcoChicken extends YalcoChicken {
  #word = '';
  constructor (name, no, word) {
    super(name, no);
    this.#word = word;
  }
  introWithConcept () {
    return super.introduce() + ' ' + this.#word;
  }
  order (name) {
    return super.order(name) + ' ' + this.#word;
  }
}
const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');
console.log(pikaChain);
console.log(pikaChain.introWithConcept());
console.log(pikaChain.order('후라이드'));

// 정적 메서드에서 사용
class YalcoChicken {
  static brand = '얄코치킨';
  static contact () {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}
class ConceptYalcoChicken extends YalcoChicken {
  static contact () {
    super.contact();
    console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
  }
}
ConceptYalcoChicken.contact();


/**
 * 객체의 스프레드와 디스트럭쳐링
 */
// 스프레드
const class1 = {
  a: 1, b: 'A', c: true
};
const class2 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class3 = {
  ...class1, z: 0
}
const class4 = {
  ...class2, ...class3, ...class2.d
}
console.log(class3);
console.log(class4);

// 중복되는 프로퍼티는 뒤의 것이 덮어씀 
const class1 = {
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 }
}
console.log(class1);

// 얕은 복사
const class1 = {
  x: 1,
  y: { a: 2 },
  z: [3, 4]
};
const class2 = { ...class1 };
class1.x++;
class1.y.a++;
class1.z[0]++;
console.log(class1);
console.log(class2);

// 디스트럭쳐링
const obj1 = {
  x: 1, y: 2, z: 3
};
const {x, z} = obj1;
console.log(x, z);

// 변수 이름을 다르게
const obj1 = {
  x: 1, y: 2, z: 3
};
const {x: a, y: b} = obj1;
console.log(a, b);

// 필요한 프로퍼티 값
const array1 = [1, 2, 3, 4, 5];
// const length = array1.length;
console.log(array1);
const { length } = array1;
console.log(length);

// 함수 인자값의 가독성을 위해 객체를 사용할 때
const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O' // 추가 인자 무관
};
function introduce(person) {
  console.log(`제 이름은 ${person.name}, `
    + `나이는 ${person.age}세구요. `
    + `직업은 ${person.job}, `
    + `${person.married ? '기혼' : '미혼'}입니다.`
  )
}
function introduce({age, married, job, name}) {
  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}
introduce(person1);


/**
 * 전역 객체와 표준 빌트인 객체
 */
// 전역 객체 (global object)
// 브라우저가 아닌Node.js에서는 globalThis 출력 시 표준 빌트인 객체들은 출력하지 않음
console.log(globalThis);

// 표준 빌트인 객체 (standard built-in objects)
// Node.js에서는 globalThis 출력 시 표준 빌트인 객체들은 출력하지 않음
console.log(globalThis);
// 전역 프로퍼티로 제공됨 - globalThis 등을 붙이지 않고 바로 사용 가능
console.log(Infinity);
console.log(isNaN);
console.log(Object);

// 래퍼 객체 (wrapper object)
const str = new String('abcde');
const num = new Number(123.4567);
const bool = new Boolean(true);
console.log(typeof str, str);
console.log(typeof num, num);
console.log(typeof bool, bool);

// valueOf 함수 - 래퍼 객체의 인스턴스에서 원시값 반환
const str = new String('abcde');
const num = new Number(123.4567);
const bool = new Boolean(true);
console.log(str.valueOf());
console.log(num.valueOf());
console.log(bool.valueOf());


/**
 * 빌트인 전역 프로퍼티와 함수
 */
// eval - 매우 특별한 경우가 아닌 이상 절대 사용하지 말 것
const code = `
  let x = 1;
  console.log(x++, x);
`;
eval(code);

// isFinite
console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'), // Number('1'): 1
  isFinite(null), // Number(null): 0
  isFinite(1/0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite('abc')
);

// isNaN
onsole.log(
  isNaN(NaN), // typeof NaN: 'number'
  isNaN('abcde'),
  isNaN({}),
  isNaN(undefined)
);

// parseFloat
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 '), // 123.4567
  parseFloat('123.0'),
  parseFloat('123'),
  parseFloat(' 123ABC '), // 123
  parseFloat([123, 456, 789]), // 123
  parseFloat('ABC123'), // NaN
  parseFloat({x: 1}), // NaN
  parseFloat([]), // NaN
  parseFloat(['a', 1, true]) // NaN
);

// parseInt
console.log(
  parseInt(123),
  parseInt('123'),
  parseInt(' 123.4567 '), // 123
  parseInt('345.6789'), // 345
  parseInt('abc'), // NaN
  parseInt('{}'), // NaN
  parseInt('[]'), // NaN
  parseInt('11'), // 11
  parseInt('11', 2), // 3
  parseInt('11', 8), // 9
  parseInt('11', 16), // 17
  parseInt('11', 32), // 33
  parseInt('11', 37), // Nan
  parseInt('11', 'A') // Nan
);

// encodeURI
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);
console.log(encodedURI);

// encodeURIComponent
const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);
console.log(encodedKeyword);
const searchURI = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchURI);

// decodeURI
const encodedURI = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
const decodedURI = decodeURI(encodedURI);
console.log(decodedURI);

// decodeURIComponen
const encodedComp = '%EC%96%84%EC%BD%94';
const decodedComp = decodeURI(encodedComp);
console.log(decodedComp);


/**
 * String 객체
 */
// toUpperCase, toLowerCase
function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}
console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'),
  areSameWords('ABC', 'DEF')
);

// at
console.log(
  '안녕하세요~'.at(1), // 녕
  '안녕하세요~'.at(-1) // ~
);

// indexOf, lastIndexOf
const word = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word.indexOf('하나'), // 4
  word.lastIndexOf('하나') // 14
);

// includes, startsWith, endsWith
const sentence = '옛날에 호랑이 한 마리가 살았어요.';
for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('- - - - -');
}

// search
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);

// slice
const word = 'ABCDEFGHIJKL';
console.log(
  word.slice(4, 8),
  word.slice(-4)
);

// split
const word = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';
console.log(
  word.split(' ', 2),
  word.split(' ', 4)
)
const sentence = '옛날에 호랑이 한 마리가 살았어요.';
const splitted = sentence.split(' ');
const firstWord = splitted[0];
const lastWord = splitted[splitted.length - 1];
// const lastWord = splitted.at(-1)
console.log(firstWord, lastWord);

// trim, trimStart, trimEnd
const word = '  Hello World!  ';
console.log(`--${word}--`);
console.log(`--${word.trim()}--`);
console.log(`--${word.trimStart()}--`);
console.log(`--${word.trimEnd()}--`);

// repeat
const word = '호이';
console.log(word.repeat(3)); // 호이호이호이

// replace, replaceAll
const word = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(word.replace('밥', '라면')); // 라면 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!
console.log(word.replaceAll('밥', '라면')); // VM872:3 라면 좀 먹자, 라면. 응? 야, 라면 좀 먹자고 라면, 라면!


/**
 * Number 객체
 */
// EPSILON
console.log(Number.EPSILON);
console.log(0.1 + 0.2);
console.log((0.1 + 0.2) - 0.3 < Number.EPSILON)

// parseInt, parseFloat
console.log(
  Number.parseInt('123.4567'), // 123
  Number.parseFloat('123.4567') // 123.4567
);

// isInteger
console.log(
  Number.isInteger(123),
  Number.isInteger(123.45)
);

// toFixed
console.log(
  // 인자가 없으면 0을 받은 것과 같음
  (111.234567).toFixed(),
  (111.234567).toFixed(0)
);
console.log(
  (111.234567).toFixed(1),
  (111.234567).toFixed(2)
);
console.log(
  // 반올림
  (111.234567).toFixed(3), // 111.235
  (111.234567).toFixed(4) // 111.2346
);

// toString
console.log(
  (11).toString(), // 11
  (11).toString(2), // 1011
  (11).toString(8), // 13
  (11).toString(16) // b
);


/**
 * Math 객체
 */