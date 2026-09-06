// import Contact from "../models/Contact.js";
// import { contactSchema } from "../validators/contactValidator.js";
// import { sendContactNotification } from "../utils/sendEmail.js";

// export const createContact = async (req, res, next) => {
//   try {
//     const validation = contactSchema.safeParse(req.body);

//     if (!validation.success) {
//       res.status(400);

//       throw new Error(
//         validation.error.issues[0]?.message ||
//           "Invalid contact information"
//       );
//     }

//     const {
//       name,
//       email,
//       subject,
//       message,
//     } = validation.data;

//     const contact = await Contact.create({
//       name,
//       email,
//       subject,
//       message,
//     });

//     try {
//       await sendContactNotification({
//         name,
//         email,
//         subject,
//         message,
//       });
//     } catch (emailError) {
//       console.error(
//         "Email notification failed:",
//         emailError.message
//       );
//     }

//     res.status(201).json({
//       success: true,
//       message:
//         "Thanks for reaching out! Your message has been received.",
//       id: contact._id,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
import Contact from "../models/Contact.js";
import { contactSchema } from "../validators/contactValidator.js";
import {
  sendOwnerNotification,
  sendAutoReply,
} from "../utils/sendEmail.js";

export const createContact = async (req, res, next) => {
  try {
    // Validate request body
    const validation = contactSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400);
      throw new Error(
        validation.error.issues[0]?.message ||
          "Invalid contact information"
      );
    }

    // Extract validated data
    const { name, email, subject, message } = validation.data;

    const data = {
      name,
      email,
      subject,
      message,
    };

    // Save to MongoDB
    const contact = await Contact.create(data);

    // Send notification email to yourself
    try {
      await sendOwnerNotification(data);
    } catch (err) {
      console.error("Owner email failed:", err.message);
    }

    // Send auto-reply email to the visitor
    try {
      await sendAutoReply(data);
    } catch (err) {
      console.error("Auto reply failed:", err.message);
    }

    // Send response to frontend
    res.status(201).json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. I will get back to you soon.",
      contactId: contact._id,
    });

  } catch (error) {
    next(error);
  }
};