import Video from "@/components/Video";
import Header from "@/components/Header";
import Visual from "@/components/Visual";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div>
      <Video />
      <Header />
      <Visual />
      <Story />
      <div className="h-screen text-white">aaa</div>
      <div className="h-screen text-white">bbb</div>
    </div>
  );
}
