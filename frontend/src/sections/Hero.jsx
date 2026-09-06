import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/profile";
import AnimatedBackground from "../components/AnimatedBackground";

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
            <img
              src="public/img.jpeg"
              className="w-full h-full block object-cover [filter:saturate(.82)]"
              alt={`${profile.name} portrait`}
            />
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





// import { motion } from "framer-motion";
// import {
//   FiArrowDown,
//   FiArrowUpRight,
//   FiGithub,
//   FiLinkedin,
// } from "react-icons/fi";

// import { profile } from "../data/profile";


// // ---------------------------------------------------------
// // ABSTRACT GEOMETRIC BACKGROUND
// // ---------------------------------------------------------

// function GeometricBackground() {
//   return (
//     <div
//       className="absolute inset-0 overflow-hidden pointer-events-none z-0"
//       aria-hidden="true"
//     >
//       <svg
//         className="absolute inset-0 w-full h-full"
//         viewBox="0 0 1600 900"
//         preserveAspectRatio="xMidYMid slice"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >

//         {/* =================================================
//             TOP RIGHT — LARGE HEXAGON NETWORK
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1.5"
//           opacity="0.65"
//         >
//           {/* Large filled geometric shapes */}

//           <path
//             d="M1280 -80
//                L1435 -80
//                L1512 54
//                L1435 188
//                L1280 188
//                L1203 54
//                Z"
//             fill="var(--accent-soft)"
//             opacity="0.55"
//           />

//           <path
//             d="M1435 188
//                L1590 188
//                L1667 322
//                L1590 456
//                L1435 456
//                L1358 322
//                Z"
//             fill="var(--accent)"
//             opacity="0.10"
//           />

//           {/* Large outline hexagon */}

//           <path
//             d="M1095 95
//                L1250 95
//                L1327 229
//                L1250 363
//                L1095 363
//                L1018 229
//                Z"
//           />

//           {/* Middle outline */}

//           <path
//             d="M1250 363
//                L1405 363
//                L1482 497
//                L1405 631
//                L1250 631
//                L1173 497
//                Z"
//           />

//           {/* Upper right outline */}

//           <path
//             d="M1515 -45
//                L1640 -45
//                L1702 63
//                L1640 171
//                L1515 171
//                L1453 63
//                Z"
//           />
//         </g>


//         {/* =================================================
//             TOP RIGHT — RANDOM CONNECTING LINES
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1.2"
//           opacity="0.55"
//         >
//           <path d="M1203 54 L1110 -35" />
//           <path d="M1435 54 L1515 -30" />

//           <path d="M1018 229 L930 285" />
//           <path d="M1327 229 L1415 165" />

//           <path d="M1173 497 L1075 550" />
//           <path d="M1482 497 L1585 550" />

//           <path d="M1405 631 L1480 700" />
//         </g>


//         {/* =================================================
//             TOP LEFT — VERY SUBTLE RANDOM LINES
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1.2"
//           opacity="0.32"
//         >
//           <path d="M-50 110 L110 20 L250 100 L390 20" />

//           <path d="M-20 180 L120 100 L260 180 L400 100" />

//           <path d="M110 20 L110 -50" />
//           <path d="M250 100 L250 10" />
//           <path d="M390 20 L465 85" />

//           <path d="M400 100 L475 155" />
//           <path d="M475 155 L425 245" />
//         </g>


//         {/* =================================================
//             LEFT / BOTTOM — LARGE HEXAGON NETWORK
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1.5"
//           opacity="0.62"
//         >

//           {/* Large partially visible shape */}

//           <path
//             d="M-105 650
//                L55 650
//                L135 789
//                L55 928
//                L-105 928
//                L-185 789
//                Z"
//             fill="var(--accent-soft)"
//             opacity="0.55"
//           />

//           {/* Darker subtle shape */}

//           <path
//             d="M55 928
//                L215 928
//                L295 1067
//                L215 1206
//                L55 1206
//                L-25 1067
//                Z"
//             fill="var(--accent)"
//             opacity="0.09"
//           />

//           {/* Outline hexagon */}

//           <path
//             d="M135 789
//                L295 789
//                L375 928
//                L295 1067
//                L135 1067
//                L55 928
//                Z"
//           />

//           {/* Small outline */}

//           <path
//             d="M-5 550
//                L85 550
//                L130 628
//                L85 706
//                L-5 706
//                L-50 628
//                Z"
//           />
//         </g>


