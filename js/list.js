
function myFunc() {

    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    let dan = 4;
    document.write("<table><tr><ul>");
    for(let i=1; i <= 10; i++) {
        
        // document.write("<p>i의 값은 : <b>" + i + "</b> 입니다. </p>");
    if(i % 2 == 1){    
        document.write("<td><li class = 'even'>" + dan + " * " + i + "</td><td> " + " = <b></td><td>" + (dan * i) + "</b></li></td>"); 
    } else {
        document.write("<td><li class = 'odd'>" + dan + " * " + i + "</td><td> " + " = <b></td><td>" + (dan * i) + "</b></li></td>");
    }}
    
    document.write("</ul></tr></table>");

}
