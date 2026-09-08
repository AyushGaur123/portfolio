import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function useContact() {
  const [loading, setLoading] = useState(false);

  const submit = async (data, reset) => {
    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent successfully.");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Unable to send your message.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, submit };
}