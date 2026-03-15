import { assetPath } from "@/lib/utils/assetPath";

export default function Trailer() {
  return (
    <div id="trailer" className="bg-blue-1 relative py-12.5 md:py-27.5">
      <div className="mx-auto max-w-292.5 px-5 md:px-7.5">
        <h2 className="relative mb-11.25 text-[50px] font-bold tracking-wider md:mb-17.5 md:text-[80px]">
          TRAILER
          <span className="absolute -bottom-3.75 left-0 h-1.5 w-15 bg-black md:-bottom-7.5 md:h-2 md:w-20" />
        </h2>
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/RO_RRKTYzUY"
            title="Planet Hunters Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <span
        className="absolute -top-7.5 right-0 h-7.5 w-50 md:-top-10 md:h-10 md:w-107.5"
        style={{
          backgroundImage: `url(${assetPath("bg-line-bottom-color.svg")})`,
        }}
      />
      <span
        className="absolute -bottom-7.5 left-0 h-7.5 w-50 bg-right md:-bottom-10 md:h-10 md:w-107.5"
        style={{
          backgroundImage: `url(${assetPath("bg-line-top-color.svg")})`,
        }}
      />
    </div>
  );
}
