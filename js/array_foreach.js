// array_foreach.js

let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

persons.forEach(myCallBack);
// forEach() : callbackfn => forEach(string, num, string[])

function myCallBack(a, b, c) {
    // console.log(a, b, c);
}

persons = [];

let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

persons.push(person); // 한 건 추가

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;

persons.push(person1);

// persons.push('송다희')

console.log(persons);

// 테이블, row, column => persons 의 배열 요소를 화면에 출력
    // document.createElement('table')
    // 부모요소.append(자식요소)
    // #show에 append;
    // persons.forEach();

    let tblTag = document.createElement('table');
    tblTag.setAttribute('border', '1');

function drawTable() {

    let titles = ['이름', '나이', '점수'];
    
    let trTag = document.createElement('tr');
    
    for (title of titles) {
        let tdTag = document.createElement('th');
        tdTag.innerHTML = title;
        trTag.append(tdTag);
    }
    
    tblTag.append(trTag); // 타이틀 생성
    
    persons.forEach(myCallFunc); // 데이터 생성

    // let tdTag = document.createElement('td');
    // tdTag.innerHTML = '이름';
    // trTag.append(tdTag);
    
    // let tdTag2 = document.createElement('td');
    // tdTag2.innerHTML = '나이';
    // trTag.append(tdTag2);
   
    // let tdTag3 = document.createElement('td');
    // tdTag3.innerHTML = '점수';
    // trTag.append(tdTag3);

    document.getElementById('show').append(tblTag);
 
}

function myCallFunc(item, idx, ary) {
   
        let trTag = document.createElement('tr');
       
        for(field in item) {
            let tdTag = document.createElement('td');
            tdTag.innerHTML = item[field];
            trTag.append(tdTag);
        }        
            tblTag.append(trTag);
}

