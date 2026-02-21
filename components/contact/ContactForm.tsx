"use client";
import submitContact from "@/helpers/submitContact";
import ContactSubmitBtn from "./ContactSubmitBtn";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  return (
    <form
      action={async (formData) => {
        const res = await submitContact(formData);
        if (res?.success) setStatus("success");
      }}
    >
      {status === "success" && (
        <p className="text-emerald-600 text-center mb-4">
          Message sent successfully!
        </p>
      )}
      <div className="inner-form flex flex-col gap-5 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
        />
      </div>
      <ContactSubmitBtn />
    </form>
  );
}
