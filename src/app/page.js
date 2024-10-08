"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Awards from "./components/Awards";
import Success from "./components/Success";
import LeftTextWithImage from "./components/LeftTextWithImage";
import CenterTextWithImage from "./components/CenterTextWithImage";
import Footer from "./components/Footer";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <News />
      <Success />
      <LeftTextWithImage />
      <CenterTextWithImage />
      <FooterSection />
      <Footer />
    </main>
  );
}