//         {/* =================================================
//             LEFT SIDE CONNECTIONS
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1.2"
//           opacity="0.45"
//         >
//           <path d="M55 650 L-25 570" />
//           <path d="M135 789 L225 720" />

//           <path d="M295 789 L375 720" />
//           <path d="M375 928 L465 990" />

//           <path d="M-185 789 L-270 720" />
//         </g>


//         {/* =================================================
//             SMALL FLOATING HEXAGONS
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1.2"
//           opacity="0.25"
//         >
//           <path
//             d="M535 125
//                L605 85
//                L675 125
//                L675 205
//                L605 245
//                L535 205
//                Z"
//           />

//           <path
//             d="M770 650
//                L835 612
//                L900 650
//                L900 725
//                L835 763
//                L770 725
//                Z"
//           />

//           <path
//             d="M420 390
//                L475 358
//                L530 390
//                L530 454
//                L475 486
//                L420 454
//                Z"
//           />

//           <path
//             d="M1000 560
//                L1055 528
//                L1110 560
//                L1110 624
//                L1055 656
//                L1000 624
//                Z"
//           />
//         </g>


//         {/* =================================================
//             RANDOM DIAGONAL NETWORK
//         ================================================= */}

//         <g
//           stroke="var(--line)"
//           strokeWidth="1"
//           opacity="0.22"
//         >
//           <path d="M480 230 L600 315 L710 255 L825 340" />

//           <path d="M825 340 L945 270" />

//           <path d="M320 320 L405 265 L500 325" />

//           <path d="M700 500 L790 435 L880 500" />

//           <path d="M950 760 L1050 685 L1160 760" />

//           <path d="M1160 760 L1250 700" />

//           <path d="M370 600 L455 540 L540 600" />
//         </g>


//         {/* =================================================
//             SMALL ACCENT FILLED HEXAGONS
//         ================================================= */}

//         <motion.g
//           animate={{
//             opacity: [0.10, 0.18, 0.10],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <path
//             d="M1460 735
//                L1535 692
//                L1610 735
//                L1610 821
//                L1535 864
//                L1460 821
//                Z"
//             fill="var(--accent)"
//           />
//         </motion.g>


//         <motion.g
//           animate={{
//             opacity: [0.07, 0.14, 0.07],
//           }}
//           transition={{
//             duration: 9,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <path
//             d="M610 710
//                L675 673
//                L740 710
//                L740 784
//                L675 821
//                L610 784
//                Z"
//             fill="var(--accent)"
//           />
//         </motion.g>


//         {/* =================================================
//             A FEW SMALL RANDOM DOTS
//         ================================================= */}

//         <g fill="var(--accent)" opacity="0.25">
//           <circle cx="430" cy="170" r="3" />
//           <circle cx="690" cy="300" r="2.5" />
//           <circle cx="950" cy="180" r="3" />
//           <circle cx="1120" cy="690" r="2.5" />
//           <circle cx="520" cy="560" r="2.5" />
//           <circle cx="890" cy="790" r="3" />
//         </g>

//       </svg>
//     </div>
//   );
// }


// // ---------------------------------------------------------
// // HERO
// // ---------------------------------------------------------

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="
//         min-h-screen
//         relative
//         pt-[150px]
//         pb-[80px]
//         flex
//         items-center
//         border-b
//         border-line
//         overflow-hidden

//         max-[640px]:pt-[120px]
//         max-[640px]:pb-[70px]
//       "
//     >



//       <GeometricBackground />



//       <div
//         className="
//           relative
//           z-10
//           w-[min(1180px,calc(100%-48px))]
//           mx-auto
//           grid
//           grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)]
//           gap-20
//           items-center

//           max-[900px]:grid-cols-1
//           max-[900px]:gap-[60px]
//         "
//       >

//         {/* LEFT */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75 }}
//         >

//           <p
//             className="
//               mb-[18px]
//               text-[11px]
//               tracking-[0.18em]
//               uppercase
//               text-accent
//               font-bold
//             "
//           >
//             01 / PROFILE
//           </p>


//           <p className="m-0 mb-[14px] text-muted text-[14px]">
//             {profile.eyebrow}
//           </p>


//           <h1
//             className="
//               m-0
//               font-serif
//               text-[clamp(58px,7.5vw,104px)]
//               leading-[0.91]
//               font-medium
//               tracking-[-0.055em]

