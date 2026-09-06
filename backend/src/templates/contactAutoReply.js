const formatDate = () =>
  new Date().toLocaleString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const contactAutoReply = ({ name, subject, message }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body style="margin:0; padding:0; background-color:#eeeae1; font-family:'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eeeae1; padding:32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:14px; overflow:hidden; max-width:560px; width:100%;">

            <!-- accent top bar -->
            <tr>
              <td style="height:6px; background-color:#9a7448; line-height:0; font-size:0;">&nbsp;</td>
            </tr>

            <tr>
              <td style="padding:40px 40px 0 40px;">
                <!-- logo -->
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:34px; height:34px; background-color:#181714; border-radius:8px; text-align:center; vertical-align:middle;">
                      <span style="color:#ffffff; font-size:14px; font-weight:700; line-height:34px;">AG</span>
                    </td>
                    <td style="padding-left:10px; font-size:15px; font-weight:800; letter-spacing:0.04em; color:#181714;">
                      AYUSH GAUR
                    </td>
                  </tr>
                </table>

                <h1 style="margin:34px 0 28px 0; font-size:26px; line-height:1.25; font-weight:700; color:#181714;">
                  Thank you for your email
                </h1>
              </td>
            </tr>

            <!-- quoted original message -->
            <tr>
              <td style="padding:0 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f2ea; border-radius:10px;">
                  <tr>
                    <td style="padding:24px 26px;">
                      <p style="margin:0 0 8px 0; font-size:13px; font-weight:700; color:#181714;">
                        Subject: ${escapeHtml(subject)}
                      </p>
                      <p style="margin:0 0 18px 0; font-size:13px; font-weight:700; color:#181714;">
                        Date: ${formatDate()}
                      </p>

                      <p style="margin:0 0 12px 0; font-size:13px; color:#6d6a63; line-height:1.7;">
                        Hi,
                      </p>
                      <p style="margin:0 0 12px 0; font-size:13px; color:#6d6a63; line-height:1.7;">
                        ${escapeHtml(message).replace(/\n/g, "<br/>")}
                      </p>
                      <p style="margin:0; font-size:13px; color:#6d6a63; line-height:1.7;">
                        Regards,<br/>${escapeHtml(name)}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- reply body -->
            <tr>
              <td style="padding:30px 40px 0 40px;">
                <p style="margin:0 0 14px 0; font-size:14px; color:#181714; line-height:1.7;">
                  Dear ${escapeHtml(name)},
                </p>
                <p style="margin:0 0 14px 0; font-size:14px; color:#181714; line-height:1.7;">
                  Thank you for contacting me through my portfolio!
                </p>
                <p style="margin:0 0 14px 0; font-size:14px; color:#6d6a63; line-height:1.75;">
                  I've received your message and really appreciate you taking the
                  time to write in. I go through every message personally and will
                  get back to you within 24&ndash;48 hours.
                </p>
                <p style="margin:0 0 14px 0; font-size:14px; color:#6d6a63; line-height:1.75;">
                  Meanwhile, you can check out my work:
                  <a href="https://github.com/AyushGaur123" style="color:#9a7448; text-decoration:none;">GitHub</a>
                  &nbsp;|&nbsp;
                  <a href="https://www.linkedin.com/in/ayush-gaur-7227b9338/" style="color:#9a7448; text-decoration:none;">LinkedIn</a>
                </p>
                <p style="margin:0 0 30px 0; font-size:14px; color:#181714; line-height:1.7;">
                  Best regards,<br/>Ayush
                </p>
              </td>
            </tr>

            <!-- signature card -->
            <tr>
              <td style="padding:0 40px 36px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4ded2; border-radius:10px;">
                  <tr>
                    <td style="padding:20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width:48px; height:48px; background-color:#9a7448; border-radius:999px; text-align:center; vertical-align:middle;">
                            <span style="color:#ffffff; font-size:16px; font-weight:700; line-height:48px;">AG</span>
                          </td>
                          <td style="padding-left:14px;">
                            <p style="margin:0 0 4px 0; font-size:14px; font-weight:700; color:#181714;">
                              Ayush Gaur
                            </p>
                            <p style="margin:0; font-size:12px; color:#6d6a63;">
                              Full Stack MERN Developer
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- footer -->
            <tr>
              <td style="padding:0 40px 32px 40px; border-top:1px solid #e4ded2;">
                <p style="margin:24px 0 4px 0; font-size:11px; color:#6d6a63; text-align:center;">
                  ayushgaur914@gmail.com &nbsp;|&nbsp; linkedin.com/in/ayush-gaur-7227b9338 &nbsp;|&nbsp; Uttar Pradesh, India
                </p>
                <p style="margin:0; font-size:11px; color:#b7b1a4; text-align:center;">
                  &copy; ${new Date().getFullYear()} Ayush Gaur. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export default contactAutoReply;
