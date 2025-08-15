import Image from "next/image";

import About from "./components/About"; 
import HeroSection from "./components/hero";
import CounterItem from "./components/counterItem"; 
import Box from "./components/box"



export default function Home() {
  return (
    <main className="w-full m-0 p-0">
      <section className="w-full">
        <HeroSection />
      </section>
      <section className="w-full">
        <CounterItem />
      </section>
      <section className="w-full">
        <Box />
      </section>
      <section className="w-full">
        <About />
      </section>
    </main>
  );
}
