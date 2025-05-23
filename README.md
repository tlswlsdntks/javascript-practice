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
				console.log(this);

		💡 소프트웨어 외적으로는 영향을 끼치지 않음 - 개발자용 기능
			콘솔을 열어 확인하지 않는 이상 보이지 않음

	흔히 활용되는 console 기능들
 		console.log('로그 - 기본적인 출력');
		console.info('로그 - 기능적으로는 log 와 같음. 브라우저에 따라 용도 구분 가능);
		console.info('로그 - 기능적으로는 log 와 같음. 브라우저에 따라 용도 구분 가능');
		console.warn('경고 - 문제가 될 수 있는 부분');
		console.error('오류 - 에러 발생 상황');
 
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
			한 줄 짜리 주석
			console.log('Hello'); // 이렇게 코드 옆에 다는 것도 가능
			
			여러줄 주석
			/*
		  		주석은 이와 같이 여러 줄에 걸쳐 작성할 수도 있습니다.
		  		console.log('안찍힘');
		  		console.log('이것도 안찍힘');
		  		장문의 주석을 달거나 위와 같이 코드의 일부를 주석처리하여 비활성화하는 등의 목적으로 사용됩니다.
			*/
			console.log('찍힘');
			console.log('찍힘');

	자바스크립트와 세미콜론 (;)
		필요성에 대해 다양한 의견
		본 강좌에서는 붙이는 것으로 진행


변수와 상수 - 데이터를 담는 주머니
	⚠️ 키워드 - var는 역사의 뒤안길로
		키워드 - let과 const를 사용할 것

	I. 데이터를 담는 곳
		console.log('Hello', '철수');
		const SALUTATION = 'Hello,';
		let person = '철수';
		console.log(SALUTATION, person);
		person = '영희';
		console.log(SALUTATION, person);

	II. 변수 variable
		담긴 값이 바뀔 수 있는 주머니
		키워드 - let 사용
		💡 브라우저 콘솔에서 줄바꿈: shift + enter
		💡 undefined: '아직 값이 정해지지 않았다' 라는 값 

		1. x란 변수를 선언(주머니 만듦)만 한 뒤 값을 넣음
			let x;
			x = 1;

		2. 변수 선언과 값 넣기를 동시에 가능 (초기화 - 일반적인 사용법)
			let x = 1;
			console.log(x);

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
		
		function getUpperCase(str) { // 주어진 문자열을 대문자로 바꾸는 함수
			return str.toUpperCase(); // 다른 자료형에 대한 예외처리 없음
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


if / else
	if문
		const open = true;
		// 한줄 코드
		if (open) console.log('영업중입니다.');
		// 여러줄 코드 - 블록문 사용
		if (open) {
			console.log('환영합니다.');
			console.log('즐거운 쇼핑하세요!');
		}

	if ~ else문
		const x = 20;
		if (x % 2) {
			console.log('홀수입니다.');
		} else {
			console.log('짝수입니다.');
		}

	중첩 사용
		const x = 22;
		if (x % 4) {
			if (x % 2) {
				console.log('홀수입니다.');
			} else {
				console.log('짝수입니다.');
			}
		} else {
			console.log('4의 배수입니다.');
		}

	if ~ else if ~문
		const x = 21;
		if (x % 2) {
			console.log('홀수입니다.');
		} else if (x % 4) {
			console.log('짝수입니다.');
		} else {
			console.log('4의 배수입니다.');
		}

	⭐ 보다 권장되는 방식
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
		console.log('블록문 바깥');
		💡 return: 함수 실행을 완전히 종료


switch
	특정 값에 대한 다수의 옵션이 있을 때 사용
	
	주어진 평가에 일치하는 case로 실행위치 이동
		const fingersOut = 2;
		switch (fingersOut) {
			// 순서 상관없음
			case 2:
				console.log('가위');
				break;
			case 0:
				console.log('바위');
				break;
			case 5:
				console.log('보');
				break;
			default:
				console.log('무효');
		}
		break; 들을 제거하고 실행해볼 것
		default: 맨 아래 작성, break 되지 않은 이상 무조건 실행

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
		break;들을 제거하고 실행해볼 것

		💡 참고: 객체를 사용한 방법
		const direction = 'north'
		const directionKor = {
			north: '북',
			south: '남',
			east: '동',
			west: '서'
		}[direction] ?? '무효'
		console.log(directionKor);

		const month = 1;
		let season = '';
		switch (month) {
			case 1: case 2: case 3:
				season = '1분기'; break;
			case 4: case 5: case 6:
				season = '2분기'; break;
			case 7: case 8: case 9:
				season = '3분기'; break;
			case 10: case 11: case 12:
				season = '4분기'; break;
			default: 
				season = '잘못된 월입니다.';
		}
		console.log(season);

		const startMonth = 1;
		let holidays = '분기 내 휴일:';
		switch (startMonth) {
			case 1:
				holidays += ' 설날';
			case 2:
			case 3:
				holidays += ' 3•1절';
				break;
			case 4:
			case 5:
				holidays += ' 어린이날';
			case 6:
				holidays += ' 현충일';
				break;
			case 7:
			case 8:
				holidays += ' 광복절';
			case 9:
				holidays += ' 추석';
				break;
			case 10:
				holidays += ' 한글날';
			case 11:
			case 12:
				holidays += ' 크리스마스';
				break;
			default: 
				holidays = '잘못된 월입니다.';
		}
		console.log(holidays);


for 루프
	I. for문 사용법
		괄호 안의 3개의 식에 따른 반복 수행
		변수의 선언 및 할당; 종료조건(부재 시 항상 참); 참일 시 블록 안의 코드 실행
		// 💡 변수이므로 let 이 사용됨
		for (let i = 0; i < 5; i++) {
			console.log(i);
		}

		for (let i = 0; i < 5;) {
			console.log(i++); // ++i 로 바꿔볼 것
		}

		for (let i = 10; i >= 0; i-= 2) {
			console.log(i);
		}
 
		💡 중첩 사용
			두 스택의 스코프가 쌓이는 것
			for (let i = 1; i <= 9; i++) {
				for (let j = 1; j <= 9; j++) {
					console.log(`${i} * ${j} = ${i * j}`);
				}
			}

		둘 이상의 변수 사용
			for (let x = 0, y = 10; x <= y; x++, y--) {
				console.log(x, y);
			}

			for (
				let x = true, y = 0, z = 0;
				y * z < 10;
				x = !x, x ? y++ : z++
			) {
				console.log(y, z);
			}


		⭐ 무한루프 - 실행 시 브라우저가 멈출 수 있음
			let x = 0;
			for (;;) {
				console.log(x);
			}
			console.log('출력 안됨');

			for (let i = 0; i < 10; i++) {
				console.log(i--);
			}
			console.log('출력 안됨');

		💡 객체와 배열의 for문
			객체: 
				for (키 이름 in 객체명) - 객체의 키들을 순서대로 반환
				const lunch = {
					name: '라면',
					taste: '매운맛',
					kilocalories: 500,
					cold: false
				}
				for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
					console.log(key, ':', lunch[key])
				}

			배열: 
				// 💡 정확히는 이터러블 iterable (배열도 그 일종)에 사용됨 이후 배울 것
				for (항목 of 배열명) - 배열의 항목들을 순서대로 반환
				for (const item of [1, '가나다', false, null]) {
					console.log(item);
				}

				💡 for ... of 문의 장점
					const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
					const numbers2 = [];
					for (let num of numbers1) {
						num++; // ⚠️ 복사된 값
						numbers2.push(num + 1);
					}
					console.log(numbers1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					console.log(numbers2); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

					for (let i = 0; i < numbers1.length; i++) {
						numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
					}
					console.log(numbers1); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
					console.log(numbers2); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

	II. continue와 break
		1. continue - 한 루프를 건너뜀
			for (let i = 1; i <= 10; i++) {
				if (i % 3 === 0) continue;
				console.log(i);
			}
			console.log('for 루프 종료');

		2. break - 블록을 종료하고 빠져나옴
			for (let i = 1; i <= 10; i++) {
				if (i === 5) break;
				console.log(i);
			}
			console.log('for 루프 종료');

		3. label - 중첩된 반복문을 명명하여 continue 또는 break에 사용
			널리 사용되지는 않음
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


while과 do while
	while - 조건이 참인 동안 반복수행
		let x = 0;
		while (x < 10) {
			console.log(x++);
		}

		💡 무한루프
		let x = 0;
		while (x < 10) {
			console.log(x);
		}

		// 인위적인 무한반복에 널리 쓰이는 코드
		while (true) {
			console.log('무한반복');
		}

		// break문으로 무한반복 탈출 가능
		let x = 0;
		while (true) {
			if (x++ >= 5) break;
			console.log(x);
		}

	continue와 break 사용
		// 1, 3, 5, 7을 의도한 코드. 그러나...
		// ⚠️ 무한루프! 왜일까요?
		let x = 0;
		while (x < 14) {
			if (x % 2 === 0) continue;
			if (x > 7) break;
			console.log(x++);
		}

		// 짧게 짠 수정 코드
		let x = 0;
		while (x < 14) {
			if (x++ % 2 === 0) continue;
			if (x > 8) break;
			console.log(x - 1);
		}
 
		// 가독성 위주로 짠 코드
		// 코드에 의도가 드러나도록
		let x = 0;
		while (x < 14) {
			const toContinue = x % 2 === 0;
			const toBreak = x > 7;
			const xNow = x++;

			if (toContinue) continue;
			if (toBreak) break;
			console.log(xNow);
		}
 
 		// 더 짧고도 직관성을 유지한 코드의 예
		let x = 0;
		while (x < 14) {
			const xNow = x++;

			if (xNow % 2 === 0) continue;
			if (xNow > 7) break;
			console.log(xNow);
		}

	do while - 일단 수행하고 조건을 평가
		let x = 12;
		do {
			x++
		} while (x < 10);
		console.log(x); // 13


함수의 의미와 사용법
	💡 기본 문법
		function 함수명 (입력값) {
			// 수행할 일
			return 반환값 // 있을 시
		}
		함수명(입력값);

	I. 함수를 사용한다는 것
		1. 반복될 수 있는 작업을 정의해두는 것
			// 함수 사용 전
			let a = 3, b = 4;
			console.log(`${a} + ${b} = ${a + b}`);
			console.log(`${a} - ${b} = ${a - b}`);
			console.log(`${a} * ${b} = ${a * b}`);
			console.log(`${a} / ${b} = ${a / b}`);

			// 함수 사용 후
			function allArithemics (x, y) {
				console.log(`${x} + ${y} = ${x + y}`);
				console.log(`${x} - ${y} = ${x - y}`);
				console.log(`${x} * ${y} = ${x * y}`);
				console.log(`${x} / ${y} = ${x / y}`);
			}
			let a = 3, b = 4;
			allArithemics(a, b);

		2. input을 받아 output을 반환 return 하는 것
			function add(x, y) {
				return x + y; // ⭐️ 값을 반환
			}
			let z = add(2, 3);
			console.log(z);
			console.log(add(4, 5));
			console.log(
				add(add(6, 7), add(8, 9))
			);

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

			a. input으로 받는 값 - 인수와 인자(일반적으로는 굳이 구분하지 않고 혼용해서 사용함)
				function add(x, y) {
					// x, y를 인자 또는 매개변수(parameter)라 부름
					return x + y;
				}
				// a, b를 인수(argument)라 부름
				let z = add(2, 3);

			b. 꼭 인자를 받거나 값을 반환하는 것은 아님
				let currentTemp = 24.5;
				function logCurrentTemp () {
					console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
					return `${currentTemp}`;
				}
				console.log('반환값:', logCurrentTemp()); // 반환값: undefined
				💡 undefined가 뜨는 이유
					return 문이 정의되어 있지 않으면 undefined 반환

			c. ⭐️ return문은 꼭 마지막에
				function add (x, y) {
					console.log(`${x}와 ${y}를 더합니다.`);
					return x + y;
					console.log(`결과는 ${x + y}입니다.`);
				}
				console.log(add(2, 7));

			d. 💡 호이스팅 hoisting
				// 함수는 실행문보다 나중에 정의하는 것이 가능
				// 변수나 상수는 불가능! (var 제외)
				console.log(add(2, 7));
				function add (x, y) {
					return x + y;
				}
 
	II. 함수를 정의하는 방법들
		1. 함수 선언
			function add (x, y) {
				return x + y;
			}
			console.log(add(2, 7));

		2. 상수나 변수에 함수 대입 함수도 값 - ⚠️ 상수나 변수에 함수를 대입한 방법으로는 호이스팅되지 않음
			const sub = function (x, y) {
				return x - y;
			}
			console.log(sub(7, 2));

			// 💡 기존의 함수를 재정의하는것도 가능
			add = function (x, y) {
				console.log(`${x}와 ${y}를 더합니다.`);
				console.log(`결과는 ${x + y}입니다.`);
				return x + y;
			}
			console.log(add(2, 7));

		3. 화살표 함수 - ⚠️ 화살표 함수 방법으로 선언한 함수는 호이스팅되지 않음
			⚠️ 화살표 함수는 function 선언 함수와 기능 차이가 있음 이후 다름
			// 인자가 하나일 때는 괄호 없이 선언 가능
			const pow = x => x ** 2;
			console.log(pow(3));

			// 인자가 둘 이상이며, 한 줄 안에 값만 반환 시
			const mul = (x, y) => x * y;
			console.log(mul(2, 7));

			// 두 줄 이상의 작업이 있을 시
			const mul = (x, y) => {
				console.log(`${x}와 ${y}를 곱합니다.`);
				console.log(`결과는 ${x * y}입니다.`);
				return x * y;
			};
			console.log(mul(2, 7));

		💡 함수 생성 시점이 다르기 때문에 2번과 3번 방법으로 선언한 함수는 호이스팅되지 않음
			1번 방법으로 정의된 함수는 엔진의 코드 실행 이전 미리 생성됨
			console.log(div(8, 4));
			const div = function (x, y) {
				return x / y;
			}

			console.log(div(8, 4));
			const div = (x, y) => x / y;


일급 객체
	일급 객체 (First Class Object)
		다른 객체와 동일하게 취급될 수 있는 객체를 의미
		함수를 변수와 같이 다루는 언어에 있는 개념
		자바스크립트의 함수, 일급 객체 함수는 기본적으로 객체
		// ⭐️ 함수의 자료형
		function addNumbers (a, b) { return a + b; }
		console.log(typeof addNumbers); // function
		console.log(addNumbers instanceof Object); // true

	일급 객체의 특성
		상수 또는 변수에 '할당' 될 수 있음
		다른 함수에 '인자로 전달' 될 수 있음
		다른 함수의 결과값으로서 '반환' 될 수 있음

		I. 할당
 			// 함수도 객체와 배열처럼 참조타입
				function isOddNum (number) {
					console.log((number % 2 ? '홀' : '짝')+ '수입니다.');
					return number % 2 ? true : false;
				};
				const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의
				console.log(checkIfOdd); // ƒ
				checkIfOdd(23) // 홀수입니다.

				let x = 7, y = 3;
				let add = (a, b) => a + b;
				let sub = (a, b) => a - b;
				console.log(add(x, y), sub(x, y)); // 10 4

			💡 객체와 배열의 값으로도 할당 가능
				let person = {
					name: '홍길동',
					age: 30,
					married: true,
					introduce: function (formal) {
						// 객체의 함수 프로퍼티를 메서드(method) 라고 불렀음
						// ⚠️ ES6부터는 메서드의 정의가 달라짐 - 이후 배울 단축 표현 메서드만 가리킴
						return formal
						? '안녕하십니까. 홍길동 대리라고 합니다.'
						: '안녕하세요, 홍길동이라고 해요.';
					}
				};
				console.log(person.introduce(true)); // 안녕하십니까. 홍길동 대리라고 합니다.
				console.log(person.introduce(false)); // 안녕하세요, 홍길동이라고 해요.
 				
			⭐️ 객체에 함수 프로퍼티를 포함할 때 기억할 것
				화살표 함수로 바꾸고 실행해보기
				let person = {
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

		II. 인자로 전달
			함수가 다른 함수를 인자로 전달받음
				전달 받는 함수 : 고차 함수 (highter-order function)
				전달 되는 함수 : 콜백 함수 (callback function)
				
				let list = [1, 2, 3, 4, 5];
				function doInArray (list, func) {
					for (item of list) {
						func(item);
					}
				}
				// console이란 객체에서 log란 키에 할당된 함수
				console.log // ƒ log() { [native code] }
				doInArray(list, console.log);
				doInArray : 고차 함수
				console.log : 콜백 함수

			인자로 전달된 함수들 : 변수나 상수에 할당되지 않아 이름이 없음 - 익명 함수 (anonymous function)
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
				calcAndEval : 고차 함수
				add, sub, mul, isOdd, isPositive : 콜백 함수
				💡 이후 섹션의 함수형 프로그래밍에 유용하게 사용됨

		III. 결과값으로 반환
			function getIntroFunc (name, formal) {
				return formal
				? function () {
					console.log(`안녕하십니까, ${name}입니다.`);
				} : function () {
					console.log(`안녕하세요~ ${name}이라고 해요.`);
				}
			}
			const hongIntro = getIntroFunc('홍길동', true);
			const jeonIntro = getIntroFunc('전우치', false);
			hongIntro(); // 안녕하십니까, 홍길동입니다.
			jeonIntro(); // 안녕하세요~ 전우치이라고 해요.

			// cal
			const add = (a, b) => a + b;
			const sub = (a, b) => a - b;
			const mul = (a, b) => a * b;
			const div = (a, b) => a / b;

			function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
				return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
			}

			const add_mul_sub = comb3ArmFuncs(add, mul, sub);
			const mul_add_div = comb3ArmFuncs(mul, add, div);
			const div_add_mul = comb3ArmFuncs(div, add, mul);
			console.log(
				add_mul_sub(10, 4), // 52
				mul_add_div(10, 4), // 11
				div_add_mul(10, 4)	// 26
			);

		💡 커링 (currying)
			필요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 인자로 받는 다른 함수를 반환
			// 기존의 코드
			function addMultSub (a, b, c, d) {
				return (a + b) * c - d;
			}
			const addMultSub2 = (a, b, c, d) => (a + b) * c - d;
			console.log(
				addMultSub(2, 3, 4, 5),
				addMultSub2(2, 3, 4, 5),
			);

			// ⭐ 커링으로 작성된 함수
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
			const curryAddMultSubFrom2 = curryAddMultSub2(2);
			const curryMultSubFrom5 = curryAddMultSub2(2)(3);
			const currySubFrom20 = curryAddMultSub2(2)(3)(4);
			console.log(curryAddMultSubFrom2);
			console.log(curryMultSubFrom5);
			console.log(currySubFrom20);
			console.log(
				curryAddMultSubFrom2(3)(4)(5),
				curryMultSubFrom5(4)(5),
				currySubFrom20(5)
			);

		⭐️ 하나의 함수는 한 가지 일만 하도록
			하나의 함수가 여러 일을 수행하면 이후 코드를 수정하기 복잡해짐
			각자 하나의 일을 하는 여러 함수들의 조합을 사용할 것


매개변수
	💡 함수의 매개변수 갯수를 넘어가는 인수
		function add(a, b) {
			return a + b;
		}
		console.log(
			add(1, 3),
			add(1, 3, 5), // 오류를 일으키지 않고 무시됨
			add(1, 3, 5, 7) // 오류를 일으키지 않고 무시됨
		);

	I. 기본값 매개변수 default parameter
		function add(a = 2, b = 4) {
			console.log(`${a} + ${b}`);
			return a + b;
		}
		console.log(
			add(),
			add(1),
			add(1, 3)
		);

	II. arguments - 함수 내에서 사용가능한 지역 변수
		배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작
		함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐
		function add(a, b) {
			console.log('1.', arguments); // {"0": 1, "1": 3, "2": 5, "3": 7}
			console.log('2.', arguments[0]); // 1
			console.log('3.', typeof arguments); // object
			return a + b;
		}
		console.log(
			'4.', add(1, 3, 5, 7)
		);

		for ... of가 가능한 이유: iterable이기 때문 이후 다룸
			function add(a, b) {
				for (const arg of arguments) {
					console.log(arg);
				}
				return a + b;
			}
			console.log(
				add(1, 3, 5, 7)
			);
		
		화살표 함수로 바꾸어 실행해 볼 것
		⚠️ 화살표 함수에서는 arguments 사용 불가! 
			let add = (a, b) => {
				for (const arg of arguments) { // arguments is not defined
					console.log(arg);
				}
				return a + b;
			}
			console.log(
				add(1, 3, 5, 7)
			);

		활용예
			function getAverage() {
				let result = 0;
				for (const num of arguments) {
					result += num;
				}
				return result / arguments.length;
			}
			console.log(
				getAverage(1, 4, 7),
				getAverage(24, 31, 52, 80)
			);

			// 💡 타입에 안전한 버전
			function getAverage() {
				let result = 0, count = 0;
				for (const num of arguments) {
					if (typeof num !== 'number') continue;
					result += num;
					count++;
				}
				return result / count;
			}
			console.log(
				getAverage(2, '가', 8, true, 5)
			);

			// ♻️ 새로고침 후 실행
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

	III. ...변수그룹명 - 나머지 변수 (rest parameters)
		특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때
		arguments와는 달리 실제 배열임
		⚠️ 마지막 인자로만 사용 가능
		console.log(
			'3.',
			classIntro(3, '김민지', '영희', '철수', '보라')
		); // 호이스팅
		function classIntro (classNo, teacher, ...children) {
			console.log('1.', children);
			console.log('2.', arguments);

			let childrenStr = '';
			for (const child of children) {
				if (childrenStr) childrenStr += ', ';
				childrenStr += child;
			}
			return `${classNo}반의 선생님은 ${teacher}, 학생들은 ${childrenStr}입니다.`;
		}

		const add = (a, b) => a + b;
		const sub = (a, b) => a - b;
		const mul = (a, b) => a * b;
		const div = (a, b) => a / b;
		function doMultiArms (x, y, ...arms) {
			let result = x;
			for (const arm of arms) {
				if (typeof arm !== 'function') continue;
				result = arm(result, y);
			}
			return result;
		}
		console.log(
			doMultiArms(8, 3, add, mul, 1, true),
			doMultiArms(8, 3, add, mul, sub),
			doMultiArms(8, 3, add, mul, sub, div),
			doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y)
		);
 

함수 더 알아보기
	I. 중첩된 함수
		function outer () {
			const name = '바깥쪽'
			console.log(name, '함수'); // 바깥쪽 함수
			
			function inner () {
				const name = '안쪽'
				console.log(name, '함수'); // 안쪽 함수
			}
			inner();
		}
		outer();

		function addMulSub (x, y) {
			const add = (a, b) => a + b;
			const sub = (a, b) => a - b;
			const mul = (a, b) => a * b;
			return sub(mul(add(x, y), y), y);
		}
		console.log(addMulSub(8, 3)); // 30

	II. 재귀 함수 recursive function
		스택이 넘치면 stack overflow - 오류 발생

		function upto5 (x) {
			console.log(x);
			if (x < 5) {
				upto5(x + 1);
			} else {
				console.log('---');
			};
		}
		upto5(3); // 3 4 5 ---
		
		💡 팩토리얼 factorial 재귀함수
			function fact(x) {
				return x === 0 ? 1 : x * fact(x - 1);
			}
			console.log(fact(3)) // 6

		재귀 함수
			function sum(n) {
				if (n === 0) return 0;
				return n + sum(n - 1);
			}

		꼬리 재귀 함수
			function sumTail(n, acc = 0) {
				if (n === 0) return acc;
				return sumTail(n - 1, acc + n);
			}

		재귀 함수와 꼬리 재귀 함수의 핵심 차이점
		구분			일반 재귀														꼬리 재귀
		연산위치	 재귀 호출 후에 + 연산 수행						재귀 호출이 마지막 작업, 연산 없음
		스택 			사용 호출 스택이 계속 쌓임						최적화 가능 시, 스택 사용 적음
		성능			깊은 재귀 시 스택 오버플로우 가능			 최적화 시, 반복문처럼 동작하여 안전
		
	III. 즉시 실행 함수 - IIFE (Immideately Invoked Function Expression)
		오늘날에는 잘 사용되지 않음 - 과거 코드 분석을 위해...
		딱 한 번만 사용될 함수에
		전역 변수들을 사용하지 않고, 복잡한 기능을 일회성으로 실행할 때
		다른 코드들과의 변수명이나 상수명 충돌을 막기 위함 (특히 많은 코드들이 사용될 때)

		💡 무엇에 사용되었는가?
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

		💡 오늘날
		오늘날에는 블록과 이후 배울 모듈의 사용으로 대체
		이전의 var는 블록 외에서 사용될 수 있었음(‼️)
			let initialMessage;
			{
				// const month = 8; // 새로고침 후 const를 var로 바꾸고 실행해볼 것
				var month = 8; // ⚠️ var를 사용함에 주목
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
			console.log(month); // 8

	IV. ⭐️ 불변성 (immutability)
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

		원시 타입: 
			인자로 들어간 함수 내에서의 변경에 영향 받지 않음
			실제 값이 아니라 복사된 값이 들어갔기 때문
		
		참조 타입: 
			인자로 들어간 함수 내에서 요소가 변하면 실제로도 변함
			복사된 값도 같은 객체나 배열을 가리키기 때문

		⭐️ 함수에 주어진 인자를 변경하는 것은 좋지 않음
		⚠️ 외부의 환경을 변경하는 함수는 위험!
		이상적인 함수: 
			받은 값들만 처리하여 새 값을 반환


객체의 기본 사용법들
	I. 객체 생성과 프로퍼티 접근
		const food1 = {
			name: '햄버거',
			price: 5000,
			vegan: false
		};
		console.log(food1);
		console.log(
			food1.name, // 💡 마침표 프로퍼티 접근 연산자
			food1['price'] // 💡 대괄호 프로퍼티 접근 연산자
		);

		// 빈 객체 생성
		const food2 = {};
 
		// 프로터피 추가
		food2.name = '샐러드';
		food2.price = '6000';
		food2['vegan'] = true;
		console.log(food2);

		💡 식별자 명명 규칙에 벗어나는 키 이름 사용시
			변수명 등으로 사용할 수 없는 이름의 키인 경우
			const obj = {
				1: '하나', // 숫자도 객체의 키로는 사용 가능
				'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
				's p a c e': 'Space'
			}

			// ⭐️ 대괄호 프로퍼티 접근 연산자로만 가능
			console.log(
				obj[1],
				obj['ab-cd'],
				obj['s p a c e']
			);

			// ⚠️ 오류 발생
			console.log(
			  obj.1,
			  obj.ab-cd,
			  obj.s p a c e
			);

		표현식으로 키값 정의하기
			대괄호 [] 사용
			let idx = 0;
			const  obj = {
				['key-' + ++idx]: `value-${idx}`,
				['key-' + ++idx]: `value-${idx}`,
				['key-' + ++idx]: `value-${idx}`,
				[idx ** idx]: 'POWER'
			}
			console.log(obj); // {key-1: 'value-1', key-2: 'value-2', key-3: 'value-3', 27: 'POWER'}

		⚠️ 객체나 배열을 키값으로 사용시
			const objKey = { x: 1, y: 2 };
			const arrKey = [1, 2, 3];
			const obj = {
				[objKey]: '객체를 키값으로',
				[arrKey]: '배열을 키값으로'
			}
			console.log(
				obj[objKey],
				obj[arrKey]
			);
			// 로그를 펼쳐 키값을 볼 것 - 💡 문자열임
			// 객체와 배열이 그 자체가 아니라 문자열로 치환되어 키가 되는 것(‼️)
			console.log(obj);
			// [object Object] : "객체를 키값으로"
			// 1,2,3 : "배열을 키값으로"

		⚠️ ???????
			console.log(
				obj[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체이지만 동일한 [object Object]
				obj['1,2,3'] // 문자열
			);
	
			// 즉 실제로 해당 객체나 배열의 내용이나 참조값이 키가 되는 것이 아님
			// 이후 배울 Map ( 참조값을 키값으로 사용 )과의 차이점
			console.log(
				obj['[object Object]']
			);
 
	II. 🗑 프로퍼티 삭제 - delete 연산자
		const person1 = {
			name: '홍길동',
			age: 24,
			school: '한국대',
			major: '컴퓨터공학'
		};
		delete person1.age;
		delete person1['major'];
		delete person1.hobby; // 💡 오류가 발생하지는 않음
		console.log(person1);

	III. 키의 동적 사용
		const product1 = {
			name: '노트북',
			color: 'gray',
			price: 800000
		}
		function addModifyProperty (obj, key, value) {
			// obj.key = value; // ⚠️ 의도와 다른 작업 수행
			obj[key] = value;
		}
		function deleteProperty (obj, key) {
			// delete obj.key // ⚠️ 의도와 다른 작업 수행
			delete obj[key];
		}
		addModifyProperty (product1, 'inch', 16);
		addModifyProperty (product1, 'price', 750000);
		deleteProperty(product1, 'color');
		console.log(product1); // {"name": "노트북", "price": 750000, "inch": 16}

	IV. ES6 추가 문법
		1. 객체 선언 시 '프로퍼티 키와 대입할 상수/변수명이 동일할 시' 단축 표현
			const x = 1, y = 2;
			const obj1 = { 
				x: x,
				y: y
			}
			console.log(obj1);

			const obj2 = { x, y }
			console.log(obj2);

			function createProduct (name, price, quantity) {
				return { name, price, quantity };
			}
			const product1 = createProduct('선풍기', 50000, 50);
			const product2 = createProduct('청소기', 125000, 32);
			console.log(product1, product2);

 		2. 메서드 method - 객체에 축약표현으로 정의된 함수 프로퍼티
			일반 함수 프로퍼티와 특성이 다름 - 이후 자세히 배울 것

			// 일반 함수 프로퍼티 정의
			const person = {
				name: '홍길동',
				salutate: function (formal) {
					return formal
					? `안녕하십니까, ${this.name}입니다.`
					: `안녕하세요, ${this.name}이에요.`;
				}
			}

			// 메서드 정의
			const person = {
				name: '홍길동',
				salutate (formal) { // ES6부터는 위의 표현으로 정의된 함수만 메서드라고 부름
					return formal
					? `안녕하십니까, ${this.name}입니다.`
					: `안녕하세요, ${this.name}이에요.`;
				}
			}
			console.log(person.salutate(true));


생성자 함수
	💡 생성자 함수의 필요성
		// 이처럼 같은 형식의 객체들을 다수 만들어야 한다면?
		// 객체 리터럴
		const chain1 = {
			name: '판교',
			no: 3,
			introduce () { // 메서드 정의
				return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
			}
		};
		const chain2 = {
			name: '강남',
			no: 17,
			introduce () { // 메서드 정의
				return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
			}
		};
		const chain3 = {
			name: '제주',
			no: 24, 
			introduce () { // 메서드 정의
				return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
			}
		};

	I. 생성자 함수로 객체 만들기
		생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
		생성자 함수로 만들어진 객체를 인스턴스 (instance) 라 부름
		this.~ 로 생성될 인스턴스의 프로퍼티들 정의
		암묵적으로 this 반환
		생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능

		// 생성자 함수
		function YalcoChicken (name, no) {
			this.name = name;
			this.no = no;
			this.introduce = function () { // 생성자 함수 정의
				return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
			}
			// return this
		}

		// 인스턴스 생성
		const chain1 = new YalcoChicken('판교', 3); // 생성자 함수는 new 연산자와 함께 사용 - 암묵적으로 this 를 반환
		const chain2 = new YalcoChicken('강남', 17);
		const chain3 = new YalcoChicken('제주', 24);
		console.log(chain1, chain1.introduce()); // YalcoChicken {name: '판교', no: 3, introduce: ƒ} '안녕하세요, 3호 판교점입니다!'
		console.log(chain2, chain2.introduce()); // YalcoChicken {name: '강남', no: 17, introduce: ƒ} '안녕하세요, 17호 강남점입니다!'
		console.log(chain3, chain3.introduce()); // YalcoChicken {name: '제주', no: 24, introduce: ƒ} '안녕하세요, 24호 제주점입니다!'

		⚠️ new를 붙이지 않으면 undefined 반환
		function YalcoChicken (name, no) {
			this.name = name;
			this.no = no;
			this.introduce = function () { // 생성자 함수 정의
				return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
			}
		}
		console.log(YalcoChicken('홍대', 30)); // 호출시 new를 붙이는가 여부에 따라 호출 원리가 다름

		💡 "객체를 반환하는 함수랑은 뭐가 다르지??"
		function createYalcoChicken (name, no) {
			return {
				name, 
				no,
				introduce () { // 메서드 정의
					return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
				}
			}
		}

		const chain1 = createYalcoChicken('판교', 3);
		const chain2 = createYalcoChicken('강남', 17);
		const chain3 = createYalcoChicken('제주', 24);
		console.log(chain1, chain1.introduce()); // {name: '판교', no: 3, introduce: ƒ} '안녕하세요, 3호 판교점입니다!'
		console.log(chain2, chain2.introduce()); // {name: '강남', no: 17, introduce: ƒ} '안녕하세요, 17호 강남점입니다!'
		console.log(chain3, chain3.introduce()); // {name: '제주', no: 24, introduce: ƒ} '안녕하세요, 24호 제주점입니다!'

	II. 생성자 함수로 만들어진 객체
		1. 프로토타입 (prototype)  - 자바스크립트 객체지향의 중심
			타 언어의 클래스와는 다르며 사용하기에 따라 더 강력함
			⚠️ 사실 introduce와 introEng은 종류가 다름 (인스턴스 vs 프로토타입)
			이후 프로토타입 섹션에서 자세히 배우게 될 것

 			// 생성자 함수 정의
			function YalcoChicken (name, no) {
				this.name = name;
				this.no = no;
				this.introduce = function () {
					return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
				}
			}
			const chain1 = new YalcoChicken('판교', 3);
			console.log(chain1); // YalcoChicken {name: '판교', no: 3, introduce: ƒ}

			// 프로토타입 정의
			YalcoChicken.prototype.introEng = function () {
				return `Welcome to Yalco Chicken at ${this.name}!`;
			};
			console.log(chain1.introEng()); // Welcome to Yalco Chicken at 판교!
			console.log(new YalcoChicken('강남', 17).introEng()); // Welcome to Yalco Chicken at 강남!
			
		2. 💡 타 방식으로 만든 객체와의 차이
			// 객체 리터럴
			const chain1 = {
				name: '판교', 
				no: 3,
				introduce: function () { // 일반 함수 프로퍼티 정의
					return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
				}
			};

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
			const chain2 = createYalcoChicken('강남', 17);

			// 생성자 함수
			function YalcoChicken (name, no) {
				this.name = name;
				this.no = no;
				this.introduce = function () { // 생성자 함수 정의
					return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
				}
			}
			const chain3 = new YalcoChicken('제주', 24);

			// 객체 자체의 로그도 상세가 다름 유의 앞에 생성자 함수명이 붙음
			// instanceof : 객체가 특정 생성자 함수에 의해 만들어졌는지 여부 반환
			// 프로토타입의 constructor의 체인이 해당 생성자 함수 포함하는지 여부
			// 콘솔에서 [[Prototype]] 펼쳐서 확인해볼 것
			console.log(chain1, chain1 instanceof YalcoChicken);
			// {name: '판교', no: 3, introduce: ƒ} false
			[[Prototype]] :  Object
				constructor : ƒ Object()

			console.log(chain2, chain2 instanceof YalcoChicken);
			// {name: '강남', no: 17, introduce: ƒ} false
			[[Prototype]] :  Object
				constructor : ƒ Object()

			console.log(chain3, chain3 instanceof YalcoChicken); 
			// YalcoChicken {name: '제주', no: 24, introduce: ƒ} true
			[[Prototype]] : Object
				constructor : ƒ YalcoChicken(name, no)
				[[Prototype]] : Object

		3. 생성자 함수 자체의 프로퍼티와 함수
			function YalcoChicken (name, no) {
				this.name = name;
				this.no = no;
				this.introduce = function () {
					return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
				}
			}

			// 본사의 정보와 업무
			YalcoChicken.brand = '얄코치킨';
			YalcoChicken.contact = function () {
				return `${this.brand}입니다. 무엇을 도와드릴까요?`;
			};

			const chain1 = new YalcoChicken('판교', 3);
			console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?
			// 다음 강에서 클래스의 정적 프로퍼티 & 메서드로...
			console.log(chain1.contact()); // chain1.contact is not a function
			
		4. 💡 new 생략 실수 방지하기
			function YalcoChicken (name, no) {
				this.name = name;
				this.no = no;
				this.introduce = function () {
					return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
				}

				// 해당 함수가 new 연산자 없이 호출되었을 경우 재귀호출을 통해 생성해 내보냄
				if (!new.target) {
					// 다음 강에 배울 클래스에서는 new 없이는 오류가 발생하므로 필요없음
					return new YalcoChicken(name, no); 
				}
			}

			const chain1 = new YalcoChicken('판교', 3);
			const chain2 = YalcoChicken('강남', 17);
			console.log(chain1, chain2);
			// YalcoChicken {name: '판교', no: 3, introduce: ƒ}
			// YalcoChicken {name: '강남', no: 17, introduce: ƒ}


클래스	
	💡 클래스는 함수
		typeof 시 function으로 구분
		일급 객체, 다른 곳에 할당 가능
		class Dog {
			bark () {
				return '멍멍';
			}
		}
		console.log(typeof Dog); // function

		const 개 = Dog; // 할당될 수 있는 일급 객체
		const 바둑이 = new 개();
		console.log(바둑이); // Dog {}

	I. 클래스 class를 사용하여 인스턴스 만들기
		class YalcoChicken {
			constructor (name, no) {
				this.name = name;
				this.no = no;
			}

			introduce () {
				return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
			}
		}
		const chain1 = new YalcoChicken('판교', 3);
		const chain2 = new YalcoChicken('강남', 17);
		const chain3 = new YalcoChicken('제주', 24);
		console.log(chain1, chain1.introduce());
		console.log(chain2, chain2.introduce());
		console.log(chain3, chain3.introduce());
  
		💡 Syntactic Sugar - 문법을 보다 읽기 쉽게 만드는 것
		생성자 함수, 프로로타입 기반인 자바스크립트 문법을 타 언어의 클래스와 비슷한 문법으로 포장

			⚠️ 그러나 클래스와 생성자 함수의 동작이 동일하지는 않음
				// 차이 1. 클래스는 호이스팅되지 않음 (정확히는 되지만...)
				const chain1 = new YalcoChicken('판교', 3); // 
				class YalcoChicken {
					constructor (name, no) {
						this.name = name;
						this.no = no;
					}
					introduce () {
						return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
					}
				}

				// 차이 2. 클래스는 new 없이 사용하면 오류
				// (생성자 함수는 오류 없이 undefined 반환)
				const chain2 = YalcoChicken('강남', 17);
		
				// 이 외에도 차이들이 있음 - 클래스에는 이후 배울 엄격 모드 적용

	II. constructor 메서드
		인스턴스 생성시 인자를 받아 프로퍼티를 초기화함
		클래스에 하나만 있을 수 있음 - 초과시 오류 발생
		다른 메서드 이름을 쓸 수 없음
		기본값 사용 가능
		필요없을 (인자가 없을 때 등) 시 생략 가능
		⚠️ 값을 반환하지 말 것! 생성자 함수처럼 암묵적으로 this 반환
		class Person {
			constructor (name, age, married = false) {
				this.name = name;
				this.age = age;
				this.married = married;
			}
		}
		const person1 = new Person('박영희', 30, true);
		const person2 = new Person('오동수', 18);
		console.log(person1, person2);

		// 인스턴스 초기화가 필요없는 클래스
		class Empty {}
		console.log(new Empty());


	III. 클래스의 메서드
		💡 생성자 함수와 차이 - 프로토타입으로 들어감
			// 로그 펼쳐서 비교해볼 것
			class Dog {
				bark () {
					return '멍멍';
				}
			}
			const badugi = new Dog();
			console.log(badugi, badugi.bark());
			Dog {}
				[[Prototype]]: Object
					bark: ƒ bark()
					constructor: class Dog
						[[Prototype]]: Object

			function Dog2 () {
				this.bark = function () {
					return '멍멍';
				}
			}
			const badugi2 = new Dog2();
			console.log(badugi2, badugi2.bark());
			Dog2 {bark: ƒ}
				bark: ƒ ()
					[[Prototype]]: Object

	IV. 필드 field
		constructor 밖에서, this.~ 없이 인스턴스의 프로퍼티 정의
		2022 말 아직은 제안사항 (이후 🧪로 표시), 이미 다수 브라우저에서 지원
		이후 배울 Babel로 해결 가능
		// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
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

	V. 정적 static 필드와 메서드
		인스턴스의 수와 관계없이 메모리 한 곳만 차지
		인스턴스 없이 클래스 차원에서 호출
		⚠️ 정적 메서드에서는 정적 필드만 사용 가능
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
		YalcoChicken {name: '미정', no: 0}
			name: "미정"
			no: 0
			[[Prototype]]: Object
				constructor: class YalcoChicken
					brand: "얄코치킨"
					contact: ƒ contact()
				introduce: ƒ introduce()
				[[Prototype]]: Object
		console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?
		console.log(chain1.contact()); // chain1.contact is not a function


접근자 프로퍼티와 은닉
	I. 접근자 프로퍼티
		getter, setter 함수라고도 부름
		스스로는 값을 갖지 않음 - 다른 프로퍼티의 값을 읽거나 저장할 때 사용
		get, set을 앞에 붙임
		💡 함수처럼 지정되었지만 프로퍼티처럼 사용!
		const person1 = {
			age: 17,
			get koreanAge () {
				return this.age + 1;
			},
			set koreanAge (krAge) {
				this.age = krAge - 1;
			}
		}
		person1.koreanAge = 20;
		console.log(person1, person1.koreanAge);
		
		⭐️ 클래스에서도 사용 가능 - 클래스에서는 프로토타입이 됨
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
			YalcoChicken {name: '판교', no: 4}
				name: "판교"
				no: 4
				chainTitle: "4호 판교점"
				[[Prototype]]: Object
					chainTitle: "4호 판교점"
					constructor: class YalcoChicken
					set chainNo: ƒ chainNo(chainNo)
					get chainTitle: ƒ chainTitle()

		getter
			반드시 값을 반환해야 함
			특정 프로퍼티(들)를 원하는 방식으로 가공하여 내보낼 때 사용
		
		setter
			setter는 하나의 인자를 받음
			특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용


		⚠️ 필드 이름과 setter의 이름이 같을 때
			class YalcoChicken {
				constructor (name, no) {
					this.name = name;
					this.no = no; // 무한반복
				}
				get no () { 
					return this.no + '호점'; 
				}
				set no (no) { 
					this.no = no; // 무한반복
				}
			}
			const chain1 = new YalcoChicken('판교', 3); // ⚠️ 오류 발생!

			⭐️ 해결책 - setter와는 다른 필드명을 사용하여 자기반복호출을 방지
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
			YalcoChicken {name: '판교', _no: 3}
				name: "판교"
				_no: 3 // ⚠️ constructor의 no는 setter를 가리키고 실제 필드명은 _no가 됨
				no: "3호점"

	II. 은닉
		💡 캡슐화 (encapsulation)
			객체지향의 주요 요소 중 하나 - 객체 내부의 값을 감추는(은닉) 것
			인스턴스의 프로퍼티 값을 함부로 열람하거나 수정하지 못하도록
			자바스크립트의 필드는 기본적으로 public 은닉되지 않음

		private 필드를 통한 은닉
			필드명 앞에 #을 붙임
			class Employee {
				#name = '';
				#age = 0;
				constructor (name, age) {
					this.#name = name;
					this.#age = age;
				}
			}
			const emp1 = new Employee('김복동', 32);
			console.log(emp1);
			console.log(emp1.#name); // ⚠️ 오류 발생 (일부 브라우저 제외)
			console.log(emp1['#name']); // ⚠️ undefined 반환

		클래스 내에서는 private 필드에 접근 가능
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


상속
	💡 상속 (inheritance)
		서로 다른 클래스나 생성자 함수가 같은 속성들을 공유할 때
		이들의 관계를 정의함으로써 코드의 중복을 줄이고 효율을 높임
		
	I. 클래스의 상속 문법
		클래스에서는 extends (부모클래스)로 상속관계 정의
		자식 클래스에서 또 다른 클래스가 상속받을 수 있음
		자식 클래스는 부모 클래스의 속성을 기본적으로 가져옴
		자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
		class Bird {
			wings = 2;
		}
		class Eagle extends Bird {
			claws = 2;
		}
		class Penguin extends Bird {
			swim () { console.log('수영중...'); }
		}
		class EmperorPenguin extends Penguin {
			size = 'XXXL';
		}
		const birdy = new Bird();
		const eaglee = new Eagle();
		const pengu = new Penguin();
		const pengdol = new EmperorPenguin();

		for (const i of [
			[ '1.', birdy instanceof Bird ],
			[ '2.', eaglee instanceof Bird ],
			[ '3.', eaglee instanceof Eagle ],
			[ '4.', pengdol instanceof Penguin ],
			[ '5.', pengdol instanceof Bird ],
			[ '6.', birdy instanceof Eagle ]
		]) {
			console.log(i[0], i[1]);
		}
		
		pengu.swim();
		pengdol.swim();
		eaglee.swim(); // eaglee.swim is not a function
		
		⭐️ [[Protorype]]으로 상속관계 살펴볼 것 - 최종적으로 Object
		console.log(pengdol);
		EmperorPenguin {wings: 2, size: 'XXXL'}
		size: "XXXL"
		wings: 2
			[[Prototype]]: Penguin
			constructor: class EmperorPenguin
				[[Prototype]]: Bird
				constructor: class Penguin
				swim: ƒ swim()
					[[Prototype]]: Object
					constructor: class Bird
						[[Prototype]]: Object

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

		// 상속
		class YalcoChickenAndCafe extends YalcoChicken {
			cafeMenu = { '아메리카노': 4000, '라떼': 4500 };
			cafeOrder (name) {
				return `${this.cafeMenu[name]}원입니다.`
			}
		}

		const chain1 = new YalcoChickenAndCafe('서면', 2)\
		console.log(chain1);
		console.log(
			chain1.order('후라이드'),
			chain1.cafeOrder('라떼')
		);

	II. 오버라이딩 (overriding)
		자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어씀
		class Bird {
			wings = 2;
			canFly = true;
			travel () { console.log('비행중...') }
		}
		class Eagle extends Bird {
			claws = 2;
		}
		class Penguin extends Bird {
			canFly = false;
			travel () { console.log('수영중...') }
		}
		const eaglee = new Eagle();
		const pengu = new Penguin();
		console.log(eaglee); // Eagle {wings: 2, canFly: true, claws: 2}
		console.log(pengu); // Penguin {wings: 2, canFly: false}
		eaglee.travel(); // 비행중...
		pengu.travel(); // 수영중...

	III. super
		부모 클래스의 constructor 또는 메서드 호출
		super는 다른 클래스에서 상속받은 클래스에서만 사용 가능
		자식 클래스의 constructor 내에서는 부모 클래스의 constructor를 가리킴
		자식 클래스의 메서드 내에서는 부모 클래스를 가리킴
		부모 클래스의 constructor나 메서드에 추가적인 동작을 넣기 위해 사용
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
		// 상속
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

		💡 정적 메서드에서
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


객체의 스프레드와 디스트럭쳐링
	I. 스프레드 - 전개 연산자(spread operator)
		1. 기본 문법
			// 객체 리터럴
			const class1 = {
				x: 1, 
				y: 'A', 
				z: true
			};
			const class2 = { ...class1 };
			// 아래의 참조복사 코드와 다름!
			// const class2 = class1;
			console.log(class2);

		2. 특정 객체의 프로퍼티를 포함하는 다른 객체 생성에 유용
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

		3. 중복되는 프로퍼티는 뒤의 것이 덮어씀
			const class1 = {
				...{ a: 1, b: 2 },
				...{ b: 3, c: 4, d: 5 },
				...{ c: 6, d: 7, e: 8 }
			}
			console.log(class1);

		4. ⭐️ 복사의 깊이
			해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
			원시값만 있는 객체만 값에 의한 복사 - 얕은 복사
			복합적인 객체의 완전한 깊은 복사는 이후 배우게 될 것
			const class1 = {
				x: 1,
				y: { a: 2 },
				z: [3, 4]
			};
			const class2 = { ...class1 };
			class1.x++;
			class1.y.a++;
			class1.z[0]++;
			console.log(class1); // {x: 2, y: {a: 3}, z: [4, 4]}
			console.log(class2); // {x: 1, y: {a: 3}, z: [4, 4]}
			
	II. 디스트럭쳐링 (destructuring)
		1. 문법
			기존 코드
				const obj1 = {
					x: 1, y: 2, z: 3
				};
				const x = obj1.x;
				const y = obj1.y;
				const z = obj1.z;
				console.log(x, y, z);

			디스트럭쳐링으로 간략화
				const obj1 = {
					x: 1, y: 2, z: 3
				};
				const {x, y, z} = obj1;
				console.log(x, y, z);

			일부만 가져오는 것도 가능
				const obj1 = {
					x: 1, y: 2, z: 3
				};
				const {x, z} = obj1;
				console.log(x, z);

			변수 이름을 다르게 하고 싶다면
				const obj1 = {
					x: 1, y: 2, z: 3
				};
				const {x: a, y: b} = obj1;
				console.log(a, b);

		2. 활용
			필요한 프로퍼티 값을 짧은 코드로 변수/상수에 담을 때
				const array1 = [1, 2, 3, 4, 5];
				// const length = array1.length;
				const { length } = array1;
				console.log(length);

		⭐️ 함수 인자값의 가독성을 위해 객체를 사용할 때
			// 인자가 많은 함수 - ⚠️ 좋지 않음!
			function introduce(name, age, job, married) {
				console.log(`제 이름은 ${name}, `
					+ `나이는 ${age}세구요. `
					+ `직업은 ${job}, `
					+ `${married ? '기혼' : '미혼'}입니다.`
				)
			}
			// 여러 인자, 순서 중요 - 가독성 떨어짐
			introduce('김철수', 28, '개발자', false);

			// 프로퍼티명만 제대로 입력하면 순서 무관
			const person1 = {
				job: '개발자',
				age: 28,
				married: false,
				name: '김철수',
				blood: 'O' // 추가 인자 무관
			};

			// 인자를 하나의 객체로 묶어 받음 
			function introduce(person) {
				console.log(`제 이름은 ${person.name}, `
					+ `나이는 ${person.age}세구요. `
					+ `직업은 ${person.job}, `
					+ `${person.married ? '기혼' : '미혼'}입니다.`
				)
			}

			// 디스트럭쳐링 (적절히 활용) - 순서 무관, 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄
			function introduce({age, married, job, name}) {
				console.log(`제 이름은 ${name}, `
					+ `나이는 ${age}세구요. `
					+ `직업은 ${job}, `
					+ `${married ? '기혼' : '미혼'}입니다.`
				)
			}
		
			introduce(person1);


전역 객체와 표준 빌트인 객체
	I. 전역 객체 (global object)
		코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체
		브라우저의 콘솔에 출력해 볼 것
			console.log(this);
			console.log(
				this === window,
				window === self,
				self === frames
			);
		
		Node.js에서 문서로 실행해 볼 것
			console.log(this);
			// ⚠️ Node.js로 문서 실행시의 this는 전역 객체를 가리키지 않음
			// 이후 모듈 관련 강에서 배울 것
			console.log(global);
		
		⭐️ globalThis 통일된 식별자 - 양쪽 모두에서 실행해 볼 것
			console.log(globalThis);

		💡 전역 객체에 포함되는 것
			1. 표준 빌트인 객체
			2. 호스트 객체 - 환경에서 제공하는 기타 객체들 : 브라우저의 Web API, Node.js API 등
			3. (브라우저 한정) - 전역으로 설정된 var 변수와 전역 함수
			var myGlobalVar = 1;
			const myGlobalConst = 1;
			function myGlobalFunc () {};
			console.log(
				globalThis.myGlobalVar, // 1
				globalThis.myGlobalConst, // undefined 
				globalThis.myGlobalFunc // ƒ myGlobalFunc(){}
			);

	II. 표준 빌트인 객체 (standard built-in objects)
		ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
		전역 프로퍼티로 제공됨 - globalThis 등을 붙이지 않고 바로 사용 가능
		💡 Node.js에서는 globalThis 출력 시 표준 빌트인 객체들은 출력하지 않음
			console.log(globalThis);
			// 그러나 요소들로 갖고 있는 것은 확인 가능
			console.log(globalThis.Infinity);
			console.log(globalThis.isNaN);
			console.log(globalThis.Object);
		
	III. 래퍼 객체 (wrapper object)
		Number, String, Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
		원시값이 어떻게 프로퍼티를 갖고 있을까?
			const str = 'abcde';
			console.log(
				str.length,
				str.toUpperCase(),
				str[0]
			);
			const num = 123.4567;
			console.log(
				typeof num.toString(),
				num.toFixed(2)
			);
		
		💡 콘솔에서 프로퍼티와 프로토타입을 펼쳐 확인해보자.
			const str = new String('abcde');
			const num = new Number(123.4567);
			const bool = new Boolean(true);
			console.log(typeof str, str);
			console.log(typeof num, num);
			console.log(typeof bool, bool);

		⭐️ 래퍼 객체로 감싸서 wrap 그것의 인스턴스로 만들어 해당 기능을 사용 후, 원시 객체로 돌아감 - 메모리 절약
			const str = 'abcde';
			console.log(str.length);
			console.log(typeof str, str);
		
		valueOf 함수 - 래퍼 객체의 인스턴스에서 원시값 반환
			const str = new String('abcde');
			const num = new Number(123.4567);
			const bool = new Boolean(true);
			console.log(str.valueOf());
			console.log(num.valueOf());
			console.log(bool.valueOf());


빌트인 전역 프로퍼티와 함수
	I. 빌트인 전역 프로퍼티
		스스로 다른 프로퍼티나 메서드를 갖지 않고 값만 반환
		
		Infinity, NaN, undefined 등의 원시값들은 이 프로퍼티들을 가리킴
		💡 null은 포함되지 않음 - 가리키는 값이 없음을 의미하므로...
			console.log(globalThis.Infinity);
			console.log(globalThis.NaN);
			console.log(globalThis.undefined);
			console.log(globalThis.globalThis);
			
		globalThis 스스로에 대한 참조를 프로퍼티로 포함
			console.log(
				globalThis == globalThis.globalThis,
				globalThis == globalThis.globalThis.globalThis,
				globalThis == globalThis.globalThis.globalThis.globalThis
			);

	II. 빌트인 전역 함수
		1. eval - 문자열로 된 코드를 받아 실행
			⚠️ 매우 특별한 경우가 아닌 이상 절대 사용하지 말 것
			☢️ 보안에 취약함
			엔진이 코드를 최적화하지 못하므로 처리 속도가 느림
			
			값을 반환하는 코드(표현식)이라면 해당 값을 반환
				const x = eval('1 + 2 + 3');
				// 객체나 함수의 리터럴은 괄호로 감싸야 함
				const obj = eval('({a: 1, b: 2})');
				console.log(x, obj);

			표현식이 아닐 경우 해당 코드 실행
				const code = `
					let x = 1;
					console.log(x++, x);
				`;
				eval(code);

		2. isFinite - 유한수 여부 반환
			유한수이거나 유한수로 평가될 수 있는 값
				console.log(
					isFinite(1),
					isFinite(0),
					isFinite('1'), // Number('1'): 1
					isFinite(null) // Number(null): 0
				);

			무한수이거나 수로 평가될 수 없는 값
				console.log(
					isFinite(1/0),
					isFinite(Infinity),
					isFinite(-Infinity),
					isFinite(NaN),
					isFinite('abc')
				);

		3. isNaN - NaN 여부 반환
			숫자로 인식될 수 없는 값 : true
			Number 타입이 아닌 경우 Number로 변환하여 평가
			💡 뒤에 배울 Number.isNaN은 타입변환을 하지 않음
			console.log(
				isNaN(NaN), // typeof NaN: 'number'
				isNaN('abcde'),
				isNaN({}),
				isNaN(undefined)
			);

		4. parseFloat - 인자로 받은 값을 실수로 변환
			// 문자열의 경우 앞뒤공백은 무시
			console.log(
				parseFloat(123.4567),
				parseFloat('123.4567'),
				parseFloat(' 123.4567 ') // 123.4567
			);

			// 숫자로 시작할 경우 읽을 수 있는 부분까지 숫자로 변환
			// 배열의 경우 첫 요소가 숫자면 해당 숫자 반환
			console.log(
				parseFloat('123.0'),
				parseFloat('123'),
				parseFloat(' 123ABC '), // 123
				parseFloat([123, 456, 789]) // 123
			);

			// 기타 숫자로 변환이 안 되는 경우 NaN 반환
			console.log(
				parseFloat('ABC123'), // NaN
				parseFloat({x: 1}), // NaN
				parseFloat([]), // NaN
				parseFloat(['a', 1, true]) // NaN
			);
			
		5. parseInt - 인자로 받은 값을 정수(타입은 실수)로 변환
			// 소수점 뒤로 오는 숫자는 버림
			console.log(
				parseInt(123),
				parseInt('123'),
				parseInt(' 123.4567 '), // 123
				parseInt('345.6789') // 345
			);

			// 기타 숫자로 변환이 안 되는 경우 NaN 반환
			console.log(
				parseInt('abc'), // NaN
				parseInt('{}'), // NaN
				parseInt('[]') // NaN
			);
		

			💡 두 번째 인자로 숫자(2~36) 넣으면
				// 주어진 값을 해당 진법의 숫자로 해석하여 10진법 숫자로 반환
				console.log(
					parseInt('11'), // 11
					parseInt('11', 2), // 3
					parseInt('11', 8), // 9
					parseInt('11', 16), // 17
					parseInt('11', 32) // 33
				);

				// 무효한 숫자는 NaN 반환
				console.log(
					parseInt('11', 37), // NaN
					parseInt('11', 'A') // NaN
				);

		6. encodeURI, encodeURIComponent
			URI(인터넷 자원의 주소)는 🔗 아스키 문자 셋으로만 구성되어야 함
			아스키가 아닌 문자(한글 등)와 일부 특수문자를 포함한 URI를 유효하게 인코딩
			
			encodeURI
				const searchURI = 'https://www.google.com/search?q=얄코';
				const encodedURI = encodeURI(searchURI);
				console.log(encodedURI);

			encodeURIComponent
				const keyword = '얄코';
				const encodedKeyword = encodeURIComponent(keyword);
				console.log(encodedKeyword);
				const searchURI = `https://www.google.com/search?q=${encodedKeyword}`;
				console.log(searchURI);

			💡 둘의 정확한 차이
				URI에서 특정 기능을 갖는 =, ?, & 등을 인코딩하는가의 여부
				encodeURI는 인자를 완성된 URI로, encodeURIComponent는 요소로 인식하기 때문
				const raw = '?q=얄코';
				console.log(encodeURI(raw)); // ?q=%EC%96%84%EC%BD%94
				console.log(encodeURIComponent(raw)); // %3Fq%3D%EC%96%84%EC%BD%94

		7. decodeURI, decodeURIComponent
			encodeURI(Component)와 반대로 동작
			
			decodeURI
				const encodedURI = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
				const decodedURI = decodeURI(encodedURI);
				console.log(decodedURI);
		
			decodeURIComponent
				const encodedComp = '%EC%96%84%EC%BD%94';
				const decodedComp = decodeURI(encodedComp);
				console.log(decodedComp);


String 객체
	I. 생성자 함수
		valueOf 또는 toString 메서드로 문자열 원시값 반환
			const strObj1 = new String();
			const strObj2 = new String('Hello World!');
			console.log(strObj1);
			console.log(strObj2); // [[PrimitiveValue]]: "Hello World!"
		
		다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환
			const fromNum = new String(123);
			const fromBool = new String(true);
			const fromArr = new String([1, 'A', false]);
			const fromObj = new String({a: 1});
			console.log(typeof fromNum, fromNum);
			console.log(typeof fromBool, fromBool);
			console.log(typeof fromArr, fromArr);
			console.log(typeof fromObj, fromObj); // object String {'[object Object]'}
			console.log(fromNum.toString()); // 123
			console.log(fromBool.toString()); // true
			console.log(fromArr.toString()); // 1,A,false
			console.log(fromObj.toString()); // [object Object]

		⭐ new 없이 사용하면 생성자로서가 아닌 String 함수는 주어진 인자를 문자열로 변환하여 반환
			const str1 = String('Hello World!');
			const str2 = String(123);
			const str3 = String(true);
			const str4 = String({x: 1, y: 2}); // 💡 [object Object]
			const str5 = String([1, 2, 3]); // 💡 1,2,3
			console.log(typeof str1, str1);
			console.log(typeof str2, str2);
			console.log(typeof str3, str3);
			console.log(typeof str4, str4); // string [object Object]
			console.log(typeof str5, str5);
		
		II. 유사 배열 객체
			length 프로퍼티: 글자 수 반환
				let myStr = '안녕하세요!';
				console.log(
					myStr.length,
					myStr[0],
					myStr[myStr.length - 1]
				);

			[] 안에 인덱스 숫자를 넣어 ~번째 글자 읽기(만) 가능
				myStr[myStr.length - 1] = '?';
				console.log(myStr); // 💡 배열과 달리 그대로

			for ... of문 사용 가능 이후 배울 이터러블이기 때문
				for (const letter of myStr) {
					console.log(letter);
				}

		⭐️ String은 원시값
			[] 접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
			수정하려면 변수 값 자체를 다른 문자열로 대체해야...

		III. 주요 인스턴스 메서드
			1. toUpperCase, toLowerCase
				라틴어 문자를 모두 대문자/소문자로 변경하여 반환
				⭐️ 기존의 문자열은 바꾸지 않음! 다음의 메서드들 모두 마찬가지
					const word = 'Hello, World.';
					console.log(
						word.toUpperCase(),
						word.toLowerCase()
					);
					console.log(word);
			
				흔한 활용예
					function areSameWords (word1, word2) {
						return word1.toLowerCase() === word2.toLowerCase();
					}
					console.log(
						areSameWords('Hello', 'hello'),
						areSameWords('가나다', '가나다'),
						areSameWords('ABC', 'DEF')
					);

			2. charAt, at
				인자로 주어진 인덱스의 문자 반환
				charAt
					console.log(
						'Hello World!'.charAt(0),
						'안녕하세요~'.charAt(2)
					);

				✨ at
					신기능, 배열에서도 사용
					음수로 뒤에서부터 접근 가능 ( -1 부터 )
					console.log(
						'안녕하세요~'.at(1), // 녕
						'안녕하세요~'.at(-1) // ~
					);

			3. indexOf, lastIndexOf
				인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
				포함되지 않을 시 -1 반환
				const word = '반갑습니다!';
				console.log (
					word.indexOf('습'),
					word.lastIndexOf('습')
				);
				const word = '아니, 하나마나한 걸 왜 하나?';
				console.log (
					word.indexOf('하나'), // 4
					word.lastIndexOf('하나') // 14
				);
				console.log(
					'가나다라마'.indexOf('하'), // -1
					'가나다라마'.lastIndexOf('하')
				);

			4. includes, startsWith, endsWith
				인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환
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

			5. search
				인자로 받은 🔗 정규표현식과 일치하는 첫 부분의 인덱스 반환
				없을 시 -1 반환
				console.log(
					'하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/),
					'하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
				);

			6. substring
				인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환
				const word = 'ABCDEFGHIJKL';
				const part = word.substring(4, 8)
				console.log(word, part);
				console.log(
					word.substring(4) // 인자를 하나만 넣으면 해당 인덱스부터 끝까지
				);

				음수나 범위 외 숫자는 범위 내 최소/최대 숫자로
					console.log(
						word.substring(-1),
						word.substring(4, 100),
						word.substring(100)
					);
					const sentence = '옛날에 호랑이 한 마리가 살았어요.';
					const firstWord = sentence.substring(
						0, sentence.indexOf(' ')
					);
					const lastWord = sentence.substring(
						sentence.lastIndexOf(' ') + 1, sentence.length
					);
					console.log(firstWord, lastWord);

			7. slice
				substring과 같으나 음수로 뒤에서부터 자를 수 있음
				const word = 'ABCDEFGHIJKL';
				console.log(
					word.substring(4, 8),
					word.slice(4, 8),
				);
				console.log(
					word.substring(-4),
					word.slice(-4)
				);

				const sentence = '옛날에 호랑이 한 마리가 살았어요.';
				const firstWord = sentence.slice(
					0, sentence.indexOf(' ')
				);
				const lastWord = sentence.slice(
					sentence.lastIndexOf(' ') + 1 - sentence.length
				);
				console.log(firstWord, lastWord);

			8. split
				인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
				console.log(
					'010-1234-5678'.split('-'),
					'ABC1DEF2GHI3JKL'.split(/[0-9]/)
				)

				// 인자로 빈 문자열을 넣거나 인자 생략시
				const word = '안녕하세요';
				console.log(
					word.split(''),
					word.split()
				)

				const word = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';
				console.log(
					word.split(' ', 2),
					word.split(' ', 4)
				)
			
				두 번째 인자로 배열의 최대 길이 지정 가능
				const sentence = '옛날에 호랑이 한 마리가 살았어요.';
				const splitted = sentence.split(' ');
				const firstWord = splitted[0];
				const lastWord = splitted[splitted.length - 1]; // splitted.at(-1)
				console.log(firstWord, lastWord); // 옛날에 살았어요.

			9. trim, trimStart, trimEnd
				앞뒤의 공백 제거하여 반환
				중간의 공백은 제거하지 않음
				const word = '  Hello World!  ';
				console.log(`--${word}--`);
				console.log(`--${word.trim()}--`);
				console.log(`--${word.trimStart()}--`);
				console.log(`--${word.trimEnd()}--`);

			10. repeat
				인자로 주어진 정수만큼 문자열을 반복하여 반환
				const word = '호이';
				console.log(word.repeat(3)); // 호이호이호이
				console.log(word.repeat(0)); // ''
				console.log(word.repeat()); // ''

				// 인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생
				console.log(word.repeat(-1));

			11. replace, replaceAll
				첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
				replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
				console.log(
					'이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
				);
				const word = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
				console.log(word.replace('밥', '라면'));

				모두 치환하려면 정규식 /.../g 사용
					console.log(word.replace(/밥/g, '라면'));

				replaceAll은 문자열도 자동으로 /.../g처럼 인식
					console.log(word.replaceAll('밥', '라면'));
					console.log(word.replaceAll(/밥/g, '라면'));


			⭐️ 메서드 체이닝 method chaining
				값을 반환하는 인스턴스 메서드를 연속으로 사용
				const word = ' 모두 HELLO! ';
				const rpFrom = 'hello';
				const rpTo = 'bye';
				console.log(
					word
					.trimStart()                // '모두 HELLO! '
					.toLowerCase()              // '모두 hello! '
					.replaceAll(rpFrom, rpTo)   // '모두 bye! '
					.toUpperCase()              // '모두 BYE! '
					.repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
					.trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
				);
				console.log(word); // 원본은 그대로


Number 객체
	I. 생성자 함수
		const numObj1 = new Number();
		const numObj2 = new Number(123);
		const numObj3 = new Number(-123.45);
		console.log(numObj1, numObj2, numObj3);
		// 인자가 없을 시 0
		console.log(
			numObj1.valueOf(), // 0 
			numObj2.valueOf(), // 123
			numObj3.valueOf() // -123.45
		);

		// 특정 숫자값으로 인식되는 것
		console.log(
			new Number('-123.4567'),
			new Number('Infinity'),
			new Number(true),
			new Number(false)
		);

		// NaN
		console.log(
			new Number('1/2'),
			new Number('123ABC'),
			new Number('ABC'),
			new Number('{a: 1, b: 2}'),
			new Number([1, 2, 3])
		);

		new 없이 사용하면
			⭐ 생성자로서가 아닌 Number 함수는 주어진 인자를 숫자로 변환하여 반환
			const num1 = Number('123');
			const num2 = Number('-123.45');
			const num3 = Number(true);
			const num4 = Number(false);
			const num5 = Number(null);
			console.log(typeof num1, num1); // number 123
			console.log(typeof num2, num2); // number -123.45
			console.log(typeof num3, num3); // number 1
			console.log(typeof num4, num4); // number 0
			console.log(typeof num5, num5); // number 0

		II. 정적 프로퍼티
			1. EPSILON
				(Number형에서 표현 가능한 1보다 큰 가장 작은 수) - 1
				부동소수점으로 인한 계산오차 문제 해결에 사용
				console.log(Number.EPSILON);
				console.log(0.1 + 0.2);
				console.log((0.1 + 0.2) - 0.3 < Number.EPSILON)
			
			2. MAX_VALUE, MIN_VALUE
				자바스크립트에서 표현 가능한 가장 큰 수와 작은 수
				console.log(Number.MAX_VALUE);
				console.log(Number.MIN_VALUE);

			3. MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
				자바스크립트의 부동소수점 체계에서 안정적으로 나타낼 수 있는 가장 큰 수와 작은 정수
				더 큰 정수도 표현 자체는 가능 안전하게 하려면 BigInt 타입으로
				console.log(Number.MAX_SAFE_INTEGER);
				console.log(Number.MIN_SAFE_INTEGER);

			4. POSITIVE_INFINITY, NEGATIVE_INFINITY
				양과 음의 Infinity
				console.log(Number.POSITIVE_INFINITY);
				console.log(Number.NEGATIVE_INFINITY);

			5. NaN
				전역 객체(globalThis)의 NaN과 같은 값
				console.log(Number.NaN);

		III. 정적 메서드
			1. 전역 객체에도 있는 메서드들
				a. 동일하지 않음 : isFinite, isNaN
					⭐️ 전역 객체 (globalThis)의 해당 메소드와의 차이: 암묵적 타입 변환을 하지 않음
					console.log(
						isFinite(null), // 전역 객체: null을 0으로 변환
						Number.isFinite(null) // 숫자타입 자체가 아니므로 false
					);
					console.log(
						isNaN('abc'), // 전역 객체: 숫자타입의 NaN으로 변환
						Number.isNaN('abc') // 숫자타입 자체가 아니므로 false
					);
				
				b. 동일함: parseInt, parseFloat
					각각 전역의 동명 메서드들을 가리킴 🔗 parseInt 🔗 parseFloat
					console.log(
						Number.parseInt('123.4567'), // 123
						Number.parseFloat('123.4567') // 123.4567
					);

			2. (안전한) 정수 여부 확인 isInteger, isSafeInteger
				console.log(
					Number.isInteger(123),
					Number.isInteger(123.45)
				);
				console.log(
					// 암묵적 변환 하지 않음
					Number.isInteger('123'), // false
					Number.isInteger(true), // false
					Number.isInteger(Infinity) // false
				);
				console.log(
					Number.isSafeInteger(123),
					Number.isSafeInteger(123.45)
				);
				console.log(
					Number.isSafeInteger(Number.MAX_SAFE_INTEGER),
					Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
				);

		IV. 인스턴스 메서드
			⭐️ 값 자체에서 호출시 괄호로 감쌀 것 소수점과 구분 불가하므로
				1. toExponential
					지수 표기법으로 나타내는 문자열을 반환
					const numInExp = (123.456789).toExponential();
					console.log(
						typeof(numInExp), numInExp
					);
					// 인자로 자릿수 제한
					console.log(
						(123.456789).toExponential(2),
						(123.456789).toExponential(4),
						(123.456789).toExponential(6)
					);

				2. toFixed
					최대 인자값으로 주어진 정수(0~20)만큼 소수점 이하를 반올림하여 문자열로 반환
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
 
				3. toPrecision
					반올림과 지수 표기법을 사용하여 문자열 반환
					console.log(
						// 인자가 없으면 toString처럼 그대로 문자열로 반환
						(1234.56789).toPrecision()
					);
					// 인자가 정수부 자릿수보다 적으면 지수로
					console.log(
						(1234.56789).toPrecision(1),
						(1234.56789).toPrecision(2),
						(1234.56789).toPrecision(3)
					);
					// 반올림
					console.log(
						(1234.56789).toPrecision(4),
						(1234.56789).toPrecision(6),
						(1234.56789).toPrecision(8)
					);

				4. toString
					문자열 값 반환
					인자 2~36 가 주어지면 해당 수의 진수로 표현
					console.log(
						(11).toString(), // 11
						(11).toString(2), // 1011
						(11).toString(8), // 13
						(11).toString(16) // b
					);


Math 객체
	수학에 관련된 기능을 가진 빌트인 객체
		정적 프로터피와 메서드만 제공
		Number 타입만 지원 - BigInt 사용 불가

	I. 주요 정적 프로퍼티
		PI - 원주율
			console.log(
				Math.PI
			);

		E - 자연로그의 밑
			console.log(
				Math.E
			);

	II. 주요 정적 메서드
		1. abs - 절대값(0 이상) 반환
			console.log(
				Math.abs(123),
				Math.abs(-123),
			);
			// 0 반환
			console.log(
				Math.abs(0),
				Math.abs(''),
				Math.abs(null),
				Math.abs([]),
			);
			// NaN 반환
			console.log(
				Math.abs('abc'),
				Math.abs(undefined),
				Math.abs({a: 1}),
				Math.abs([1, 2, 3]),
				Math.abs()
			);
			const isEqual = (a, b) => {
				return Math.abs(a - b) < Number.EPSILON;
			}
			console.log(
				isEqual(0.1 + 0.2, 0.3)
			);

		2. ceil 올림, round 반올림, floor 내림, trunc 정수부만
			for (const num of [1.4, 1.6, -1.4, -1.6]) {
				console.log(
					num + ' : ',
					Math.ceil(num),
					Math.round(num),
					Math.floor(num),
					Math.trunc(num),
				);
			}
			// NaN 반환
			console.log(
				Math.ceil(),
				Math.round(),
				Math.floor(),
				Math.trunc()
			);

		3. pow - ~로 거듭제곱
			** 연산자로 더 간결히 표현 가능
			두 숫자 인자 필요
			console.log(
				Math.pow(4, 2), // 4 ** 2
				Math.pow(4, 1), // 4 ** 1
				Math.pow(4, 0), // 4 ** 0
				Math.pow(4, -1) // 4 ** -1
			);
			// NaN 반환
			console.log(
				Math.pow(4)
			);

		4. sqrt - 제곱근
			console.log(
				Math.sqrt(25), // 25 ** 0.5
				Math.sqrt(9),
				Math.sqrt(2),
				Math.sqrt(1),
				Math.sqrt(0)
			);
			// NaN 반환
			console.log(
				Math.sqrt(-25),
				Math.sqrt()
			);

		5. max, min - 인자들 중 최대값과 최소값
			console.log(
				Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
				Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
			);

		6. random - 0~1 사이의 무작위 값
			0 ~ 9 사이의 정수 무작위로 만들기
			for (let i = 0; i < 10; i++) {
				console.log(Math.random());
			}
			⚠️ 안전한 (균일하고 예측불가한) 난수 생성은 아님!
			보안에 관련된 것이라면 전용 라이브러리 또는 아래 링크의 방식을 쓸 것
			👉 Crypto.getRandomValues 메서드

		7. sin, cos, tan, asin, acos, atan
			console.log(
				// 1(또는 근사값) 반환
				Math.sin(Math.PI / 2),
				Math.cos(Math.PI * 2),
				Math.tan(Math.PI / 180 * 45)
			);
			console.log(
				// Math.PI / 2 반환
				Math.asin(1),
				Math.acos(0),
				Math.atan(Infinity)
			);
		

Date 객체
	날짜와 시간 관련 기능들을 제공하는 빌트인 객체
		I. 생성자 함수
			1. 현재 날짜와 시간
				new와 함께 사용하면 인스턴스 객체
				const now = new Date();
				console.log(typeof now); // object
				console.log(now);

				new 없이 사용하면 문자열 반환 - new Date().toString()과 같음
				const nowStr = Date()
				console.log(typeof nowStr); // string
				console.log(nowStr);

			2. 밀리초 기준
				1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간
				⚠️ 이 강의에서의 자정은 해당 일 0시 0분 0초 의미
				console.log(
					new Date(0)
				);
				console.log(
					new Date(1000 * 60 * 60 * 24 * 365 * 30)
				);

			3. 단위별 숫자 입력
				연, 월 ( 0부터 시작 ) 필수
				일, 시, 분, 초, 밀리초 옵션 없을 시 0
				console.log(
					new Date(2022, 8)
				);
				console.log(
					new Date(2022, 8, 20, 14, 35)
				);
				console.log(
					new Date(2022, 8, 20, 14, 35, 47, 789)
				);

			4. dateString
				특정 형식의 문자열 인식 가능
				⚠️ 동작이 일관적이지 못함, 브라우저마다 차이 존재 - 권장하지 않음
				console.log(
					new Date('August 20, 2022 14:35:47')
				);
				console.log(
					new Date('2022-08-20T14:35:47')
				);

		II. 정적 메서드
			1. now
				현재의 밀리초 숫자값 (앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환
				console.log(Date.now());

			2. parse, UTC
				주어진 시간의 밀리초 숫자값 반환
				parse는 dateString, UTC는 단위별 숫자를 받음
				console.log(
					Date.parse('August 20, 2022 00:00:00 UTC')
				);
				console.log(
					// 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
					Date.parse('August 20, 2022 09:00:00')
				);
				console.log(
					// ⭐️ 월은 0부터 시작
					Date.UTC(2022, 7, 20, 0, 0, 0)
				);

		III. 인스턴스 메서드
			1. toString, toDateString, toTimeString
				각각 전체, 날짜만, 시간만 나타내는 문자열 출력
				시스템(컴퓨터)의 언어 설정별로 다르게 나타남
				const now = new Date();
				console.log(
					now.toString()
				);
				console.log(
					now.toDateString()
				);
				console.log(
					now.toTimeString()
				);

			2. toLocaleString
				주어진 언어 코드를 기준으로 표현한 문자열 반환
				인자가 없을 시 시스템의 언어 적용
				const now = new Date();
				console.log(
					now.toLocaleString()
				);
				console.log(
					now.toLocaleString('ko-KR')
				);
			
			3. 단위별 setter, getter 메서드들
				const now = new Date();
				for (i of [
					[ '연:', now.getFullYear() ],
					[ '월:', now.getMonth() ], // 0 ~ 11
					[ '일:', now.getDate() ],
					[ '요일:', now.getDay() ], // 0부터 일월화수목금토 
					[ '시:', now.getHours() ],
					[ '분:', now.getMinutes() ],
					[ '초:', now.getSeconds() ],
					[ '밀리초:', now.getMilliseconds() ]
				]) {
					console.log(i[0], i[1]);
				}

				const now = new Date();
				now.setFullYear(2022);
				now.setMonth(7);
				now.setDate(20);
				// 💡 요일은 setter가 없음
				now.setHours(14);
				now.setMinutes(35);
				now.setSeconds(47);
				now.setMilliseconds(789);
				console.log(now.toString());

			⭐️ 활용예
				const now = new Date();
				const year = now.getFullYear();
				const month = now.getMonth() + 1;
				const date = now.getDate();
				const day = '일월화수목금토'[now.getDay()]; // 월: 0
				console.log(
					`오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`
				);

			4. getTime, setTime
				밀리초 숫자값을 set/get
				const date1 = new Date(2020, 7, 20);
				const date1value = date1.getTime();
				console.log(date1value);
				
				const date2 = new Date(2021, 7, 20);
				const date2value = date2.getTime();
				date2.setTime(date2value);
				console.log(date2value);

			5. getTimezoneOffset
				시스템의 시간대와 UTC의 시간차를 분 단위로 반환
				한국의 경우 9시간 차이
				console.log(
					new Date().getTimezoneOffset() / 60
				);

			6. toISOString
				🔗 ISO 8061이란 형식의 문자열 반환
				UTC 기준으로 반환
				const now = new Date();
				// 시간차 존재
				console.log(
					now.toISOString()
				);
				console.log(
					now.toString()
				);

			⭐️ 현재시각으로 맞추기
				const now = new Date();
				const timezoneOffset = now.getTimezoneOffset() * 60000;
				const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();
				console.log(isoStr);
				console.log(now.toString());


자바스크립트 배열의 특징과 생성
	I. 자바스크립트의 배열은 다르다.
		다른 언어들의 배열 전형적인 배열
			한 배열에는 같은 자료형의 데이터만 포함 가능
			데이터의 메모리 주소가 연속으로 나열됨
			접근은 빠름, 중간요소의 추가나 제거는 느림
		자바스크립트의 배열
			⭐️ 배열의 형태와 동작을 흉내내는 특수 객체
			한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
			연속나열이 아님 - 💡 엔진에 따라 요소들의 타입이 동일하면 연속 배열하기도...
			접근은 상대적으로 느림 (일반 객체보다는 빠름), 중간요소의 추가나 제거는 빠름
			💡 특정 자료형 전용 배열도 있음 - 더 빠름

		II. 배열 생성 방법들
			1. 배열 리터럴
				const arr1 = []; // 빈 배열
				const arr2 = [1, 2, 3];
				const arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성
				console.log(arr1.length, arr1);
				console.log(arr2.length, arr2);
				// arr3의 프로퍼티들 확인 빠진 인덱스 있음, 인덱스 수 < length
				console.log(arr3.length, arr3);

			2. 생성자 함수
				표준 빌트인 객체들 중 하나
					const arr = new Array();
					console.log(arr);
					console.log(arr.length);

				콘솔에서 펼쳐서 확인해 볼 것 길이값만 있음
					const arr = new Array(3);
					console.log(arr);
					console.log(arr.length);

				인자가 숫자 하나면 길이값은 있지만 요소가 없는 배열 생성 접근시 undefined
					const arr = new Array(3);
					console.log(
						arr[0], arr[1], arr[2]
					);

				인자가 숫자가 아니거나 둘 이상이라면 해당 값들로 배열 생성
					const arr1 = new Array(1, 2, 3);
					const arr2 = new Array('ABC');
					const arr3 = new Array(true);
					console.log(arr1);
					console.log(arr2)
					console.log(arr3)

			3. 정적 메서드 of
				// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
				const arr1 = Array.of(3);
				const arr2 = Array.of(1, 2, 3);
				const arr3 = Array.of('ABC', true, null);
				console.log(arr1);
				console.log(arr2);
				console.log(arr3);

			4. 정적 메서드 from
				배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환
				const arr1 = Array.from([1, 2, 3]);
				const arr2 = Array.from('ABCDE');
				const arr3 = Array.from({
					'0': true,
					'1': false,
					'2': null,
					length: 3
				});
				console.log(arr1);
				console.log(arr2);
				console.log(arr3);

				💡 유사배열객체: length와 인덱싱 프로퍼티를 가진 객체
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
					이후 배울 Map, Set 등의 이터러블로부터도 배열 생성 가능

				⚠️ Array.from은 얕은 복사 - 1단계 깊이만 복사
					const arr1 = [1, 2, 3];
					const arr2 = Array.from(arr1);
					arr2.push(4);
					console.log(arr1, arr2);
					arr1[0] = 0;
					console.log(arr1, arr2);

				참조타입 요소의 내부값이 바뀔 경우
					const arr1 = [{x: 1}, {x: 2}];
					const arr2 = Array.from(arr1);
					arr2.push({x: 3});
					arr1[0].x = 0;
					console.log(arr1, arr2);

				⭐️ 두 번째 인자: 매핑 함수
					매핑 mapping : 각 요소가 특정 알고리즘을 거쳐 새 값으로 반환됨
					곧 배울 인스턴스 메서드 map이 보다 자주 사용됨
					const arr1 = [1, 2, 3, 4, 5];
					const arr2 = Array.from(arr1, x => x + 1);
					const arr3 = Array.from(arr1, x => x * x);
					const arr4 = Array.from(arr1, x => x % 2 ? '홀' : '짝');
					console.log(arr2);
					console.log(arr3);
					console.log(arr4);


배열의 기본 메서드들
	I. 특정 값을 반환하는 기본 메서드들
		1. (정적) isArray - 배열인지 여부를 반환
			console.log(
				Array.isArray([1, 2, 3]),
				Array.isArray('123'),
				Array.isArray('123'.split('')) // '123'.split() 과 다름
			);

			💡 instanceof Array와의 차이
				Array.isArray가 보다 권장됨 다른 프레임의 Array도 판별
				const arrays = [
					[], 
					[1, 2, 3], 
					new Array(),
					Array.prototype // 배열과 동일
				];
				for (const item of arrays) {
					console.log(
						item,
						Array.isArray(item),
						item instanceof Array
					);
				}

				const notArrays = [
					1, 'abc', true, null, {}
				];
				for (const item of notArrays) {
					console.log(
						item,
						Array.isArray(item),
						item instanceof Array
					);
				}

		2. at - 주어진 인자를 인덱스로 값을 반환
			⭐️ 음수를 사용하여 뒤에서부터 접근 가능
			const arr = [
				'한놈', '두시기', '석삼', '너구리', '오징어'
			];
			console.log(
				arr.at(1), arr.at(2)
			);

		3. includes - 인자로 주어진 요소 유무 확인
			const arr = [1, 2, 3, 'abc', true];
			console.log(
				arr.includes(2),
				arr.includes('abc'),
				arr.includes(true),
			);

			⚠️ 참조형 데이터의 경우
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

		4. indexOf, lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환
			없을 시 -1 반환
			const arr = [1, 2, 3, 2, 1];
			console.log(
				arr.indexOf(2),
				arr.lastIndexOf(2),
				arr.indexOf(4) // -1
			);

		5. join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
			const arr1 = ['a', 'b', 'c', 'd', 'e'];
			const arr2 = [
				1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
			];
			console.log(
				arr1.join(), // 인자가 없다면 쉼표`,`로
				arr2.join(':')
			);

			console.log(
				classIntro(3, '김민지', '영희', '철수', '보라')
			); // 호이스팅
			function classIntro (classNo, teacher, ...children) {
				return `${classNo}반의 선생님은 ${teacher}, `
					+ `학생들은 ${children.join(', ')}입니다.`
			}
		
	II. 배열을 변경하는 기본 메서드들
		1. push, unshift - 배열에 값을 추가하고, 결과의 길이를 반환
			수정된 배열의 길이를 반환
			부수효과 - 원본 배열을 변경 배열 마지막 강에 배울 스프레드 문법을 보다 권장
			💡 push보다 unshift가 더 느림 - 이후 요소들을 밀어내야 하므로
			a. push - 값을 뒤에 추가
				const arr = [1, 2, 3];
				arr.push(4);
			
			b. unshift - 값을 앞에 추가
				const arr = [5, 6, 7];
				arr.unshift(4);

		2. pop, shift - 배열에서 값을 제거하여 반환
			💡 pop보다 shift가 더 느림 - 이후 요소들을 당겨야 하므로
			a. pop - 값을 뒤에서 제거하여 반환
				const arr = [1, 2, 3, 4, 5];
				arr.pop();

			b. shift - 값을 앞에서 제거하여 반환
				const arr = [1, 2, 3, 4, 5];
				arr.shift();

		3. splice - 원하는 위치에 요소(들)을 추가 및 삭제
			2개 이상의 인자를 받음
				start : 배열 변경을 시작할 위치
				deleteCount : 제거할 요소의 개수
				item(s) : 추가할 하나 이상의 요소

			// 2번 인덱스부터 2개 요소 제거
			const arr = [1, 2, 3, 4, 5, 6, 7];
			arr.splice(2, 2);
			console.log(arr); // [1, 2, 5, 6, 7]

			// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
			arr.splice(1, 3, '가', '나', '다');
			console.log(arr); // [1, '가', '나', '다', 7]

		⚠️ 배열의 delete - empty 값을 남김 - 배열의 값 삭제에는 splice 사용
			const arr = [1, 2, 3, 4, 5];
			delete arr[2];
			console.log(arr);

			arr.splice(2, 1);
			console.log(arr);

		4. fill - 배열을 특정 값으로 채움
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

		5. reverse - 배열의 순서를 뒤집음
			const arr = [1, 2, 3, 4, 5, 6, 7];
			// 💡 메서드 자체도 뒤집힌 배열을 반환
			const arrRev = arr.reverse();
			// 원본 배열 뒤집힘
			console.log(arr, arrRev);
 
	III. 새 배열을 반환하는 기본 메서드들
		⭐️ 원본 배열을 수정하지 않음
		얕은 복사본
		1. concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환
			const arr1 = [1, 2, 3];
			const arr2 = ['a', 'b', 'c'];
			const arr3 = [true, false];
			const arr4 = arr1.concat('ABC', arr2, arr3, 100);
			console.log(arr4);

		2. slice - 인자로 주어진 범주의 값을 잘라 반환
			1~2개 인자를 받음
				begin : 시작 위치
				end : 종료 위치
			const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const arr2 = arr1.slice(3);
			const arr3 = arr1.slice(3, 7);
			console.log(arr2, arr3);

		3. flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
		💡 flat 평평하게 한다는 의미
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

		💡 위의 메서드들은 얕은 복사
			원시값과 참조값 비교
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


고차함수 메서드들
	배열의 고차함수 (higher order function method)
		다른 함수(콜백 함수 callback function)를 인자로 받음
		함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩

	1. forEach - 각 요소를 인자로 콜백함수 실행
		💡 for문의 좋은 대체제
		⚠️ 단점 : 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가
		💡 결과로는 undefined 반환 - 실행 자체를 위한 메서드
		인자들:
			콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
			thisArg - this 주제 섹션에서 다룰 것
		
			const arr = [1, 2, 3, 4, 5];
			const result = arr.forEach(itm => {
				console.log(itm);
			});
			
			// 현존하는 함수를 인자로 - 💡 결과 살펴볼 것
			const arr = [1, 2, 3, 4, 5];
			arr.forEach(console.log);
			// 현재 값, 현재 값의 인덱스, 해당 배열
			// 1 				0 						(5) [1, 2, 3, 4, 5]
			// 2 				1 						(5) [1, 2, 3, 4, 5]
			// 3 				2 						(5) [1, 2, 3, 4, 5]
			// 4 				3 						(5) [1, 2, 3, 4, 5]
			// 5 				4 						(5) [1, 2, 3, 4, 5]

			// 콜백함수의 인자가 둘일 때
			const arr = [10, 20, 30, 40, 50];
			arr.forEach((itm, idx) => {
				console.log(itm, idx);
			});
			
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
			// 이런 식으로 원본을 수정해버릴 수 있음
			console.log(arr); // (5) [2, 3, 4, 5, 6]

		2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
			⭐️ 각 콜백함수는 어떤 값을 반환해야 함
			인자들:
				콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
				thisArg

			const orgArr = [1, 2, 3, 4, 5];
			const arr1 = orgArr.map(itm => itm + 1);
			const arr2 = orgArr.map(itm => itm * i);
			const arr3 = orgArr.map(itm => itm % 2 ? '홀수' : '짝수');
			console.log(arr1);
			console.log(arr2);
			console.log(arr3);

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

		3. find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
			콜백함수로에 인자로 넣었을 때 true를 반환하는
				find - 첫 번째 값 반환
				findLast - 마지막 값 반환
				findIndex - 첫 번째 값의 인덱스 반환
				findLastIndex - 마지막 값의 반환
			공통 인자들:
				콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
				thisArg

			const arr = [1, 2, '삼', 4, 5, 6, '칠', 8, 9];
			const isString = i => typeof i === 'string';
			const isBoolean = i => typeof i === 'boolean';
			console.log(
				arr.find(isString),
				arr.findLast(isString),
				arr.findIndex(isString),
				arr.findLastIndex(isString)
			);

			// 없을 시 값은 undefined, 인덱스는 -1 반환
			console.log(
				arr.find(isBoolean), // undefined
				arr.findLast(isBoolean), // undefined
				arr.findIndex(isBoolean), // -1
				arr.findLastIndex(isBoolean) // -1
			);

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

		4. some, every - 어떤/모든 요소가 기준을 충족하는지 확인
			콜백함수에 인자로 넣은
			some - 요소들 중 하나라도 true를 반환하는가 여부 반환
			every - 모든 요소가 true를 반환하는가 여부 반환
			인자들:
				콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
				thisArg

			const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			console.log(
				arr.some(i => i % 2),
				arr.every(i => i % 2),
				arr.some(i => i < 0),
				arr.every(i => i < 10)
			);

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

		5. filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환
			⭐️ 원본 배열을 수정하지 않음
			인자들:
				콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
				thisArg

			const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			const odds = arr.filter(i => i % 2);
			const evens = arr.filter(i => !(i % 2));
			const largerThan3 = arr.filter(i => i > 3);
			console.log(odds);
			console.log(evens);
			console.log(largerThan3);

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

		6. reduce, reduceRight
			주어진 콜백함수에 따라 값들을 접어 나감
			인자들:
				콜백함수 - 인자: ( 이전값, 현재값, 현재 인덱스, 해당 배열 )
				초기화 값

			초기화 값이 없을 때는 첫 번째와 두 번째 값부터
				const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				console.log(
					arr.reduce((prev, curr, idx) => {
						console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
						return prev + curr;
					})
				);

			초기화 값이 있을 때
			// 인덱스가 0부터 시작함 주목
				const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				console.log(
					arr.reduce((prev, curr, idx) => {
						console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
						return prev + curr;
					}, 10)
				);
			
			// 곱해나가기
			const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			console.log(
				arr.reduce((prev, curr, idx) => {
					console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
					return prev * curr;
				})
			);
		
			// 더하기와 빼기 반복
			const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			console.log(
				arr.reduce((prev, curr, idx) => {
					console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
					return idx % 2 ? prev + curr : prev - curr;
				})
			);
		
			// 홀수와 짝수 갯수
			const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			console.log(
				arr.reduce((prev, curr) => {
					return {
						odd: prev.odd + curr % 2,
						even: prev.even + (1 - (curr % 2)),
					}
				}, { odd: 0, even: 0 })
			);

			reduce vs reduceRight
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
			⭐️ 만약 위 기능을 배열 메서드와 체이닝 없이 짰다면?
			중간 과정을 저장하기 위한 변수 또는 내용이 바뀌는 참조형 데이터들이 사용되었을 것
			함수형 프로그래밍 - 변수들을 코드에서 감추어 부수효과로 인한 문제 방지

		7. sort - 배열을 ( 주어진 기준대로 ) 정렬
			⚠️ 배열 자체의 순서를 바꿈 - 원본 수정
			➕ 해당 배열을 반환
				인자들:
				콜백함수(필수 아님) - 인자: ( 앞의 값, 뒤의 값 )

			// 인자가 없을 시
			const arr = ['라', '사', '다', '가', '바', '마', '나'];
			arr.sort();
			console.log(arr);

			let randomWord = 'DBKGICAHFEJ';
			console.log(
				randomWord
				.split('')
				.sort()
				// .reverse()
				.join('')
			);
			console.log(randomWord);

			// ⚠️ 숫자일 시 문제가 생김
			// 숫자를 문자열로 암묵적 변환하여 오름차순 정렬
			const arr = [1, 2, 30, 400, 10, 100, 1000];
			console.log(arr.sort());

			⭐️ 정확한 정렬을 위해 - 콜백 함수 사용
				두 인자 a와 b : 인접한 두 요소
				0보다 큰 값 반환 : b를 앞으로 - 순서 뒤집음
				0 반환: 순서 유지 - ECMAScript 표준은 아니므로 환경마다 다를 수 있음
				0보다 작은 값 반환 : a를 앞으로 - 사실상 순서 유지

				브라우저마다 동작 디테일 다름
				인접한 앞의 것과 뒤의 것을, 콜백함수의 첫 번째와 두 번째 인자 (a, b) 중
				어떤 것으로 받아오는지가 브라우저마다 다릅니다.
				이 부분 때문에 아래의 실습 중 혼동이 올 수 있는데
				끝까지 진행해보시면 큰 어려움 없이 이해하실 수 있을 것입니다.

			👇 브라우저마다 로그 내역이 다름 주목 - 크롬계열 vs 파이어폭스 등...
				// 오름차순
				const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				console.log(
					arr.sort((a, b) => {
						console.log(`a: ${a}, b: ${b}`);
						return 1;
					})
				);

				// 순서 거꾸로
				const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				console.log(
					arr.sort((a, b) => {
						console.log(`a: ${a}, b: ${b}`);
						return -1;
					})
				);
		
				// 셔플 - ⚠️ 위의 코드들과 로그 갯수 비교
				const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				console.log(
					arr.sort((a, b) => {
						console.log(`a: ${a}, b: ${b}`);
						return Math.random() - 0.5;
					})
				);


			아래의 실습결과는 환경이 달라도 같음
			a와 b의 의미에 따라 반환값 양수/음수의 음수의 의미도 바뀌기 때문
			따라서 실무에서는 실행환경을 신경쓸 필요 없음
				const arr = [1, 2, 30, 400, 10, 100, 1000];
				console.log(
					arr.sort((a, b) => a - b)
				);
				console.log(
					arr.sort((a, b) => b - a)
				);


			⚠️ 숫자가 아닐 경우 직접 반환값을 명시
				// NaN을 반환하므로 콜백에 사용 불가
				console.log('A' - 'B');

				const arr = ['F', 'E', 'I', 'A', 'H', 'C', 'D', 'J', 'G', 'B'];
				console.log(
					arr.sort((a, b) => a > b ? 1 : -1)
				);
				console.log(
					arr.sort((a, b) => a < b ? 1 : -1)
				);

			💡 둘 이상의 기준 사용
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

		7. flatMap - map 한 다음 flat 매핑해서 펼침
			인자들:
				콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
				thisArg
		
			const arr = [1, 2, 3, 4, 5];
			console.log(
				arr.flatMap(i => i)
			);

			console.log(
				arr.flatMap(i => [i, i, i])
			);

			console.log(
				arr.flatMap(i => [i * 10, i * 100, i * 1000])
			);

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


배열의 스프레드와 디스트럭쳐링
	I. 스프레드 (spread)
		1. 기본 문법
			const arr1 = [1, 2, 3];
			const arr2 = [...arr1];
			console.log(arr2);

			const arr1 = ['B', 'C'];
			const arr2 = ['D'];
			const arr3 = ['E'];
			const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F']
			console.log(arr4);

		2. 활용
			a. 배열을 다수의 인자들로 펼침
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
				// 호이스팅
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

			b. concat보다 가독성있는 배열 결합
				const arr1 = [1, 2, 3];
				const arr2 = [4, 5, 6];
				const arr3 = arr1.concat(arr2);
				const arr4 = [...arr1, ...arr2];
				console.log(arr3, arr4);

			c. ⭐️ 배열의 얕은 복사
				const arr1 = [1, 2, 3];
				const arr2 = [...arr1];
				console.log(arr1 === arr2);
				arr1[0] = 0;
				console.log(arr1, arr2);

				// ⚠️ 깊은 복사는 되지 않음
				const arr1 = [{ x: 1 }, { x: 2 }];
				const arr2 = [...arr1];
				arr1[0].x = 0;
				console.log(arr1, arr2);

			d. 💡 push, unshift 대신 사용
				// 가독성 향상
				// 배열이 든 변수의 참조값이 변할 필요가 있는 경우 (SPA 등...)
				let arr = [1, 2, 3];
				arr = [...arr, 4];
				console.log(arr);
				arr = [4, ...arr];
				console.log(arr);

			e. 원본배열을 유지한 채 일정부분만 연결하여 복사
				splice는 원본배열을 변경
	 			// 4 ~ 6을 제외한 새 배열 만들기
				const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				// 💡 slice는 원본을 변경하지 않음
				const arr1 = [
					...orgArr.slice(0, 3),
					...orgArr.slice(6, 9)
				];
				console.log(arr1);

				// 참고: 또 다른 방법
				const arr2 = orgArr
				.filter((_, i) => !(i >= 3 && i < 6));
				console.log(arr2);
				// 원본은 유지
				console.log(orgArr);

	II. 디스트럭쳐링 (destructuring)
		1. 문법
			기존 코드
				const arr = [1, 2, 3];
				const x = arr[0];
				const y = arr[1];
				const z = arr[2];
				console.log(x, y, z);

			디스트럭쳐링으로 간략화
				const arr = [1, 2, 3];
				const [x, y, z] = arr;
				console.log(x, y, z);

			일부만 가져오는 것도 가능
				const arr = [1, 2, 3];
				const [x, y] = arr;
				console.log(x, y);

			기본값 설정
				const arr = [1, 2, 3];
				const [a, b, c, d = 4, e = 5] = arr;
				console.log(a, b, c, d, e);
				// 기본값보다 할당값이 우선
				const [f, g, h = 4] = arr;
				console.log(f, g, h);

			나머지 변수 사용 가능
				const arr = [1, 2, 3, 4, 5];
				const [x, ...y] = arr;
				console.log(x, y);

		2. 활용예
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
			// 💡 원본의 순서 변경하지 않음
			console.log(players);

		💡 다음과 같은 사용도 가능
			// 서로 값을 바꾸기
			let a = 1;
			let b = 2;
			[a, b] = [b, a];
			console.log(a, b);

			// 피보나치 수열
			let a = 0;
			let b = 1;
			for (let i = 0; i < 10; i++) {
				[a, b] = [b, a + b];
				console.log(b);
			}

			let [a, b, c, d] = '@-&='.split('');
			for (let i = 0; i < 24; i++) {
				[a, b, c, d] = [d, a, b, c];
				console.log([a, b, c, d].join('   '));
			}


[업데이트] 자바스크립트 2023 (ES14)에 추가된 기능들
	배열 관련
		1. 부작용을 제거한 메서드들
			원본 배열의 내용을 수정하지 않음
			함수형 패러다임의 기조를 따름

			toSorted : 정렬된 결과를 반환
				const array0 = [3, 1, 4, 5, 2];
				array0.sort(); // 메서드 호출이 부작용을 유발
				console.log(array0);

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
				​
				// es14 전에는...
				array3 = [3, 1, 4, 5, 2];
				array3Sorted = [...array3].sort(); // 이제는 이렇게 할 필요 없음
				console.log(array3, array3Sorted);
				array4 = [3, 6, 1, 10, 4, 8, 7, 5, 9, 2];

				// 역시 고차함수 - 콜백함수를 받음
				array4Sorted = array4.toSorted((a, b) => a % 2 - b % 2);
				console.log(array4, array4Sorted);
				​
			toReversed : 뒤집힌 결과를 반환
				array5 = [3, 1, 4, 5, 2];
				array6 = [...array5];
				array5Reversed = array5.reverse();
				array6Reversed = array6.toReversed();
				array5Reversed.push(6);
				array6Reversed.push(6);
				console.log(array5Reversed, array6Reversed);
				console.log(array5, array6);
				​
			toSpliced : 잘린 결과를 반환
				const array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
				const array8 = [...array7];
				array7.splice(4, 3, 'A', 'B', 'C'); // 부작용 유발
				console.log(array7);
				const array9 = array8.toSpliced(4, 3);
				const array10 = array8.toSpliced(4, 3, 'A', 'B', 'C');
				console.log(array9, array10);
				console.log(array8);
				​
		2. 뒤에서부터 찾는 메서드들
			findLast : 주어진 조건에 해당하는, 뒤에서부터 첫 요소 반환
				findLastIndex : 위 요소의 인덱스 반환
				const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				// 앞에서부터 찾는 메서드들
				const firstMult3 = myArray.find(i => i % 3 === 0);
				const firstMult3Idx = myArray.findIndex(i => i % 3 === 0);
				console.log(firstMult3, firstMult3Idx);
				​
				// es14 전에는...
				const lastMult3 = [...myArray].reverse().find(i => i % 3 === 0);
				const lastMult3Idx = 
					myArray.lastIndexOf(
						[...myArray]
						.reverse()
						.find(j => j % 3 === 0)
					);
				console.log(lastMult3, lastMult3Idx);
				​
				const lastMult3 = myArray.findLast(i => i % 3 === 0);
				const lastMult3Idx = myArray.findLastIndex(i => i % 3 === 0);
				console.log(lastMult3, lastMult3Idx);
				​
		3. 부분적으로 수정한 배열을 반환
			with 
				첫 번째 인자로 주어진 인덱스의 값을 두 번째 인자로 주어진 값으로 수정한 새 배열 반환
				const orgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				// 아래의 코드는 원본 배열을 수정
				// orgArray[3] = '넷';
				​
				원본 수정 없이 4번째 요소를 ‘넷’으로 바꾼 배열을 얻고 싶다면?
				const newArray = [...orgArray.slice(0, 3), '넷', ...orgArray.slice(4, 10)];
				console.log(newArray, orgArray);
				​
				const newArray = orgArray.with(3, '넷');
				console.log(newArray, orgArray);
				const newArray = orgArray
				.with(3, '넷')
				.with(6, '일곱')
				.with(9, '열');
				console.log(newArray, orgArray);


Object
	I. Object 클래스
		이제까지 배운 자바스크립트 객체들의 원형
		각각 따로 출력해서 [[Prototype]]을 펼쳐 볼 것
		console.log(
			new String('ABC') instanceof Object,
			new Number(123) instanceof Object,
			[] instanceof Object,
			(function () {}) instanceof Object,
			globalThis instanceof Object
		);

		생성자 함수
			// 빈 객체 생성
			console.log(
				new Object(),
				new Object(null),
				new Object(undefined),
			);

			// 각 값에 적합한 래핑함수로 작용
			console.log(
				new Object(1),
				new Object('ABC'),
				new Object(true),
				new Object([1, 2, 3])
			);

	II. 주요 정적 메서드
		1. assign - 인자로 주어진 객체(들)의 프로퍼티들을 대상 객체에 붙여넣음
			⭐️ 대상 객체를 변경
			결과 객체를 반환
			⚠️ 얕은 복사
			인자들:
				대상 객체
				원본 객체(들)

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

		2. keys, values, entries - 객체의 키 / 값 / [키, 값]을 배열로 반환
			const obj = {
				x: 1,
				y: 2,
				z: 3
			};

			console.log(
				Object.keys(obj),
			);
			console.log(
				Object.values(obj),
			);
			console.log(
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

		3. preventExtensions - 프로퍼티 추가 금지
			isExtensible - 해당 여부 확인
			const obj = { x: 1, y: 2 };
			console.log(Object.isExtensible(obj)); // true

			Object.preventExtensions(obj);
			console.log(Object.isExtensible(obj));

			obj.x++; // 프로퍼티 수정 가능
			delete obj.y // 프로퍼티 삭제 가능
			obj.z = 3; // 💡 프로퍼티 추가 금지
			console.log(obj);

			// 배열에 적용시
			const arr = [1, 2];
			Object.preventExtensions(arr);
			arr[2] = 3; // 동작하지 않음
			console.log(arr);
			arr.push(3); // ⚠️ 오류 발생
			console.log(arr);
			
		4. seal - 프로퍼티 추가와 삭제 금지
			isSealed - 해당 여부 확인
			const obj = { x: 1, y: 2 };
			console.log(Object.isSealed(obj)); // false

			Object.seal(obj);
			console.log(Object.isSealed(obj));

			obj.x++; // 프로퍼티 수정 가능
			delete obj.y // 💡 프로퍼티 삭제 금지
			obj.z = 3; // 💡 프로퍼티 추가 금지
			console.log(obj);
		
		5. freeze - 객체 동결 - 읽기만 가능
			isFrozen - 해당 여부 확인
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
			arr[0]++; // 💡 요소 수정, 추가, 삭제 불가
			console.log(arr);

			⚠️ 얕게만 적용
			const obj = {
				x: 1,
				y: { a: 1 }
			};
			Object.freeze(obj);
			obj.x++;
			obj.y.a++;
			console.log(obj);


프로퍼티 어트리뷰트
	I. 프로퍼티 어트리뷰트 property attributes
		객체의 프로퍼티가 생성될 때 엔진에 의해 자동 정의되는 상태
		💡 프로퍼티에는 두 종류가 있음
			const person = {
				// ⭐️ 1. 데이터 프로퍼티들
				fullName: '홍길동',
				ageInNumber: 25,

				// ⭐️ 2. 접근자 프로퍼티들
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
			console.log(
				person.name, person.age
			);

			1. 데이터 프로퍼티의 어트리뷰트
				프로퍼티 						어트리뷰트 설명																									설정중 생략시 기본값
				[[Value]]						프로퍼티의 값																											undefined
				[[Writable]]				값 갱신 가능 여부 - false일 경우 읽기 전용														false
				[[Enumerable]]			열거(for ... in문, Object.keys 사용) 가능 여부											false
				[[Configurable]]		프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부			false

			2. 접근자 프로퍼티의 어트리뷰트
				프로퍼티 						어트리뷰트	설명																								설정중 생략시 기본값
				[[Get]]							객체로부터 값을 읽을 때 호출되는 getter 함수													undefined
				[[Set]]							객체에 값을 저장할 때 호출되는 setter 함수														undefined
				[[Enumerable]]			열거(for ... in문, Object.keys 사용) 가능 여부											false
				[[Configurable]]		프로퍼티의 제거, (value와 writable 제외) 어트리뷰트 수정 가능 여부			false

	II. Object의 프로퍼티 어트리뷰트 관련 정적 메서드들
		1. getOwnPropertyDescriptor, getOwnPropertyDescriptors
			객체 프로퍼티 어트피뷰트들의 설명자 descriptor를 반환
				const person = {
					// ⭐️ 1. 데이터 프로퍼티들
					fullName: '홍길동',
					ageInNumber: 25,

					// ⭐️ 2. 접근자 프로퍼티들
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

		2. defineProperty, defineProperties
			객체의 프로퍼티를 정의
				const person = {};
				// 한 프로퍼티씩 각각 설정
				Object.defineProperty(person, 'fullName', {
					value: '홍길동',
					writable: true
					// 💡 누락한 어트리뷰트는 기본값으로 자동생성
				});

				Object.defineProperty(person, 'name', {
					get () {
						return this.fullName
						.split('')
						.map((letter, idx) => idx === 0 ? letter : '*')
						.join('');
					}
				});

				console.log(person, person.name);
				console.log( // ⚠️ 누락된 어트리뷰트들 확인해볼 것
					Object.getOwnPropertyDescriptors(person)
				);

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

				console.log(person, person.age);
				console.log(
					Object.getOwnPropertyDescriptors(person)
				);

	III. 적용예
		const person = {
			fullName: '홍길동',
			ageInNumber: 25,
		};

		// 💡 value를 전우치로 바꾸면
		Object.defineProperty(person, 'fullName', {
			value: '전우치'
		});
		console.log(
			Object.keys(person)
		);

		// 💡 enumerable을 false로 바꾸면
		Object.defineProperty(person, 'fullName', {
			enumerable: false
		});
		console.log(
			Object.keys(person)
		);
		console.log(
			// ⭐️ Object의 또 다른 정적 메서드
			// ⭐️ enemerable이 false인 프로퍼티도 반환
			Object.getOwnPropertyNames(person)
		);

		// 💡 seal: configurable을 false로 바꿈
		Object.seal(person);
		console.log(
			Object.getOwnPropertyDescriptors(person)
		);

		// 💡 freeze: configurable과 writable을 false로 바꿈
		Object.freeze(person);
		console.log(
			Object.getOwnPropertyDescriptors(person)
		);

	IV. 깊은 동결 (deep freeze)
		재귀적으로 객체를 가장 깊숙히까지 동결
		🔗 MDN 문서의 deepFreeze 예시와는 달리, 주어진 인자 자체를 변형하지 않도록
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
		// 여러 번 실행해 볼 것
		myObj.a++;
		myObj.b.c++;
		myObj.b.d.e++;
		myObj.b.d.f.g++;
		console.log(myObj);

		// 💡 실행 뒤 바로 위의 출력 코드를 다시 실행해 볼 것
		myObj = getDeepFrozen(myObj);


JSON
	I. JSON (JavaScript Object Notation)
		복잡한 구조를 가질 수 있는 데이터를 한 줄의 문자열로 표현
		서버와 클라이언트 등 데이터들을 주고받는 주체들 사이에 널리 사용

	II. JSON 객체의 정적 메서드
		1. stringify - 객체를 문자열로 직렬화 (serialize)
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

			데이터 형태별 직렬화 결과
				[
					JSON.stringify(1),
					JSON.stringify(Infinity), // ⚠️
					JSON.stringify(NaN), // ⚠️
					JSON.stringify('가나다'),
					JSON.stringify(true),
					JSON.stringify(null),
					JSON.stringify(undefined),
					JSON.stringify([1, 2, 3]),
					JSON.stringify({x: 1, y: 2}),
					JSON.stringify(new Date()), // ⚠️
				]
				.forEach(i => console.log(i));

				// 이후 배울 Symbol - 직렬화되지 않음
				console.log( JSON.stringify(Symbol('hello')) ); // ⚠️

				// 이후 배울 BigInt - 오류 발생
				console.log( JSON.stringify(1n) ); // ⚠️
		
			⭐️ 값이 함수인 프로퍼티는 직렬화되지 않음
				const obj = {
					x: 1,
					y: 2,
					z: function () { return this.x + this.y }
				}
				console.log(obj.z())
				const objStr = JSON.stringify(obj);
				console.log(objStr);

				const func1 = (a, b) => a + b;
				function func2 () { console.log('HELLO'); }
				const func1Str = JSON.stringify(func1);
				const func2Str = JSON.stringify(func2);
				console.log(func1Str);
				console.log(func2Str);
		
			💡 2번째 인자: replacer 함수
				직렬화될 방식을 지정
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
							// ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
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
			
			3번째 인자: 인덴트
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

			객체의 toJSON 프로퍼티
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

		2. parse - 역직렬화
			[
				JSON.parse('1'),
				JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
				JSON.parse('true'),
				JSON.parse('null'),
				JSON.parse('[1, 2, 3]'),
				JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
			]
			.forEach(i => console.log(i));
		
			2번째 인자: receiver 함수
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
				console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)

	III. 깊은 복사 deep copy
	⭐️ JSON을 사용한 깊은 복사
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

	💡 함수, Date, Symbol, BigInt 프로퍼티는 JSON 방식으로는 불가 또는 제한적
		const obj1 = {
			a: 1,
			b: 2,
			c: function () { return this.a + this.b },
			d: new Date(),
			e: Symbol('안녕'),
			// g: 1n // ⚠️ 오류 발생
		}
		const obj2 = JSON.parse(JSON.stringify(obj1));
		console.log(obj1);
		console.log(obj2);

	⭐️ structuredClone
		아직은 일부 브라우저(Web API 형태로) 및 환경에서만 지원
		JSON 방식보다 빠르고 효율적인 깊은 복사
		Date와 BigInt 제대로 복사 - 함수와 Symbol은 여전히 불가
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


2, 8, 16진법과 비트 연산자
	I. 다른 진법들
		2진법 (binary)
			0b 뒤로 숫자 0, 1 를 붙여 표현
			[
				0b1,
				0b10,
				0b11,
				0b100,
				0b101
			].forEach(i => console.log(i))
			console.log(
				0b2 // ⚠️ 토큰으로 인식 - 오류
			);

		8진법 (octal)
			0o 뒤로 숫자 0~7 를 붙여 표현
			[
				0o7,
				0o10,
				0o100,
				0o1000,
			].forEach(i => console.log(i))

		16진법 (hexadecimal)
			0x 뒤로 숫자 0~9, A~F 를 붙여 표현
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


		⭐️ 진법 간 변환
			const num = 123456789;
			const binStr = num.toString(2);
			const octStr = num.toString(8);
			const hexStr = num.toString(16);
			console.log(binStr, octStr, hexStr);

			console.log(
				parseInt(binStr, 2),
				parseInt(octStr, 8),
				parseInt(hexStr, 16)
			);
	
		이 외에도 2 ~ 36 사이의 진법 사용 가능 - toString과 parseInt의 가용 인자 범위
			// 💡 상호변환
			console.log(
				parseInt(hexStr, 16).toString(2),
				parseInt(binStr, 2).toString(8),
				parseInt(octStr, 8).toString(16)
			);

	II. 비트 연산자들
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

		let x = 0b101; // 5
		console.log(x.toString(2), x);
		// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
		x = x << 1;
		console.log(x.toString(2), x);
		// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
		x = x >> 1;
		console.log(x.toString(2), x);


BigInt
	Number.MAX_SAFE_INTEGER 더 큰 정수를 다루기 위한 자료형
		매우 큰 정수를 다뤄야 하는 특수한 경우에 사용
		console.log(
			Number.MAX_SAFE_INTEGER
		);

		number 타입으로 안정적으로 표현할 수 있는 가장 큰 정수 - 9007199254740991 (2^53 - 1)
		for (let i = 0; i < 100; i++) {
			console.log(Number.MAX_SAFE_INTEGER + i);
		}

	아래의 방법들로 생성
		const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
		const bigInt2 = BigInt(9007199254740991);
		const bigInt3 = BigInt('9007199254740991');
		const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991
			
		console.log(
			bigInt1 === bigInt2,
			bigInt2 === bigInt3,
			bigInt3 === bigInt4
		);
			
		console.log(typeof bigInt1);

		for (let i = 0; i < 100; i++) {
			console.log(bigInt1 + BigInt(i));
		}

	BigInt의 특징들
		일반 number 타입과 산술 (+, -, *, /, %, **) 연산 불가
		console.log(
			1n + 1
		);
		console.log(
			1n + 1n
		);

		// 양쪽 모두 BigInt로 변환하여 계산하는 방법 사용
		const calcAsBigInt = (x, y, op) => {
			return op(BigInt(x), BigInt(y));
		}
		console.log(
			calcAsBigInt(1n, 1, (x, y) => x + y)
		);

		비교 연산 가능
			console.log(
				1n === 1, // 타입은 다름
				1n == 1,
				1n < 2,
				1n >= 0,
				2n < 1
			);

		number 숫자와 섞여 정렬 가능
			console.log(
				[4n, 7, 6n, 3, 1, 5, 9, 2n, 8n]
				.sort((a, b) => a > b ? 1 : -1)
			);

		불리언으로 변환되는 연산 가능
			console.log(
				!!(0n),
				!!(1n)
			);
			0n ? console.log('참') : console.log('거짓');
			1n ? console.log('참') : console.log('거짓');

		소수점 아래는 버림
			console.log(
				5n / 2n
			);

		Math의 정적 메서드에서 사용 불가
			console.log(
				Math.max(1n, 2n)
			);

		number로 변환 - 정확성 유실 주의!
			console.log(
				Number(1n),
				Number(9007199254740993n)
			);


Symbol
	다른 값과 절대 중복되지 않는 유일무이한 값
	원시 타입
	I. 기본 생성과 활용
		const mySymbol = Symbol();
		console.log(typeof mySymbol, mySymbol);
		// 💡 new를 사용하지 않음
		const mySmbol = new Symbol(); // ⚠️ 오류 발생!

		문자열 값을 인자로 줄 수 있음
		해당 심벌에 대한 설명일 뿐, 각 심벌의 값은 유일무이
		const symbol1 = Symbol('hello');
		const symbol2 = Symbol('hello');
		console.log(symbol1, symbol2);
		// ⭐️ 두 심볼은 같지 않다!
		console.log(symbol1 === symbol2);

		// 래퍼 객체(Symbol)의 인스턴스 프로퍼티 - 임시 형변환
		console.log(symbol1.description, symbol2.description);
		// 래퍼 객체(Symbol)의 인스턴스 메서드 - 임시 형변환
		console.log(symbol1.toString(), symbol2.toString());

		⭐️ 객체에서의 활용
			객체의 키로 사용시: [, ]로 감쌈
			const obj = {
				[Symbol('x')]: 1,
				[Symbol('y')]: 2
			}
			console.log(obj);
			// 유일무이한 값이므로 다음과 같이 출력 불가
			console.log(
				obj[Symbol('x')],
				obj[Symbol('y')]
			);

		💡 외부 접근을 제한할 프로퍼티의 키로 활용
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

		⭐️ 아래의 방법들로는 접근되지 않음
			for (key in building) {
				console.log(key);
			}
			console.log(
				Object.keys(building),
				Object.values(building),
				Object.entries(building),
				Object.getOwnPropertyNames(building)
			);

		💡 아래의 Object 정적 메서드로 접근 가능 (배열로 반환)
			console.log(
				Object.getOwnPropertySymbols(building),
				Object.getOwnPropertySymbols(building)[0],
			);
			console.log(
				building[
					Object.getOwnPropertySymbols(building)[0]
				]
			);

	II. 전역 심볼 레지스트리 (global symbol registry)
		키가 중복되지 않는 심볼들이 저장되는 공간

		Symbol 의 정적 메서드들
			for : 주어진 인자로 전역 심볼 레지스트리에 하나의 심볼 생성 및 반환
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

			// ⚠️ for 메서드로 생성되지 않은 심볼과는 다름
			const symbol3 = Symbol('hello'); // 전역 심볼 레지스트리에 저장 ❌
			console.log(symbol1 === symbol3);

		keyFor : 정적 심볼 레지스트리에 저장된 심볼의 키 반환
			console.log(
				Symbol.keyFor(symbol1),
				Symbol.keyFor(symbol2)
			);
			// ⚠️ 전역 심볼 레지스트리에 저장되지 않은 심볼에는 작동하지 않음
			console.log(
				Symbol.keyFor(symbol3)
			);

		그럼 전역 심볼 레지스트리의 심볼은 무엇에 쓰이나요?
			표준 빌트인 객체에 직접 만든 메서드를 만들어 넣을 경우
			이후 버전의 자바스크립트에서 같은 이름으로 메서드가 추가되더라도
			커스텀 메서드가 덮어씌워지지 않도록 하기 위한 용도로 쓰일 수 있다.

			// 숫자 요소들의 평균을 구하는 메서드 추가
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


Set
	중복되지 않는 값들의 집합
		표준 내장 객체 중 하나
	💡 배열과의 차이:
		동일한 값을 여러 번 포함할 수 없음
		값들의 순서가 무의미함

	I. 기본 사용법
		// Set 생성
		const set1 = new Set();

		// add 메서드 - 요소 추가
		set1.add(1);
		set1.add('A');
		set1.add(true);
		console.log(set1);
	
		// 이미 포함된 요소는 추가하지 않음
		set1.add(1);
		set1.add(true);
		console.log(set1);
	
		// 배열을 인자 넣으면 생성 + 초기화
		// 중복된 요소 제거
		const set2 = new Set([1, 1, 1, 'A', true]);
		console.log(set2);
	
		// delete 메서드 - 요소 제거 & 성공 여부 반환
		console.log(
			set2.delete('A'),
			set2.delete(true),
			set2.delete(100)
		);
		console.log(set2);
	
		// add 메서드는 결과 셋을 반환
		const set3 = set2.add(2);
		console.log(set3);
		// 💡 메서드 체이닝을 할 수 있다는 의미
		set2
			.add(3)
			.add(4)
			.add(5)
		// 참조형이므로 둘이 같은 Set을 가리킴
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
		console.log(set2, set3);

	💡 참조형 데이터의 경우, 각기 다른 것으로 인식 (참조하는 주소가 다르므로)
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

		console.log(
			objSet2
				.add({ x: 1, y: 2 })
				.add({ x: 1, y: 2 })
				.add([1, 2, 3])
				.add([1, 2, 3])
		);

	II. 이터러블로서의 Set
		const arr = ['A', 'B', 'C', 'D', 'E'];
		const set = new Set(arr);

		1. for ... of 문
			for (item of set) {
				console.log(item);
			}

		2. 스프레드 문법
			const newArr = [...set];
			console.log(newArr);
			// 활용 - 중복을 제거한 배열 반환
			const arr1 = [1, 1, 1, 2, 2, 3, 4, 5];
			const arr2 = [...new Set(arr1)];
			console.log(arr2);

		3. 디스트럭쳐링
			const [x, y] = set;
			console.log(x);
			console.log(y);

			const [a, b, ...rest] = set;
			console.log(a);
			console.log(b);
			console.log(rest);

	💡 이터러블과 별개 - forEach 메서드도 사용 가능
		// ⚠️ 두 번째 인자가 인덱스가 아님!
		// 배열과 달리 순서 개념이 없으므로...
		// 형식을 맞추기 위한 인자일 뿐
		set.forEach(console.log);
		// 아래의 결과와 같음
		// set.forEach((item, idx, set) => {
		//   console.log(item, idx, set)
		// });


Map
	키와 값의 쌍으로 이루어진 컬렉션
		표준 내장 객체 중 하나
	💡 객체와의 차이:
		이터러블의 일종 (이터러블의 기능 사용 가능)
		메서드와 프로퍼티 등의 기능 차이
		객체나 배열 등의 참조값을 키로 사용 가능
		⭐️ 키와 값을 보다 자주 변경하는 경우 적합하도록 설계됨

	I. 기본 사용법
		// Map 생성
		const map1 = new Map();

		// set 메서드 - 키와 값의 쌍 추가
		map1.set('x', 1);
		map1.set(123, 'ABC');
		map1.set(true, { a: 1, b: 2 });
		console.log(map1);

		// [[키 쌍]...] 배열로 생성 + 초기화
		const map2 = new Map([
			['x', 1],
			[123, 'ABC'],
			[true, { a: 1, b: 2 }],
		]);
		console.log(map2);

		// 키의 중복 불허 - 해당 키 있을 시 덮어씀
		map2.set('x', 2);
		console.log(map2);
		
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

		// 💡 참조값도 키로 사용 가능
		const objKey = { x: 1, y: 2 };
		const arrKey = [1, 2, 3];
		map2.set(objKey, 'OBJ_KEY');
		map2.set(arrKey, 'ARR_KEY');
		console.log (
			map2.get(objKey),
			map2.get(arrKey),
		);

		// ⚠️ [참조값]이 키임에 유의
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
		console.log(map2);

		// add 메서드는 결과 맵을 반환
		// 💡 메서드 체이닝을 할 수 있다는 의미
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
		console.log(map2, map3);

	II. 이터러블로서의 Map
		const arr = [
			['🐶', '강아지'],
			['🐱', '고양이'],
			['🐯', '호랑이'],
			['🐵', '원숭이'],
			['🐨', '코알라']
		];
		const map = new Map(arr);

		1. for ... of 문
			for ([key, value] of map) {
				console.log(key, value);
			}

		2. 스프레드 문법
			const newArr = [...map];
			console.log(newArr);

		3. 디스트럭쳐링
			const [x, y] = map;
			console.log(x);
			console.log(y);

			const [a, b, ...rest] = map;
			console.log(a);
			console.log(b);
			console.log(rest);
	
	💡 이터러블과 별개 - forEach 메서드도 사용 가능
		map.forEach(console.log);
		// 아래의 결과와 같음
		// map.forEach((item, idx, set) => {
		//   console.log(item, idx, set)
		// });


이터러블
	I. 이터러블 프로토콜 iterable protocol
		반복, 순회 기능을 사용하는 주체간의 통일된 규격
		공통 기능들: for ... of, 스프레드 문법, 배열 디스트럭쳐링

		이터러블 iterable - 이터러블 프로토콜을 준수하는 객체
		배열, 문자열, Set, Map, arguments 등...
		키 Symbol.iterator ( well-known 심볼 ) 의 값으로 이터레이터를 반환하는 메서드를 가짐
		
		console.log(
			[][Symbol.iterator],
			''[Symbol.iterator],
			new Set()[Symbol.iterator],
			new Map()[Symbol.iterator]
		);

		// 다른 타입의 인스턴스에는 없음
		console.log(
			(1)[Symbol.iterator],
			(true)[Symbol.iterator],
			{ x: 1 }[Symbol.iterator]
		);

		실행시 이터레이터 반환
		console.log(
			[][Symbol.iterator](),
			''[Symbol.iterator](),
			new Set()[Symbol.iterator](),
			new Map()[Symbol.iterator]()
		);

	II. 이터레이터 iterator
		next 메서드를 통해 이터러블을 순회하며 값을 반환
		const arr = [1, 'A', true, null, {x: 1, y: 2 }];
		const arrIterator = arr[Symbol.iterator]();
		// 펼쳐서 메서드 살펴볼 것
		console.log(arrIterator);
		arrIterator.next(); // ⭐ 반복 실행해 볼 것

		이터레이터 프로토콜 iterator protocol
			next 메서드의 반환 객체 내 요소
				value - 해당 차례에 반환할 값
				done - 순회 종료 여부 ( 마지막 값 반환 다음 차례부터 )

	III. 이터러블 만들어보기
		예제 1. 🎲 주사위를 열 번 굴리는 이터러블
			const diceTenTimes = {
				// ⭐️ 아래의 메서드를 갖는 것이 이터러블 프로토콜
				[Symbol.iterator] () {
					let count = 0;
					let maxCount = 10;
					
					// ⭐️ 이터레이터(next 메서드를 가진 객체)을 반환
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

			// 💡 for ... of 문 사용 가능
			for (const num of diceTenTimes) {
				console.log(num);
			}

			// 💡 스프레드 문법 사용 가능
			const diceResults = [...diceTenTimes];
			console.log(diceResults);

			// 💡 배열 디스트럭쳐링 사용 가능
			const [first, second, ...rest] = diceTenTimes;
			console.log(
				'주사위의 첫번째, 두번째 숫자는 각각 '
				+ `${first}(와)과 ${second}, 나머지의 합은 ${
					rest.reduce((a, b) => a + b)
				} 입니다.`
			);
		
		예제 2. 🧮 피보나치 이터러블
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
		
		⭐️ 원하는 최대 횟수의 피보나치 이터러블 생성하기
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

		예제 3. ⌛️ 순번 이터러블 X 이터레이터
		💡 이터러블의 역할도 하는 이터레이터 만들기
			function workersIter (people) {
				let idx = 0;
				return {
					// 💡 이터레이터로서 [스스로]를 반환!
					// 사장: 직원은 나다.
					[Symbol.iterator] () { return this; },

					// 직원의 역할
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

			// ⚠️ 이터레이터를 겸하는 경우 한 번 순회하면 끝
			console.log(
				[...workersIter1]
			);

			// 새로 생성해야 다시 순회
			workersIter1 = workersIter(team1);
			console.log(
				[...workersIter1]
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
			workersIter1 = workersIter(team1);
			switchWorker(workersIter1); // ⭐ 반복 실행해 볼 것


제너레이터
	제너레이터 (generator)
		함수 내 코드들을 모두 실행하지 않고 외부 호출자에게 제어권을 양도 - "계속할까요?"
		이터러블과 이터레이터를 보다 간결하게 구현 가능
		function* genFunction () {
			console.log('하나를 반환합니다.');
			yield '하나';
			console.log('둘을 반환합니다.');
			yield '둘';
			console.log('셋을 반환합니다.');
			yield '셋';
		}
		const genFunc = genFunction();
		// 반복 수행해 볼 것
		// 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
		console.log( genFunc.next() );

	I. 기본 사용법
		1. 제너레이터 함수/메서드 선언
			function 다음 또는 메서드명 앞에 * - 띄어쓰기 위치 무관
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
		
		2. 제너레이터 객체
			제너레이터 함수의 결과값으로 반환
			⭐ 이터레이터이자 이터러블
			⭐ next 메서드를 실행하면 다음 yield까지 실행 후 중지
			yield의 값을 value로 반환
			끝까지 실행 후 done: true

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

			// 💡 이터러블임 확인
			console.log( genObj[Symbol.iterator] );
			console.log([...genObj]);
		
			// ⚠️ 순회 후에는 재생성 필요
			console.log([...genObj]);

			// 이터러블로서는 바로 호출이 적합
			console.log([...genFunction()]);
			
			for (const num of genFunction()) {
				console.log(num);
			}
		
			genObj = genFunction(); // 재생성
			// 💡 이터레이터임 확인
			console.log( genObj.next );
		
			for (let i = 0; i < 7; i++) {
				console.log(genObj.next());
			}

	II. 이터러블과 이터레이터 대체하기
		예제 1. 🎲 주사위를 열 번 굴리는 제너레이터
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
			// ⚠️ 다시 순회시 재생성 필요
			let diceGenObj = diceTenTimes();

			for (let i = 0; i < 12; i++) {
				console.log(diceGenObj.next());
			}

		예제 2. 🧮 피보나치 제너레이터
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
		
		예제 3. ⌛️ 순번 제너레이터
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


에러 핸들링
	🐛 에러 핸들링 error handling 의 필요성
	에러/에러 error 발생에 대비하지 않으면 프로그램이 종료됨
	console.log('에러 발생 전');
	// ⚠️ 오류를 발생시키는 코드
	(3).split('');
	// 출력되지 않음
	console.log('에러 발생 후');


	I. 자바스크립트의 에러 핸들링
		1. try ... catch 문
			try 블록
				에러 발생 여지가 있는 코드 포함
				이곳에서 발생한 에러는 프로그램을 멈추지 않음
			catch 블록
				에러 발생시 실행할 코드 포함
				발생한 오류 객체를 인자로 받음
			console.log('에러 발생 전');
			try {
				(3).split('');
			} catch (e) {
				console.error('🛑 에러!!', e);
			}
			console.log('에러 발생 후');

			const arr = ['ABC', '가나다', 123, '123'];
			function getLetterArray (str) {
				// 💡 인자로 어떤 타입의 값이 주어질지 모르는 상황
				try {
					return str.split('');
				} catch (e) {
					console.error('🛑 에러!!', e);
					return [];
				}
			}
			arr.forEach(i => {
				console.log(getLetterArray(i));
			});

		2. try ... catch ... finally 문
			finally 블록
				오류가 발생 여부와 관계없이 한 번 실행되는 코드 포함
				아래와 같은 경우 널리 사용
				⭐ try나 catch 문에 return이 있더라도 반드시 실행!

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
					// 💡 전송 성공 여부와 관계없이 연결은 끊어야 함
					disconnect();
					console.log('- - - - - - - -');
				}
				// ❓ 이곳에 넣는 것과 무엇이 다른가?
				// 아래로 대체하여 실행해 볼 것
				// disconnect();
				// console.log('- - - - - - - -');
			}

			['ABC', '가나다', 123, '123'].forEach(i => {
				console.log(
					sendStringAsArray(i) 
					? '[성공]' : '[실패]', '\n\n'
				);
			});

	II. Error 객체
		에러 발생 시 던져지는 thrown 객체
		에러에 대한 정보를 담고 있음
		💡 에러가 발생하지 않아도, 직접 생성하여 던지기 가능
		
		1. 기본 생성과 사용법
			const error = new Error('뭔가 잘못됐어');
			console.error(error);

			// 두 번째 인자로 이유를 명시할 수도 있음
			const error = new Error(
				'뭔가 잘못됐어',
				{ cause: '뭘 잘못했으니까' }
			);
			console.error(error);
		
			기본 인스턴스 프로퍼티와 메서드
				console.log(error.name);
				console.log(error.message);

				// cause를 입력했을 경우
				console.log(error.cause);

				// 에러 자체를 로그 출력하면 나오는 문구
				console.log(error.toString());
			
			⭐ 의도적으로 에러 발생시키기
				throw new Error('이유를 묻지 마라');

		2. 에러의 여러 종류
			어떤 문제에 의한 에러인지 쉽게 식별 가능하도록 함
			⭐ 아래의 에러들은 모두 Error부터 상속받음
			주요 에러					설명
			SyntaxError			문법에 이상이 있을 때
			TypeError				주어진 명령에 적절한 자료형이 아닐 때
			ReferenceError	잘못된 값을 참조했을 때
			RangeError			유효한 범위를 벗어나는 숫자가 사용되었을 때
			
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
		
		💡 오류에 종류에 따라 대처하기


		💡 직접 오류를 생성하여 던지기
			컴퓨터가 인지하지 못하는 에러 수동 발생
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
	
		3. 커스텀 에러 만들기
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

	III. 에러 버블링 error bubbling
		다른 함수를 호출했을 때
			에러 발생시 해당 함수에서 잡지 않으면 호출한 곳으로 던져짐
			다중 호출시 에러를 핸들링하는 코드가 있는 호출자까지 전달됨
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
		⭐ 에러는 가능한 발생 곳 가까이서 처리하는 것이 좋음

		🧑‍💼 사장 > 부장 > 대리 > 사원 단계로 일을 시켰을 때
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


구시대의 유물 var
	var : let과 const가 생기기 전 변수 선언에 사용되던 문
		각종 문제점들을 갖고 있으므로 오늘날에는 사용하지 않을 것을 권장

	1. 선언 없이도 사용 가능
		notDeclared = 1; // 미리 선언한 부분이 없을 시 var로 만들어짐
		console.log(notDeclared);
		// num이 var로 선언된 것
		for (num of [1, 2, 3]) {
			console.log(num);
		}

	2. 재선언 가능
		코딩 중 실수의 여지가 됨
		let a = 1;
		let a = 2; // ⚠️ 오류
		const b = 1;
		const b = 2; // ⚠️ 오류
		var c = 1;
		var c = 2;

	3. 블록 레벨 스코프 무시
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

	⭐️ 함수의 스코프는 유효함
		🔗 IIFE가 사용되었던 이유
		var num3 = 1;
		function func1 () {
			var num3 = 2;
			return num3;
		}
		console.log(num3);
		console.log(func1());

	4. 호이스팅
		console.log(hoisted1); // ⚠️ 오류

		console.log(hoisted1); // 💡 오류발생 X, 대신 undefined 반환
		var hoisted1 = 'Hello';
		console.log(hoisted1)

		// 엄연히는 let도 호이스팅 되지만 undefined로 초기화되지 않는 것
		// 초기화되기 이전의 영역: 🔗 TDZ에 속함
		console.log(hoisted2); // ⚠️ 오류
		let hoisted2 = 'Hello';
		console.log(hoisted2)

	⭐️ 이 외에도 다양한 상황에서 예기치 못한 문제를 야기
	👉 더 이상 사용하지 말 것


Logo
얄코 홈장편강좌 할인 7얄코 책play_circle_filled 유튜브 채널photo_camera 개발자툰
home강의 홈으로
Section 11. 문제들에 대비하기
Lesson 3. 엄격 모드
👉 MDN 문서 보기



엄격 모드 strict mode
	기존의 느슨한 모드에서 허용되던, 문제를 유발할 수 있는 코드들에 오류를 발생시킴
	"지금부터 대충 넘어가지 않겠다."

	🪖 엄격 모드의 적용방법과 그 효과들 예시

		1. 선언되지 않은 변수 사용시 오류 발생 + 범위별 적용 방법
			notDeclared = 1; // 💡 암묵적으로 전역 var 변수로 선언
			// ⚠️ 새로고침 후 실행해볼 것
			// 선언되지 않은 변수 사용 금지
			'use strict'; // 쌍따옴표도 가능
			notDeclared = 1; // 오류 발생!
			위와 같이 자바스크립트 문서 최상단에 작성 - 문서 전체에 적용
			
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

		2. 변수, 함수, 인자 등 삭제불가한 것을 삭제시 오류 발생
			// 실제로 지워지지도 않지만 오류를 발생시키지도 않음
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

		3. 인자명 중복시 오류 발생


	기타 기능들은 아래의 링크에서 확인
		// 'use strict';
		function add(x, x) {
			return x + x;
		}
		console.log(add(1, 2));

	💡 실무에서의 엄격 모드
		클래스나 모듈(등 ES6와 그 이후의 기능들) 사용시 엄격 모드가 기본으로 적용됨
		🪄 모든 문제를 방지하는 수단이 되지 않음 기억
		⚠️ 기존 코드에 엄격모드 적용시 주의 - 예기치 못한 오류 발생 가능