//               max-[900px]:text-[clamp(54px,12vw,88px)]
//               max-[640px]:text-[clamp(49px,15vw,72px)]
//             "
//           >
//             Building{" "}

//             <em className="text-accent font-normal">
//               useful
//             </em>

//             <br />

//             things for the web.
//           </h1>


//           <p
//             className="
//               max-w-[580px]
//               mt-[30px]
//               text-muted
//               leading-[1.85]
//               text-[16px]

//               max-[640px]:text-[15px]
//             "
//           >
//             {profile.subtitle}
//           </p>


//           {/* Buttons */}

//           <div
//             className="
//               flex
//               items-center
//               gap-6
//               mt-[34px]

//               max-[640px]:flex-col
//               max-[640px]:items-start
//               max-[640px]:gap-[17px]
//             "
//           >

//             <a
//               className="
//                 min-h-[48px]
//                 px-[18px]
//                 inline-flex
//                 items-center
//                 justify-center
//                 gap-[9px]
//                 border
//                 border-transparent
//                 cursor-pointer
//                 transition-transform
//                 duration-200
//                 ease-in-out
//                 hover:-translate-y-[2px]
//                 bg-text
//                 text-bg
//               "
//               href="#projects"
//             >
//               View selected work

//               <FiArrowUpRight />
//             </a>


//             <a
//               className="
//                 text-[13px]
//                 text-muted
//                 border-b
//                 border-muted
//                 pb-[3px]
//               "
//               href="#contact"
//             >
//               Start a conversation
//             </a>

//           </div>


//           {/* Social */}

//           <div
//             className="
//               flex
//               gap-[22px]
//               mt-12

//               max-[640px]:mt-8
//             "
//           >

//             <a
//               href={profile.github}
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 text-[12px]
//                 text-muted
//                 hover:text-accent
//               "
//             >
//               <FiGithub />

//               GitHub
//             </a>


//             <a
//               href={profile.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 text-[12px]
//                 text-muted
//                 hover:text-accent
//               "
//             >
//               <FiLinkedin />

//               LinkedIn
//             </a>

//           </div>

//         </motion.div>


//         {/* RIGHT IMAGE */}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9 }}
//           className="
//             relative

//             max-[900px]:max-w-[560px]
//             max-[900px]:w-full
//           "
//         >

//           <div
//             className="
//               relative
//               aspect-[0.83]
//               bg-accent-soft
//               border
//               border-line
//               p-[22px]

//               max-[640px]:p-[12px]
//             "
//           >

//             <img
//               src="/img.jpeg"
//               className="
//                 w-full
//                 h-full
//                 block
//                 object-cover
//                 [filter:saturate(.82)]
//               "
//               alt={`${profile.name} portrait`}
//             />


//             <span
//               className="
//                 absolute
//                 bottom-[34px]
//                 left-[36px]
//                 py-2
//                 px-[11px]
//                 bg-bg
//                 text-text
//                 text-[10px]
//                 tracking-[0.13em]

//                 max-[640px]:left-[23px]
//                 max-[640px]:bottom-[23px]
//               "
//             >
//               MERN / REACT / NODE
//             </span>

//           </div>


//           {/* Location card */}

//           <div
//             className="
//               grid
//               grid-cols-[1fr_auto]
//               gap-x-[18px]
//               gap-y-1
//               absolute
//               -right-[28px]
//               bottom-7
//               py-4
//               px-[18px]
//               bg-paper
//               border
//               border-line
//               text-[11px]

//               max-[900px]:-right-[10px]
//               max-[640px]:right-0
//               max-[640px]:-bottom-[18px]
//             "
//           >

//             <span className="text-muted">
//               Based in
//             </span>

//             <strong
//               className="
//                 row-span-2
//                 self-center
//                 font-serif
//                 text-[23px]
//                 font-medium
//               "
//             >
//               India
//             </strong>

//             <span className="text-muted">
//               Open to opportunities
//             </span>

//           </div>

//         </motion.div>

//       </div>


//         <a
//         className="
//           absolute
//           bottom-[26px]
//           left-[max(24px,calc((100vw-1180px)/2))]
//           z-10
//           inline-flex
//           items-center
//           gap-2
//           text-muted
//           text-[10px]
//           tracking-[0.1em]
//           uppercase

//           max-[900px]:hidden
//         "
//         href="#about"
//       >
//         <FiArrowDown />

//         Scroll to explore
//       </a>

//     </section>
//   );
// }

