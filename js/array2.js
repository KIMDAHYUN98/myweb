

let fruits = [];

function sum() {

    let fruit = document.getElementById('num1').value;
    fruits.push(fruit);
    console.log(fruits);
}
function minus() {
    let fruit = document.getElementById('num1').value;
    fruits.pop(fruit);
    console.log(fruits);
}