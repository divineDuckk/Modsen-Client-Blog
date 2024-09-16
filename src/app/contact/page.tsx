import { heading1, heading5 } from "@/app/classes";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";

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
        <div className="w-full bg-purple-800 flex text-white justify-evenly mb-8">
          <div className="w-full max-w-72 my-12 ">
            <p className="text-sm font-normal opacity-65 w-full border-b border-solid border-gray-300 pb-4 mb-5 tracking-wide">
              Working hours
            </p>
            <h2 className={`${heading5} mb-4 max-w-52`}>
              Monday To Friday 9:00 AM to 8:00 PM
            </h2>
            <p className="text-base font-normal opacity-65 ">
              Our Support Team is available 24/7
            </p>
          </div>
          <div className="w-full max-w-72 my-12">
            <p className="text-sm font-normal opacity-65 w-full border-b border-solid border-gray-300 pb-4 mb-5 tracking-wide">
              Contact Us
            </p>
            <h2 className={`${heading5} mb-4 max-w-52`}>020 7993 2905</h2>
            <p className="text-base font-normal opacity-65 ">
              hello@finsweet.com
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
      <Map />
    </main>
  );
}
