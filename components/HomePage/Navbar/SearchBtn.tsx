'use client';
import React, { useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

const transition = {
  type: 'spring',
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
      <div className='' ref={containerRef}>
        <div className='h-full w-full rounded-2xl border border-zinc-950/10 bg-white'>
          <motion.div
            animate={{
              // @todo: here I want to remove the width
              width: isOpen ? '300px' : '220px',
            }}
            initial={false}
          >
            <div className='overflow-hidden p-2'>
              {!isOpen ? (
                <div className='flex justify-around'>
                  {/* <User className='h-5 w-5' /> */}
                  <div className="nav-menu">
                    <Link href="/search" className="ml-2 ">
                      <span className='relative flex px-3 py-2 shrink-0 scale-100 select-none appearance-none items-center justify-start rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
                      >Anime</span>
                    </Link>
                    <Link href="/social">
                      <span className='relative flex px-3 py-2 shrink-0 scale-100 select-none appearance-none items-center justify-start rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
                      >Movies</span>
                    </Link>
                  </div>
                  <div className=''>
                    <button className='btn btn-square btn-md mr-2'
                      onClick={() => setIsOpen(true)}
                      aria-label='Search notes'
                    >
                      <Search className='w-6 h-6' />
                    </button>
                  </div>
                </div>
              ) : (
                <div className='flex'>
                  <div className='relative w-full h-6'>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered -mt-2 w-full h-9" />
                    <div className='absolute right-1 top-0 flex h-full items-center justify-center'></div>
                  </div>
                  <button className='btn btn-square btn-sm'
                      onClick={() => setIsOpen(false)} 
                      aria-label='Back'
                    >
                    <ArrowRight className='h-5 w-5' />
                      
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
