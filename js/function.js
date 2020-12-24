// function.js

function sum(num1, num2) { // function 내에서 리턴한 결과를 반환
    let result = num1 + num2;
    console.log(result);
    return result;
}

let result = sum('10', '20');
document.write('<h1>' + result + '</h1>');

let myfunc = function(a, b) {
    let result = a * b;
    console.log('Hello');
    return result;
}

 result = myfunc(4, 6); // 해당 정의문을 실행

let yourfunc = myfunc 
result = yourfunc(5, 7);

 console.log(result); 
 // myfunc() => NaN : not a number

 let theotherfunc = function(n1, n2) {
     return n1 / n2;
 }

 function otherfunc(a, b, funcdef) { // 세 가지의 매개 변수
     let result = funcdef(a, b); // 매개변수에다가 값을 넣어 실행
     console.log('result: ' + result);
 }

 otherfunc(20, 30, myfunc);
 otherfunc(20, 30, theotherfunc);