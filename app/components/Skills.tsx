"use client";
import React from "react";
import {skills} from "../data";
import {
  SiReact,
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJquery,
  SiRedux,
  SiReactquery,
} from "react-icons/si";

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({isDarkMode}) => {
  // Map skill names to their corresponding icons
  const getIcon = (name: string) => {
    const iconMap: {[key: string]: React.ComponentType<any>} = {
      React: SiReact,
      "React Native": SiReactrouter,
      TypeScript: SiTypescript,
      "JavaScript (ES6+)": SiJavascript,
      "Next.js": SiNextdotjs,
      "Node.js": SiNodedotjs,
      Angular: SiAngular,
      HTML5: SiHtml5,
      CSS3: SiCss3,
      "Tailwind CSS": SiTailwindcss,
      jQuery: SiJquery,
      Redux: SiRedux,
      "React Query": SiReactquery,
    };
    return iconMap[name] || SiReact;
  };

  return (
    <div id="skills" className="w-full px-[12%] py-16 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Playfair">My Expertise</h4>
      <h2 className="text-center text-5xl font-Playfair">Tech Stack</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Playfair">
        Here are the technologies and frameworks I work with to build amazing
        digital experiences.
      </p>

      <div className="grid grid-cols-4 gap-4 max-w-[400px] mx-auto justify-content-center">
        {skills.languagesAndFrameworks.map((skill) => {
          const IconComponent = getIcon(skill.name);

          return (
            <div
              key={skill.name}
              className="flex justify-center w-[72px] h-[72px]"
            >
              <div className="group relative flex items-center justify-center">
                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-white dark:bg-gray-800 shadow-lg
                  border-2 border-gray-200 dark:border-gray-700
                  hover:border-blue-500 dark:hover:border-blue-400
                  transition-all duration-300
                  group-hover:shadow-xl
                  group-hover:w-[72px] group-hover:h-[72px]
                  group-hover:z-10
                `}
                >
                  <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 group-hover:w-8 group-hover:h-8" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none">
                  {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
