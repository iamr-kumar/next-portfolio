import Image, { StaticImageData } from "next/image";
import React from "react";
import Divider, { Alignment } from "./Divider";
import ListItem from "./ListItem";
import cheerUp from "../assets/cheer-up.jpg";
import Button, { ButtonType } from "./Button";
import { projects, ProjectType } from "../utils/constants";

const ProjectCard = (props: ProjectType & { alignment: Alignment }) => {
  const { title, demo, desc, github, imageSrc, techStack, alignment } = props;

  return (
    <div
      className={`bg-[#272727] flex items-stretch p-4 sm:p-6 flex-col lg:p-8 gap-8 rounded-lg my-8 shadow-lg ${
        alignment === Alignment.LEFT ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="xl:flex-1 lg:flex-2/3 rounded-lg flex items-center">
        <Image src={imageSrc} className="rounded-lg" />
      </div>
      <div className="px-4 xl:flex-1 lg:flex-1/3 text-center lg:text-start">
        <h1 className="text-3xl lg:text-4xl font-openSans tracking-wide">{title}</h1>
        <div className="flex gap-3 mt-2 justify-center lg:justify-start flex-wrap">
          {techStack.map((stack, index) => (
            <ListItem text={stack} key={index} />
          ))}
        </div>
        <p className="text-gray-300 mt-4 text-sm md:text-base">{desc}</p>
        <div className="mt-8 flex gap-4 justify-center lg:justify-start">
          <Button type={ButtonType.PRIMARY} link={demo} text="Demo" />
          <Button type={ButtonType.SECONDARY} link={github} text="Github" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="relative bg-[#1e1e1e90] w-full" id="projects">
      <Divider heading="Projects" alignment={Alignment.RIGHT} />
      <div className="pt-12 xl:px-48 lg:px-24 md:px-12 sm:px-6 px-3 pb-8">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            desc={project.desc}
            demo={project.desc}
            github={project.github}
            imageSrc={project.imageSrc}
            techStack={project.techStack}
            alignment={index % 2 === 0 ? Alignment.RIGHT : Alignment.LEFT}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
