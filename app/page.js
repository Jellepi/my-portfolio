'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
   <>
   <Navbar      />
   <Hero        />
   <About       />
   <Experience  />
   </>
  );
}
