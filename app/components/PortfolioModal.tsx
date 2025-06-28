"use client";
import {assets} from "@/app/assets/assets";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "motion/react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    project: string;
    description: string;
    url: string;
    gitRepo?: string;
    images: string[];
    highlights: string[];
  };
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{scale: 0.8, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          exit={{scale: 0.8, opacity: 0}}
          className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Carousel Section - 2/3 width on large screens, full width on mobile */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative h-64 lg:h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{opacity: 0, x: 100}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -100}}
                  transition={{duration: 0.3}}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.project} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Image indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50 hover:bg-opacity-75"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Close button on carousel */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content Section - 1/3 width on large screens, full width on mobile */}
          <div className="w-full lg:w-1/3 flex flex-col h-full">
            {/* Header with CTA buttons */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.project}
                </h2>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Image
                    src={assets.send_icon}
                    alt="external link"
                    className="w-3 h-3"
                  />
                  Visit
                </a>

                {project.gitRepo && (
                  <a
                    href={project.gitRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 text-sm">•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;
