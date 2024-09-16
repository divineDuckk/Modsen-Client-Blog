import { heading1 } from "@/app/classes";

export default function Contact() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full max-w-3xl mt-32">
        <div className="text-center  mb-16">
          <h3 className="font-black text-base tracking-widest mb-4 uppercase">
            Contact us
          </h3>
          <h1 className={`${heading1} mb-6`}>Let’s Start a Conversation</h1>
          <p className="text-base font-normal opacity-65">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="w-full">
          <div></div>
        </div>
      </div>
    </main>
  );
}
