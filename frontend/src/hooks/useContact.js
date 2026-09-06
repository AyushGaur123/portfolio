import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactMessage } from "../api/contactApi";

export default function useContact() {
  const [loading, setLoading] = useState(false);

  const submit = async (data, reset) => {
    try {
      setLoading(true);
      const response = await sendContactMessage(data);
      toast.success(response.message || "Message sent successfully.");
      reset();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to send your message."
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, submit };
}