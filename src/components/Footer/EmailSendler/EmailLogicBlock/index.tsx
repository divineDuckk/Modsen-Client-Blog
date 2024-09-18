"use client";

import emailjs from "emailjs-com";
import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ValidationError, InferType } from "yup";

import { sen } from "@/app/fonts";
import { getBuildEnvVar } from "@/constants";
import { returnEmailStatusMsg } from "@/utils/functions/returnEmailStatusMsg";

import { schema } from "./constants";

type dataInputType = InferType<typeof schema>;

interface ErrorsState {
  email?: string;
}

export const EmailLogicBlock = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ErrorsState>({});

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    if (email === "") setErrors({ email: "" });
  };

  const validate = (data: dataInputType) => {
    try {
      schema.validateSync(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        const newErrors: ErrorsState = {};
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
        getBuildEnvVar("EMAILJS_SERVICE_ID"),
        getBuildEnvVar("EMAILJS_TEMPLATE_ID"),
        { email },
        getBuildEnvVar("EMAILJS_KEY"),
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

  const buttonClass = twMerge(
    `px-12 py-4 bg-goldenYellow font-bold box-border text-lg text-black `,
    `${success && "cursor-default opacity-65"}`,
    `${sen.className}`,
  );

  return (
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
        className={buttonClass}
        onClick={handleSendEmail}
        disabled={sending || success}
      >
        {returnEmailStatusMsg(sending, success)}
      </button>
    </div>
  );
};
