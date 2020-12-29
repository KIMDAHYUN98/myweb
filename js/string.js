// string.js

let str = 'Please locate where "locate" occurs!';
let strLength = str.length //str의 문자열 크기를 조회

console.log(strLength);

// indexOf, lastIndexOf, search
// 문자열의 위치를 인덱스 기준으로 찾는 메소드

// indexOf
strLength = str.indexOf('locate', 14);
console.log(strLength);

strLength = str.indexOf('Hello');
console.log(strLength); 
// 해당 문자가 없을 시 -1 반환

// lastIndexOf : 뒤에서부터 해당 위치를 찾음
console.log(str.lastIndexOf('locate'));

// search
console.log(str.search('locate'));

// slice, substring, substr : 범위를 지정?

// slice : 인덱스의 위치 값을 지정 후 n개의 문자까지 들고온다
let fruit = 'Apple, Banana, kiwi';
let result = fruit.slice(0, 5); 
console.log('result :' + result);

// substring : 위와 같음
let from = fruit.indexOf('Banana');
result = fruit.substring(from, from + 6);
console.log(result);

// substr : 지정한 문자부터 n개의 문자를 가져온다
result = fruit.substr(from, 6); 
console.log('b : ' + result);

// replace(m, n) : m에 위치한 문자를 n으로 변환
let newFruit = fruit.replace('Banana', 'Orange');
// console.clear();
console.log(newFruit);

// toUpperCase, toLowerCase, concat(두 문자를 연결), trim(좌우의 여백을 잘라냄), padStar, padEnd (oracle의 Lpad, Rpad)

// toUpperCase
console.log('good       hello      '.trim().toUpperCase());

// trim()
console.log('good       hello      '.trim());

//padStart
console.log('5'.padStart(4, '0')); // 왼쪽에 비어있는 여백만큼 0을 넣어줌 

//padEnd
console.log('5'.padEnd(4, '0')); // 오른쪽에 비어있는 여백만큼 0을 넣어줌


let url = 'http://www.naver.net';
let newUrl = url.replace('net', 'com');
console.log(newUrl);

//해당 값을 모를 때는 인덱스의 값으로 변환해준다
console.log(url.replace(url.substring(url.lastIndexOf('.')), '.com')); 
// . -> .com 으로 변환

// split(n) :  n을 기준으로 잘라내서 결과값을 배열로 생성
let fruits = fruit.split(',') // Apple, Banana, kiwi
for(f of fruits) {
    console.log(f.trim());
}

// number.js

// 2000년대 이전, 이후 구분 -> 숫자가 1,3 이면 남자
// 2000년대 이전, 이후 구분 -> 숫자가 2,4 이면 여자

// 매개값(num)으로 성별 구분 할 수 있도록 결과 출력하기






function getGender(num) {

    let fNum = num.replace('-', '').substr(6, 1);
    let fYear = num.substr(0, 2);

    if(fNum == '1'){

        return '남자';

    } else if(fNum == '2'){

        return '여자';

    }  else if(parseInt(fYear) < 20 && fNum == '3'){

        return '남자';

    } else if(parseInt(fYear) < 20 && fNum == '4'){

        return '여자';

    } else {

        return '잘못입력';
    }
}

let numbers = ' 990101-1234567';
numbers += ' 990102-2345678';
numbers += ' 210201-3456789';
numbers += ' 200202-4567890';
numbers += ' 0002024567890';


let numAry = numbers.split(' ');
for(num of numAry) {
    result = getGender(num);
    console.log(result);
}
