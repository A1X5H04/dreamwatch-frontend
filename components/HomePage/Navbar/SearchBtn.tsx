"use client";
import React, { useRef, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import useClickOutside from "@/hooks/useClickOutside";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.2,
};

export default function SearchBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div className="" ref={containerRef}>
        <div className="">
          <motion.div
            animate={{
              // @todo: here I want to remove the width
              width: isOpen ? "450px" : "200px",
            }}
            initial={false}
          >
            <div className="">
              {!isOpen ? (
                <div className="flex justify-between items-center bg-[#f2f2f2] rounded-3xl">
                  <Link
                    href="/search"
                    className="my-1 ml-2 p-2 text-slate-500 font-semibold rounded-2xl hover:bg-slate-200"
                  >
                    Anime
                  </Link>
                  <Link
                    href="/social"
                    className="my-1 p-2 text-slate-500 font-semibold rounded-2xl hover:bg-slate-200"
                  >
                    Movies
                  </Link>
                  <div className="">
                    <button
                      className="p-4 hover:bg-slate-200 rounded-full"
                      onClick={() => setIsOpen(true)}
                      aria-label="Search notes"
                    >
                      <FaSearch className="size-[14px] text-slate-500" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex bg-[#f2f2f2] rounded-3xl">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="bg-[#f2f2f2] input input-bordered w-full text-base"
                    />
                    {/* <div className="right-1 top-0 flex h-full items-center justify-center"></div> */}
                  </div>
                  <button
                    className="ml-1 hover:bg-zinc-200 btn btn-square btn-md"
                    onClick={() => setIsOpen(false)}
                    aria-label="Back"
                  >
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
