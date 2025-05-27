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
// PI - 원주율
console.log(
  Math.PI
);

// E - 자연로그의 밑
console.log(
  Math.E
);

// abs - 절대값(0 이상) 반환
const isEqual = (a, b) => {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(
  isEqual(0.1 + 0.2, 0.3)
);

// ceil 올림, round 반올림, floor 내림, trunc 정수부만
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + ' : ',
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num),
  );
}

// pow - ~로 거듭제곱
// ** 연산자로 더 간결히 표현 가능
console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0
  Math.pow(4, -1) // 4 ** -1
);

// sqrt - 제곱근
console.log(
  Math.sqrt(25), // 5
  Math.sqrt(9), // 3
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);

// max, min - 인자들 중 최대값과 최소값
console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);

// random - 0~1 사이의 무작위 값
console.log(
  Math.random()
);


/**
 * Date 객체
 */
// 단위별 숫자 입력
// 연, 월 ( 0부터 시작 ) 필수
// 일, 시, 분, 초, 밀리초 옵션 없을 시 0
console.log(
  new Date(2022, 8)
);
console.log(
  new Date(2022, 8, 20, 14, 35)
);
console.log(
  new Date(2022, 8, 20, 14, 35, 47, 789)
);

// now
// 현재의 밀리초 숫자값 (앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환
console.log(Date.now());

// parse, UTC
// 주어진 시간의 밀리초 숫자값 반환
// parse는 dateString, UTC는 단위별 숫자를 받음
console.log(
  Date.parse('August 20, 2022 00:00:00 UTC')
);

// toLocaleString
// 주어진 언어 코드를 기준으로 표현한 문자열 반환
// 인자가 없을 시 시스템의 언어 적용
const now = new Date();
console.log(
  now.toLocaleString()
);
console.log(
  now.toLocaleString('ko-KR')
);

// setter, getter
// 연, 월 ( 0부터 시작 ) 필수
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = '일월화수목금토'[now.getDay()]; 
console.log(
  `오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`
);

// getTimezoneOffset
// 현재 시간대의 오프셋을 시간 단위로 변환하는 표현
console.log(
  new Date().getTimezoneOffset() / 60
);

// toISOString
// ISO 8061이란 형식의 문자열 반환
// UTC 기준으로 반환
const now = new Date();
const timezoneOffset = now.getTimezoneOffset() * 60 * 1000; // 현재 시간대의 오프셋을 밀리초 단위로 변환
const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();
console.log(isoStr);
console.log(now.toString());


/**
 * 자바스크립트 배열의 특징과 생성
 */
// of
const arr1 = Array.of(3);
const arr2 = Array.of(1, 2, 3);
const arr3 = Array.of('ABC', true, null);
console.log(arr1, arr2, arr3);

// from
const arr1 = Array.from([1, 2, 3]);
const arr2 = Array.from('ABCDE');
const arr3 = Array.from({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});
console.log(arr1, arr2, arr3);

// 유사배열객체: length와 인덱싱 프로퍼티를 가진 객체
const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};
// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}
// for ... of 문은 이터러블에서만 사용 가능
for (const item of arrLike) {
  console.log(item);
}
// 배열은 이터러블, 성능도 향상
for (const item of Array.from(arrLike)) {
  console.log(item);
}

// Array.from - 얕은 복사
const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
arr2.push(4);
console.log(arr1, arr2);
arr1[0] = 0;
console.log(arr1, arr2);

// Array.from - 참조타입 요소의 내부값이 바뀔 경우
const arr1 = [{x: 1}, {x: 2}];
const arr2 = Array.from(arr1);
arr2.push({x: 3});
arr1[0].x = 0;
console.log(arr1, arr2);

// Array.from - 두 번째 인자(매핑 mapping)
const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from(arr1, x => x + 1);
const arr3 = Array.from(arr1, x => x * x);
const arr4 = Array.from(arr1, x => x % 2 ? '홀' : '짝');
console.log(arr2);
console.log(arr3);
console.log(arr4);


/**
 * 배열의 기본 메서드들
 */
// isArray - 배열인지 여부를 반환
console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split('')) // '123'.split() 과 다름
);

// at
const arr = [
  '한놈', '두시기', '석삼', '너구리', '오징어'
];
console.log(
  arr.at(1), arr.at(2)
);

// includes
const arr = [1, 2, 3, 'abc', true];
console.log(
  arr.includes(2),
  arr.includes('abc'),
  arr.includes(true),
);
// 참조형 데이터의 경우
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };
const arr = [
  obj1,
  { x: 3, y: 4 }
];
console.log(
  arr.includes(obj1), // true
  arr.includes(obj2), // false
  arr.includes({ x: 1, y: 2 }), // false
  arr.includes({ x: 3, y: 4 }) // false
);

 // indexOf, lastIndexOf
const arr = [1, 2, 3, 2, 1];
console.log(
  arr.indexOf(2),
  arr.lastIndexOf(2),
  arr.indexOf(4) // -1
);

// join
console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅
function classIntro (classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

// push - 값을 뒤에 추가하고, 수정된 배열의 길이를 반환
const arr = [1, 2, 3];
arr.push('a');

// unshift - 값을 앞에 추가하고, 수정된 배열의 길이를 반환
const arr = [5, 6, 7];
arr.unshift('a');

// pop - 배열에서 값을 제거하여 반환
const arr = ['a','b','c'];
arr.pop();

// shift - 값을 앞에서 제거하고 반환
const arr = ['a','b','c'];
arr.shift();

// splice - 원하는 위치에 요소(들)을 추가 및 삭제
// 2번 인덱스부터 2개 요소 제거
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2);
console.log(arr); // [1, 2, 5, 6, 7]
// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr.splice(1, 3, '가', '나', '다');
console.log(arr); // [1, '가', '나', '다', 7]

// fill - 배열을 특정 값으로 채움
// 중간의 빈 값도 채움
const arr1 = [1, 2, , , 4, 5];
arr1.fill(7);
console.log(arr1);
// 인자가 둘일 때: (채울 값, ~부터)
const arr2 = new Array(10);
arr2.fill(2, 3);
console.log(arr1);
// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr2.fill(3, 6, 9);
console.log(arr1);

// reverse - 배열의 순서를 뒤집음
const arr = [1, 2, 3, 4, 5, 6, 7];
const arrRev = arr.reverse();
// 원본 배열 뒤집힘
console.log(arr, arrRev);

// concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false];
const arr4 = arr1.concat('ABC', arr2, arr3, 100);
console.log(arr4);

// slice - 인자로 주어진 범주의 값을 잘라 반환
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = arr1.slice(3); // [4, 5, 6, 7, 8, 9]
const arr3 = arr1.slice(3, 7); // [4, 5, 6, 7]

// flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];
const arr0 = orgArr.flat(); // 인자가 없으면 1을 넣은 것과 같음
const arr1 = orgArr.flat(1);
const arr2 = orgArr.flat(2);
const arr3 = orgArr.flat(3);
console.log('N:', arr0);
console.log('1:', arr1);
console.log('2:', arr2);
console.log('3:', arr3);
// 원시값과 참조값 비교
const orgArr = [
  1, { x: 2 }, [{ x: 3 }, {x: 4}], 5
];
const arr1 = orgArr.concat(6);
const arr2 = orgArr.slice(0, 3);
const arr3 = orgArr.flat();
orgArr[0] = 0;
orgArr[1].x = 20;
orgArr[2][0].x = 30;
console.log(orgArr);
console.log(arr1);
console.log(arr2);
console.log(arr3);


/**
 * 고차함수 메서드들
 */
// forEach -  각 요소를 인자로 콜백함수 실행
// 콜백함수의 인자가 둘일 때
const arr = [10, 20, 30, 40, 50];
const logWithIndex = (itm, idx) => {
  console.log(`[${idx}]: ${itm}`);
}
arr.forEach(logWithIndex);
// 콜백함수의 인자가 셋일 때
const arr = [1, 2, 3, 4, 5];
arr.forEach((itm, idx, arr) => {
  // 💡 세 번째 인자는 원본 배열의 참조임
  arr[idx]++;
  console.log(itm);
});

// map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
const orgArr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];
const arr1 = orgArr.map(itm => {
  // 💡 블록 안에서는 return 문 필요함
  return {
    name: itm.name,
    cat: itm.cat
  }
});
console.log(arr1);
// 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr2 = orgArr.map(({name, cat}) => {
  return { name, cat }
});
console.log(arr2);
const joined = orgArr
  .map(({name, cat, price}, idx) => {
    return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
  })
  .join('\n - - - - - - - - - \n');
console.log(joined);

// find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];
const isCheapFruit = i => {
  return i.cat === '과일' && i.price < 3000;
}
console.log(
  arr.find(({cat}) => cat === '채소').name,
  arr.findLast(isCheapFruit).name
);

