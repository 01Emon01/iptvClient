"use client";
import ContactSubmitBtn from "./ContactSubmitBtn";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NodeApi } from "@/api/Axios";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = new FormData(form);
    const { name, email, message } = Object.fromEntries(formdata.entries());
    try {
      await NodeApi.post("/contacts/upload", { name, email, message });
      setStatus("success");
    } catch (err) {
      console.error(err);
    }
    form.reset();
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit}>
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
