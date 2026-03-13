export default function Header() {
  return (
    <header className="text-blue-1 fixed inset-0 z-1 flex h-15 items-center justify-between bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] px-5 md:h-25 md:px-7.5">
      <img className="w-30 md:w-auto" src="logo.svg" alt="Necopon games" />
      <nav className="relative">
        <ul className="flex items-center gap-5 md:gap-7.5">
          <li className="text-[13px] font-medium tracking-widest md:text-[16px]">
            STORY
          </li>
          <li className="text-[13px] font-medium tracking-widest md:text-[16px]">
            TRAILER
          </li>
          <li className="bg-blue-1 hidden w-41 cursor-not-allowed py-3.75 text-center text-[15px] font-bold tracking-wider text-black hover:shadow-[0_0_18px_5px_rgba(0,255,174,0.6)] md:block">
            PLAY NOW
          </li>
        </ul>
        <button className="absolute top-9.5 right-0 cursor-pointer text-[13px] font-semibold tracking-normal text-[#bfbfbf] md:top-16">
          SOUND OFF
          <span className="material-icons-round ml-1 align-text-bottom text-[18px]!">
            volume_up
          </span>
        </button>
      </nav>
    </header>
  );
}
