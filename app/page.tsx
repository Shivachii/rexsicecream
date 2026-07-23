"use client";

import { useRef } from "react";
import { Extras } from "@/components/home/Extras";
import { Flavours } from "@/components/home/Flavours";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { MediaGallery } from "@/components/home/MediaGallery";
import { ScrollConeImage } from "@/components/home/ScrollConeImage";
import { SplashScreen } from "@/components/home/SplashScreen";
import { Visit } from "@/components/home/Visit";
import { useHomeAnimations } from "@/components/home/useHomeAnimations";

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);
  useHomeAnimations(pageRef);

  return (
    <main ref={pageRef}>
      <SplashScreen />
      <Header />
      <ScrollConeImage />
      <Hero />
      <MediaGallery />
      <Flavours />
      <Manifesto />
      <Extras />
      <Visit />
      <Footer />
    </main>
  );
}
