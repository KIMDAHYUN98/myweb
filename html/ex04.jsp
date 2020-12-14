<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>
<body>
    
    <% 
    String userId = request.getParameter("user_id");
    String userBd = request.getParameter("bdaytime");
    String userSex = request.getParameter("sex");
    String userEmail = request.getParameter("user_email");
    String userE = request.getParameter("mail");
    String userPhone = request.getParameter("phone");
    String userJob = request.getParameter("job");
    String[] userHobby = request.getParameterValues("hobby");
    String selfIntro = request.getParameter("self_intro");
%>

<h1>아이디 : <%=userId%></h1>
<h1>생년월일 : <%=userBd%></h1>
<h1>성별 : <%=userSex%></h1>
<h1>이메일 : <%=userEmail%></h1>
<h1>이메일 수신여부 : <%=userE%></h1>
<h1>핸드폰 : <%=userPhone%></h1>
<h1>직업 : <%=userJob%></h1>

<% 
        for(String hob : userHobby) {
    %>
        <h1>취미 : <%=hob%></h1>
    <%
        }
    %>
    <h1>자기소개 : <%=selfIntro%></h1>
</body>
</html>