import api from "./api";

export const sendContactMessage = async (data) => {
  const response = await api.post("/api/contact", data);
  return response.data;
};