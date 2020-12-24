   //element 요소를 만들어 보자

   function input_friend() {
    
    let fruitf = document.getElementById('fruit').value;
    let liTag2 = document.createElement('li');
    liTag2.innerHTML = fruitf; // melon
    document.getElementById('fruits').append(liTag2); //ulTag
    document.getElementById('fruit').value = '';
    console.log(fruitf);

}
   
   let ulTag = document.createElement('ul'); // ul 태그 생성
   ulTag.innerHTML = 'Apple'
   ulTag.id = 'fruits';

   let liTag = document.createElement('li');
   liTag.innerHTML = 'Banana';

   let liTag1 = document.createElement('li');
   liTag1.innerHTML = 'Orange';
 

   ulTag.append(liTag);
   ulTag.append(liTag1);

   document.getElementById('show').append(ulTag);

   console.log(ulTag);