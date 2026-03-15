import PlayNowButton from "@/components/PlayNowButton";

export default function Visual() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-30 pl-[10%] text-white">
      <div className="mb-5 text-[22px] font-extrabold tracking-[0.2em] md:mb-7.5 md:text-[32px]">
        VR GAME
      </div>
      <h1 className="mb-2.5 text-[76px] leading-[0.9] font-semibold tracking-wider md:text-[140px]">
        Planet
        <br />
        Hunters
      </h1>
      <div className="mb-7.5 text-[22px] font-bold tracking-[1em] md:mb-12.5 md:text-[34px]">
        惑星を奪還せよ
      </div>
      <PlayNowButton isSmall={false} />
      <div className="scrolldown text-blue-1 absolute bottom-7.5 left-7.5 text-[11px] [writing-mode:vertical-rl]">
        Scroll
        <span className="bg-blue-1 absolute -bottom-2.5 -left-2.5 h-12.5 w-0.5" />
        <span className="bg-blue-1 absolute -left-3.5 h-2.5 w-2.5 animate-[circlemove_1.6s_ease-in-out_infinite,circlemovehide_1.6s_ease-out_infinite] rounded-full" />
      </div>
    </div>
  );
}
