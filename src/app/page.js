import Image from "next/image";

import About from "./components/About"; 
import HeroSection from "./components/hero";
import CounterItem from "./components/counterItem"; 
import Box from "./components/box"
import Footer from "./components/footer"



export default function Home() {
  return (
    <main className="w-full m-0 p-0">
      <section className=" w-full">
        <HeroSection />
      </section>
      <section className=" w-full">
        <CounterItem />
      </section>
      <section className=" mt-4 w-full">
        <Box />
      </section>
      <section className="w-full">
        <About />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
