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

// 특정 프로퍼티의 값 변경 - const임에도 그 내용은 수정할 수 있음에 주목!
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