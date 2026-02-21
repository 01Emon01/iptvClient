"use client";
import { useFormStatus } from "react-dom";

export default function ContactSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        className={`contact-btn ${pending ? "loading" : ""}`}
        disabled={pending}
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
