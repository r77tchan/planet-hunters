"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import PlayNowButton from "@/components/PlayNowButton";

export default function Header() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (id: string) => (e: MouseEvent<HTMLLIElement>) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <header className="text-blue-1 fixed inset-0 z-1 flex h-15 items-center justify-between bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] px-5 md:h-25 md:px-7.5">
      <img className="w-30 md:w-auto" src="logo.svg" alt="Necopon games" />
      <nav className="relative">
        <ul className="flex items-center gap-5 md:gap-7.5">
          <li
            className="cursor-pointer text-[13px] font-medium tracking-widest hover:shadow-[0_0_18px_5px_rgba(0,255,174,0.6)] md:text-[16px]"
            onClick={scrollToSection("story")}
          >
            STORY
          </li>
          <li
            className="cursor-pointer text-[13px] font-medium tracking-widest hover:shadow-[0_0_18px_5px_rgba(0,255,174,0.6)] md:text-[16px]"
            onClick={scrollToSection("trailer")}
          >
            TRAILER
          </li>
          <li className="hidden md:block">
            <PlayNowButton isSmall={true} />
          </li>
        </ul>
        <audio
          ref={audioRef}
          src="cinematic-melody-main-9785.mp3"
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        <button
          type="button"
          onClick={toggleSound}
          className="absolute top-9.5 right-0 cursor-pointer text-[13px] font-semibold tracking-normal text-[#bfbfbf] md:top-16"
        >
          {isPlaying ? "SOUND ON" : "SOUND OFF"}
          <span className="material-icons-round ml-1 align-text-bottom text-[18px]!">
            {isPlaying ? "volume_up" : "volume_off"}
          </span>
        </button>
      </nav>
    </header>
  );
}
