console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});
console.log('Hi!', 100, true, [1,2,3]);

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

console.log('Hello', '철수');

// 값들을 주머니에 담아 사용하기
const SALUTATION = 'Hello,';
let person = '철수';
console.log(SALUTATION, person);

person = '영희';
console.log(SALUTATION, person);

let d;
console.log(d, typeof d);
d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환
const e = Symbol('hello');
console.log(typeof e); // 이건 나중에

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

// <, <=, >, >= - 사전순 비교
// 일반적으로 사전순(알파벳 순서)은 대문자가 소문자보다 먼저 온다.
console.log(
  'ABC' < 'abc', // 왼쪽 문자열이 오른쪽 문자열보다 사전순으로 앞서면 참
  'apple' <= 'banana',
  '가나다' > '라마바',
  '안녕' >= '안녕'
);
// ⚠️ 숫자 문자열 관련 주의!
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

// 💡 다른 자료형과 더하면 문자열 반환
let result = '안녕' + 1 + true;
result += null;
result += undefined;
console.log(result);
console.log(typeof result);