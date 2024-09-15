"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { ValidationError } from "yup";

import { heading6 } from "@/app/classes";
import { sen } from "@/app/fonts";

import { validationSchema } from "./constants";

interface SearchInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleClick: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  setValue,
  handleClick,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === "") {
      setError(null);
    }
  };

  const checkValidation = async () => {
    try {
      await validationSchema.validate({ tag: value });
      setError(null);
      handleClick();
    } catch (err) {
      if (err instanceof ValidationError) {
        setError(err.message);
      }
    }
    setValue("");
  };

  return (
    <div className="flex flex-col mb-14">
      <div className="flex border border-solid border-gray-400 rounded-md">
        <input
          className={`${sen.className} text-sm font-bold tracking-tighter px-4 box-border flex-1 py-3 rounded-md outline-none`}
          placeholder="Search for tag..."
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          className={`${heading6} flex justify-center items-center bg-goldenYellow rounded-md px-4`}
          onClick={checkValidation}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};