// some, every - 어떤/모든 요소가 기준을 충족하는지 확인
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];
const isCheapVege = i => {
  return i.cat === '채소' && i.price < 2000;
}
const isPlant = ({cat}) => {
  return ['과일', '채소'].includes(cat);
}
console.log(
  arr.some(isCheapVege),
  arr.every(isCheapVege),
  arr.some(isPlant),
  arr.every(isPlant)
);

// filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];
console.log(
  '과일 목록:',
  arr
  .filter(({cat}) => cat === '과일')
  .map(({name}) => name)
  .join(', ')
);

// reduce, reduceRight - 주어진 콜백함수에 따라 값들을 접어 나감
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  arr.reduce((prev, curr) => {
    return {
      odd: prev.odd + curr % 2,
      even: prev.even + (1 - (curr % 2)),
    }
  }, { odd: 0, even: 0 })
);
const arr = ['가', '나', '다', '라', '마', '바', '사'];
console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);
// reduceRight은 인덱스도 거꾸로 진행됨에 주목
console.log(
  arr.reduceRight((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];
['과일', '채소'].forEach(category => {
  console.log(
    `${category}의 가격의 합:`,
    arr
    .filter(({cat}) => cat === category)
    .map(({price}) => price)
    .reduce((prev, curr) => prev + curr)
  );
});

// sort - 배열을 ( 주어진 기준대로 ) 정렬
let randomWord = 'DBKGICAHFEJ';
console.log(
  randomWord
  .split('')
  .sort()
  // .reverse()
  .join('')
);
console.log(randomWord);
// 셔플
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(
    arr.sort((a, b) => {
      console.log(`a: ${a}, b: ${b}`);
      return Math.random() - 0.5;
    })
  );
// 아래의 실습결과는 환경이 달라도 같음
const arr = [1, 2, 30, 400, 10, 100, 1000];
console.log(
  arr.sort((a, b) => a - b)
);
console.log(
  arr.sort((a, b) => b - a)
);
const arr = ['F', 'E', 'I', 'A', 'H', 'C', 'D', 'J', 'G', 'B'];
console.log(
  arr.sort((a, b) => a > b ? 1 : -1)
);
console.log(
  arr.sort((a, b) => a < b ? 1 : -1)
);
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];
console.log(
  arr
  .sort((a, b) => {
    if (a.cat !== b.cat) {
      return a.cat > b.cat ? 1 : -1;
    }
    return a.price > b.price ? 1 : -1;
  })
  .map(({name, cat, price}, idx) => {
    return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
  })
  .join('\n - - - - - - - - - \n')
);

// flatMap - map 한 다음 flat 매핑해서 펼침
const arr = [1, 2, 3, 4, 5];
// 💡 한 단계만 펼침
console.log(
  arr.flatMap(i => [i, [i], [[i]]])
)

const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';
console.log(
  word
  .split(' ')
  .flatMap(i => i.split(''))
);


/**
 * 배열의 스프레드와 디스트럭쳐링
 */
// 스프레드 (spread)
const arr1 = ['B', 'C'];
const arr2 = ['D'];
const arr3 = ['E'];
const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']
console.log(arr4);
// 배열을 다수의 인자들로 펼침
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);	
console.log(...arr1);
console.log(
  Math.max(...arr1),
  Math.min(...arr1)
);
const classNo = 3;
const teacher = '김민지';
const students = ['영희', '철수', '보라', '돌준', '달숙'];
console.log(
  classIntro(classNo, teacher, ...students)
);
function classIntro (classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const toAdd = ['둘', '셋', '넷'];
arr.splice(1, 3, ...toAdd);
console.log(arr);
// concat보다 가독성있는 배열 결합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
console.log(arr3, arr4);
// 배열의 얕은 복사
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1 === arr2);
arr1[0] = 0;
console.log(arr1, arr2);
const arr1 = [{ x: 1 }, { x: 2 }];
const arr2 = [...arr1];
arr1[0].x = 0;
console.log(arr1, arr2);	
// push, unshift 대신 사용
let arr = [1, 2, 3];
arr = [...arr, 4];
console.log(arr);
arr = [4, ...arr];
console.log(arr);
// 4 ~ 6을 제외한 새 배열 만들기
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = [
  ...orgArr.slice(0, 3),
  ...orgArr.slice(6, 9)
];
console.log(arr1);
// 참고: 또 다른 방법
const arr2 = orgArr
.filter((_, i) => !(i >= 3 && i < 6));
console.log(arr2);
console.log(orgArr);

