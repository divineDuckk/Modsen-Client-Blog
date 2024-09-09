import { sen } from "@/app/fonts";
import { HEADER_LINKS } from "@/constants";

export const Header = () => {
  return (
    <div className="w-full mx-auto bg-сharcoalBlue flex justify-center">
      <header className="w-full max-w-1440 flex justify-between px-9 bg-сharcoalBlue items-center h-20">
        <h2 className="font-bold text-2xl text-white">Modsen Client Blog</h2>
        <ul className="flex gap-6 items-center text-white">
          {HEADER_LINKS.map((link) => (
            <li
              className="text-base font-normal cursor-pointer hover:text-shadow-white transition-all"
              key={link}
            >
              {link}
            </li>
          ))}
          <li>
            <button
              className={`cursor-pointer px-12 py-4 bg-white text-сharcoalBlue text-lg font-bold ${sen.className}`}
            >
              Video about us
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};
