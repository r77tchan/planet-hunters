import PlayNowButton from "./PlayNowButton";

export default function AreYouReady() {
  return (
    <div className="mx-auto max-w-292.5 px-5 py-17.5 text-center md:px-7.5 md:py-25">
      <div className="mb-5 text-[32px] font-bold tracking-wider text-white md:mb-6.25 md:text-[64px]">
        ARE YOU READY TO FIGHT?
      </div>
      <div>
        <PlayNowButton isSmall={false} />
      </div>
    </div>
  );
}
