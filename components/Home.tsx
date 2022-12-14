import React from "react";
import Button, { ButtonType } from "./Button";
import ritikImage from "../assets/ritik_image.png";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div className="px-8 md:px-16 mt-44 lg:mt-56 flex flex-row justify-around pb-20" id="home">
      <div className="flex flex-col items-center w-full lg:w-[60%] lg:w-content lg:items-start">
        <h3 className="uppercase text-[#aeaeae] tracking-widest">Hi, my name is </h3>
        <h1 className="uppercase mt-4 text-center lg:text-start">
          <span className="gradient-text">Ritik</span> Kumar
        </h1>
        <h1 className="tracking-normal text-center lg:text-start mt-4 lg:mt-0">
          I am a <span className="gradient-text">full stack</span> dev.
        </h1>
        <p className="mt-4 w-full md:w-[80%] lg:w-[70%] text-center lg:text-start">
          Hi, I work towards creating solutions for your ideas to turn them into reality. Currently a final year student
          of CS undergrad, I work as a <span className="text-gray-200">freelance web developer</span> wherein I can
          create (and sometimes design){" "}
          <span className="text-gray-200">
            beautiful and intuitive UIs and/or develop reliable and scalable backend systems.{" "}
          </span>
        </p>
        <div className="mt-8 flex gap-6">
          <Button type={ButtonType.PRIMARY} link="#contact" text="Work with me!" newPage={false} />
          <Button
            type={ButtonType.SECONDARY}
            link="https://drive.google.com/file/d/1BeaBWyv6ralmzgF2Il5jcAqSaoeXNmz2/view?usp=sharing"
            text="My Resume"
          />
        </div>
      </div>
      <div className="hidden lg:block relative">
        <Image
          src={ritikImage}
          className="absolute top-0 left-0 rounded-bl-[258px] z-[100] w-[95%]"
          alt="Ritik Kumar face"
        />
        <div className=" absolute z-[50] rounded-bl-[258px] bg-[#789DC7] -top-11 -right-11 h-full w-full"></div>
      </div>
    </div>
  );
};

export default HomeComponent;