// 디스트럭쳐링 (destructuring)
// 기본값보다 할당값이 우선
const arr = [1, 2, 3, 3];
const [a, b, c, d = 4, e = 5] = arr;
console.log(a, b, c, d, e);
// 나머지 변수 사용 가능
const arr = [1, 2, 3, 4, 5];
const [x, ...y] = arr;
console.log(x, y);
// 활용예
const players = [
  { name: '순이', score: 91 },
  { name: '정환', score: 65 },
  { name: '윤수', score: 72 },
  { name: '철웅', score: 88 },
  { name: '지우', score: 98 },
  { name: '세아', score: 40 }
];
// 배열 중 첫 3개만 가져옴
function logTop3 ([first, second, third]) {
  console.log(
    `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
  );
}
logTop3(
  [...players] // 💡 원본의 얕은 복사본을 정렬
  .sort((a, b) => b.score - a.score)
  .map(({name}) => name)
);
console.log(players);
// 서로 값을 바꾸기
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);


/**
 * [업데이트] 자바스크립트 2023 (ES14)에 추가된 기능들
 */
// toSorted : 정렬된 결과를 반환
const array1 = [3, 1, 4, 5, 2];
const array2 = [...array1];
console.log(array1, array2);
const array1Sorted = array1.sort(); // 새 배열 반환이 아닌 레퍼런스 복사
const array2Sorted = array2.toSorted();
console.log(array1Sorted, array2Sorted);
array1Sorted.push(6);
array2Sorted.push(6);
console.log(array1Sorted, array2Sorted);
console.log(array1, array2);
// 역시 고차함수 - 콜백함수를 받음
const array2Sorted = array2.toSorted((a, b) => a % 2 - b % 2);
console.log(array2, array2Sorted);

// toReversed : 뒤집힌 결과를 반환
array5 = [3, 1, 4, 5, 2];
array6 = [...array5];
array5Reversed = array5.reverse();
array6Reversed = array6.toReversed();
array5Reversed.push(6);
array6Reversed.push(6);
console.log(array5Reversed, array6Reversed);
console.log(array5, array6);

// toSpliced : 잘린 결과를 반환
const array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const array8 = [...array7];
array7.splice(4, 3, 'A', 'B', 'C'); // 부작용 유발
console.log(array7);
const array9 = array8.toSpliced(4, 3);
const array10 = array8.toSpliced(4, 3, 'A', 'B', 'C');
console.log(array9, array10);
console.log(array8);

// findLast : 주어진 조건에 해당하는, 뒤에서부터 첫 요소 반환
// findLastIndex : 위 요소의 인덱스 반환
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lastMult3 = myArray.findLast(i => i % 3 === 0);
const lastMult3Idx = myArray.findLastIndex(i => i % 3 === 0);
console.log(lastMult3, lastMult3Idx);

// with
const orgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = orgArray
  .with(3, '넷')
  .with(6, '일곱')
  .with(9, '열');
console.log(newArray, orgArray);


/**
 * Object
 */
// assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음
const intro1 = {
  name: '홍길동'
};
const intro2 = { ...intro1 };
const personal = {
  age: 25,
  married: false
};
const career = {
  job: '개발자',
  position: '팀장'
}
console.log(intro1, intro2);
Object.assign(intro1, personal);
console.log(intro1);
// 둘 이상의 원본에서 가져올 수도 있음
Object.assign(intro2, personal, career);
console.log(intro2);
// 프로퍼티의 키가 같을 경우 뒤에 오는 인자의 것이 덮어씀
const obj1 = new Object();
const obj2 = { x: 1, y: 2 };
const obj3 = { y: 3 };
const obj4 = { z: { a: 1 }}
Object.assign(obj1, obj2, obj3, obj4);
console.log(obj1);
// 얕은 복사
obj2.x = 0;
obj4.z.a = 2;
console.log(obj1);

// keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환
const obj = {
  x: 1,
  y: 2,
  z: 3
};
console.log(
  Object.keys(obj),
  Object.values(obj),
  Object.entries(obj),
);
console.log(
  Object
    .keys(globalThis)
    .sort()
);
// 배열에 사용할 경우
const arr = [1, 2, 3, 4, 5];
console.log(
  Object.keys(arr),
  Object.values(arr),
  Object.entries(arr)
);
// 객체가 아닐 경우 객체로 변환
const str = 'ABCDEFG';
console.log(
  Object.keys(str),
  Object.values(str),
  Object.entries(str)
);

// preventExtensions - 프로퍼티 추가 금지
// isExtensible - 해당 여부 확인
const obj = { x: 1, y: 2 };
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
obj.x++; // 프로퍼티 수정 가능
delete obj.y // 프로퍼티 삭제 가능
obj.z = 3; // 프로퍼티 추가 금지 
console.log(obj);
// 배열에 적용시
const arr = [1, 2];
Object.preventExtensions(arr);
arr[2] = 3; // 동작하지 않음
console.log(arr);
arr.push(3); // 오류 발생
console.log(arr);
			
// seal - 프로퍼티 추가와 삭제 금지
// isSealed - 해당 여부 확인 
const obj = { x: 1, y: 2 };
console.log(Object.isSealed(obj)); // false
Object.seal(obj);
console.log(Object.isSealed(obj));
obj.x++; // 프로퍼티 수정 가능
delete obj.y // 💡 프로퍼티 삭제 금지
obj.z = 3; // 💡 프로퍼티 추가 금지
console.log(obj);
		
// freeze - 객체 동결 - 읽기만 가능
// isFrozen - 해당 여부 확인
// 객체에 사용
const obj = { x: 1, y: 2 };
console.log(Object.isFrozen(obj)); // flase
Object.freeze(obj);
console.log(Object.isFrozen(obj));
obj.x++; // 💡 프로퍼티 수정 불가
delete obj.y // 💡 프로퍼티 삭제 금지
obj.z = 3; // 💡 프로퍼티 추가 금지
console.log(obj);
// 배열에 사용
const arr = [1];
Object.freeze(arr);
arr[0]++; // 요소 수정, 추가, 삭제 불가
console.log(arr);
// 얕게만 적용
const obj = {
  x: 1,
  y: { a: 1 }
};
Object.freeze(obj);
obj.x++;
obj.y.a++;
console.log(obj);


/**
 * 프로퍼티 어트리뷰트
 */
// 1. 데이터 프로퍼티의 어트리뷰트
프로퍼티 						어트리뷰트 설명																									설정중 생략시 기본값
[[Value]]						프로퍼티의 값																											undefined
[[Writable]]				값 갱신 가능 여부 - false일 경우 읽기 전용														false
[[Enumerable]]			열거(for ... in문, Object.keys 사용) 가능 여부											false
[[Configurable]]		프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부			false
// 2. 접근자 프로퍼티의 어트리뷰트
프로퍼티 						어트리뷰트	설명																								설정중 생략시 기본값
[[Get]]							객체로부터 값을 읽을 때 호출되는 getter 함수													undefined
[[Set]]							객체에 값을 저장할 때 호출되는 setter 함수														undefined
[[Enumerable]]			열거(for ... in문, Object.keys 사용) 가능 여부											false
[[Configurable]]		프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부			false

// getOwnPropertyDescriptor, getOwnPropertyDescriptors
// 객체 프로퍼티 어트피뷰트들의 설명자 descriptor를 반환
const person = {
  // 1. 데이터 프로퍼티들
  fullName: '홍길동',
  ageInNumber: 25,
  // 2. 접근자 프로퍼티들
  get name () {
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  },
  get age () { return this.ageInNumber + '세'; },
  set age (age) {
    this.ageInNumber = Number(age);
  }
}
// 특정 프로퍼티를 지정하여 반환
console.log('1.',
  Object.getOwnPropertyDescriptor(person, 'fullName')
);
console.log('2.',
  Object.getOwnPropertyDescriptor(person, 'ageInNumber')
);
console.log('3.', // set: undefined
  Object.getOwnPropertyDescriptor(person, 'name')
);
console.log('4.', // get, set 모두 있음
  Object.getOwnPropertyDescriptor(person, 'age')
);
// 모든 프로퍼티의 어트리뷰트 객체로 묶어 반환
console.log(
  Object.getOwnPropertyDescriptors(person)
);

// defineProperty, defineProperties
// 객체의 프로퍼티를 정의
const person = {};
// 한 프로퍼티씩 각각 설정
Object.defineProperty(person, 'fullName', {
  value: '홍길동',
  writable: true
  // 누락한 어트리뷰트는 기본값으로 자동생성
});
Object.defineProperty(person, 'name', {
  get () {
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  }
});
// 여러 프로퍼티를 객체 형식으로 한꺼번에 설정
Object.defineProperties(person, {
  ageInNumber: { 
    value: 25,
    writable: true
  },
  age: {
    get () { return this.ageInNumber + '세'; },
    set (age) {
      this.ageInNumber = Number(age);
    }
  }
});
person.age = 30;
console.log(
  Object.getOwnPropertyDescriptors(person)
);

// 적용예
const person = {
  fullName: '홍길동',
  ageInNumber: 25,
};
// value를 전우치로 바꾸면
Object.defineProperty(person, 'fullName', {
  value: '전우치'
});
console.log(
  Object.keys(person)
);
// enumerable을 false로 바꾸면
Object.defineProperty(person, 'fullName', {
  enumerable: false
});
console.log(
  Object.keys(person)
);
// Object의 또 다른 정적 메서드
// enemerable이 false인 프로퍼티도 반환
console.log(
  Object.getOwnPropertyNames(person)
);
// seal: configurable을 false로 바꿈
Object.seal(person);
console.log(
  Object.getOwnPropertyDescriptors(person)
);
// freeze: configurable과 writable을 false로 바꿈
Object.freeze(person);
console.log(
  Object.getOwnPropertyDescriptors(person)
);

// 깊은 동결 (deep freeze)
// 재귀적으로 객체를 가장 깊숙히까지 동결		
function getDeepFrozen(obj) {
  console.log(obj);
  const result = {};
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];
    result[name] = 
      (value && typeof value === 'object') ?
      getDeepFrozen(value) : value;
  }
  return Object.freeze(result);
}
let myObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}
myObj = getDeepFrozen(myObj);
myObj.a++;
myObj.b.c++;
myObj.b.d.e++;
myObj.b.d.f.g++;
console.log(myObj);


/**
 * JSON
 */
// stringify - 객체를 문자열로 직렬화 (serialize)
const person = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};
const personStr = JSON.stringify(person);
console.log(typeof personStr);
console.log(personStr);

// 2번째 인자: replacer 함수
const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: true,
  e: false
}
// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj, (key, value) => {
  if (key && key < 'a' || key > 'c') {
    // 해당 프로퍼티 생략
    return undefined;
    // 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
    // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
    // key와 value를 로그로 출력해보며 확인해 볼 것
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  return value;
});
console.log(objStr1);
// 2. 반환한 key의 배열 매개변수
const objStr2 = JSON.stringify(obj, ['b', 'c', 'd']);
console.log(objStr2);

// 3번째 인자: 인덴트
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};
[
  JSON.stringify(obj, null),
  JSON.stringify(obj, null, 1),
  JSON.stringify(obj, null, 2),
  JSON.stringify(obj, null, '\t')
]
.forEach(i => console.log(i));

// 객체의 toJSON 프로퍼티
const obj = {
  x: 1,
  y: 2,
  toJSON: function () {
    return '훗, 나를 직렬화해보겠다는 건가';
  }
}
console.log(
  JSON.stringify(obj)
);

// parse - 역직렬화
[
  JSON.parse('1'),
  JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
  JSON.parse('true'),
  JSON.parse('null'),
  JSON.parse('[1, 2, 3]'),
  JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
]
.forEach(i => console.log(i));

// 2번째 인자: receiver 함수
const objStr = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';
const obj = JSON.parse(objStr, (key, value) => {
  if (key === 'c') { 
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
});
console.log(obj); // 내부까지 적용(배열 확인해 볼 것)

// 깊은 복사 (deep copy)
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}
const obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a++;
obj1.b.c++;
obj1.b.d.e++;
obj1.b.d.f.g++;
console.log(obj1);
console.log(obj2);

// 함수, Date, Symbol, BigInt 프로퍼티는 JSON 방식으로는 불가 또는 제한적
const obj1 = {
  a: 1,
  b: 2,
  c: function () { return this.a + this.b },
  d: new Date(),
  e: Symbol('안녕'),
  // g: 1n // 오류 발생
}
const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj1);
console.log(obj2);

// structuredClone
// 아직은 일부 브라우저(Web API 형태로) 및 환경에서만 지원
// JSON 방식보다 빠르고 효율적인 깊은 복사
// Date와 BigInt 제대로 복사 - 함수와 Symbol은 여전히 불가
const obj1 = {
  a: 1,
  b: 2,
  // c: function () { return this.a + this.b },
  d: new Date(),
  // e: Symbol('안녕'),
  g: 1n
}
const obj2 = structuredClone(obj1);
console.log(obj1);
console.log(obj2);


/**
 * 2, 8, 16진법과 비트 연산자
 */

// 2진법 (binary) - 0b 뒤로 숫자 0, 1 를 붙여 표현
[
  0b1,
  0b10,
  0b11,
  0b100,
  0b101
].forEach(i => console.log(i))
console.log(
  0b2 // 토큰으로 인식 - 오류
);

// 8진법 (octal) - 0o 뒤로 숫자 0~7 를 붙여 표현
[
  0o7,
  0o10,
  0o100,
  0o1000,
].forEach(i => console.log(i))

// 16진법 (hexadecimal) - 0x 뒤로 숫자 0~9, A~F 를 붙여 표현
[
  0x9,
  0xA,
  0xB,
  0xC,
  0xd,
  0xe,
  0xf,
  0x10,
  0xFFFFFF
].forEach(i => console.log(i))

// 상호변환
console.log(
  parseInt(hexStr, 16).toString(2),
  parseInt(binStr, 2).toString(8),
  parseInt(octStr, 8).toString(16)
);

// 비트 연산자
let x = 0b1010101010; // 682
let y = 0b1111100000; // 992
// 양쪽 모두 1인 자리에 1
const bitAnd = x & y;
console.log(bitAnd);
console.log(
  bitAnd.toString(2)
);
// 한 쪽이라도 1인 자리에 1
const bitOr = x | y
console.log(bitOr);
console.log(
  bitOr.toString(2)
);
// 양쪽이 다른 자리에 1
const bitXor = x ^ y;
console.log(bitXor);
console.log(
  bitXor.toString(2)
);
// 각 비트 반전
console.log(~x);
console.log(
  (~x).toString(2)
);
console.log(~y);
console.log(
  (~y).toString(2)
);
// 시프트 연산자
let x = 0b101; // 5
console.log(x.toString(2), x);
x = x << 1;
console.log(x.toString(2), x);
x = x >> 1;
console.log(x.toString(2), x);


/**
 * BigInt
 */
// Number.MAX_SAFE_INTEGER
// number 타입으로 안정적으로 표현할 수 있는 가장 큰 정수 - 9007199254740991 (2^53 - 1)
for (let i = 0; i < 100; i++) {
  console.log(Number.MAX_SAFE_INTEGER + i);
}

// BigInt
for (let i = 0; i < 100; i++) {
  console.log(9007199254740991n + BigInt(i));
}
const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt('9007199254740991');
const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991
console.log(typeof bigInt1);
console.log(
  bigInt1 === bigInt2,
  bigInt2 === bigInt3,
  bigInt3 === bigInt4
);
// 일반 number 타입과 산술 (+, -, *, /, %, **) 연산 불가
console.log(
  1n + 1
);
// 양쪽 모두 BigInt로 변환하여 계산하는 방법 사용
const calcAsBigInt = (x, y, op) => {
  return op(BigInt(x), BigInt(y));
}
console.log(
  calcAsBigInt(1n, 1, (x, y) => x + y)
);
		
// 비교 연산 가능
console.log(
  1n === 1, // false
  1n == 1,
  1n < 2,
  1n >= 0,
  2n < 1
);
// number 숫자와 섞여 정렬 가능
console.log(
  [4n, 7, 6n, 3, 1, 5, 9, 2n, 8n]
  .sort((a, b) => a > b ? 1 : -1)
);
// 불리언으로 변환되는 연산 가능
console.log(
  !!(0n),
  !!(1n)
);
0n ? console.log('참') : console.log('거짓');
1n ? console.log('참') : console.log('거짓');
// 소수점 아래는 버림
console.log(
  5n / 2n
);
// Math의 정적 메서드에서 사용 불가
console.log(
  Math.max(1n, 2n)
);
// number로 변환 - 정확성 유실 주의
console.log(
  Number(1n),
  Number(9007199254740993n)
);


/**
 * Symbol
 */
// 기본 생성과 활용 - 
const mySymbol = Symbol();
console.log(typeof mySymbol, mySymbol);
// 문자열 값을 인자로 줄 수 있음
// 해당 심벌에 대한 설명일 뿐, 각 심벌의 값은 유일무이
const symbol1 = Symbol('hello');
const symbol2 = Symbol('hello');
console.log(symbol1, symbol2);
console.log(symbol1 === symbol2);
// 래퍼 객체(Symbol)의 인스턴스 프로퍼티 - 임시 형변환
console.log(symbol1.description, symbol2.description);
// 래퍼 객체(Symbol)의 인스턴스 메서드 - 임시 형변환
console.log(symbol1.toString(), symbol2.toString());

// 유일무이한 값이므로 다음과 같이 출력 불가
const obj = {
  [Symbol('x')]: 1,
  [Symbol('y')]: 2
}
console.log(
  obj[Symbol('x')],
  obj[Symbol('y')]
);

// 외부 접근을 제한할 프로퍼티의 키로 활용
const buildingKey = Symbol('secret');
const building = {
  name: '얄코사옥',
  floors: 3,
  [buildingKey]: '1234#'
}
console.log(building);		
console.log(
  building.name,
  building.floors,
  building[buildingKey]
);
// 외부로부터의 접근 차단
console.log(
  building[Symbol('secret')]
);

// 아래의 방법들로는 접근되지 않음
for (key in building) {
  console.log(key);
}
console.log(
  Object.keys(building),
  Object.values(building),
  Object.entries(building),
  Object.getOwnPropertyNames(building)
);

// 아래의 Object 정적 메서드로 접근 가능 (배열로 반환)
console.log(
  Object.getOwnPropertySymbols(building),
  Object.getOwnPropertySymbols(building)[0],
);
console.log(
  building[
    Object.getOwnPropertySymbols(building)[0]
  ]
);

// 전역 심볼 레지스트리 (global symbol registry)
// for : 주어진 인자로 전역 심볼 레지스트리에 하나의 심볼 생성 및 반환
// 전역 심볼 레지스트리에 해당 키로 등록된 키가 없을 시: 심볼을 새로 생성
const symbol1 = Symbol.for('hello');
// 전역 심볼 레지스트리에 해당 키가 존재할 시: 해당 심볼을 반환
const symbol2 = Symbol.for('hello');
console.log(symbol1 === symbol2);
const obj = {
  [symbol1]: 'SECRET STRING'
}
console.log(
  obj[Symbol.for('hello')]
);
//  for 메서드로 생성되지 않은 심볼과는 다름
const symbol3 = Symbol('hello');
console.log(symbol1 === symbol3);

// keyFor : 정적 심볼 레지스트리에 저장된 심볼의 키 반환
console.log(
  Symbol.keyFor(symbol1),
  Symbol.keyFor(symbol2)
);
// 전역 심볼 레지스트리에 저장되지 않은 심볼에는 작동하지 않음
console.log(
  Symbol.keyFor(symbol3)
);
// 활용예
// 배열 프로토타입에 숫자 요소들의 평균을 구하는 메서드 추가
Array.prototype[Symbol.for('average')] = function () {
  let sum = 0, count = 0;
  for (const i of this) {
    if (typeof i !== 'number') continue;
    count++;
    sum += i;
  }
  return sum/count
}
[1, 2, 3, 4, 5, 6][Symbol.for('average')]();


/**
 * Set
 */
// Set - 중복되지 않는 값들의 집합
// 동일한 값을 여러 번 포함할 수 없음
// 값들의 순서가 무의미함

// Set 생성
const set1 = new Set();

// add 메서드 - 요소 추가
set1.add(1);
set1.add('A');
set1.add(true);
// 이미 포함된 요소는 추가하지 않음
set1.add(1);
set1.add(true);

// 배열을 인자 넣으면 생성 + 초기화
// 중복된 요소 제거
const set2 = new Set([1, 1, 1, 'A', true]);

// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(
  set2.delete('A'),
  set2.delete(true),
  set2.delete(100)
);

// 메서드 체이닝
set2
  .add(3)
  .add(4)
  .add(5)
// 참조형이므로 둘이 같은 Set을 가리킴
const set3 = set2.add(2);
console.log(set2, set3);

// size 프로퍼티 - 요소의 개수
console.log(
  set2.size
);

// keys, values, entries 메서드 - 값 / 값 / [값, 값] 반환
// key를 value와 같이 취급
console.log(
  set2.keys(),
  set2.values(),
  set2.entries()
);

// clear 메서드 - 모든 요소들을 삭제
set2.clear();

// 참조형 데이터의 경우, 각기 다른 것으로 인식 (참조하는 주소가 다르므로)
const objSet1 = new Set()
objSet1
  .add({ x: 1, y: 2 })
  .add({ x: 1, y: 2 })
  .add([1, 2, 3])
  .add([1, 2, 3]);
console.log(objSet1);

// 같은 것들로 인식
const obj = { x: 1, y: 2 };
const arr = [1, 2, 3];
const objSet2 = new Set()
  .add(obj)
  .add(obj)
  .add(arr)
  .add(arr);
console.log(objSet2)

// for ... of 문
const arr = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr);
for (item of set) {
  console.log(item);
}

// 스프레드 문법
const newArr = [...set];
console.log(newArr);
// 활용 - 중복을 제거한 배열 반환
const arr1 = [1, 1, 1, 2, 2, 3, 4, 5];
const arr2 = [...new Set(arr1)];
console.log(arr2);

// 디스트럭쳐링
const [x, y] = set;
console.log(x);
console.log(y);
const [a, b, ...rest] = set;
console.log(a);
console.log(b);
console.log(rest);


/**
 * Map
 */
// Map - 키와 값의 쌍으로 이루어진 컬렉션
// 객체나 배열 등의 참조값을 키로 사용 가능
		
// Map 생성
const map1 = new Map();

// set 메서드 - 키와 값의 쌍 추가
map1.set('x', 1);
map1.set(123, 'ABC');
map1.set(true, { a: 1, b: 2 });

// [[키 쌍]...] 배열로 생성 + 초기화
const map2 = new Map([
  ['x', 1],
  [123, 'ABC'],
  [true, { a: 1, b: 2 }],
]);

// 키의 중복 불허 - 해당 키 있을 시 덮어씀
map2.set('x', 2);

// has 메서드 - 요소 포함여부 확인
console.log (
  map2.has('x'),
  map2.has('y')
);

// get 메서드 - 값에 접근
console.log(
  map2.get('x'),
  map2.get(123),
  map2.get(true),
  // 없는 키로 접근시
  map2.get('y')
);

// 참조값도 키로 사용 가능
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];
map2.set(objKey, 'OBJ_KEY');
map2.set(arrKey, 'ARR_KEY');
console.log (
  map2.get(objKey),
  map2.get(arrKey),
);
// [참조값]이 키임에 유의
// 💡 5-1강의 객체와 비교해 볼 것
console.log(
  map2.get({ x: 1, y: 2 }),
  map2.get([1, 2, 3])
);
// 때문에 이렇게 사용하면 안 됨
map2.set({x: 3, y: 4}, '못꺼냄');
console.log(map2);
console.log(
  map2.get({x: 3, y: 4})
);

// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(
  map2.delete('x'),
  map2.delete(objKey),
  map2.delete({x: 3, y: 4})
);

// 메서드 체이닝
const map3 = map2
  .set(1, 'X')
  .set(2, 'Y')
  .set(3, 'Z');
console.log(map2, map3);

// size 프로퍼티 - 요소의 개수
console.log(
  map2.size
);

// keys, values, entries 메서드 - 키 / 값 / [키, 값] 반환
console.log(
  map2.keys(),
  map2.values(),
  map2.entries()
);

// clear 메서드 - 모든 요소들을 삭제
map2.clear();


// for ... of 문
const arr = [
  ['🐶', '강아지'],
  ['🐱', '고양이'],
  ['🐯', '호랑이'],
  ['🐵', '원숭이'],
  ['🐨', '코알라']
];
const map = new Map(arr);
for ([key, value] of map) {
  console.log(key, value);
}

// 스프레드 문법
const newArr = [...map];
console.log(newArr);

// 디스트럭쳐링
const [x, y] = map;
console.log(x);
console.log(y);

const [a, b, ...rest] = map;
console.log(a);
console.log(b);
console.log(rest);


/**
 * 이터러블
 */
// 이터러블 iterable - 이터러블 프로토콜을 준수하는 객체
// 배열, 문자열, Set, Map, arguments 등...
// 키 Symbol.iterator ( well-known 심볼 ) 의 값으로 이터레이터를 반환하는 메서드를 가짐
console.log(
  [][Symbol.iterator],
  ''[Symbol.iterator],
  new Set()[Symbol.iterator],
  new Map()[Symbol.iterator]
);
// 실행시 이터레이터 반환
console.log(
  [][Symbol.iterator](),
  ''[Symbol.iterator](),
  new Set()[Symbol.iterator](),
  new Map()[Symbol.iterator]()
);

// 이터레이터 iterator
// next 메서드를 통해 이터러블을 순회하며 값을 반환
const arr = [1, 'A', true, null, {x: 1, y: 2 }];
const arrIterator = arr[Symbol.iterator]();
// 펼쳐서 메서드 살펴볼 것
console.log(arrIterator);
arrIterator.next(); // 반복 실행해 볼 것

// 이터레이터 프로토콜 iterator protocol
// next 메서드의 반환 객체 내 요소
//  value - 해당 차례에 반환할 값
//  done - 순회 종료 여부 ( 마지막 값 반환 다음 차례부터 )

// for ... of 문 사용 가능
for (const num of diceTenTimes) {
  console.log(num);
}

// 스프레드 문법 사용 가능
const diceResults = [...diceTenTimes];
console.log(diceResults);

// 배열 디스트럭쳐링 사용 가능
const [first, second, ...rest] = diceTenTimes;
console.log(
  '주사위의 첫번째, 두번째 숫자는 각각 '
  + `${first}(와)과 ${second}, 나머지의 합은 ${
    rest.reduce((a, b) => a + b)
  } 입니다.`
);

// 예제 1. 주사위를 열 번 굴리는 이터러블
const diceTenTimes = {
  [Symbol.iterator] () {
    let count = 0;
    let maxCount = 10;
    return {
      next () {
        return {
          value: Math.ceil(Math.random() * 6),
          done: count++ >= maxCount
        }
      }
    }
  }
}
const diceIterator = diceTenTimes[Symbol.iterator]();
for (let i = 0; i < 12; i++) {
  console.log(
    diceIterator.next()
  );
}

// 예제 2. 피보나치 이터러블
function fiboIterator () {
  let count = 0;
  const maxCount = 10; // 최대 횟수가 지정됨
  let [x, y] = [0, 1];
  return {
    next () {
      [x, y] = [y, x + y];
      return { value: y, done: count++ >= maxCount }
    }
  }
}
const fibonacci = {
  [Symbol.iterator]: fiboIterator
}
for (num of fibonacci) {
  console.log(num);
}

// 원하는 최대 횟수의 피보나치 이터러블 생성하기
function getFiboWithMax (maxCount) {
  return {
    [Symbol.iterator] () {
      let count = 0;
      let [x, y] = [0, 1];

      return {
        next () {
          [x, y] = [y, x + y];
          return { value: y, done: count++ >= maxCount }
        }
      }
    }
  }
}
const fiboMax5 = getFiboWithMax(5);
const fiboMax20 = getFiboWithMax(20);
console.log([...fiboMax5]);
console.log([...fiboMax20]);

//  예제 3. 이터러블의 역할도 하는 이터레이터 만들기
function workersIter (people) {
  let idx = 0;
  return {
    [Symbol.iterator] () { return this; },
    next () {
      return {
        value: people[Math.min(idx, people.length - 1)],
        done: idx++ >= people.length
      };
    }
  }
}
// 이터러블로 사용
// 인원 명단 확인
const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];
let workersIter1 = workersIter(team1);
console.log(
  [...workersIter1]
);
// 이터레이터를 겸하는 경우 한 번 순회하면 끝 
console.log(
  [...workersIter1]
);
// 새로 생성해야 다시 순회
workersIter1 = workersIter(team1);
console.log(
  [...workersIter1]
);

// 이터레이터로 사용
function switchWorker(iter) {
  const next = iter.next();
  console.log(
    next.done
    ? '-- 인원 없음 -- '
    : `${next.value} 차례입니다.`
  );
}
workersIter1 = workersIter(team1);
switchWorker(workersIter1); // 반복 실행해 볼 것


/**
 * 제너레이터
 */
	제너레이터 (generator) - 이터러블과 이터레이터를 보다 간결하게 구현 가능
  function* genFunction () {
    console.log('하나를 반환합니다.');
    yield '하나';
    console.log('둘을 반환합니다.');
    yield '둘';
    console.log('셋을 반환합니다.');
    yield '셋';
  }
  const genFunc = genFunction();
  console.log( genFunc.next() );

// 함수 선언
function* genFunc1 () {
  yield 'genFunc1';
}

// 값으로 대입
const genFunc2 = function* () {
  yield 'genFunc2';
}

// 객체의 메서드
const obj = {
  * genFunc3 () {
    yield 'genFunc3';
  }
}

// 클래스의 메서드
class MyClass {
  * genFunc4 () {
    yield 'genFunc4';
  }
}

// 테스트
console.log(
  genFunc1().next().value,
  genFunc2().next().value,
  obj.genFunc3().next().value,
  new MyClass().genFunc4().next().value,
);
		
// 제너레이터 객체
// 이터레이터이자 이터러블
// next 메서드를 실행하면 다음 yield까지 실행 후 중지
function* genFunction () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
let genObj = genFunction();

// 로그 펼쳐서 살펴볼 것
console.log( genObj );

// 이터러블임 확인
console.log( genObj[Symbol.iterator] );
console.log([...genObj]);

// 순회 후에는 재생성 필요
console.log([...genObj]);

// 이터러블로서는 바로 호출이 적합
console.log([...genFunction()]);

for (const num of genFunction()) {
  console.log(num);
}

// 재생성
genObj = genFunction(); 
// 이터레이터임 확인
for (let i = 0; i < 7; i++) {
  console.log(genObj.next());
}

// 예제 1. 주사위를 열 번 굴리는 제너레이터
function* diceTenTimes () {
  let count = 0;
  const maxCount = 10;
  while (count++ < maxCount) {
    yield Math.ceil(Math.random() * 6);
  }
}
// 이터러블
console.log(
  [...diceTenTimes()]
);
// 이터레이터 - 객체로 반환 뒤 사용
// 다시 순회시 재생성 필요
let diceGenObj = diceTenTimes();

for (let i = 0; i < 12; i++) {
  console.log(diceGenObj.next());
}

// 예제 2. 피보나치 제너레이터
function* fibonacci (maxCount) {
  let count = 0;
  let [x, y] = [0, 1];

  while (count++ < maxCount) {
    [x, y] = [y, x + y];
    yield y;
  }
}
console.log(
  [...fibonacci(10)]
);

let fiboGenObj = fibonacci(5);
for (let i = 0; i < 7; i++) {
  console.log(
    fiboGenObj.next()
  );
}
		
// 예제 3. 순번 제너레이터
function* workersGen (people) {
  let idx = 0;
  while (idx < people.length) {
    yield people[idx++];
  }
}

const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];
console.log(
  [...workersGen(team1)]
);

// 이터레이터로 사용
// 인원 순번 넘기기
function switchWorker(iter) {
  const next = iter.next();
  console.log(
    next.done
    ? '-- 인원 없음 -- '
    : `${next.value} 차례입니다.`
  );
}

workersIter1 = workersGen(team1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);


/**
 * 에러 핸들링
 */
// try ... catch ... finally 문
function connect () { console.log('☀️', '통신 연결'); }
function disconnect () { console.log('🌙', '통신 연결 해제'); }
function sendArray (arr) { console.log('전송', arr); }
function sendStringAsArray (str) {
  connect();
  try {
    sendArray(str.split(''));
    return true;
  } catch (e) {
    console.error('🛑 에러!!', e);
    return false;
  } finally {
    disconnect();
    console.log('- - - - - - - -');
  }
}
['ABC', '가나다', 123, '123'].forEach(i => {
  console.log(
    sendStringAsArray(i) 
    ? '[성공]' : '[실패]', '\n\n'
  );
});

// Error 객체
const error = new Error('뭔가 잘못됐어');
console.error(error);

// 두 번째 인자로 이유를 명시할 수도 있음
const error = new Error(
  '뭔가 잘못됐어',
  { cause: '뭘 잘못했으니까' }
);
console.error(error);

// 기본 인스턴스 프로퍼티와 메서드
console.log(error.name);
console.log(error.message);

// cause를 입력했을 경우
console.log(error.cause);

// 에러 자체를 로그 출력하면 나오는 문구
console.log(error.toString());

// 의도적으로 에러 발생시키기
throw new Error('이유를 묻지 마라');

// 에러의 여러 종류
const x x;
const errorFuncs = [
  // 자료형에 맞지 않는 메서드 호출
  () => { (3).split(''); },

  // 선언되지 않은 함수 호출
  () => { hello(); },

  // 부적절한 숫자를 인자로 전달
  () => { (123.45).toFixed(-1); }
];
errorFuncs.forEach(func => {
  try {
    func();
  } catch (e) {
    console.error(e);
    console.log(e.name);
    console.log(e.message, '\n\n');
  }
});
		
// 컴퓨터가 인지하지 못하는 에러 수동 발생
// 특정 월의 당번으로 지원하는 함수
function applyForMonth (date) {
  try {
    if (typeof date !== 'number') {
      throw new TypeError('숫자로 입력해주세요.');
    }
    if (date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력해주세요.');
    }
    console.log(`${date}월 당번으로 등록되셨습니다.`);
  } catch (e) {
    console.error('🛑 에러 발생!', e);
    console.log('다시 등록해주세요.');
  }
}
applyForMonth(5);
applyForMonth('5');
applyForMonth(13);
	
// 커스텀 에러 만들기
  class MilitaryError extends Error {
  constructor (position, ...params) {
    super(...params);
    this.name = 'MilitaryError';
    switch (position) {
      case '이병':
        this.message = '개판이군. 맞선임 데려와봐.';
        break;
      case '일병':
        this.message += ' 엎드려 뻗쳐.';
        break;
      case '상병':
        this.message = '짬을 거꾸로 먹었나. ' + this.message;
        break;
      default:
        this.message = '집에 갈 때 됐다 이거지? ㅎㅎ';
    }
  }
}
class Soldier {
  constructor (position) {
    this.position = position;
  }
  speak (word) {
    console.log(this.position + ':', word);
    try {
      if (!'다나까'.includes(word.at(-1))) {
        throw new MilitaryError(
          this.position,
          '군대에서 모든 말은 다나까로 끝낸다.'
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}
['이병', '일병', '상병', '병장'].forEach(pos => {
  const soldier = new Soldier(pos);
  soldier.speak('무슨 일입니까');
  soldier.speak('왜요');
});

// 에러 버블링 (error bubbling)
// 다른 함수를 호출했을 때 에러 발생시 해당 함수에서 잡지 않으면 호출한 곳으로 던져짐
function func1 () {
  throw new Error('에러');
}
function func2 () {
  func1();
}
function func3 () {
  func2();
}
function func4 () {
  try {
    func3();
  } catch (e) {
    console.error(e);
  }
  console.log('실행완료');
}
func4();

// 사장 > 부장 > 대리 > 사원 단계로 일을 시켰을 때
function func1 (e) { // 사원
  try {
    if (e) { throw e }
    console.log('저 가 봐도 되죠?');
    console.log('- - - - - - - - - -');

  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error('저 이건 알아요!', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('대리님, 이거 뭐에요?');
    throw e; // 💡 처리하지 못하는 에러는 윗선으로 던짐
  }
}

function func2 (e) { // 대리
  try {
    func1(e);
  } catch (e) {
    if (e instanceof TypeError) {
      console.error('내가 할 테니 가봐요.', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('부장님, 이건 제 선에서 안 되겠습니다.');
    throw e;
  }
}

function func3 (e) { // 부장
  try {
    func2(e);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.error('잘 하자, 응?', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('사장님, 이것 좀 보셔야겠습니다.');
    throw e;
  }
}

function func4 (e) { // 사장
  try {
    func3(e);

  } catch (e) {
    console.error('전원 집합.', e);
  }
}

func4();	
func4(new SyntaxError());
func4(new TypeError());
func4(new ReferenceError);
func4(new RangeError);


/**
 * 구시대의 유물 var
 */
// 선언 없이도 사용 가능
notDeclared = 1; // 미리 선언한 부분이 없을 시 var로 만들어짐
console.log(notDeclared);
// num이 var로 선언된 것
for (num of [1, 2, 3]) {
  console.log(num);
}

// 재선언 가능
// 코딩 중 실수의 여지가 됨
let a = 1;
let a = 2; // 오류
const b = 1;
const b = 2; // 오류
var c = 1;
var c = 2;

// 블록 레벨 스코프 무시
let num1 = 1;
{
  let num1 = 2;
  {
    let num1 = 3;
  }
}
console.log(num1);

var num2 = 1;
{
  var num2 = 2;
  {
    var num2 = 3;
  }
}
console.log(num2);

// for문의 스코프도 무시
for (var i = 0; i < 5; i++) {
  var pow2 = i ** 2;
  console.log(pow2);
}
console.log(i, pow2);

// 함수의 스코프는 유효함 - IIFE가 사용되었던 이유
var num3 = 1;
function func1 () {
  var num3 = 2;
  return num3;
}
console.log(num3);
console.log(func1());

// 호이스팅
console.log(hoisted1); // 오류발생 X, 대신 undefined 반환
var hoisted1 = 'Hello';
console.log(hoisted1)

// 엄연히는 let도 호이스팅 되지만 undefined로 초기화되지 않는 것
// 초기화되기 이전의 영역: TDZ에 속함
console.log(hoisted2); // 오류
let hoisted2 = 'Hello';
console.log(hoisted2)


/**
 * 엄격 모드 strict mode
 */
// 자바스크립트 문서 최상단에 작성 - 문서 전체에 적용
notDeclared = 1;
'use strict'; // 쌍따옴표도 가능
notDeclared = 1; // 오류 발생!
			
// 문서, script 태그별로만 적용 - 여러 .js파일이 페이지에 사용될 시 각각 작성해야 함
<!DOCTYPE html>
<html lang="ko">
<head>
<script src="./1.js"></script>
<script src="./2.js"></script>
</head>
</html>
// 1.js
'use strict';
x = 1;
console.log(x); // 오류 발생
// 2.js
y = 2;
console.log(y); // 오류 발생하지 않음
	
// 특정 함수의 최상단에 작성 - 해당 함수에만 적용
notDec1 = 1;
function strictFunc () {
  'use strict';
  notDec2 = 2;
  console.log(notDec2);
}
console.log(notDec1);
strictFunc();

// 변수, 함수, 인자 등 삭제불가한 것을 삭제시 오류 발생
let toDelete1 = 1;
delete toDelete1;
console.log('1.', toDelete1);

function funcToDel1 () { console.log(true); }
delete funcToDel1;
console.log('2.', funcToDel1);

'use strict';
let toDelete2 = 1;
delete toDelete2;

'use strict';
function funcToDel2 () { console.log(true); }
delete funcToDel2;

// 인자명 중복시 오류 발생
// 'use strict';
function add(x, x) {
  return x + x;
}
console.log(add(1, 2));


/**
 * 옵셔널 체이닝
 */
// ?. - 옵셔널 체이닝 optional chaining 연산자
// 호출 대상이 undefined나 null이어도 오류를 발생시키지 않음 - 대신 undefined 반환
let undef = undefined;
console.log(
  undef?.x,
  undef?.['x'],
  undef?.[1],
  {}.func?.()
);

// 결과에 prop3이 있다면 가져와야 하는 상황 - 다음과 같은 상황에서 에러를 피하려면?
const rand = () => Math.random() < 0.75;
const notSure = () => rand() ? {
  prop1: rand() ? {
    prop2: rand() ? {
      prop3: rand() ? '성공!' : undefined
    } : undefined
  } : undefined
} : undefined;
console.log(JSON.stringify(notSure()));
const result = notSure();
console.log(JSON.stringify(result));
console.log(result.prop1.prop2.prop3);

// 옵셔널 체이닝을 사용한 방법
const result = notSure();
console.log(
  result?.prop1?.prop2?.prop3
);

// 유무가 불확실한 함수를 호출할 때도 유용
const objs = [
  { func () { console.log(1) } },
  {},
  { func () { console.log(2) } },
  {},
  { func () { console.log(3) } },
]
objs.forEach(o => o.func?.());


/**
 * 렉시컬과 클로저
 */
// 렉시컬(정적) 스코프 (lexical(static) scope)
// 변수나 상수가 코드상 어디에서 지정되었는가에 따라 그 사용 범위를 결정
// 함수가 코드상 어디에서 정의되었는가에 따라 그 상위 스코프를 결정
// 호출한 곳을 기준으로 하는 동적 스코프 dynamic scope 와 상반되는 개념		
const x = 1;
const y = 1;
const z = 1;
function func1 () {
  const y = 2;
  const z = 2;
  function func2 () {
    const z = 3;
    console.log('3', x, y, z);
  }
  console.log('2', x, y, z);
  func2();
}
console.log('1', x, y, z)
func1();

// 렉시컬 환경 (lexical environment)
// 전체 문서, 함수, 블록을 실행하기 전 만들어지는 내부 객체
// 각 스코프의 고유 값들과 외부 스코프에 대한 참조를 포함
const x = 1;
const y = 1;
const z = 1;
function func1 (a) {
  const y = 2;
  const z = 2;
  function func2 (b) {
    const z = 3;
    console.log('3', x, y, z, b);
  }
  console.log('2', x, y, z, a);
  func2(a + 1);
}
console.log('1', x, y, z)
func1(1);

// 클로저 (closure)
// 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념 함수 중첩시
// 단지 값을 복사해서 갖는 것이 아니라, 해당 값이 저장되는 외부 환경 자체가 유지됨
function createCounter (start) {
  let num = start;
  return function () {
    console.log(++start);
    return start;
  }
}
const count = createCounter(10);
count(); // 반복 실행해 볼 것

// private field 흉내내기
function employeeCreator (name, age) {
  let _name = name;
  let _age = age;
  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) { _age = age; },
    getOlder: function (years) { _age += years; }
  }
}
const employee = employeeCreator('홍길동', 20);
console.log(employee);
console.log(employee.name(), employee.age());
employee.setAge(25);
console.log(employee.name(), employee.age());
employee.getOlder(3);
console.log(employee.name(), employee.age());


/**
 * this의 동적 바인딩
 */
// 전역에서의 this
// 브라우저의 콘솔창: Window 객체 - globalThis와 같음
// Node.js의 REPL: global 객체 - globalThis와 같음
// .js문서로 작성 후 실행 - 빈 객체
//    Node.js에서 각 .js 문서들은 이후 배울 모듈로서 실행되기 때문

// 함수 안에서의 this
// 느슨한 모드와 엄격 모드에서 다르게 동작
function func () {
  console.log(this); // globalThis
}
func();
// 객체에 속하지 않은 함수에서는 this 사용이 의미 없음
'use strict';
function func () {
  console.log(this); // undefined
}
func();

// 객체 안에서의 this
// 객체 리터럴 - 해당 객체를 가리킴
const obj = {
  x: 123,
  getX: function () {
    return this.x;
  }
}
console.log(obj.getX());
// 생성자 함수 - 생성될 인스턴스를 가리킴
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function  () {
    return `저는 ${this.name}, ${this.age}세입니다.`
  }
}
console.log(
  new Person('홍길동', 20).introduce()
);
// 클래스 선언 - 생성될 인스턴스를 가리킴
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
console.log(
  new YalcoChicken('강남', 17).introduce()
);

// 동적 바인딩 - this가 가리키는 대상이 함수의 호출 주체 또는 그 방식에 따라 달라짐
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};
const italian = {
  favorite: '피자'
};
console.log(
  korean.makeStew(true, 1)
);
// 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
italian.makeStew = korean.makeStew;
console.log(
  italian.makeStew(false, 2)
);

// 해결방법들
// call를 사용한 함수 호출 - this의 대상과 인자들을 나열
					console.log(
  italian.makeStew.call(korean, false, 2)
);

// apply를 사용한 함수 호출 - this의 대상 뒤의 인자들을 배열로
console.log(
  italian.makeStew.apply(korean, [false, 2])
);

// bind를 사용한 this 대상 고정 - this의 대상이 동적으로 변하지 않는 함수를 반환
italian.makeRightStew = korean.makeStew.bind(korean);
console.log(
  italian.makeRightStew(false, 2)
);
// 추가 인자들까지 바인딩 가능 
italian.makeClassicStew = korean.makeStew.bind(korean, true, 1);
console.log(
  italian.makeClassicStew()
);

// 바인딩된 함수를 내보내는 함수
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function () {
    return this.makeStew.bind(this);
  }
};
const italian = {
  favorite: '피자'
};
italian.makeStew = korean.teachMakingStew();
console.log(
  italian.makeStew(false, 2)
);

// 생성자 함수일 경우 - 함수 자체를 미리 인스턴스에 바인딩하기
function Korean () {
  this.favorite = '김치';
  // 여기서 바인딩을 고정시켜버림
  this.makeStew = (function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }).bind(this);
}
function Italian () {
  this.favorite = '피자';
}
const korean = new Korean();
const italian = new Italian();
italian.makeStew = korean.makeStew;
console.log(
  italian.makeStew(false, 2)
);

// call, apply, bind의 다른 활용
// 임의로 특수한 동작을 시킬 때
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};
console.log(
  korean.makeStew.call({favorite: '된장'}, true, 2)
);

// 객체들이 가져다 쓰도록 만든 함수
function intro (job) {
  return `${this.name}(${this.age}세) - ${job}`
}
const hong = {
  name: '홍길동',
  age: 20
};
const jeon = {
  name: '전우치',
  age: 25
};
// 동적 바인딩 특성 활용
hong.intro = intro;
console.log(
  hong.intro('개발자')
);
console.log(intro.call(hong, '개발자'));
console.log(intro.apply(jeon, ['사무직']));
const introHong = intro.bind(hong, '개발자');
console.log(
  introHong()
);

// 배열 메서드의 (thisArg)
// 콜백으로 주어진 함수 내에서 this가 가리킬 대상
// 보통 콜백함수 다음 인자로 넣음
function recommendForYou (me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];
  products
    .map((itm, idx) => {
      return { ...itm, idx } 
    })
    // 화살표 함수 대신 function 선언 함수 사용 주목 
    .filter(function ({sex, size}) {
      return ['U', this.sex].includes(sex) && size === this.size
    }, me)
    .forEach(function ({idx}) {
      console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
    }, me);
}
const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};
const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};
recommendForYou(peter);
recommendForYou(jane);


/**
 * this의 정적 바인딩
 */
// 객체의 메서드 종류별 비교
const obj = {
  // function 선언 함수
  func1: function () { return true; },
  // 메서드
  func2 () { return true; },
  // 화살표 함수
  func3: () => true
}
console.log(
  obj.func1(),
  obj.func2(),
  obj.func3()
);

// 로그로 출력된 형태 비교
console.log(obj.func1);
console.log(obj.func2);
console.log(obj.func3);

// 생성자 역할 수행 여부
// function 선언 함수만 생성자로 활용 가능 - 더 많은 기능이 있고 무겁다는 의미
const func1 = new obj.func1();
const func2 = new obj.func2();
const func3 = new obj.func3();

// 객체 리터럴의 화살표 함수는 가리키는 기본 스코프가 나머지 둘과 다름
const obj = {
  x: 1,
  y: 2,
  func1: function () {
    console.log('1.', this);
  },
  func2 () {
    console.log('2.', this);
  },
  func3: () => {
    console.log('3.', this);
  }
}
// this가 해당 객체를 가리킴
obj.func1();
obj.func2();
// this가 상위 스코프를 가리킴
obj.func3();

const outer = {
  a: true,
  b: false,
  func: function () {
    const inner = {
      x: 1,
      y: 2,
      func1: function () {
        console.log('1.', this);
      },
      func2 () {
        console.log('2.', this);
      },
      func3: () => {
        console.log('3.', this);
      }
    }
    // this가 inner를 가리킴 
    inner.func1();
    inner.func2();
    // this가 outer를 가리킴
    inner.func3();
  }
}
outer.func();

// 생성자 함수와 클래스에서 기본적으로는 가리키는 대상이 동일 (해당 인스턴스)
// 동적으로 바인딩하는 타 방식과의 차이 확인
function Korean () {
  this.favorite = '김치';
  this.makeStew = function (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => {
    return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
  };
}
function Italian () {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();
console.log(korean.makeStew(true));
console.log(korean.fryRice(true)); // 화살표 함수

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;
console.log(italian.makeStew(false));
console.log(italian.fryRice(false)); // 화살표 함수
	
class Korean {
  constructor () {
    this.favorite = '김치';
    this.fryRice = (isHot) => {
      return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
    }
  }
  makeStew (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  }
}
class Italian {
  constructor () {
    this.favorite = '피자';
  }
}

const korean = new Korean();
const italian = new Italian();
console.log(korean.makeStew(true));
console.log(korean.fryRice(true));

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;
console.log(italian.makeStew(false));
console.log(italian.fryRice(false));

// call, apply, bind 의 this 인자 무시됨
console.log(
  korean.fryRice.call({favorite: '된장'}, true)
);
console.log(
  korean.fryRice.apply({favorite: '된장'}, [true])
);
console.log(
  korean.fryRice.bind({favorite: '된장'}, true)()
);

// Node.js 파일 실행시 빈 객체가 출력된 이유
// Node.js는 각 파일을 모듈 (추후 다룰 것, 기본적으로 객체) 로 만들어 실행
// Node.js 코드파일로 실행해 볼 것

// this가 모듈 객체(현재 비어있음)를 가리킴
console.log('0.', this);
function func1 () {
  // this가 전역 객체를 가리킴
  console.log('1.', this);
}
function func2 () {
  'use strict';	
  // this가 undefined를 가리킴
  console.log('2.', this);
}
const func3 = () => {
  // this가 모듈 객체(이 함수의 상위 스코프)를 가리킴
  console.log('3.', this);
}
func1();
func2();
func3();


/**
 * 프로토타입의 개념
 */
// 프로토타입 (prototype)
// 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍을 지원하는 언어
// 오늘날에는 클래스가 더 널리 사용되지만, 사용하기에 따라 보다 강력하고 효율적

//  자바스크립트의 모든 객체는 Prototype을 가짐
const obj = {};
console.log(obj);
// 빈 객체임에도 위의 메서드들이 사용 가능한 것은 프로토타입 때문
console.log(
  obj.toString()
);
console.log(
  obj.valueOf()
);

// Object - 모든 것의 조상
// constructor 항목에서 각각의 생성자 확인 가능
console.log(
  new String('')
);
console.log(
  []
);
console.log(
  new Map()
);
// 객체 리터럴({} 등)의 생성자는 Object()임 알 수 있음
console.log(
  {}
);

// 프로토타입 체인
// 특정 객체에 호출된 프로퍼티가 없다면 프로토타입을 거슬러 올라감
// 예: Array에는 valueOf가 없지만 그 프로토타입인 Object에는 있으므로 호출 가능

// 코드로 프로토타입에 접근하기
// Object.getPrototypeOf, Object.setPrototypeOf 사용
console.log(
  Object.getPrototypeOf({})
);
console.log(
  Object.getPrototypeOf([]) === [].__proto__
);

// 생성자 함수(function 대문자)에서는 prototype으로 프로토타입 접근 가능
function Person (name) {
  this.name = name;
}
// 인스턴스들에 공유될 프로토타입에 다음과 같이 접근
console.log(Person.prototype);
const hong = new Person('홍길동');
console.log(hong);

console.log(
  String.prototype
);
console.log(
  Number.prototype
);
console.log(
  Set.prototype
);
// 생성자 함수로 동작하지 않는 빌트인 객체
console.log(
  Math.prototype
);

// 인스턴스 vs 프로토타입 프로퍼티
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
const chain1 = new YalcoChicken('판교', 3);
// 본사에서 새 업무를 추가
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain1.introEng());
console.log(new YalcoChicken('강남', 17).introEng());

// 메모리 사용을 최소화하려면 아래와 같이 작성
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
}
// 공통된 요소들은 프로토타입 프로퍼티로
YalcoChicken.prototype.titleEng = 'YalcoChicken';
YalcoChicken.prototype.introduce = function () {
  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
}
YalcoChicken.prototype.introEng = function () {
  return `Welcome to ${this.titleEng} at ${this.name}!`;
};
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);
// 인스턴스 레벨과 프로토타입 프로퍼티들 비교
console.log(chain1, chain2, chain3);

// 프로토타입 레벨의 함수를 인스턴스 레벨에서 덮어쓰기 가능
const chain4 = new YalcoChicken('평양', 456);
chain4.introduce = function () {
  return `어서오시라요, ${this.no}호 ${this.name}점입네다!`;
}
console.log(chain4.introduce());

// 클래스에도 적용 가능
class Dog {
  constructor (name) {
    this.name = name;
  }
}
Dog.prototype.sound = '멍멍';
Dog.prototype.bark = function () { // 메서드로 만드는 것과 같음
  console.log(this.sound)
};

const badugi = new Dog('바둑이');
badugi.bark();	
// 프로토타입 확인	
console.log(badugi);


/**
 * 프로토타입과 상속
 */
// Object.create 메서드 - 주어진 것을 프로토타입으로 갖는 객체를 생성
function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}
function Eagle (name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}
Eagle.prototype = Object.create(Bird.prototype);
Eagle.prototype.hunt = function () {
    console.log(`${this.name} ${this.prey} 사냥중`);
}
const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(bird);
console.log(eagle);
console.log(
  eagle instanceof Bird,
  bird instanceof Eagle
);
bird.fly();
eagle.fly();
eagle.hunt();

// 부모의 생성자 활용하기
function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}
function Eagle (name, sound, prey) {
  // call 호출방식 사용
  Bird.call(this, name, sound);
  this.prey = prey
}
Eagle.prototype = Object.create(Bird.prototype);
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(eagle);
eagle.fly();
eagle.hunt();

// 클래스 활용하기
class Bird {
  constructor (name, sound) {
    this.name = name;
    this.sound = sound;
  }
  fly () {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
}
class Eagle extends Bird {
  constructor (name, sound, prey) {
    super(name, sound);
    this.prey = prey;
  }
  hunt () {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }
}
const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(bird);
console.log(eagle);		
bird.fly();
eagle.fly();
eagle.hunt();

//무엇의 인스턴스인지 프로그램상에서 이름으로 파악할 때 유용
console.log(
  Object.getPrototypeOf(bird).constructor.name,
  Object.getPrototypeOf(eagle).constructor.name,
  Object.getPrototypeOf(
    Object.getPrototypeOf(eagle)
  ).constructor.name,
);

// Mixin - Object.assign으로 조립하기
// 여럿을 조합하여 가져올 수 있음
const runner = {
  run : function () {
    console.log(`${this.name} 질주중`);
  }
}
const swimmer = {
  swim: function () {
    console.log(`${this.name} 수영중`);
  }
}
const flyer = {
  fly: function () {
    console.log(`${this.name} 비행중`);
  }
}
const hunter = {
  hunt: function () {
    console.log(`${this.name} 사냥중`);
  }
}
class Owl {
  constructor (name) {
    this.name = name;
  }
}
class FlyingFish {
  constructor (name) {
    this.name = name;
  }
}
class PolarBear {
  constructor (name) {
    this.name = name;
  }
}
Object.assign(Owl.prototype, flyer, hunter);
Object.assign(FlyingFish.prototype, flyer, swimmer);
Object.assign(PolarBear.prototype, runner, swimmer, hunter);
const owl = new Owl('붱돌이');
const f_fish = new FlyingFish('날치기');
const p_bear = new PolarBear('극곰이');
console.log(owl);
console.log(f_fish);
console.log(p_bear);
owl.fly();
owl.hunt();
f_fish.swim();
f_fish.fly();
p_bear.run();
p_bear.swim();
p_bear.hunt();