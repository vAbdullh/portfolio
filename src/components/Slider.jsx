"use client";

import React, { useState, useEffect } from "react";
import { LiaCodeSolid, LiaGlobeAmericasSolid } from "react-icons/lia";
import { BsFillFileEarmarkCodeFill, BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Slider({ items = [] }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Swipe support states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (items.length === 0 || isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length, isHovered]);

  if (items.length === 0) return null;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) setCurrent((prev) => (prev + 1) % items.length);
    if (isRightSwipe) setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div 
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Controls */}
      <div className="absolute top-2 right-3 flex gap-1.5 items-center z-20 pointer-events-none">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + items.length) % items.length)} 
          className="p-1 rounded-full bg-black/80 border border-white/20 text-white transition-opacity pointer-events-auto hover:bg-white/20 shadow-lg"
        >
          <BsChevronLeft size={10} />
        </button>
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % items.length)} 
          className="p-1 rounded-full bg-black/80 border border-white/20 text-white transition-opacity pointer-events-auto hover:bg-white/20 shadow-lg"
        >
          <BsChevronRight size={10} />
        </button>
      </div>
      
      <div 
        className="w-full flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide.name ? (
              <div className="flex flex-col gap-1.5 p-3 rounded-10 bg-black/40 border border-white/5 hover:bg-white/5 transition-colors mx-1 h-full justify-center">
                <div className="flex items-center gap-2">
                  <div className="bg-black1 p-1.5 rounded-md border border-light-black shrink-0">
                    <LiaCodeSolid className="text-primary w-4 h-4" />
                  </div>
                  <span className="font-bold text-[11px] lg:text-sm text-white truncate">{slide.name}</span>
                </div>
                <div className="flex gap-2 mt-2 justify-end">
                  {slide.repo && (
                    <a href={slide.repo} target="_blank" rel="noopener noreferrer" title="repo">
                      <BsFillFileEarmarkCodeFill className="text-white hover:text-primary transition-colors cursor-pointer w-4 h-4" />
                    </a>
                  )}
                  {slide.link && (
                    <a href={slide.link} target="_blank" rel="noopener noreferrer" title="live">
                      <LiaGlobeAmericasSolid className="text-white hover:text-primary transition-colors cursor-pointer w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5 p-3 rounded-10 bg-black/40 border border-white/5 hover:bg-white/5 transition-colors mx-1 h-full justify-center">
                {/* Top Row: Role and Company */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-2">
                  <span className="font-bold text-[11px] lg:text-sm text-white leading-tight">{slide.role}</span>
                  <span className="text-[9px] lg:text-[11px] text-gray-400 text-left sm:text-right shrink-0">{slide.company}</span>
                </div>
                
                {/* Bottom Row: Tech Stack and Date */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-1 gap-2">
                  <div className="flex flex-wrap gap-1 flex-1">
                    {slide.tech.map(t => (
                      <span key={t} className="text-[8px] lg:text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 whitespace-nowrap">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] lg:text-[10px] text-primary/80 shrink-0 font-medium whitespace-nowrap mt-1 sm:mt-0">{slide.date}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Simple dots below the sliding card */}
      <div className="flex justify-center gap-1.5 mt-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-300 ${current === index ? "w-4 bg-primary" : "w-1 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
