"use client";

import emailjs from "emailjs-com";
import { useLocale, useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ValidationError } from "yup";

import { heading4 } from "@/app/classes";
import { getBuildEnvVar } from "@/constants";
import { localeType } from "@/types";
import { returnEmailStatusMsg } from "@/utils/functions/returnEmailStatusMsg";

import { EN_QUERY_RALATED, getSchema, RU_QUERY_RALATED } from "./constants";
import { FormInput } from "./FormInput";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const t = useTranslations("EmailForm");

  const locale = useLocale() as localeType;

  const issues = locale === "ru" ? RU_QUERY_RALATED : EN_QUERY_RALATED;

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
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
      getSchema(locale).validateSync(data, { abortEarly: false });
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
        getBuildEnvVar("EMAILJS_SERVICE_ID"),
        getBuildEnvVar("EMAILJS_SECOND_TEMPLATE_ID"),
        {
          name,
          email,
          query: selectedValue,
          message,
        },
        getBuildEnvVar("EMAILJS_KEY"),
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

  const formInputArray = [
    {
      id: 1,
      value: name,
      setValue: setName,
      errorMsg: errors.name,
      success,
    },
    {
      id: 2,
      value: email,
      setValue: setEmail,
      errorMsg: errors.email,
      success,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-16">
      {formInputArray.map(({ errorMsg, setValue, success, value, id }) => (
        <FormInput
          errorMsg={errorMsg}
          setValue={setValue}
          success={success}
          value={value}
          key={id}
        />
      ))}
      <select
        value={selectedValue}
        onChange={handleSelect}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300 cursor-pointer mt-4`,
          errors.selectedValue && "border-red-500",
        )}
        disabled={success}
      >
        <option value="" disabled>
          {t("queryRelated")}
        </option>
        {issues.map((query) => (
          <option key={query} value={query}>
            {query}
          </option>
        ))}
      </select>
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          errors.selectedValue ? "visible" : "hidden-visibility",
        )}
      >
        {errors.selectedValue}
      </p>

      <textarea
        value={message}
        onChange={handleMessageChange}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300 min-h-36 appearance-none resize-none mt-4`,
          errors.message && "border-red-500",
        )}
        placeholder="Message"
        disabled={success}
      />
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          errors.message ? "visible" : "hidden-visibility",
        )}
      >
        {errors.message}
      </p>

      <button
        type="submit"
        className={twMerge(heading4, "bg-goldenYellow py-4 mt-4")}
        disabled={sending || success}
      >
        {returnEmailStatusMsg(sending, success, t("button"), locale)}
      </button>
    </form>
  );
};
