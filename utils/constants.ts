import { AiFillInstagram } from "react-icons/ai";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import cheerUp from "../assets/cheer-up.jpg";
import devConnector from "../assets/dev-connector.png";
import floatChat from "../assets/float-chat.png";
import medblog from "../assets/medblog.png";
import nextMessenger from "../assets/next-messenger.png";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 880 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 880, min: 0 },
    items: 1,
  },
};

export interface ProjectType {
  title: string;
  desc: string;
  techStack: string[];
  imageSrc: StaticImageData;
  github: string;
  demo: string;
}

export const projects: ProjectType[] = [
  {
    title: "Cheer Up",
    desc: "A platform to bridge the communication gap between therapists and their patients by staying connected and allowing therapists to observe their patients activites. Allow people with mental health issues to calm themseleves and help them to feel better.",
    techStack: ["NextJs", "NodeJs", "MongoDb"],
    imageSrc: cheerUp,
    demo: "https://cheerupgetbetter.herokuapp.com/",
    github: "https://github.com/iamr-kumar/cheer-up",
  },
  {
    title: "Dev Connector",
    desc: "A social media application for developers to allow them to share and collaboarte on ideas. Implements functionalities like create, edit and delete posts; like and comment; account verification and password reset.",
    techStack: ["ReactJs", "NodeJs", "MongoDb"],
    imageSrc: devConnector,
    github: "https://github.com/iamr-kumar/Dev-Connector",
    demo: "https://dev-connector-rm101.herokuapp.com/",
  },
  {
    title: "MedBlog",
    desc: "A platform for pateints and survivors to share their stories so that others can get inspired and take the right steps. These stories are cross verified by their respective doctors and medical personals and can be shared with friends and family.",
    techStack: ["ReactJs", "NodeJs", "MongoDb"],
    imageSrc: medblog,
    github: "https://github.com/iamr-kumar/MedBlog",
    demo: "https://focused-lamport-fdaaba.netlify.app/",
  },
  {
    title: "Next Messenger",
    desc: "An instant messaging application, similar to WhatsApp UI. Built using Next.js, Material UI and Firebase.",
    techStack: ["NextJs", "Firebase", "Socket.io"],
    imageSrc: nextMessenger,
    github: "https://github.com/iamr-kumar/next-messenger",
    demo: "https://next-messenger-1s0rb8hx5-iamr-kumar.vercel.app/",
  },
  {
    title: "Float Chat",
    desc: "An end-to-end encrypted chat application to allow active users to communicate securely. Implements RSA encryption algorithms.",
    techStack: ["Vanilla JS", "NodeJs", "MongoDb", "Socket.io", "E2E"],
    imageSrc: floatChat,
    github: "https://github.com/iamr-kumar/Float-Chat",
    demo: "https://afternoon-cove-76712.herokuapp.com/",
  },
];
