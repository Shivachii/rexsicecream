"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const splashRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const splash = splashRef.current;
    if (!splash) return;

    document.body.style.overflow = "hidden";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      const timeout = window.setTimeout(() => {
        document.body.style.overflow = "";
        setVisible(false);
      }, 350);
      return () => {
        window.clearTimeout(timeout);
        document.body.style.overflow = "";
      };
    }

    const timeline = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
      },
    });

    timeline
      .from(".splash-eyebrow", { y: 14, autoAlpha: 0, duration: .35 })
      .from(".splash-logo", { scale: .72, rotate: -5, autoAlpha: 0, duration: .65 }, "-=.12")
      .from(".splash-line span", {
        yPercent: 125,
        rotate: 4,
        duration: .62,
        stagger: .08,
      }, "-=.1")
      .from(".splash-counter", { scale: 0, rotate: -20, duration: .4, ease: "back.out(2)" }, "-=.25")
      .to(".splash-line:first-of-type span", { xPercent: -8, duration: .45, ease: "power2.inOut" }, "+=.15")
      .to(".splash-line:nth-of-type(2) span", { xPercent: 8, duration: .45, ease: "power2.inOut" }, "<")
      .to(splash, {
        clipPath: "inset(0 0 100% 0)",
        duration: .8,
        ease: "power4.inOut",
      }, "+=.05");

    return () => {
      timeline.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-screen" ref={splashRef} aria-hidden="true">
      <div className="splash-eyebrow">REX&apos;S ICE CREAM · NAIROBI</div>
      <Image
        className="splash-logo"
        src="/whiteclearbglogo.png"
        alt=""
        width={1024}
        height={1024}
        loading="eager"
        fetchPriority="high"
        priority
      />
      <div className="splash-type">
        <div className="splash-line"><span>GOOD</span><span>MOOD</span></div>
        <div className="splash-line"><span>FOOD.</span></div>
      </div>
      <div className="splash-counter">01</div>
      <div className="splash-bottom"><span>SMALL BATCH</span><span>BIG FEELINGS</span></div>
    </div>
  );
}
