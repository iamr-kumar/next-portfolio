import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import logo from '../assets/logo.png';
import { SocialLinks } from './Footer';

interface MenuItemType {
  link: string;
  placeholder: string;
  target?: string;
}

const menuItems: MenuItemType[] = [
  {
    link: '#home',
    placeholder: 'Home',
  },
  {
    link: '#about',
    placeholder: 'About',
  },
  {
    link: '#testimonials',
    placeholder: 'Testimonials',
  },
  {
    link: '#projects',
    placeholder: 'Projects',
  },
  {
    link: 'https://blog.devritik.com',
    placeholder: 'Blog',
    target: '_blank',
  },
  {
    link: '#contact',
    placeholder: 'Contact',
  },
];

const MobileNav = ({ handleMobileOpen }: { handleMobileOpen: () => void }) => {
  return (
    <div className="w-screen h-screen z-1000 fixed top-0 left-0 bg-[#272727] lg:hidden">
      <ul className="flex flex-col justify-center h-full items-center">
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <li
              onClick={handleMobileOpen}
              className="text-base w-[80%] py-4 flex flex-col items-center uppercase tracking-widest transition border-y border-[#AEAEAE
] hover:bg-[#0085FF]"
            >
              {item.placeholder}
            </li>
          </Link>
        ))}
        <div className="mt-12">
          <SocialLinks />
        </div>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMobileOpen = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <div className="w-full fixed top-0 left-0 z-[500] bg-[#272727] shadow">
      {mobileOpen && <MobileNav handleMobileOpen={handleMobileOpen} />}
      <div
        className={`flex justify-between items-center w-full px-4 md:px-16 lg:px-[100] transition-all ease-in-out duration-300`}
      >
        <div className="lg:hidden"></div>
        <div className="md:ml-4 lg:ml-8">
          <Image src={logo} height={80} width={80} alt="RK Logo" />
        </div>
        <ul className="hidden lg:flex">
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              target={item.target ? item.target : '_self'}
            >
              <li className="ml-10 text-base uppercase tracking-widest transition hover:text-[#0085FF]">
                {item.placeholder}
              </li>
            </Link>
          ))}
        </ul>
        <div
          className="flex flex-col justify-between w-10 h-7 cursor-pointer z-[1000] lg:hidden"
          onClick={handleMobileOpen}
        >
          <span className={`line line1 ${mobileOpen ? 'open' : ''}`}></span>
          <span className={`line line2 ${mobileOpen ? 'open' : ''}`}></span>
          <span className={`line line3 ${mobileOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
