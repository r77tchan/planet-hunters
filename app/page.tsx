import Video from "@/components/Video";
import Header from "@/components/Header";
import Visual from "@/components/Visual";
import Story from "@/components/Story";
import AreYouReady from "@/components/AreYouReady";
import Trailer from "@/components/Trailer";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
}
