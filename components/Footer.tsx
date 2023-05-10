import Link from 'next/link';
import React from 'react';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

export const SocialLinks = () => {
  return (
    <div className="flex gap-8 text-3xl">
      <Link
        href="https://instagram.com/iamr_kumar"
        target="_blank"
        className="text-white hover:text-[#0885FF] transition-all hover:scale-110"
      >
        <AiFillInstagram />
      </Link>
      <Link
        href="https://twitter.com/itsr_kumar"
        target="_blank"
        className="text-white hover:text-[#0885FF] transition-all hover:scale-110"
      >
        <AiFillTwitterCircle />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ritikkumar29/"
        target="_blank"
        className="text-white hover:text-[#0885FF] transition-all hover:scale-110"
      >
        <AiFillLinkedin />
      </Link>
      <Link
        href="https://www.github.com/iamr-kumar"
        target="_blank"
        className="text-white hover:text-[#0885FF] transition-all hover:scale-110"
      >
        <AiFillGithub />
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#1e1e1e90] py-6 flex flex-col items-center">
      <SocialLinks />
      <p className="mt-4 tracking-normal text-lg">&#169; Ritik Kumar 2022</p>
    </div>
  );
};

export default Footer;
