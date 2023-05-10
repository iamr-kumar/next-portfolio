import Link from 'next/link';
import React from 'react';

export enum ButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface ButtonProps {
  type: ButtonType;
  link: string;
  text: string;
  newPage?: boolean;
}

const Button = (props: ButtonProps) => {
  const { type, link, text, newPage = true } = props;
  return (
    <Link
      href={link}
      target={`${newPage ? '_blank' : ''}`}
      className={`${
        type === ButtonType.PRIMARY
          ? 'bg-[#0085FF] text-white'
          : 'bg-white text-[#0085FF]'
      } px-3 py-2 md:px-5 md:py-3 rounded-[50px] shadow transition-transform hover:scale-110`}
    >
      {text}
    </Link>
  );
};

export default Button;
