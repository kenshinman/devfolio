import {assets} from "@/assets/assets";
import Image from "next/image";
import React, {useState} from "react";
import {portfolio} from "../../data";
import PortfolioModal from "./PortfolioModal";

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

        <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{backgroundImage: `url(${project.images[0]})`}}
              onClick={() => openModal(project)}
            >
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3  px-5 flex 
                          items-center justify-between duration-500 group-hover:bottom-7"
              >
                <div className="">
                  <h2 className="font-semibold">{project.project}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="hidden group-hover:flex">
                  <div
                    className="border rounded-full border-black w-9 
                                aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                                group-hover:bg-lime-300 transition"
                  >
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
