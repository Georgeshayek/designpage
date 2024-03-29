import Feedback from "@/components/Feedback/feedback";
import Hero from "@/components/Hero/hero";
import Popular from "@/components/Popular/popular";
import Recently from "@/components/Recently/recently";
import Work from "@/components/Works/work";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
    <>
    
        <Hero/>
        <Work/>
        <Popular/>
      	<div className="bg-[#fbfbfb]">
        <div className="container mx-auto py-12 pb-[140px] px-[68px] max-lg:px-4">

        <Recently/>
        <Feedback/>
        </div>
        </div>
        <Footer/>
          

       
    </>
  );
}
