import Feedback from "@/components/Feedback/feedback";
import Hero from "@/components/Hero/hero";
import Popular from "@/components/Popular/popular";
import Recently from "@/components/Recently/recently";
import Work from "@/components/Works/work";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Hero/>
        <Work/>
        <Popular/>
      	<div className="bg-[#fbfbfb]">
        <Recently/>
        </div>
    </>
  );
}
