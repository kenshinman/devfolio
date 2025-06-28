import {assets} from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import {contact, links, profile} from "../data";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({isDarkMode}) => {
  return (
    <div className="mt-20 text-gray-500">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="flex items-center gap-2 mx-auto w-max text-center">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Mail Icon"
            className="w-6"
          />
          <p className="dark:text-white/90">{contact.email}</p>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:text-white/90">
        <p>&copy; 2025 {profile.name}. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 dark:text-white/90">
          <li>
            <a
              target="_blank"
              href={links.github}
              className="hover:text-gray-700 dark:hover:text-gray-400"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href={links.linkedin}
              className="hover:text-gray-700 dark:hover:text-gray-400"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
