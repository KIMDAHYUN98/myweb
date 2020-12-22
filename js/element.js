let show = document.getElementById('show'); // id 값이 show 라는 값을 반환
 console.log(show.id);
 
 // console.log(show)show에 있는 Hello 값이 아닌 통째로 들고와서 show인 변수에 값을 담았다.
 //innerHTML : show의 Hello값을 읽어온다.
 //getAttribute('id') : id에 해당되는 속성값을 읽어온다

 function turnOn() {
    let img1 = document.getElementsByTagName('img'); // getElementsByTagName : tag를 읽어옴
    img1[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log(img1[0]);
}
function turnOff() {
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    console.log(img1[0]);
}

 