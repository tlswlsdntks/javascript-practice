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

	자바스크립트와 세미콜론 ( ; )
		필요성에 대해 다양한 의견
		본 강좌에서는 붙이는 것으로 진행


변수와 상수 - 데이터를 담는 주머니
	⚠️ var는 역사의 뒤안길로
		let과 const를 사용할 것

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
		let 사용
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
		const 사용
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

