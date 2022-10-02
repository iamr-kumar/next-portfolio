import React, { FormEvent, useCallback } from "react";
import Image from "next/image";
import emailSvg from "../assets/emailSvg.svg";
import Divider, { Alignment } from "./Divider";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

interface FormData {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = React.useState<FormData>();
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // if (!executeRecaptcha) {
      //   console.log(executeRecaptcha);
      //   return;
      // }
      // const token = await executeRecaptcha("contactFormSubmit");
      // console.log(token);
      try {
        const res = await fetch("/api/mail", {
          method: "post",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (res.ok) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (err) {
        setSuccess(false);
      }

      setDialogOpen(true);
    },
    [executeRecaptcha]
  );

  const handleDialogOpen = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && <FormSubmitDialogue handleDialogOpen={handleDialogOpen} success={success} />}
      <div className="relative" id="contact">
        <Divider heading="Contact" alignment={Alignment.LEFT} />
        <div className="pt-8 sm:pt-12 md:pt-16 sm:px-8 md:px-12 lg:px-24 xl:px-36 px-4 py-4">
          <div className="flex">
            <div className="hidden md:flex lg:flex-[2] flex-[1] justify-center items-center">
              <Image src={emailSvg} />
            </div>
            <div className="lg:flex-[3] flex-[1]">
              <h2 className="text-3xl text-[#0885FF] font-openSans tracking-normal m">Got something for me?</h2>
              <h6 className="text-lg font-normal tracking-normal text-[#aeaeae] ml-2">Or just say hi!</h6>
              <form className="mt-4" method="post" onSubmit={handleSubmit}>
                <div className="my-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 w-full rounded-lg bg-[#1e1e1e70] focus:outline-none"
                    required
                    id="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 w-full rounded-lg bg-[#1e1e1e70] focus:outline-none"
                    required
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3">
                  <textarea
                    placeholder="Your Message"
                    className="px-4 py-2 rounded-lg bg-[#1e1e1e70] focus:outline-none w-full"
                    required
                    rows={7}
                    id="message"
                    onChange={handleChange}
                  />
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
    </>
  );
};

export default Contact;

const FormSubmitDialogue = ({ handleDialogOpen, success }: { handleDialogOpen: () => void; success: boolean }) => {
  return (
    <div className="fixed top-0 flex justify-center items-center left-0 w-screen h-screen backdrop-blur-[5px] z-[10000]">
      <div className="h-[200px] sm:w-[400px] w-[350px] text-center bg-[#0885FF] text-white rounded-lg px-4 py-8">
        <h3 className="text-2xl tracking-wide">{success ? "Message Received" : "Oops..."}</h3>
        <p className="mt-2 tracking-normal text-gray-300">
          {success
            ? "Thank you for contacting. I will get back to you soon!"
            : "Something went wrong. Please try again!"}
        </p>
        <button
          onClick={handleDialogOpen}
          className="mt-4 px-3 py-2 md:px-4 md:py-2 rounded-xl shadow transition-transform hover:scale-110 text-[#0885FF] bg-white"
        >
          {success ? "Great" : "Sure"}
        </button>
      </div>
    </div>
  );
};
