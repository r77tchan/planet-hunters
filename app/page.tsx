import Video from "@/components/Video";
import Header from "@/components/Header";
import Visual from "@/components/Visual";

export default function Home() {
  return (
    <div>
      <Video />
      <Header />
      <Visual />
      <div className="h-screen text-white">aaa</div>
      <div className="h-screen text-white">bbb</div>
    </div>
  );
}
