// variable.js

let something = 0;
something = 1 > 2;
something; // undefine(=값이 아직 할당 되지 않은 상태)

// something = 1 < 2;
// false, true, 1 > 2(=false) ...

if(something) {
    console.log("참입니다.")
} else {
    console.log("거짓입니다.")
}

//object

something = { // class 선언
    name : 'Hong', // string 타입의 필드
    age : 20, // 숫자 타입의 필드
    phone : '010-1111-2222'
}

let name = something.name;  // 필드명으로 가져옴
let age = something['age'];

for (field in something) {

    console.log(field, something[field]); // something의 필드를 전부 가져옴
}

//Array

let nameAry = ['Hong', 'Park', 'Kim', 'Hwang', 'Lee']; // 배열 타입의 변수

let name1 = nameAry[0]; // 인덱스 값이 첫번째인 Hong을 담아옴
let name2 = nameAry[1];
let name3 = nameAry[2];

console.log('nameAry[2] => ' + name3);

nameAry[2] = 'Choi';

for(let i=0; i<nameAry.length; i++) {
    console.log('nameAry[' + i + '] => ' + nameAry[i]);
}

let i = 0;
document.write('<table border = "1">');
document.write('<tr align="center"><td>순번</td><td>이름</td></tr>')
for(str of nameAry) { // nameAry의 요소를 하나씩 받아옴, 굳이 let 선언X
    i++;
    document.write('<tr align="center">');
    document.write('<td>'+ i +'</td><td>' + str + '</td>');
    document.write('</tr>');
}
document.write('</table>');