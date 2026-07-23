"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useHomeAnimations(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!scope.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.timeline({ delay: 2.15, defaults: { ease: "power3.out" } })
        .from(".hero-kicker", { y: 12, autoAlpha: 0, duration: .5 })
        .from(".hero-title-line", { yPercent: 115, rotate: 2, duration: .85, stagger: .1 }, "-=.2")
        .from(".hero-text", { scaleX: 0, transformOrigin: "left center", duration: .65 }, "-=.45")
        .from(".hero-text > *", { y: 14, autoAlpha: 0, stagger: .1, duration: .45 }, "-=.25")
        .from(".scribble", { scale: .6, rotate: -18, autoAlpha: 0, duration: .45, ease: "back.out(2)" }, "-=.25");

      gsap.utils.toArray<HTMLElement>(".media-intro figure").forEach((figure, index) => {
        gsap.from(figure, {
          clipPath: index ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)",
          duration: 1.15, ease: "power3.inOut",
          scrollTrigger: { trigger: figure, start: "top 84%", once: true },
        });
        gsap.to(figure.querySelector("img"), {
          yPercent: index ? -6 : 6, ease: "none",
          scrollTrigger: { trigger: figure, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
      });

      gsap.from(".menu-section .section-title > *", {
        y: 40, autoAlpha: 0, stagger: .08, duration: .7,
        scrollTrigger: { trigger: ".menu-section", start: "top 78%", once: true },
      });
      gsap.from(".flavour", {
        y: 65, autoAlpha: 0, rotate: 1.5, stagger: .11, duration: .85, ease: "power3.out",
        scrollTrigger: { trigger: ".flavour-grid", start: "top 78%", once: true },
      });
      gsap.from(".manifesto-word", {
        xPercent: -14, autoAlpha: 0, stagger: .12, duration: .9,
        scrollTrigger: { trigger: ".manifesto", start: "top 65%", once: true },
      });
      gsap.to(".manifesto-word:nth-child(2)", {
        xPercent: 6, ease: "none",
        scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.to(".sprinkle-break img", {
        scale: 1.18, ease: "none",
        scrollTrigger: { trigger: ".sprinkle-break", start: "top bottom", end: "bottom top", scrub: 1.2 },
      });
      gsap.from(".sprinkle-break figcaption", {
        xPercent: -25, autoAlpha: 0, duration: .9,
        scrollTrigger: { trigger: ".sprinkle-break", start: "top 65%", once: true },
      });
      gsap.utils.toArray<HTMLElement>(".extra").forEach((item) => {
        gsap.from(item, {
          x: -45, autoAlpha: 0, duration: .65,
          scrollTrigger: { trigger: item, start: "top 88%", once: true },
        });
      });
      gsap.from(".extras-art img", {
        scale: .78, rotate: 8, autoAlpha: 0, duration: 1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".extras-art", start: "top 75%", once: true },
      });
      gsap.from(".location-list article, .hours, .visit-info > a", {
        y: 32, autoAlpha: 0, stagger: .12, duration: .65,
        scrollTrigger: { trigger: ".visit-info", start: "top 75%", once: true },
      });
      gsap.to(".footer-logo", {
        rotate: -2, scale: 1.04, ease: "none",
        scrollTrigger: { trigger: "footer", start: "top bottom", end: "bottom bottom", scrub: 1 },
      });
    }, scope);

    return () => context.revert();
  }, [scope]);
}
