"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollConeImage() {
  const shellRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const target = document.querySelector<HTMLElement>(".cone-shot");
    const targetImage = target?.querySelector<HTMLElement>("img");
    if (!shell || !target || !targetImage) return;

    gsap.registerPlugin(ScrollTrigger);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(shell, { display: "none" });
      return;
    }

    gsap.set(targetImage, { autoAlpha: 0 });
    const startLeft = () => window.innerWidth * .68;
    const startTop = () => window.innerHeight * .18;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: target,
        end: "top 68%",
        scrub: 1.05,
        invalidateOnRefresh: true,
        onUpdate: ({ progress }) => {
          const landed = progress > .985;
          gsap.set(shell, { autoAlpha: landed ? 0 : 1 });
          gsap.set(targetImage, { autoAlpha: landed ? 1 : 0 });
        },
      },
    });

    timeline
      .fromTo(shell, {
        x: 0,
        y: 0,
        width: () => Math.min(window.innerWidth * .27, 360),
        height: () => Math.min(window.innerWidth * .27, 360) * 1.25,
        rotate: -5,
      }, {
        x: () => -window.innerWidth * .48,
        y: () => window.innerHeight * .24,
        width: () => Math.min(window.innerWidth * .22, 310),
        height: () => Math.min(window.innerWidth * .22, 310) * 1.25,
        rotate: 7,
        duration: .52,
        ease: "none",
      })
      .to(shell, {
        x: () => target.getBoundingClientRect().left - startLeft(),
        y: () => window.innerHeight * .68 - startTop(),
        width: () => target.getBoundingClientRect().width,
        height: () => target.getBoundingClientRect().height,
        rotate: 0,
        borderRadius: 0,
        duration: .48,
        ease: "power2.inOut",
      });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
      gsap.set(targetImage, { clearProps: "opacity,visibility" });
    };
  }, []);

  return (
    <div className="scroll-cone-image" ref={shellRef} aria-hidden="true">
      <Image
        src="/images/icecreams/empty-waffle-cone.jpg"
        alt=""
        width={2400}
        height={3000}
        loading="eager"
        fetchPriority="high"
        priority
      />
    </div>
  );
}
