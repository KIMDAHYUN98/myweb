<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>
<body>
    <% 
        String userSex = request.getParameter("sex");
        String userYear = request.getParameter("year");
        String[] userSub = request.getParameterValues("subject");
    %>

    <% 
        for(String sub : userSub) {
    %>
        <h1>주제 : <%=sub%></h1>
    <%
        }
    %>
 <h1>성별 : <%=userSex%> </h1>
 <h1>학년 : <%=userYear%></h1>

</body>
</html>