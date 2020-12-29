// number.js

let x = 10;
let y = '5';

// let result = x + parseFloat(y); // parseInt : 숫자로 변환, parseFloat
let result = x / y;
// result = x / 0; //  infinity : 무한 값
console.log(result);

// 더하기 연산을 할 떄는 타입 변환 후 계산하기

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1) + parseInt(num2));
}


