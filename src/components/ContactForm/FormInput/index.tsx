import { useTranslations } from "next-intl";
import { ChangeEvent, FC } from "react";
import { twMerge } from "tailwind-merge";

interface FormInputProps {
  setValue: (value: string) => void;
  value: string;
  errorMsg: string;
  success: boolean;
}

export const FormInput: FC<FormInputProps> = ({
  errorMsg,
  setValue,
  value,
  success,
}) => {
  const t = useTranslations("EmailForm");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={twMerge(
          `p-6 text-charcoalBlue border border-solid border-gray-300`,
          errorMsg && "border-red-500",
        )}
        placeholder={t("fullName")}
        disabled={success}
      />
      <p
        className={twMerge(
          "text-red-500 text-sm min-h-5",
          errorMsg ? "visible" : "hidden-visibility",
        )}
      >
        {errorMsg}
      </p>
    </>
  );
};
