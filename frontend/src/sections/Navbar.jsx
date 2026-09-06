import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../components/ThemeToggle";
import { profile } from "../data/profile";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Work", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

const toggleClasses =
  "w-[38px] h-[38px] border border-line bg-transparent text-text grid place-items-center cursor-pointer transition-[background,color] duration-[250ms] ease-in-out [-webkit-tap-highlight-color:transparent] hover:bg-text hover:text-bg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed z-50 top-0 w-full bg-[color-mix(in_srgb,var(--bg)_91%,transparent)] backdrop-blur-[18px] border-b border-[color-mix(in_srgb,var(--line)_70%,transparent)]">
      <nav className="w-[min(1280px,calc(100%-48px))] h-[76px] mx-auto flex items-center justify-between max-[640px]:w-[min(100%-32px,1180px)] max-[640px]:h-[68px]">
        <a
          href="#home"
          className="text-[14px] font-extrabold tracking-[0.14em] [-webkit-tap-highlight-color:transparent]"
          onClick={close}
        >
          AYUSH GAUR<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-[25px] max-[900px]:hidden">
          {links.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              className="text-[13px] text-muted transition-colors duration-200 ease-in-out hover:text-text"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
          <a
            className="inline-flex items-center gap-[7px] py-[10px] px-[14px] border border-line text-[13px]"
            href="#contact"
          >
            Let's talk <FiArrowUpRight />
          </a>
        </div>

        <div className="hidden items-center gap-[25px] max-[900px]:flex">
          <ThemeToggle />
          <button
            className={toggleClasses}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex w-[min(100%,520px)] ml-auto pt-[22px] px-[24px] pb-[28px] flex-col gap-[4px] bg-bg border-t border-b border-line">
          {links.map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              onClick={close}
              className="py-[14px] flex justify-between border-b border-line text-muted"
            >
              {label}
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="py-[14px] flex justify-between border-b border-line text-muted"
          >
            LinkedIn <FiArrowUpRight />
          </a>
        </div>
      )}
    </header>
  );
}
