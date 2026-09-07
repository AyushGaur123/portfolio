import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative pt-[150px] pb-[80px] flex items-center border-b border-line max-[640px]:pt-[120px] max-[640px]:pb-[70px]"
    >
      {/* <AnimatedBackground /> */}
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)] gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="mb-[18px] text-[11px] tracking-[0.18em] uppercase text-accent font-bold">
            01 / PROFILE
          </p>
          <p className="m-0 mb-[14px] text-muted text-[14px]">{profile.eyebrow}</p>

          <h1 className="m-0 font-serif text-[clamp(58px,7.5vw,104px)] leading-[0.91] font-medium tracking-[-0.055em] max-[900px]:text-[clamp(54px,12vw,88px)] max-[640px]:text-[clamp(49px,15vw,72px)]">
            Building <em className="text-accent font-normal">useful</em>
            <br />
            things for the web.
          </h1>

          <p className="max-w-[580px] mt-[30px] text-muted leading-[1.85] text-[16px] max-[640px]:text-[15px]">
            {profile.subtitle}
          </p>

          <div className="flex items-center gap-6 mt-[34px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-[17px]">
            <a
              className="min-h-[48px] px-[18px] inline-flex items-center justify-center gap-[9px] border border-transparent cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-[2px] bg-text text-bg"
              href="#projects"
            >
              View selected work <FiArrowUpRight />
            </a>
            <a
              className="text-[13px] text-muted border-b border-muted pb-[3px]"
              href="#contact"
            >
              Start a conversation
            </a>
          </div>

          <div className="flex gap-[22px] mt-12 max-[640px]:mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] text-muted hover:text-accent"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] text-muted hover:text-accent"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative max-[900px]:max-w-[560px] max-[900px]:w-full"
        >
          <div className="relative aspect-[0.83] bg-accent-soft border border-line p-[22px] max-[640px]:p-[12px]">
            {profile?.image ? (
              <img
                src={profile.image}
                className="w-full h-full block object-cover [filter:saturate(.82)]"
                alt={`${profile.name} portrait`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                 <span className="m-0 font-serif text-[clamp(120px,15vw,220px)] leading-[0.91] font-medium tracking-[-0.055em] text-text max-[900px]:text-[clamp(100px,18vw,180px)] max-[640px]:text-[clamp(80px,25vw,130px)]">
                   AG </span>
                    </div>
            )}

            <span className="absolute bottom-[34px] left-[36px] py-2 px-[11px] bg-bg text-text text-[10px] tracking-[0.13em] max-[640px]:left-[23px] max-[640px]:bottom-[23px]">
              MERN / REACT / NODE
            </span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-x-[18px] gap-y-1 absolute -right-[28px] bottom-7 py-4 px-[18px] bg-paper border border-line text-[11px] max-[900px]:-right-[10px] max-[640px]:right-0 max-[640px]:-bottom-[18px]">
            <span className="text-muted">Based in</span>
            <strong className="row-span-2 self-center font-serif text-[23px] font-medium">
              India
            </strong>
            <span className="text-muted">Open to opportunities</span>
          </div>
        </motion.div>
      </div>

      <a
        className="absolute bottom-[26px] left-[max(24px,calc((100vw-1180px)/2))] inline-flex items-center gap-2 text-muted text-[10px] tracking-[0.1em] uppercase max-[900px]:hidden"
        href="#about"
      >
        <FiArrowDown />
        Scroll to explore
      </a>
    </section>
  );
}



