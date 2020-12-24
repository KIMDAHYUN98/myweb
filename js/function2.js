// function2.js

let friends = [];
for(let i=0; i <3; i++){
let name = window.prompt('이름을 입력하세요');
let age = window.prompt('나이를 입력하세요');
   
    let friend = {};
    friend.name = name;
    friend.age = age;
    friends[i] = friend;
}

// let friend1 = {} // object

// friend1.name = 'Hong'; // 각각의 속성에 값을 넣는다
// friend1.age = 20;
// friend1.hobby = 'reading';

// let friend2 = {

//     name : 'Hwang',
//     age : 20
// }

// let friends = [];
// friends[0] = friend1;
// friends[1] = friend2;
// for(friend of friends) { //friend1, friend2 의 값을 friend 변수에 담는다. (friend1, friend2)
//     for(field in friend) // friend1,2 의 각각 필드의 값을 field 변수에 담는다. (name, age)
//     console.log(friend[field])
// }

document.write('<style> .A { align= "center" padding="20px"}</style>')

document.write('<table class="A" border="1">');
for(friend of friends) {
    document.write('<tr>');
    for(field in friend){
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</tabled>');

// for(let i=0; i <3; i++){
// let name1 = window.prompt('숫자를 입력하세요.');
//     numAry[i] = parseInt(name1);
// }

// findMax();
function findMax(){
     // numAry[] 최댓값 구하기
    
    let num = 0;
    let max = 0;
    
    for(num of numAry){
        if(max < num){
            max = num;
        }
    }

    console.log("최댓 값 : " + max);
    document.write("최댓 값 : " + max + "<p>");
   
}

// diffSum(name1, name2); // diffSum : 입력 받은 두 수 사이의 합 : 15 ~ 25(15부터 24까지의 합)

// console.log(numAry);
// document.write("입력한 숫자 : " + numAry);

// diffSum(n1, n2);

// function diffSum(a, b) {
//     if(a > b){
//         let num = 0;
//         for(let i=b; i < a; i++){
//             num += i;
//             document.write(num);
//         }
//     } else {
//         let 
//     }
// }

// checkGrade(name1);  // 90점 이상 : A, 80점 이상 : B, 70점 이상 : C, 그 외 : D

// function diffSum(a, b) {
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);
//     console.log(n1 + n2);
// }

// function checkGrade(grade) {
//     if(grade >= 90) {
//         document.write('grade : ' + 'A');
//     } else if(grade >= 80) {
//         document.write('grade : ' + 'B');
//     } else if(grade >= 70) {
//         document.write('grade : ' + 'C');
//     } else {
//         document.write('grade : ' + 'D');
//     }
// }

// sum(name1, name2);

function sum(a, b) {
    let n1 = parseInt(a); // '30' = 문자열 타입의 숫자를 숫자 타입으로 변환
    let n2 = parseInt(b);
    console.log(n1 + n2);
}


// let name1 = document.getElementById('name').value;
// console.log('입력한 이름은 : ' + name1);
