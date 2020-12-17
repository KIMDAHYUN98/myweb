
         var name = document.getElementById('show').innerHTML // id값이 show인 Hello를 읽어온다
         console.log(name);
         document.getElementById('show').innerHTML = "World";

         var divTag = document.createElement("div"); // createElement : div라는 태그 생성
         divTag.innerHTML = "Nice"; // div 태그 속에 Nice를 넣어라 <div>Nice</div>

         document.getElementById('show').after(divTag); // after : show 태그 뒤에 divTag를 넣어라.
                                                        // append : 자식으로 show 태그 밑에 붙이는 것

         console.log("----------------------------------------------------------------")
        
         var fru1 = document.createElement("li");
         fru1.innerHTML = "Apple"; //<li> Apple </li>
         var fru2 = document.createElement("li");
         fru2.innerHTML = "Orange"; //<li> Orange </li>

         document.getElementById('fruit').append(fru1);
         document.getElementById('fruit').append(fru2);

         console.log("----------------------------------------------------------------")
         var grade = 3;
         grade = 4;
         for(var i =1; i <= 9; i++){
            var str = grade + ' * ' + i + ' = ' + (grade*i);
            console.log(str); // str의 값을 콘솔창에 출력
         }

         var sum = 0;
  