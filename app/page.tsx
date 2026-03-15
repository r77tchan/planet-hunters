import Video from "@/components/Video";
import Header from "@/components/Header";
import Visual from "@/components/Visual";
import Story from "@/components/Story";
import AreYouReady from "@/components/AreYouReady";
import Trailer from "@/components/Trailer";

export default function Home() {
  return (
    <div>
      <Video />
      <Header />
      <Visual />
      <Story />
      <AreYouReady />
      <Trailer />
      <AreYouReady />
    </div>
  );
}
