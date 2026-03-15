import { assetPath } from "@/lib/utils/assetPath";
import NewsBar from "./NewsBar";

export default function Story() {
  return (
    <div
      id="story"
      className="relative bg-black bg-cover bg-center bg-no-repeat py-12.5 md:py-35"
      style={{
        backgroundImage: `url(${assetPath("bg_story.webp")})`,
      }}
    >
      <div className="mx-auto grid max-w-292.5 gap-y-15 px-5 md:gap-y-22.5 md:px-7.5">
        <div className="flex flex-col items-center gap-x-20 gap-y-7.5 md:flex-row">
          <div className="flex basis-1/2 flex-col justify-center">
            <h2 className="text-blue-1 relative mb-11.25 text-[50px] font-bold tracking-wider md:mb-17.5 md:text-[80px]">
              STORY
              <span className="bg-blue-1 absolute -bottom-3.75 left-0 h-1.5 w-15 md:-bottom-7.5 md:h-2 md:w-20" />
            </h2>
            <div className="mb-5 text-[24px] leading-normal font-black tracking-widest text-white md:mb-7.5 md:text-[32px]">
              奪われた故郷の星を取り戻せ
              <br />
              壮大なSFファンタジー
            </div>
            <p className="text-[15px] leading-[1.8] font-bold tracking-wider text-white md:text-[16px]">
              銀河歴222年、惑星ネコチャンは、ボスネコ将軍の率いる軍の反乱により完全に制圧された。将軍の側近マンチカンは軍政府に従わない人間を辺境の星ニャゴーへ強制的に追放。食料や資源の乏しいニャゴーでは多くの難民が発生し飢餓に苦しんでいた。ニャゴーのスラム街で育った孤児の姉弟がいた。姉のミケと弟のタマは母親をボスネコ将軍に殺された事実を知る。母の復讐のため、そして故郷の惑星ネコチャンを奪還すべく、ミケとタマはいま行動に出る！
            </p>
          </div>
          <div className="mx-auto w-[85%] flex-1 skew-x-[-5deg] shadow-[7px_7px_var(--blue-1)] md:w-full">
            <img src="story01.webp" alt="ストーリーイメージ" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-x-20 gap-y-7.5 md:flex-row">
          <div className="mx-auto w-[85%] flex-1 skew-x-[5deg] shadow-[-7px_7px_var(--blue-1)] md:w-full">
            <img src="story02.webp" alt="ストーリーイメージ" />
          </div>
          <div className="flex basis-1/2 flex-col justify-center">
            <div className="mb-5 text-[24px] leading-normal font-black tracking-widest text-white md:mb-7.5 md:text-[32px]">
              隠された陰謀を暴け
              <br />
              衝撃的な事実に驚愕
            </div>
            <p className="text-[15px] leading-[1.8] font-bold tracking-wider text-white md:text-[16px]">
              ミケとタマはネコジャラシ作戦により軍政府の最新鋭の小型船チュールを奪うことに成功。チュールのハイテンションワープ恒星間航行により惑星ネコチャンへあとわずか３時間で到着という時、小惑星帯アビシニアンで謎の救難信号を受信する。意外にも信号の発信源はボスネコ将軍だった。彼は今にも絶えそうなかすれた声で「私はおまえたちミケとタマの父親なのだ」と語る。その瞬間、ミケとタマの育ての親同然で仲間のはずのホワイトオッドアイがタマの背中を刀で切り裂いたのだった......
            </p>
          </div>
        </div>
      </div>

      <span
        className="absolute -top-7.5 right-0 h-7.5 w-50 md:-top-10 md:h-10 md:w-107.5"
        style={{
          backgroundImage: `url(${assetPath("bg-line-bottom-black.svg")})`,
        }}
      />
      <span
        className="absolute -bottom-7.5 left-0 h-7.5 w-50 bg-right md:-bottom-10 md:h-10 md:w-107.5"
        style={{
          backgroundImage: `url(${assetPath("bg-line-top-black.svg")})`,
        }}
      />

      <NewsBar />
    </div>
  );
}
