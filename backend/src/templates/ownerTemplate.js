const ownerTemplate = ({
  name,
  email,
  subject,
  message,
}) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>

<body
style="
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:30px;
">

<div
style="
max-width:700px;
margin:auto;
background:white;
border-radius:12px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.1);
">

<div
style="
background:#0f172a;
padding:30px;
color:white;
text-align:center;
">

<h1>📩 New Portfolio Contact</h1>

<p>You received a new message.</p>

</div>

<div style="padding:30px;">

<table
style="
width:100%;
border-collapse:collapse;
">

<tr>

<td><strong>Name</strong></td>

<td>${name}</td>

</tr>

<tr>

<td><strong>Email</strong></td>

<td>${email}</td>

</tr>

<tr>

<td><strong>Subject</strong></td>

<td>${subject}</td>

</tr>

</table>

<hr
style="
margin:30px 0;
">

<h3>Message</h3>

<p>${message}</p>

</div>

</div>

</body>

</html>
`;

export default ownerTemplate;