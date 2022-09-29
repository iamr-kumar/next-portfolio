import Image from "next/image";
import emailSvg from "../assets/emailSvg.svg";
import Divider, { Alignment } from "./Divider";

const Contact = () => {
  return (
    <div className="h-8 relative">
      <Divider heading="Contact" alignment={Alignment.LEFT} />
      <div className="pt-8 sm:pt-12 md:pt-16 sm:px-8 md:px-12 lg:px-24 xl:px-36 px-4 py-4">
        <div className="flex">
          <div className="hidden md:flex lg:flex-[2] flex-[1] justify-center items-center">
            <Image src={emailSvg} />
          </div>
          <div className="lg:flex-[3] flex-[1]">
            <h2 className="text-3xl text-[#0885FF] font-openSans tracking-normal m">Got something for me?</h2>
            <h6 className="text-lg font-normal tracking-normal text-[#aeaeae] ml-2">Or just say hi!</h6>
            <form className="mt-4">
              <div className="my-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 w-full rounded-lg bg-[#1e1e1e70] focus:outline-none"
                />
              </div>
              <div className="my-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full rounded-lg bg-[#1e1e1e70] focus:outline-none"
                />
              </div>
              <div className="my-3">
                <textarea
                  placeholder="Your Message"
                  className="px-4 py-2 rounded-lg bg-[#1e1e1e70] focus:outline-none w-full"
                  rows={7}
                ></textarea>
              </div>
              <div className="my-3">
                <button
                  type="submit"
                  className="px-3 py-2 md:px-4 md:py-2 rounded-lg shadow transition-transform hover:scale-110 bg-[#0885FF]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
