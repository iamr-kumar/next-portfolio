import React from "react";
import Image from "next/image";
import Divider from "./Divider";
import aboutImage from "../assets/about_pic.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Button, { ButtonType } from "./Button";

const About = () => {
  const aboutMenu = ["Skills", "Education"];

  const [active, setActive] = React.useState<Number>(0);

  const handleSelect = React.useCallback(
    (index: number) => {
      setActive(index);
    },
    [setActive]
  );

  return (
    <div className="bg-[#1e1e1e80] relative">
      <Divider heading="About" />
      <div className="flex flex-col lg:flex-row items-center px-8 lg:px-48 py-20 md:pt-16 lg:pt-0 lg:pb-10 gap-16">
        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] flex justify-center items-center">
          <Image src={aboutImage} className="rounded-full" alt="Ritik Kumar face" />
        </div>
        <div className="pt-4 md:w-[80%] lg:w-full">
          <p className="text-white text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus porro quia inventore laboriosam nihil, ex
            ipsam harum illum, veniam cupiditate, nam rem eaque libero quo explicabo impedit consequatur consectetur
            accusamus?
          </p>
          <div className="mt-4 w-full">
            <div className="flex justify-around">
              {aboutMenu.map((menu, index) => (
                <div className="w-full cursor-pointer group" onClick={() => handleSelect(index)} key={index}>
                  <h3
                    className={`${index === active ? "text-[#0085FF]" : "text-[#A7A7A7]"} group-hover:text-[#0085FF]`}
                  >
                    {menu}
                  </h3>
                  <div
                    className={`h-[2px] mt-1 rounded-md transition-all duration-300 group-hover:w-[60%] group-hover:bg-[#0085FF] ${
                      index === active ? "w-[60%] text-[#0085FF] bg-[#0085FF]" : "w-[30%] bg-[#A7A7A7]"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = ["HTML", "CSS", "JS/TS", "ReactJs/NextJs", "Node.js (Express)", "MongoDb", "REST APIs", "Firebase"];

  return (
    <>
      <ul className="grid grid-rows-4 grid-flow-col gap-4 md:gap-8">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center rounded transition-colors cursor-default group">
            <span className="text-[#0085FF] group-hover:text-white transition-colors group-hover:-rotate-12 group-hover:scale-110">
              <FaCheckCircle />
            </span>
            <h6 className="ml-2">{skill}</h6>
          </li>
        ))}
      </ul>
      <div className="mt-12 pl-2">
        <Button type={ButtonType.PRIMARY} text="My Github" link="/" />
      </div>
    </>
  );
};

export default About;
