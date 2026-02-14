"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { NAV_SECTIONS } from "@/lib/drinks";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = NAV_SECTIONS.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0E14]/85 backdrop-blur-xl border-b border-[#7AB8E0]/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 sm:h-16 sm:px-8 md:h-20 md:px-16 lg:px-24 xl:px-32">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative shrink-0"
        >
          <Image
            src="/coorslight_logo.png"
            alt="Coors Light"
            width={120}
            height={60}
            className="h-10 w-auto md:h-12"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`relative text-[10px] tracking-[0.25em] transition-colors ${
                activeSection === section.id
                  ? "text-white"
                  : "text-[#8A9BB5]/60 hover:text-white"
              }`}
            >
              {section.label.toUpperCase()}
              {activeSection === section.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#7AB8E0]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`block h-px w-5 bg-white transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="border-t border-[#7AB8E0]/10 bg-[#0A0E14]/95 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto px-5 py-5">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="text-left text-xs tracking-[0.25em] text-[#8A9BB5]/60 transition-colors hover:text-white"
              >
                {section.label.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
