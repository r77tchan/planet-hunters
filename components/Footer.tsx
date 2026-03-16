"use client";

import { assetPath } from "@/lib/utils/assetPath";
import { useState } from "react";
import { FaLine } from "react-icons/fa";
import { FaCheck, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [niceCount, setNiceCount] = useState(0);
  return (
    <footer className="relative flex flex-col items-center justify-between gap-y-7.5 bg-black px-5 pt-10 pb-30 text-white md:flex-row md:px-7.5 md:py-10">
      <ul className="flex items-center gap-2">
        <li
          className="flex cursor-pointer items-center rounded-md bg-[#4d83f7] px-3 py-2 select-none"
          onClick={() => setNiceCount((c) => c + 1)}
        >
          <div className="h-4 w-4">
            <FaCheck className="text-[16px]" />
          </div>
          <div className="ml-1 text-[12px] font-semibold tracking-normal">
            いいね！ {niceCount}
          </div>
        </li>
        <li className="flex cursor-not-allowed items-center rounded-full px-3 py-2 hover:bg-[#333333]">
          <div className="h-4 w-4">
            <FaXTwitter className="text-[16px]" />
          </div>
          <div className="ml-1 text-[13px]">ポスト</div>
        </li>
        <li>
          <div className="flex h-8 w-8 cursor-not-allowed items-center justify-center overflow-hidden rounded-md">
            <FaLine className="scale-110 bg-white text-[44px] text-green-500" />
          </div>
        </li>
      </ul>
      <div className="text-[11px] font-semibold tracking-wider md:text-[12px]">
        &copy;Necopon games
      </div>

      <span
        className="absolute -top-7.5 right-0 h-7.5 w-50 md:-top-10 md:h-10 md:w-107.5"
        style={{
          backgroundImage: `url(${assetPath("bg-line-bottom-black.svg")})`,
        }}
      />
    </footer>
  );
}
