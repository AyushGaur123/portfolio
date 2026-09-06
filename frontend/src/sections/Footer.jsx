import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-muted">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto min-h-[90px] flex justify-between items-center gap-5 text-[10px] tracking-[0.1em] uppercase max-[640px]:min-h-[110px] max-[640px]:flex-col max-[640px]:justify-center">
        <span>© 2026 Ayush Gaur</span>
        <a href="#home" className="inline-flex items-center gap-[6px] text-dark-text">
          Back to top <FiArrowUpRight />
        </a>
      </div>
    </footer>
  );
}
