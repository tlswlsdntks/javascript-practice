수강을 위한 환경 세팅
	개발자 도구 열기
		단축키:
			F12

	콘솔 비우기:
		단축키:
			Ctrl + L

	윈도우 한정 - 브라우저 스크롤바
		크롬:
			주소창에 chrome://flags 입력하여 접속
			scrollbar 검색
			Overlay scrollbars 찾아 Enabled로 변경

	탭 사이즈 && 자동 줄바꿈 설정
		VS Code 설정 창 열기:
			단축키:
				Ctrl + ,

		Tab Size 항목 2로 설정
		Word Wrap 항목 on으로 설정
		Quote Style 항목 single로 설정

	플러그인 설치
		플러그인			설명							비고
		Code Runner		현재 열려 있는 자바스크립트 파일 실행	단축키: Ctrl + Alt + N
		Live Server			새로고침 없이 코딩 중인 웹 업데이트	
		Korean Language Pack	에디터 한글화	
		indent-rainbow		들여쓰기 색으로 구분	
		Bracket Pair Colorizer	여는 괄호와 닫는 괄호 짝 지어줌		⚠️ Deprecated - 내장 기능이 됨
		One Dark Pro		에디터 색 테마					다른 테마도 많음
		Material Icon Theme	탐색기 아이콘 테마				다른 테마도 많음

	💻 Node.js의 REPL (Read Eval Print Loop) 사용해보기
		VS Code 창 열기
		node 로 자바스크립트 명령 입력 모드 진입 후 입력
		모드 종료: 
			단축키:
				Ctrl + C 2회

	Node.js 환경에서 .js 파일로 실행하기
		VS Code에서 프로젝트 폴더 열람
		(원하는 파일명).js 파일 생성
		코드 입력 후 저장
		node (파일명) 로 실행


