
function myFunc() {

    document.write("<style> .even { background: yellow; } </style>")
    document.write("<style> .odd { background : red; } </style>")
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write('<table border="1">');
    
    for(let i=1; i <= 10; i++) {  
        // document.write("<p>i의 값은 : <b>" + i + "</b> 입니다. </p>");
        
    if(i % 2 == 1){    
        
        document.write("<tr class = 'even' align = 'center'><td>" + dan + " * " + i + "</td><td>" + " = </td><td>" + (dan * i) + "</td></tr>"); 
       
    } else {
        
        document.write("<tr class = 'odd' align = 'center'><td>" + dan + " * " + i + "</td><td>" + " = </td><td>" + (dan * i) + "</td></tr>");
        
    } 
    }
    
    document.write("</table>");
}
