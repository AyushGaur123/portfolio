import { contactSchema } from "../validators/contactValidator.js";
import { sendOwnerNotification, sendAutoReply } from "../utils/sendEmail.js";

export const createContact = async (req, res, next) => {
  try {
    const validation = contactSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400);
      throw new Error(validation.error.issues[0]?.message || "Invalid contact information");
    }

    const { name, email, subject, message } = validation.data;
    const data = { name, email, subject, message };

    await sendOwnerNotification(data);

    try {
      await sendAutoReply(data);
    } catch (err) {
      console.error("Auto-reply email failed:", err.message);
    }

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
    });
  } catch (error) {
    next(error);
  }
};
