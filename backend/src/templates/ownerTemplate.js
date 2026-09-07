// Escapes user-supplied text before it goes into HTML, so a visitor
// can't inject markup/links into the notification email you receive.
const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Email sent to the site owner whenever someone submits the contact form.
const ownerTemplate = ({ name, email, subject, message }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="font-family:Arial,sans-serif; background:#f5f5f5; padding:30px;">
  <div style="max-width:700px; margin:auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.1);">

    <div style="background:#0f172a; padding:30px; color:white; text-align:center;">
      <h1>📩 New Portfolio Contact</h1>
      <p>You received a new message.</p>
    </div>

    <div style="padding:30px;">
      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td><strong>Name</strong></td>
          <td>${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td><strong>Subject</strong></td>
          <td>${escapeHtml(subject)}</td>
        </tr>
      </table>

      <hr style="margin:30px 0;">

      <h3>Message</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    </div>

  </div>
</body>
</html>
`;

export default ownerTemplate;
