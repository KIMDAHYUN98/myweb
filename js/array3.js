// array3.js

let numbers = [34, 55, 22, 10, 100, 6, 7];

numbers.sort(function(a, b){
    return a - b; 
    // a - b : 오름차순(음수), b - a : 내림차순(양수)
});

// console.log(numbers);
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);

let sum = 0;

numbers.forEach(function (item, idx, ary) { 
    sum += item;
    console.log(item, idx);
// item : 배열 요소, idx : 인덱스, ary : 배열 자체

let liTag = document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag);
});

let liTag = document.createElement('li');
    liTag.innerHTML = '합계 : ' + sum;
    ulTag.append(liTag);