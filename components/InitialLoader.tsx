"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setVisible(false);
      return;
    }

    const onLoad = () => setVisible(false);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div>
        <div className="text-blue-1 relative mx-auto mb-5 h-15 w-15">
          <div className="absolute inset-0 transform-[rotateZ(120deg)_rotateX(66deg)_rotateZ(0deg)] animate-[atom-spinner-animation-1_1s_linear_infinite] rounded-full border-l-[2.4px]"></div>
          <div className="absolute inset-0 transform-[rotateZ(240deg)_rotateX(66deg)_rotateZ(0deg)] animate-[atom-spinner-animation-2_1s_linear_infinite] rounded-full border-l-[2.4px]"></div>
          <div className="absolute inset-0 transform-[rotateZ(360deg)_rotateX(66deg)_rotateZ(0deg)] animate-[atom-spinner-animation-3_1s_linear_infinite] rounded-full border-l-[2.4px]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            &#9679;
          </div>
        </div>
        <img src="loading.svg" alt="Loading" />
      </div>
    </div>
  );
}
