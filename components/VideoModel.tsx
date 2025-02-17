"use client";
import React, { useRef, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, videoUrl, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Manage body scroll
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            ref={modalRef}
            className={`bg-black rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] relative shadow-lg transform transition-transform duration-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-[900px] h-[500px]"
                src={videoUrl}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              aria-label="Close modal"
            >
              <IoMdClose className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
