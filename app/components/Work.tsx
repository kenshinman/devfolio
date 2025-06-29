import {assets} from "@/app/assets/assets";
import Image from "next/image";
import React, {useState} from "react";
import {portfolio} from "../data";
import PortfolioModal from "./PortfolioModal";
import {ZoomIn} from "lucide-react";
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

interface WorkProps {
  isDarkMode: boolean;
}

export const Work: React.FC<WorkProps> = ({isDarkMode}) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolio)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: (typeof portfolio)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Map project names to their tech stack icons
  const getProjectIcons = (projectName: string) => {
    const iconMap: {[key: string]: React.ComponentType<any>[]} = {
      "Autochek Africa": [SiNextdotjs, SiReact, SiNodedotjs, SiTypescript],
      FlipGive: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
      Podopolo: [SiReact, SiReactrouter, SiRedux, SiTypescript],
      Bundul: [SiReact, SiReactrouter, SiTypescript, SiNodedotjs],
    };
    return iconMap[projectName] || [SiReact];
  };

  return (
    <>
      <div
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
        <h2 className="text-center  text-5xl font-Ovo">
          Some of my recent work
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Welcome to my portfolio, here is a few of my recent work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 my-10 gap-6">
          {portfolio.map((project, index) => {
            const projectIcons = getProjectIcons(project.project);

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
                onClick={() => openModal(project)}
              >
                {/* Image at the top */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.project}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content at the bottom */}
                <div className="px-4 py-6">
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    {project.project}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex items-center gap-2 mb-4">
                    {projectIcons.map((IconComponent, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300"
                      >
                        <IconComponent className="w-3 h-3 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {project.location} • {project.date}
                    </span>
                    <button className="flex items-center justify-center w-12 h-12 bg-transparent border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-colors">
                      <ZoomIn className="w-6 h-6" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </>
  );
};
