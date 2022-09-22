import React, { useCallback } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

interface MenuItemType {
  link: string;
  placeholder: string;
}

const menuItems: MenuItemType[] = [
  {
    link: "/",
    placeholder: "Home",
  },
  {
    link: "/",
    placeholder: "About",
  },
  {
    link: "/",
    placeholder: "Testimonials",
  },
  {
    link: "/",
    placeholder: "Projects",
  },
  {
    link: "/",
    placeholder: "Contact",
  },
];

const MobileNav = () => {
  return (
    <div className="w-screen h-screen z-1000 fixed top-0 left-0 bg-[#272727] lg:hidden">
      <ul className="flex flex-col justify-center h-full items-center">
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <li
              className="text-base w-[80%] py-4 flex flex-col items-center uppercase tracking-widest transition border-y border-[#AEAEAE
] hover:bg-[#0085FF]"
            >
              {item.placeholder}
            </li>
          </Link>
        ))}
      </ul>
      <div className=""></div>
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
      {mobileOpen && <MobileNav />}
      <div
        className={`flex justify-between items-center w-full px-4 md:px-16 lg:px-[100] transition-all ease-in-out duration-300`}
      >
        <div className="lg:hidden"></div>
        <div className="md:ml-4 lg:ml-8">
          <Image src={logo} height={80} width={80} />
        </div>
        <ul className="hidden lg:flex">
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index}>
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
          <span className={`line line1 ${mobileOpen ? "open" : ""}`}></span>
          <span className={`line line2 ${mobileOpen ? "open" : ""}`}></span>
          <span className={`line line3 ${mobileOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
