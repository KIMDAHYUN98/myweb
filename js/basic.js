let num = 10, num3 = 20;

let result = num + num3;
console.log("result : " + result + " 입니다."); result = 20; 
// 한문장에 여러 라인을 작성할 때는 세미콜론으로 구분하기

if (result > 30) {
    console.log("30보다 크다.");
} else {
    document.write("<h1>30보다 작거나 같다.</h1>");
}

// object => write, getElementById, ...
// document => html 페이지의 내용이 화면으로 출력
// write 안에 태그 사용 가능!

// document.getElementById();

var str = 'Hello, World'; // string
str = 25; // number
str = 1 < 2; // boolean
str = null; // object
str = function() {
    console.log('function');
} // function
str = 10 + 20; // number
console.log(typeof str, str); // number, 30 
// typeof : 해당하는 변수에 대한 타입을 알고 싶을 때 사용

num1 = 10;
console.log(num1);
// 변수를 선언한 적이 없는데도 불구하고 결과가 출력(위험)

var str = "reload";
console.log(str);

let num2 = 20;
console.log(num2);

// let num2 = 30;
// console.log(num2); ==> !syntaxError

// var는 중복 선언이 가능, 반면 let은 중복 선언 X