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
    <div className="bg-[#1e1e1e90] relative">
      <Divider heading="About" />
      <div className="flex flex-col lg:flex-row px-8 lg:px-48 pt-20 pb-16 md:pb-8 lg:pb-4 gap-16 items-center lg:items-start">
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
            <div className="mt-8">{active === 0 ? <Skills /> : <Education />}</div>
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
        <Button type={ButtonType.PRIMARY} text="My Github" link="https://github.com/iamr-kumar" />
      </div>
    </>
  );
};

interface EducationInfo {
  from: string;
  to: string;
  school: string;
  course: string;
  marks: string;
  desc: string;
}

const Education = () => {
  const educationInfo: EducationInfo[] = [
    {
      from: "2019",
      to: "2023",
      school: "Vellore Institute of Technology, Vellore",
      course: "B.Tech, Computer Science",
      marks: "8.73 CGPA",
      desc: "Final year undergrad pursuing a major in Computer Science",
    },
    {
      from: "2016",
      to: "2018",
      school: "DAV Public School, Hehal, Ranchi",
      course: "12th Standard",
      marks: "90.8%",
      desc: "Studied PCM with Computer Science in CBSE Board",
    },
  ];

  return (
    <div className="px-2 md:px-8">
      <div className="info-container flex flex-col gap-8 border-l-[3px] pl-8 md:pl-12 py-6">
        {educationInfo.map((info, index) => (
          <div className="info-item relative">
            <div className="absolute h-4 w-4 rounded-full bg-[#0885FF] border-2 border-white top-6 -left-[42px] md:-left-[56px]"></div>
            <h6 className="italic text-[#aeaeae] font-normal text-sm">
              {info.from} - {info.to}
            </h6>
            <h1 className="text-2xl text-[#0885FF]">{info.school}</h1>
            <h4 className="">{info.course}</h4>
            <h6 className="font-normal text-sm">{info.marks}</h6>
            <p className="text-sm">{info.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
