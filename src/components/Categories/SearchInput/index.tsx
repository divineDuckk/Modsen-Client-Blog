"use client";

import { useLocale, useTranslations } from "next-intl";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ValidationError } from "yup";

import { heading6 } from "@/app/classes";
import { sen } from "@/app/fonts";
import { Hint } from "@/components/Hint";
import { TAGS } from "@/constants";
import { localeType } from "@/types";

import { getSchema } from "./constants";

interface SearchInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleSearchClick: () => void;
  handleTagClick: (tag: string) => () => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  setValue,
  handleSearchClick,
  handleTagClick,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isHintShow, setIsHintShow] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const locale = useLocale() as localeType;
  const t = useTranslations("CategorySection");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    let filtredTags = TAGS.filter((tag) =>
      tag.toLowerCase().includes(newValue.toLowerCase()),
    );
    if (newValue === "") {
      filtredTags = [];
      setError(null);
    }
    setTags(filtredTags);
    if (!filtredTags.length) {
      setIsHintShow(false);
      return;
    }
    setTags(filtredTags);
    setIsHintShow(true);
  };

  const handleHintClick = (tag: string) => () => {
    setValue(tag);
    setIsHintShow(false);
    handleTagClick(tag)();
  };

  const checkValidation = async () => {
    try {
      await getSchema(locale).validate({ tag: value });
      setError(null);
      handleSearchClick();
    } catch (err) {
      if (err instanceof ValidationError) {
        setError(err.message);
      }
    }
    setValue("");
  };

  return (
    <div className="flex flex-col mb-14 relative">
      <div className="flex border border-solid border-gray-400 rounded-md">
        <input
          className={twMerge(
            `text-sm font-bold tracking-tighter px-4 box-border flex-1 py-3 rounded-md outline-none`,
            sen.className,
          )}
          placeholder={t("inputPlaceholder")}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          className={twMerge(
            `flex justify-center items-center bg-goldenYellow rounded-md px-4`,
            heading6,
          )}
          onClick={checkValidation}
        >
          {t("search")}
        </button>
      </div>
      {isHintShow && <Hint handleClick={handleHintClick} tags={tags} />}
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};
