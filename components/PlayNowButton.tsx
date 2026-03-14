type Props = {
  isSmall: boolean;
};

export default function PlayNowButton({ isSmall }: Props) {
  return (
    <button
      className={`bg-blue-1 cursor-not-allowed text-center font-bold tracking-wider text-black hover:shadow-[0_0_18px_5px_rgba(0,255,174,0.6)] ${isSmall ? "w-41 py-3.75 text-[15px]" : "w-42.5 py-5 text-[16px] md:w-57.5 md:text-[18px]"}`}
    >
      PLAY NOW
    </button>
  );
}
