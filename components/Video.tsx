export default function Video() {
  return (
    <div className="fixed inset-0 -z-1 before:absolute before:inset-0 before:block before:h-screen before:w-full before:bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.5)_50%)] before:bg-size-[4px_4px] before:content-['']">
      <video
        className="h-full w-full object-cover"
        playsInline
        muted
        autoPlay
        loop
      >
        <source src="bg_movie.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
