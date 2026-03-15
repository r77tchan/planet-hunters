export default function NewsBar() {
  return (
    <div className="border-blue-1 absolute -top-21 right-7.5 w-50 overflow-hidden border bg-black py-2 text-[12px] font-bold md:w-90 md:text-[14px]">
      <p className="w-max animate-[newsMessage-animation_7.5s_linear_infinite]">
        <span className="mr-3 text-white">2030.02.20</span>
        <span className="text-blue-1">
          バージョン5.6リリース：アバター・アイテム大量追加
        </span>
      </p>
    </div>
  );
}
