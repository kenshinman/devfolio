import {assets, infoList, toolsData} from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({isDarkMode}) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center  text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max:w-none">
          <Image
            src={assets.user_image}
            alt="profile imgage"
            className="w-full rounded-3xl"
          ></Image>
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut delectus
            maxime officia et labore ipsa ipsam error iusto repellat non
            praesentium accusantium similique assumenda ducimus totam, hic eos
            inventore aliquid, est id sed ratione. Quas, inventore quasi? Quas
            accusamus, voluptas doloribus temporibus dolorem animi, molestias id
            cum soluta voluptate quod!
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li
                key={index}
                className="
                                 border-[0.5px]
                                 border-gray-400 
                                 rounded-xl 
                                 p-6 
                                 cursor-pointer
                                 hover:bg-lightHover 
                                 hover:-translate-y-1
                                 transition
                                 duration-300
                                 hover:shadow-black
                                 dark:border-white 
                                 dark:hover:shadow-white
                              dark:hover:bg-darkHover/50
                                  "
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                ></Image>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {" "}
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ove dark:text-white/80">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="
                        flex 
                        items-center 
                        justify-center 
                        w-12 
                        sm:w-14 
                        aspect-square 
                        border 
                        border-gray-400 
                        rounded-lg 
                        cursor-pointer
                        hover:-translate-y-1
                        duration-300
                        "
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
