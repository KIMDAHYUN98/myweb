// array1.js

let fruits = ['Apple', 'Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Orange'; // fruits.length : 총 배열의 크기(마지막)
fruits[fruits.length] = 'Manggo';

fruits[2] = 'new Melon';
delete fruits[2] // 해당 하는 값 삭제 : undefined

// for(let i=0; i<fruits.length; i++) { // 
//     console.log(fruits[i]); 
// }

fruits = [];
fruits.push('Apple'); // push : 마지막에 값을 추가
fruits.push('Banana');
fruits.unshift('Orange'); // unshift : 앞쪽에 값 추가
fruits.unshift('Melon');

// fruits.pop(); // Orange(앞)
// fruits.shift(); // Apple(뒤)

// Melon, Orange, Apple, Banana
let fruit = fruits.splice(1, 0, 'New Orange', 'New Apple'); 

// splice(인덱스 위치, 삭제할 갯수, 삭제한 값을 대신할 매개값)
// 삭제할 갯수가 0 이면 해당 자리에 추가
// splice는 추가, 삭제 가능해서 용이

console.log(fruit); // 삭제한 값들의 새로운 배열이 생성

for(fruit of fruits) { // let i=0; i<fruits.length; i++
    console.log(fruit); 
}

fruits = ['Apple', 'Banana', 'Manggo'];
fruit = { //obj
    name: 'Apple',
    price: 2000,
    weight: 50
}

fruit['name']; // == fruit.name; name based : object

fruits[0]; // index based : array

// object는 배열과 달리 인덱스가 아닌 필드의 네임으로 가져온다.