콘솔 활용하기
	console이란 무엇인가요?
		자바스크립트의 기능 ❌ 환경의 기능 🛑
			자바스크립트 런타임 환경 runtime environment 이란?
				자바스크립트 코드를 실행할 수 있는 소프트웨어
				컴퓨터가 회사라면, 자바스크립트란 언어를 구사하는 직원
				대표적으로 브라우저와 Node.js 등이 있음
				콘솔 등은 자바스크립트 런타임 환경의 기능

			브라우저: 
				🔗 Web API의 기능 중 하나
			Node.js: 
				🔗 디버깅을 위한 모듈 - 브라우저의 콘솔과 유사하게 동작
			아래 코드를 브라우저와 Node.js(REPL, 코드파일 실행)에서 각각 실행
				> console.log(this);

		💡 소프트웨어 외적으로는 영향을 끼치지 않음 - 개발자용 기능
			콘솔을 열어 확인하지 않는 이상 보이지 않음

	흔히 활용되는 console 기능들
 		> console.log('로그 - 기본적인 출력');
		> console.info('로그 - 기능적으로는 log 와 같음. 브라우저에 따라 용도 구분 가능);
		> console.info('로그 - 기능적으로는 log 와 같음. 브라우저에 따라 용도 구분 가능');
		> console.warn('경고 - 문제가 될 수 있는 부분');
		> console.error('오류 - 에러 발생 상황');
 
	주석 comment - 컴퓨터는 무시하는 메시지
		사람에게 보여줄 목적으로 작성
		코드에 대한 설명, 추후 진행해야 할 사항 등...
			console.log('Hello');
			// 사뿐히 즈려밟고 가시옵소서
			// console.log('나를 밟고 가라');
			console.log('World');

		단축키: 
			ctrl + /

		자바스크립트에서 주석을 다는 법
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

		⚡️보다 간편한 방법
			여러 줄이 선택된 상태에서 주석 단축키

		💡 주석은 가능한 많이 달지 않는 것이 좋습니다.
			주석이 많이 필요한 코드 : 나쁜 코드
			주석 없이도 알아보기 쉬운 코드를 짤 것!

	자바스크립트와 세미콜론 (;)
		필요성에 대해 다양한 의견
		본 강좌에서는 붙이는 것으로 진행


변수와 상수 - 데이터를 담는 주머니
	⚠️ 키워드 - var는 역사의 뒤안길로
		키워드 - let과 const를 사용할 것

	I. 데이터를 담는 곳
		console.log('Hello', '철수');
		// 값들을 주머니에 담아 사용하기
		const SALUTATION = 'Hello,';
		let person = '철수';
		console.log(SALUTATION, person);
		person = '영희';
		console.log(SALUTATION, person);
		값의 의미 나타냄
		값의 재활용
		변경되는 상태를 가리키는 식별자

	II. 변수 variable
		담긴 값이 바뀔 수 있는 주머니
		키워드 - let 사용
		💡 브라우저 콘솔에서 줄바꿈: shift + enter
		💡 undefined: '아직 값이 정해지지 않았다' 라는 값 

		1. x란 변수를 선언(주머니 만듦)만 한 뒤 값을 넣음
			let x;
			console.log(x);
			x = 1;
			console.log(x);

		2. 변수 선언과 값 넣기를 동시에 가능 (초기화 - 일반적인 사용법)
			let x = 1;
			console.log(x);
			메모리상으로는 선언과 초기화를 따로 하는 것과 동일
			undefined 할당 후 재할당

		3. 다른 변수가 같은 값을 가질 때
			let x = 1;
			let y = x; // x가 가진 값을 y에 할당
			console.log(x, y);
			⭐ 같은 값이 다른 데이터 영역에 저장되지 않음 메모리절약

		4. x에 1을 넣은 뒤 값을 'Hello!'로 변경
			let x = 1;
			let y = x;
			console.log('변경 전', x, y);
			x = 'Hello!';
			console.log('변경 후', x, y);
			⭐️ C 등의 언어와 달리, 메모리상 가리키는 위치가 변경	
			기존 위치에 새 값을 넣는 것이 아님
			차지하는 자리가 다른 크기의(자료형이 다른) 데이터가 재할당될 수 있으므로

		5. 이미 만들어진 주머니를 다시 만들(재선언) 수 없음
			let x = 1;
			console.log('첫 선언', x);
			let x = 2;
			console.log('다시 선언', x);
			var는 이것이 가능했었음
			브라우저의 콘솔에서는 독립적으로 실행하면 가능 - 특수케이스

		6. 선언하기 전 코드를 사용할 수는 없음
			console.log(xyz);
			let xyz = 1;

	III. 상수 constant
		담긴 값이 바뀔 수 없는 주머니
		키워드 - const 사용
		흔히 대문자로 명명 - 여러 곳에서 사용될 공통 값인 경우
		독립된 시행시 같은 이름의 변수나 상수를 재선언 가능
		단 변수를 상수로, 상수를 변수로 재선언하면 오류 - 새로고침 필요
		강의 진행 편의상 const가 적합함에도 let을 사용하는 부분들 있을 것
			1. 상수를 선언과 동시에 초기화
				const PI = 3.14;
				console.log('원주율:', PI);
			2. 선언하기만 하는 것 불가
				const PI;
				PI = 3.14;
			3. 상수는 값의 변경 불가
				const PI = 3.14;
				PI = 3.14159
				⭐ 값이 바뀔 일이 없는 데이터는 상수로 선언할 것

		💡 여러 변수와 상수 동시에 선언
			// let a = 1;
			// let b = 2;
			// ...
			let a = 1, b = 2, c = 3;
			const X = 4, Y = 5, Z = 6;
			console.log(a, b, c);
			console.log(X, Y, Z);

	IV. 식별자 상수와 변수 등의 이름
		1. 식별자 identifier 명명 규칙
			영문, 한글 및 유니코드(대부분의 문자 표현) 글자, 숫자 사용 가능
			특수문자는 $ 또는 _
			숫자로 시작할 수 없음
			공백(스페이스) 사용 불가

		2. 예약어 reserved words
			변수명이나 상수명으로 쓸 수 없는 것들
			const let = 1;
			let typeof = 2;

		3. 💡 한글 변수/상수명
			예전에는 금기시(?)
			오늘날에는 종종 사용하는 회사 있음
			const 이름 = '홍길동';
			let 나이 = 20;
			console.log(이름, 나이);

	🤖 컴퓨터가 일하는 방식
		CPU: 
			일하는 사람
			컴퓨터의 뇌 - 작업을 진행하는 주체
		보조기억장치 (SSD, HDD): 
			서랍
			상대적으로 저장공간은 넓고 접근속도는 느림
			소프트웨어(코드)가 저장되는 곳
		메모리 (RAM): 
		책상 위 공간
		상대적으로 저장공간은 좁고 접근속도는 빠름
		사람(CPU)이 서랍(보조기억장치)에 든 데이터를 꺼내 올려두고 작업을 하는 공간
		변수와 상수를 비롯한 데이터들이 이곳에 만들어지고 사용됨


자료형 - 데이터의 종류
	자바스크립트의 원시 자료형 (primitive data types)
		담백하게 값 하나만 담는 단순 자료형
		const a = true, b = 123.45, c = '안녕하세요!';

	typeof 연산자:
		뒤에 오는 값의 자료형을 반환
		console.log(a, typeof a); // true boolean
		console.log(b, typeof b); // 123.45 number
		console.log(c, typeof c); // 안녕하세요! string
		let d;
		console.log(d, typeof d); // undefined undefined
		d = null;
		console.log(d, typeof d); // ⚠️ 'object' 반환
		const e = Symbol('hello');
		console.log(typeof e); // symbol, 이건 나중에

	1. 불리언 (boolean)
		참 또는 거짓 (true or false)
		const a = 1 > 2;
		const b = 1 < 2;
		console.log(a, typeof a);
		console.log(b, typeof b);

	2. 숫자 (number)
		자바스크립트에는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
		정수는 2^53 - 1까지 안정적으로 표현 가능 - 더 큰 정수는 이후 배울 BigInt 로
		let integer = 100;
		let real = 12.34;
		let negative = -99;
		console.log(integer, real, negative);

	3. 문자열 (string)
		큰 따옴표, 작은 따옴표, 또는 백틱으로 둘러싸인 텍스트 데이터
		let first_name = "Brendan";
		let last_name = 'Eich';
		let description = `미국의 프로그래머로 자바스크립트 언어를 만들었으며 모질라의 CEO와 CTO를 역임했다.`;
		console.log(first_name, last_name);
		console.log(description);
		🔗 유니코드 문자 - 전 세계의 모든 문자 표현 가능
		💡 typeof의 반환값은 문자열
				console.log(
					typeof (typeof true),
					typeof (typeof 123.45),
					typeof (typeof 'Hello'),
				);

	4. undefined
		값이 부여되지 않은 상태라는 의미
		⭐️ 그러나 undefined도 값임 많은 다른 언어들과 다른 점
		아무 것도 반환하지 않는 구문 - undefined 반환
		let x;
		console.log(typeof x);
		> undefined
		> undefined
		
	5. null
		의도적인 빈 값을 의미
		⭐️ 그러나 null 역시 값임. - "비어있다"란 의미의 값
		let x;
		console.log('값 넣기 전', typeof x); // 값 넣기 전 undefined
		x = null;
		console.log('null값 넣은 후', typeof x); // null값 넣은 후 object

	⚠️ 주의! typeof 가 object 를 반환
		초기 오류 - 객체는 원시타입이 아님
		let x = null;
		console.log(typeof null, typeof x);

	⭐️ null 여부는 아래와 같이 확인할 것
		console.log(x === null);


자료형과 정적, 동적 타입
	자바스크립트는 동적 타입을 가진 언어
		특정 값이 할당된 변수에, 그와 다른 자료형의 값을 넣는 것이 가능
		자유롭지만 그만큼 자료형 관련 오류들에 취약함
		let job = '학생';
		let age = 17;
		console.log(job, age);
		console.log(typeof age);
		// 숫자 값이 들어있던 age에 문자열 값을 넣음
		age = '열일곱';
		console.log(age);
		console.log(typeof age);

	⚠️ 자료형의 다름으로 일어날 수 있는 오류
		특정 자료형에 대해서만 사용될 수 있는 기능 런타임 오류
		// 주어진 문자열을 대문자로 바꾸는 함수
		// 다른 자료형에 대한 예외처리 없음
		function getUpperCase(str) {
			return str.toUpperCase();
		}
		console.log(getUpperCase('hello'));
		// ⚠️ 오류 발생!
		console.log(getUpperCase(1));
 
	의도와 다른 연산 논리 오류
		1 + 1 // 2
		'1' + 1 // '11'


문자열(string) - 텍스트 데이터
	I. 기본 표기방법
		작은따옴표 - ' ~ '
			let word = '안녕하세요! 🙂';
			console.log(word);

		큰따옴표 - " ~ "
			let word = "반갑습니다~ 👋";
			console.log(word);

		💡 문자열 안에 따옴표 사용
			let word1 = '작은따옴표 안에 "큰따옴표" 사용';
			let word2 = "큰따옴표 안에 '작은따옴표' 사용";
			console.log(word1, word2);
			// ⚠️ 오류 발생
			let word1 = '작은따옴표 안에 '작은따옴표' 사용';
			let word2 = "큰따옴표 안에 "큰따옴표" 사용";
			console.log(word1, word2);
 
 		⭐️ 이스케이프 표현(escape sequence)
			let word = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
			console.log(word);
			let word1 = '작은따옴표 안에 \'작은따옴표\' 사용';
			let word2 = "큰따옴표 안에 \"큰따옴표\" 사용";
			console.log(word1, word2);

		📌 자주 사용되는 이스케이프 표현
			이스케이프 표현			대체s
			\'								작은따옴표
			\"								큰따옴표
			\n								줄바꿈
			\t								탭
			\\								백슬래시

		긴 문자열을 여러 줄에 표현
			// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';
			let longName = '김수한무 거북이와 두루미 \
			삼천갑자 동방삭 치치카포 사리사리센타 \
			워리워리 세브리깡 무두셀라 구름이 \
			허리케인에 담벼락 담벼락에 서생원 \
			서생원에 고양이 고양이엔 바둑이 \
			바둑이는 돌돌이';
			// ⚠️ 줄바뀜 되는 것이 아님
			// 큰따옴표도 마찬가지
			console.log(longName);

	II. 백틱 - ` ~ `
		⭐️ 문자열 안에 탭과 줄바꿈 그대로 사용 가능!
		let word = `헬로헬로~ 🤩`;
		console.log(word);
		let word = `안녕하세요~		반갑습니다!
		저는 \\홍길동\\입니다.`;
		console.log(word);
	
		템플릿 리터럴
			${}안에 상수나 변수, 표현식 등을 삽입 가능
			다른 자료형도 사용할 수 있음
			const NAME = '홍길동';
			let age = 20;
			let married = false;
			console.log(
			`제 이름은 ${NAME}, 나이는 ${age}세구요, \
			${married ? '기혼' : '미혼'}입니다.`
			);


문자열에 사용되는 연산자
	I. 비교
		연산자		 의미													비고
		x == y		값이 같다.	
		x === y		자료형도 값도 같다.						 권장
		x != y		값이 다르다.	
		x !== y		자료형 또는 값이 다르다.				권장
		x < y			사전순상 x가 먼저 온다.	
		x <= y		사전순상 x가 먼저 오거나 같다.	
		x > y			사전순상 y 먼저 온다.	
		x >= y		사전순상 y 먼저 오거나 같다.	

		표기방식 구분하지 않음
			console.log(
				'안녕하세요~' === "안녕하세요~",
				'안녕하세요~' === `안녕하세요~`,
				"안녕하세요~" === `안녕하세요~`,
			);

		대소문자 구분
			console.log(
				'Hello!' === 'hello!'
			);

		==, != - 자료형 구분하지 않음 ⭐️ 암묵적 타입 변환
			console.log(
				'1' == '1',
				'1' == 1,
				'1' == 2
			);
			console.log(
				'1' != '1',
				'1' != 1,
				'1' != 2
			);

		===, !== - 자료형 구분
			console.log(
				'1' === '1',
				'1' === 1,
				'1' === 2
			);
			console.log(
				'1' !== '1',
				'1' !== 1,
				'1' !== 2
			);

		<, <=, >, >= - 사전순 비교
			일반적으로 사전순(알파벳 순서)은 대문자가 소문자보다 먼저 온다.
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

	II. 연결
		연산자		의미													부수효과
		x + y		x와 y를 이어붙인 값을 반환	
		x += y	x에 y를 이어붙이고 그 결과를 반환	✅

		1. + 연산자 이항연산자
			let str1 = 'Hello';
			let str2 = ' ' + 'World';
			let str3 = str1 + str2;
			// 부수효과 없음
			console.log(str1);
			console.log(str2);
			console.log(str3);
			// 값 반환
			console.log(str3 + '!!!' + ' ' + '😀');
			// 부수효과 없음
			console.log(str3);
 
		2. += 연산자 할당연산자
			let str1 = '헬로';
			str1 += ' 월드';
			// 부수효과 있음
			console.log(str1);
			// 값 반환
			let str2 = str1 += '~~~';
			// 부수효과 있음
			console.log(str1);
			console.log(str2);
			// ⚠️ 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
			let str = '헬로' += '월드';
			const STR = '안녕~';
			STR += ' 반가워요!';
 
		다수의 문자열 이어붙이기
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

 		💡 다른 자료형과 더하면 문자열 반환
			let result = '안녕' + 1 + true;
			result += null;
			result += undefined;
			console.log(result);
			console.log(typeof result);


숫자(Number)와 관련 연산자
	I. 숫자 자료형으로 표현되는 것
		1. 양과 음의 정수와 실수
			// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
			console.log(
				typeof 100,
				typeof 1.234,
				typeof -5.67
			);
			
		2. 무한대 (Infinity)
			let x = 1 / 0;
			console.log(x, typeof x); // Infinity 'number'
			// Infinity 는 양음이 있음
 			let y = -1 / 0;
			console.log(y, typeof y); // -Infinity 'number'
			let z = Infinity;
			console.log(z, typeof z); // Infinity 'number'
 
		3. 숫자가 아닌 것 (NaN: Not a Number)
			let x = 1 / 'abc';
			let y = 2 * '가나다';
			let z = NaN;
			console.log(x, typeof x); // NaN 'number'
			console.log(y, typeof y);
			console.log(z, typeof z);	
			// NaN 은 양음이 없음
			console.log(-NaN); // NaN 'number'
 
			⭐️ 주어진 값이 NaN인지 여부 확인하는 방법
				let x = 1 / 'abc';
				console.log(
					x,
					x == NaN,
					x === NaN,
					isNaN(x), // 숫자가 아닐 시 true
					Number.isNaN(x) // 보다 엄격한 버전
				);

			isNaN과 Number.isNaN의 차이
				구분							isNaN()												Number.isNaN()
				강제 변환 여부			O (인자를 숫자로 변환 후 검사)		X (인자를 그대로 검사)
				정확성						문자열 등도 NaN 으로 간주 가능		실제 NaN(숫자 자료형)인 지 여부만 판단

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

	II. 연산자
		1. 산술 연산자
			a. 이항 산술 연산자
				+, -, *, /, %, ** 셈의 결과를 반환
				부수효과 없음
				console.log(
					y + 1, // 덧샘
					y - 1, // 뺄셈
					y * 2, // 곱셈
					y / 5, // 나눗셈
					y % 3,  // 나머지
					y ** 2 // 제곱
				);

				// 널리 사용되는 홀수와 짝수의 판별법
				console.log(
					'홀수 ',
					123 % 2,
					55 % 2,
					999 % 2
				);
				console.log(
					'짝수 ',
					2 % 2,
					100 % 2,
					8 % 2
				);

				💡 괄호의 사용
				console.log(
					4 * 1 + 2,
					4 * (1 + 2),
					4 * -(1 + 2),
					-(4 * -(1 + 2))
				);
 
			b. 단항 산술 연산자
				연산자 	반환							부수효과
				a++			값 그대로					1 증가
				++a			1 증가한 값				1 증가
				a--			값 그대로					1 감소
				--a			1 감소한 값				1 감소
				+a			값 그대로					없음
				-a			양음을 반전한 값	 없음

				// 💡 부수효과가 일어나는 시점
				let x = 1;
				console.log(
					+x,
					-x,
					-(-x),
					-(x++),
					-x * -1
				);
				let x = 3;
				let y = 4;
				console.log(x-- * --y, x, y); // 9 2 3

 			💡 문자열을 숫자로 바꿈
				console.log(
					+'100', // 100
					-'100', // -100
					+'abc' // NaN
				);

		2. 할당 산술 연산자 부수효과
			연산자		의미
			x += y		x = x + y
			x -= y		x = x - y
			x *= y		x = x * y
			x /= y		x = x / y
			x %= y		x = x % y
			x **= y		x = x ** y

			let x = 3;
			x += 2;
			console.log(x);
			x -= 3;
			console.log(x);
			x *= 12;
			console.log(x);
			x /= 3;
			console.log(x);
			x %= 5;
			console.log(x);
			x **= 4;
			console.log(x)
			let y = 25;
			console.log(
				y **= 0.5, // 5
				y // 5
			);


부동소수점과 실수계산 오차
	💡 자바스크립트의 number 자료형은 부동소수점 사용
		IEEE 754 표준 double 형식 (64비트)
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
		// ⭐️ 2의 거듭제곱으로 나눈 수의 계산은 정확
		console.log(
			0.25 * 0.5,
			0.5 + 0.25 + 0.125 + 0.125,
			0.0625 / 0.25
		);

	자바스크립트에는 기본 정수 자료형이 없음
		BigInt (내장 객체) - 이후 배울 것

	🧮 정확한 계산이 필요할 때는? - 라이브러리 활용
		이후 모듈 관련 강에서 배울 것


불리언(boolean)과 관련 연산자
	console.log(true, typeof true);
	console.log(false, typeof false);
	let a = 1 === 2;
	let b = 'abc' !== 'def'
	let c = a !== b;
	let d = typeof a === typeof b === true;
	console.log(a, typeof a);
	console.log(b, typeof b);
	console.log(c, typeof c);
	console.log(d, typeof d);

	I. 연산자
		1. 부정 연산자
			console.log(
				true, !true, false, !false
			);
			console.log(
				true, !true, !!true, !!!true
			);
			console.log(
				false, !false, !!false, !!!false
			);
			console.log(
				true === !false,
				!(1 == '1'),
				!(1 === '1'),
				!(typeof false === 'boolean')
			);

		2. AND / OR 연산자
			a. && - AND : 양쪽 모두 true 여부 반환
				console.log(	
					true && true,
					true && false,
					false && true,
					false && false,
				);

			b. || - OR : 한 쪽이라도 true 여부 반환
				console.log(
					true || true,
					true || false,
					false || true,
					false || false,
				);

				let x = 14;
				// x = 6;
				// x = 25;
				console.log(
					(x > 10 && x <= 20) || x % 3 === 0
				);

				💡 드 모르간의 법칙
					let a = true;
					// a = false;
					let b = true;
					// b = false;
					console.log(
						!(a && b) === (!a || !b),
						!(a || b) === (!a && !b)
					); // 💡 항상 true

			💡 단축 평가 short circuit
				&&: 앞의 것이 false 면 뒤의 것을 평가할 필요 없음
				||: 앞의 것이 true 면 뒤의 것을 평가할 필요 없음
				평가는 곧 실행 - 이 점을 이용한 간결한 코드

				💡 연산 부하가 적은 코드를 앞에 - 리소스 절약
					let error = true;
					// error = false;
					// 앞의 것이 true일 때만 뒤의 코드 실행
					error && console.warn('오류 발생!'); // 오류 발생!
					// 앞의 것이 false일 때만 뒤의 코드 실행
					error || console.log('이상 없음.');
				
				⭐️ &&, || 연산자는 값 자체를 반환
					let x = true;
					// x = false;
					let y = x && 'abc'; // 'abc'
					let z = x || 123; // true
					console.log(y, z); // 'abc' true

		3. 삼항연산자 - ~ ? ~ : ~
			let x = true;
			// x = false;
			let y = x ? '참입니다.' : '거짓입니다.';
			console.log(y);

			let num = 103247;
			console.log(
				'num은 3의 배수' +
				(num % 3 === 0 ? '입니다.' : '가 아닙니다.')
			);

			let error = true;
			//error = false;
			error 
				? console.error('오류 발생!') 
				: console.log('이상 없음');

		II. Truthy vs Falsy
			true 또는 false로 평가되는 값들
				1. Truthy
					console.log(
						1.23 ? true : false,
						-999 ? true: false,
						'0' ? true : false,
						' ' ? true : false,
						Infinity ? true : false,
						-Infinity ? true : false,
						{} ? true : false,
						[] ? true : false,
					);
					// ⚠️ true와 `같다`는 의미는 아님
					console.log(
						1.23 == true,
						' ' == true,
						{} == true
					);
 
				2. Falsy
					console.log(
						0 ? true : false,
						-0 ? true : false,
						'' ? true : false,
						null ? true : false,
						undefined ? true : false,
						NaN ? true : false,
					);
					// 💡 어떤 값들은 false로 타입변환됨
					console.log(
						0 == false, // true
						0 === false, // false
						'' == false, // true
						'' === false // false
					);
					console.log(
						null == false,
						undefined == false,
						NaN == false,
					);

				활용예
					let x = 0;
					let y = 1;
					x && x++;
					y && y++;
					console.log(x, y);

					let x = 2;
					let y = 3;
					console.log(
						x % 2 ? '홀' : '짝',
						y % 2 ? '홀' : '짝'
					);

					let x = ''; // false
					let y = '회사원';
					let z = x || y;
					console.log(z); // 회사원

					x = x || '단기알바';
					y = y || '단기알바';
					console.log(x, y); // 단기알바 회사원

			💡 boolean으로 직접변환
				console.log(
					1, -999, 'hello',
					0, '', null
				);

				// 한 번 부정
				console.log(
					!1, !-999, !'hello',
					!0, !'', !null
				);
 
				// ⭐️ 두 번 부정하여 해당 boolean값으로
				console.log(
					!!1, !!-999, !!'hello',
					!!0, !!'', !!null
				);

				let x = 123;
				console.log(
					'x는 홀수인가?',
					!!(x % 2)
				);


연산자 마무리
	I. 기타 연산자들
		1. 쉼표 연산자
			왼쪽부터 차례로 실행, 마지막 것 반환
			let x = 1, y = 2, z = 3;
			console.log(x, y, z); // 1 2 3

			// ⭐️ 마지막으로 실행한 것 반환
			console.log(
				(++x, y += x, z *= y) // 12
			);

		2. ?? - null 병합 연산자
			||와 달리, falsy가 아닌 null 또는 undefined 만 대체
			let x; // undefined
			x ?? console.warn(x, 'x에 값이 없습니다.'); // undefined 'x에 값이 없습니다.'
			x = 0;
			x ?? console.warn(x, 'x에 값이 없습니다.');
			x = null;
			x ?? console.warn(x, 'x에 값이 없습니다.'); // null 'x에 값이 없습니다.'

			let a = false;
			let b = 0;
			let c = '';
			let d = null;
			let e;
			console.log(
				a ?? '기본값', // false
				b ?? '기본값', // 0
				c ?? '기본값', // ''
				d ?? '기본값', // '기본값'
				e ?? '기본값', // '기본값'
			);

			활용예
				let baby1 = '홍길동';
				let baby2; // 아직 이름을 짓지 못함
				const nameTag1 = baby1 ?? '1번 아기';
				const nameTag2 = baby2 ?? '2번 아기';
				console.log(nameTag1, nameTag2); // 홍길동 2번 아기

			병합 할당 연산자들
				let x = 0;
				let y = '';
				let z = null;
				x ||= 100;
				y &&= '있어야 바뀜';
				z ??= '기본값';
				console.log(x, y, z); // 100 '' '기본값'

	II. 연산자의 우선순위
		💡 우선순위 높은순 현재까지 다룬 연산자들 중
			순위	연산자들
			1			!, +, -, ++, --, typeof
			2			**
			3			*, /, %
			4			+, -
			5			<, <=, >, >=
			6			==, !=, ===, !==
			7			&&
			8			||
			9			=, +=, -=, *=, /=, %=, **=, &&=, ||=, ??=
			10		,

			let x = 1;
			let y = 19 === 3 + 4 * 2 ** ++x;
			console.log(y); // true

			console.log(
				2 > 3 || 4 % 2 === 0, // true
				2 > (3 || 4) % 2 === 0, // false
				2 > 3 || 4 % (2 === 0) // NaN
			);


객체와 배열 미리보기
	💡 객체와 배열은 원시타입이 아닌 참조 reference 타입
		앞서 다룬 자료형들은 원시 primitive 타입
		둘의 차이는 다음 강에서 다룰 것

	I. 객체 미리보기
		자바스크립트에서 원시 타입이 아닌 모든 데이터는 근본적으로 객체
		복합적인 정보를 프로퍼티 property - (키와 값의 조합)으로 저장하는 자료형
		const person1 = {
			name: '김철수',
			age: 25,
			married: false
		};
		console.log(typeof person1); // object 
		console.log(person1); // {"name": "김철수", "age": 25, "married": false}

		1. 프로퍼티 접근
			💡 속성값에 접근하는 두 방법
				console.log(
					person1.name,
					person1.age,
					person1.married
				);
				console.log(
					person1['name'], // 속성명을 string으로
					person1['age'],
					person1['married'],
				);
 
			💡 존재하지 않는 키로 접근시 undefined 반환
				console.log(person1.birthdate); // undefined
				console.log(person1['job']); // undefined

			(키) in (객체) - 특정 키 포함 여부 확인
				console.log(
					'age' in person1, // true
					'job' in person1 // false
				);

		2. 프로퍼티 수정 및 추가
			// 특정 프로퍼티의 값 변경 - 💡 const임에도 그 내용은 수정할 수 있음에 주목!
			person1.age = 26;
			person1['married'] = true
			console.log(person1);

			// 새 프로퍼티 추가
			person1.job = 'developer';
			person1['bloodtype'] = 'AB'
			console.log(person1);
			
	II. 배열 미리보기
		const winners = [12, 592, 7, 48];
		const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
		// 자료형에 관계없이 한 배열에 넣을 수 있음
		const randoms = ['홍길동', -24, true, null, undefined];
		console.log(typeof winners);
		console.log(winners, weekdays, randoms);
		
		1. 값과 길이 접근
			// 특정 순서의 값에 접근하는 법 (0부터 시작)
			console.log(winners[0], weekdays[6], randoms[3]);

			// 배열의 길이(요소의 갯수)를 얻는 법
			console.log(winners.length, weekdays.length, randoms.length);

			// 마지막 요소 얻기
			console.log(winners[winners.length - 1]);

		2. 수정 및 추가 - 💡 const임에도 그 내용은 수정할 수 있음에 주목!
			기타 방법들은 배열 섹션에서 배우게 될 것
			// 특정 위치의 값 수정
			const numbers = [1, 2, 3];
			numbers[2] = 5;
			console.log(numbers); // [1, 2, 5]

			// 맨 끝에 값 추가
			numbers.push(10);
			console.log(numbers); // [1, 2, 5, 10]

		💡 배열의 범주 너머로 접근 시 undefined 반환
			const winners = [12, 592, 7, 48];
			console.log(winners[winners.length]); // undefined

		⭐️ 중첩 사용 가능
			const person2 = {
				name: '김달순',
				age: 23,
				languages: ['Korean', 'English', 'French'],
				education: {
					school: '한국대',
					major: ['컴퓨터공학', '전자공학'],
					graduated: true,
				}
			};
			console.log(person2.languages[2]); // French
			console.log(person2.education.graduated); // true

			const groups = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
			const weapons = [
				{ name: '롱소드', damage: 30, design: ['화룡검', '뇌신검'] },
				{ name: '활', damage: 12 },
				{ name: '워해머', damage: 48 },
			];
			console.log(groups[1][2]); // 5
			console.log(weapons[2].damage); // 48
			console.log(weapons[0].design[0]); // 화룡검


원시 타입 vs 참조 타입
	I. 값 복사 결과 비교
		1. 원시 타입 - 값에 의한 복사 copy by value
			let number1 = 1;
			let string1 = 'ABC';
			let bool1 = true;
			let number2 = number1;
			let string2 = string1;
			let bool2 = bool1;

			number2 = 2;
			string2 = '가나다';
			bool2 = false;
			console.log('~1:', number1, string1, bool1); // ~1: 1 ABC true
			console.log('~2:', number2, string2, bool2); // ~2: 2 가나다 false

		2. 참조 타입 - 참조에 의한 복사 copy by reference
			객체
				const obj1 = {
					num: 1, str: 'ABC', bool: true
				};
				const obj2 = obj1;
				// obj2 = {}; // ⚠️ 오류
				console.log('obj1:', obj1);
				console.log('obj2:', obj2);

				// ⭐️ const임에도 내부 값은 변경 가능함 주목
				// 내부 변경 방지는 이후 배울 Object.freeze 함수로
				obj2.num = 2;
				obj2.str = '가나다';
				obj2.bool = false;
				console.log('obj1:', obj1); // obj1: {num: 2, str: '가나다', bool: false}
				console.log('obj2:', obj2); // obj2: {num: 2, str: '가나다', bool: false}

			배열
				const array1 = [1, 'ABC', true];
				const array2 = array1;
				// array2 = []; // ⚠️ 오류
				console.log('array1:', array1);
				console.log('array2:', array2);

				// ⭐️ const임에도 내부 값은 변경 가능함 주목
				array2[0] = 3;
				array2[1] = 'def';
				array2[2] = false;
				console.log('array1:', array1); // array1: (3) [3, 'def', false]
				console.log('array2:', array2); // array2: (3) [3, 'def', false]

	II. 메모리 상세
		1. 원시 타입
			let number1 = 1;
			number2 = number1;
			number2 = 2;
			console.log(number1, number2); // 1 2

		2. 참조 타입
			a. 객체
				const obj1 = {
					num: 1,
					str: 'ABC',
					bool: true
				};
				const obj2 = obj1;
				obj2.num = 2;
				console.log(obj1); // {num: 2, str: 'ABC', bool: true}
				console.log(obj2); // {num: 2, str: 'ABC', bool: true}

			b. 배열
				const array1 = [1, 'ABC', true];
				const array2 = array1;
				array2[1] = '가나다';
				console.log(array1); // (3) [1, '가나다', true]
				console.log(array2); // (3) [1, '가나다', true]

		💡 콜스택/메모리힙 구조, 데이터 저장/참조 원리
			https://charming-kyu.tistory.com/19


블록문과 스코프
	블록문
		0개 이상의 문(statement)들을 묶은 단위
		일반적으로, 이후 배울 제어문, 함수 등에 사용
		{
			console.log('블록문');
		}
			
	스코프 (scope)
		블록 안에 선언된 변수와 상수를 밖에서 사용 불가
			{
				const x = 'Hello';
				let y = 'world!';
				console.log(x, y); // Hello world!
			}
			console.log(x); // x is not defined
			console.log(y);

		블록 안쪽에서는 바깥의 것 사용 가능
			let x = 1;
			{
				let y = 2;
				console.log(x, y); // 1 2
			}
			console.log(x); // 1
			console.log(y); // y is not defined
		
		블록 안쪽에 변수나 상수가 새로 선언되면 바깥 것을 덮어씀
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

	스코프 체인 (scope chain)
		🥞 스택 stack
			후입선출 - 나중에 온 것이 먼저 나감
		
		블럭 안에 해당 변수/상수가 없으면 바깥쪽으로 찾아 나감 - 체이닝
			let a = 0;
			let b = 1;
			let c = 2;
			console.log('시점 1:', a, b, c); // 시점 1: 0 1 2
			{
				let a = 'A';
				let b = 'B'
				console.log('시점 2:', a, b, c); // 시점 2: A B 2
				{
					let a = '가'
					console.log('시점 3:', a, b, c); // 시점 3: 가 B 2
				}
				console.log('시점 4:', a, b, c); // 시점 4: A B 2
			}
			console.log('시점 5:', a, b, c); // 시점 5: 0 1 2

	전역 global 변수/상수
		데이터 data 영역에 위치
		코드 어느 곳에서든 접근 가능 - 블록 내 동명의 변수나 상수에 덮어씌워지지 않는 이상
		프로그램 종료시 소멸
		⭐️ 전역변수 사용은 최소화할 것

	지역 local 변수/상수
		stackw 영역에 위치
		해당 블록 안에서만 접근 가능
		블록 실행 종료시 소멸
		⭐ 변수나 상수는 가능한 사용할 블록 내에서 선언 - 메모리 절약