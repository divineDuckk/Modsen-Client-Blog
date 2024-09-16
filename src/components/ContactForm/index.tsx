"use client";

import emailjs from "emailjs-com";
import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ValidationError } from "yup";

import { heading4 } from "@/app/classes";
import { returnEmailStatusMsg } from "@/utils/functions/returnEmailStatusMsg";

import { contactFormSchema, QUERY_RALATED } from "./constants";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const validate = () => {
    const data = {
      name,
      email,
      selectedValue,
      message,
    };
    try {
      contactFormSchema.validateSync(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: Record<string, string> = {};
        err.inner.forEach((error: ValidationError) => {
          validationErrors[error.path!] = error.message;
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSuccess(false);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_SECOND_TEMPLATE_ID,
        {
          name,
          email,
          query: selectedValue,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY,
      )
      .then(
        () => {
          setSending(false);
          setEmail("");
          setMessage("");
          setSelectedValue("");
          setName("");
          setSuccess(true);
        },
        () => {
          setSending(false);
          setSuccess(false);
        },
      );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-16">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300`,
          `${errors.name && "border-red-500"}`,
        )}
        placeholder="Full Name"
        disabled={success}
      />
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          `${errors.name ? "visible" : "hidden-visibility"}`,
        )}
      >
        {errors.name}
      </p>

      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300 mt-4`,
          `${errors.name && "border-red-500"}`,
        )}
        placeholder="Your Email"
        disabled={success}
      />
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          `${errors.email ? "visible" : "hidden-visibility"}`,
        )}
      >
        {errors.email}
      </p>

      <select
        value={selectedValue}
        onChange={handleSelect}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300 cursor-pointer mt-4`,
          `${errors.selectedValue && "border-red-500"}`,
        )}
        disabled={success}
      >
        <option value="" disabled>
          Query Related
        </option>
        {QUERY_RALATED.map((query) => (
          <option key={query} value={query}>
            {query}
          </option>
        ))}
      </select>
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          `${errors.selectedValue ? "visible" : "hidden-visibility"}`,
        )}
      >
        {errors.selectedValue}
      </p>

      <textarea
        value={message}
        onChange={handleMessageChange}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300 min-h-36 appearance-none resize-none mt-4`,
          `${errors.message && "border-red-500"}`,
        )}
        placeholder="Message"
        disabled={success}
      />
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          `${errors.message ? "visible" : "hidden-visibility"}`,
        )}
      >
        {errors.message}
      </p>

      <button
        type="submit"
        className={twMerge(heading4, "bg-goldenYellow py-4 mt-4")}
        disabled={sending || success}
      >
        {returnEmailStatusMsg(sending, success, "Send Message")}
      </button>
    </form>
  );
};
