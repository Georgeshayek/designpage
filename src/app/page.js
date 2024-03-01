import Hero from "@/components/Hero/hero";
import Popular from "@/components/Popular/popular";
import Work from "@/components/Works/work";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Hero/>
        <Work/>
        <Popular/>
    </>
  );
}
