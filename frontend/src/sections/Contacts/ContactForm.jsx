import { useForm } from "react-hook-form";
import useContact from "../../hooks/useContact";

const inputClasses =
  "block w-full mt-[9px] py-[5px] px-0 border-0 outline-none resize-y text-dark-text bg-transparent text-[15px] normal-case tracking-normal placeholder:text-[#77736c]";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading, submit } = useContact();

  return (
    <form
      className="border-t border-dark-line"
      onSubmit={handleSubmit((data) => submit(data, reset))}
    >
      <label className="block py-5 border-b border-dark-line text-dark-muted text-[11px] uppercase tracking-[0.12em]">
        Name
        <input
          placeholder="Your name"
          className={inputClasses}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <small className="block mt-[7px] text-[#d99a84] normal-case tracking-normal">
            {errors.name.message}
          </small>
        )}
      </label>

      <label className="block py-5 border-b border-dark-line text-dark-muted text-[11px] uppercase tracking-[0.12em]">
        Email
        <input
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
          })}
        />
        {errors.email && (
          <small className="block mt-[7px] text-[#d99a84] normal-case tracking-normal">
            {errors.email.message}
          </small>
        )}
      </label>

      <label className="block py-5 border-b border-dark-line text-dark-muted text-[11px] uppercase tracking-[0.12em]">
        Subject
        <input
          placeholder="How can I help?"
          className={inputClasses}
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <small className="block mt-[7px] text-[#d99a84] normal-case tracking-normal">
            {errors.subject.message}
          </small>
        )}
      </label>

      <label className="block py-5 border-b border-dark-line text-dark-muted text-[11px] uppercase tracking-[0.12em]">
        Message
        <textarea
          rows="5"
          placeholder="Tell me a little about your idea..."
          className={inputClasses}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <small className="block mt-[7px] text-[#d99a84] normal-case tracking-normal">
            {errors.message.message}
          </small>
        )}
      </label>

      <button
        className="mt-6 w-full border-0 min-h-[48px] px-[18px] inline-flex items-center justify-center gap-[9px] cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-[2px] bg-dark-text text-dark disabled:opacity-[.55] disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
