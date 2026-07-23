"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menu]);

  useEffect(() => {
    const sectionIds = ["signatures", "classics", "extras", "visit"];
    let frame = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * .4;
      let current = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActiveSection(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={menu ? "menu-active" : ""}>
      <a className="logo-link logo-mini" href="#top" aria-label="Rex's home">
        <Image
          src={menu ? "/whiteclearbglogo.png" : "/blackclearbglogo.png"}
          alt="Rex's Ice Cream"
          width={1024}
          height={1024}
          priority
        />
      </a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
        {menu ? "CLOSE" : "MENU"}
      </button>
      <nav className={menu ? "open" : ""}>
        <span className="mobile-menu-label">EXPLORE REX&apos;S</span>
        <a className={activeSection === "signatures" ? "active" : ""} href="#signatures" onClick={closeMenu}><small>01</small> Signatures</a>
        <a className={activeSection === "classics" ? "active" : ""} href="#classics" onClick={closeMenu}><small>02</small> Classics & Sorbets</a>
        <a className={activeSection === "extras" ? "active" : ""} href="#extras" onClick={closeMenu}><small>03</small> Extras</a>
        <a className={activeSection === "visit" ? "active" : ""} href="#visit" onClick={closeMenu}><small>04</small> Find Us</a>
        <div className="mobile-menu-footer">
          <a href="tel:+254799371293">0799 371 293</a>
          <span>NAIROBI · KENYA</span>
        </div>
      </nav>
    </header>
  );
}
