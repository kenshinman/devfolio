"use client";
import {assets} from "@/app/assets/assets";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Navbar: React.FC<NavbarProps> = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.add("transform-minus-16");
      sideMenuRef.current.classList.remove("transform-plus-16");
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.add("transform-plus-16");
      sideMenuRef.current.classList.remove("transform-minus-16");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header-bg-color"
          className="w-full"
        ></Image>
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "py-1 bg-white/20 backdrop-blur-md shadow-md dark:bg-darkTheme/20 dark:shadow-white/20"
            : "py-2"
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className={`cursor-pointer mr-14 transition-all duration-300 ${
              isScroll ? "w-24" : "w-32"
            }`}
            alt="logo"
            width={isScroll ? 96 : 128}
            height={isScroll ? 19 : 26}
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 transition-all duration-300 ${
            isScroll
              ? "py-1"
              : "py-2 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a
              className={`font-Ovo transition-all duration-300 ${
                isScroll ? "text-shadow-sm" : ""
              }`}
              href="#top"
            >
              Home
            </a>
          </li>
          {/* <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li> */}
          <li>
            <a
              className={`font-Ovo transition-all duration-300 ${
                isScroll ? "text-shadow-sm" : ""
              }`}
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-all duration-300 ${
                isScroll ? "text-shadow-sm" : ""
              }`}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className={`cursor-pointer transition-all duration-300 ${
                isScroll ? "w-4" : "w-5"
              }`}
              alt="moon icon"
            ></Image>
          </button>

          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 transition-all duration-300 ${
              isScroll ? "px-4 py-1" : "px-6 py-1.5"
            }`}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className={`transition-all duration-300 ${
                isScroll ? "w-2" : "w-2.5"
              }`}
              alt="arrow icon"
            ></Image>
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className={`cursor-pointer transition-all duration-300 ${
                isScroll ? "w-4" : "w-5"
              }`}
              alt="moon icon"
            ></Image>
          </button>
        </div>

        {/*  ----- mobile menu --------  */}
        <ul
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
          ref={sideMenuRef}
        >
          {/* close btn */}
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            ></Image>
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          {/* <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li> */}
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
