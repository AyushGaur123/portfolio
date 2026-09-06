import nodemailer from "nodemailer";

import ownerTemplate from "../templates/ownerTemplate.js";
import contactAutoReply from "../templates/contactAutoReply.js";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,

  port: Number(process.env.SMTP_PORT),

  secure: process.env.SMTP_SECURE === "true",

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendOwnerNotification = async (
  data
) => {
  await transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL_FROM}>`,

    to: process.env.EMAIL_TO,

    replyTo: data.email,

    subject: `📩 ${data.subject}`,

    html: ownerTemplate(data),
  });
};

export const sendAutoReply = async (
  data
) => {
  await transporter.sendMail({
    from: `"Ayush Gaur" <${process.env.EMAIL_FROM}>`,

    to: data.email,

    subject:
      "Thank you for contacting Ayush Gaur",

    html: contactAutoReply(data),
  });
};