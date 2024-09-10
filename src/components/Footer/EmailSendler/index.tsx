"use client";

import emailjs from "emailjs-com";
import { ChangeEvent, useState } from "react";
import * as yup from "yup";

import { sen } from "@/app/fonts";
import { returnEmailStatusMsg } from "@/utils/functions/returnEmailStatusMsg";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Введите корректный email")
      .required("Email обязателен"),
  })
  .required();

export const EmailSendler = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    if (email === "") setErrors({ email: "" });
  };

  const validate = (data: yup.InferType<typeof schema>) => {
    try {
      schema.validateSync(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: { email?: string } = {};
        err.inner.forEach((error) => {
          if (error.path === "email") {
            newErrors.email = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSendEmail = () => {
    const data = { email };
    if (!validate(data)) return;

    setSending(true);
    setSuccess(false);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { email },
        process.env.NEXT_PUBLIC_EMAILJS_KEY,
      )
      .then(
        () => {
          setSending(false);
          setEmail("");
          setSuccess(true);
        },
        (rej) => {
          console.log(rej);
          setSending(false);
          setSuccess(false);
        },
      );
  };

  return (
    <section className="bg-сharcoal flex flex-col px-16 py-20 items-center justify-between xl:items-start mb-12 h-64 gap-5 xl:flex-row">
      <h2
        className={`${sen.className} text-white font-bold text-4xl max-w-xl tracking-tight`}
      >
        Subscribe to our newsletter to get the latest updates and news
      </h2>
      <div className="flex gap-6 max-w-xl w-full items-start">
        <div className="w-full max-w-80">
          <input
            className="min-w-44 py-4 bg-transparent border box-border text-lg border-gray-600 w-full pl-6 text-white pr-6"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
            disabled={success}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <button
          className={`px-12 py-4 bg-goldenYellow font-bold box-border text-lg ${sen.className} text-black ${success && "cursor-default opacity-65"}`}
          onClick={handleSendEmail}
          disabled={sending || success}
        >
          {returnEmailStatusMsg(sending, success)}
        </button>
      </div>
    </section>
  );
};
