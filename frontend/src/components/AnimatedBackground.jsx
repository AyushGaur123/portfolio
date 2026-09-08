
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        z-0
        overflow-hidden
        pointer-events-none
      "
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >


        <g
          stroke="var(--line)"
          strokeWidth="1.4"
          opacity="0.55"
        >

          <path
            d="
              M1280 -80
              L1435 -80
              L1512 54
              L1435 188
              L1280 188
              L1203 54
              Z
            "
            fill="var(--accent-soft)"
            opacity="0.55"
          />

          <path
            d="
              M1095 95
              L1250 95
              L1327 229
              L1250 363
              L1095 363
              L1018 229
              Z
            "
          />

          <path
            d="
              M1435 188
              L1590 188
              L1667 322
              L1590 456
              L1435 456
              L1358 322
              Z
            "
            fill="var(--accent)"
            opacity="0.08"
          />

          <path
            d="
              M1250 363
              L1405 363
              L1482 497
              L1405 631
              L1250 631
              L1173 497
              Z
            "
          />

        </g>


       

        <g
          stroke="var(--line)"
          strokeWidth="1.1"
          opacity="0.45"
        >

          <path d="M1203 54 L1110 -35" />
          <path d="M1435 54 L1515 -30" />

          <path d="M1018 229 L930 285" />
          <path d="M1327 229 L1415 165" />

          <path d="M1173 497 L1075 550" />
          <path d="M1482 497 L1585 550" />

          <path d="M1405 631 L1480 700" />

        </g>



        <g
          stroke="var(--line)"
          strokeWidth="1.1"
          opacity="0.25"
        >

          <path d="M-50 110 L110 20 L250 100 L390 20" />

          <path d="M-20 180 L120 100 L260 180 L400 100" />

          <path d="M110 20 L110 -50" />

          <path d="M250 100 L250 10" />

          <path d="M390 20 L465 85" />

          <path d="M400 100 L475 155" />

          <path d="M475 155 L425 245" />

        </g>




        <g
          stroke="var(--line)"
          strokeWidth="1.4"
          opacity="0.55"
        >

          <path
            d="
              M-105 650
              L55 650
              L135 789
              L55 928
              L-105 928
              L-185 789
              Z
            "
            fill="var(--accent-soft)"
            opacity="0.55"
          />

          <path
            d="
              M55 928
              L215 928
              L295 1067
              L215 1206
              L55 1206
              L-25 1067
              Z
            "
            fill="var(--accent)"
            opacity="0.08"
          />

          <path
            d="
              M135 789
              L295 789
              L375 928
              L295 1067
              L135 1067
              L55 928
              Z
            "
          />

        </g>

        <g
          stroke="var(--line)"
          strokeWidth="1.1"
          opacity="0.4"
        >

          <path d="M55 650 L-25 570" />

          <path d="M135 789 L225 720" />

          <path d="M295 789 L375 720" />

          <path d="M375 928 L465 990" />

          <path d="M-185 789 L-270 720" />

        </g>


    

        <g
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.15"
        >

          <path
            d="
              M535 125
              L605 85
              L675 125
              L675 205
              L605 245
              L535 205
              Z
            "
          />

          <path
            d="
              M770 650
              L835 612
              L900 650
              L900 725
              L835 763
              L770 725
              Z
            "
          />

          <path
            d="
              M420 390
              L475 358
              L530 390
              L530 454
              L475 486
              L420 454
              Z
            "
          />

          <path
            d="
              M1000 560
              L1055 528
              L1110 560
              L1110 624
              L1055 656
              L1000 624
              Z
            "
          />

        </g>


     
        <g
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.12"
        >

          <path d="M480 230 L600 315 L710 255 L825 340" />

          <path d="M825 340 L945 270" />

          <path d="M320 320 L405 265 L500 325" />

          <path d="M700 500 L790 435 L880 500" />

          <path d="M950 760 L1050 685 L1160 760" />

          <path d="M1160 760 L1250 700" />

          <path d="M370 600 L455 540 L540 600" />

        </g>


        <motion.path
          d="
            M1460 735
            L1535 692
            L1610 735
            L1610 821
            L1535 864
            L1460 821
            Z
          "
          fill="var(--accent)"
          animate={{
            opacity: [0.04, 0.12, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        <motion.path
          d="
            M610 710
            L675 673
            L740 710
            L740 784
            L675 821
            L610 784
            Z
          "
          fill="var(--accent)"
          animate={{
            opacity: [0.03, 0.09, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />



        <motion.path
          d="
            M250 500
            L500 350
            L760 470
            L1030 320
            L1320 470
          "
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.30"
          strokeDasharray="6 12"
          animate={{
            strokeDashoffset: [0, -180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        <g
          fill="var(--accent)"
          opacity="0.20"
        >
          <circle cx="430" cy="170" r="3" />
          <circle cx="690" cy="300" r="2.5" />
          <circle cx="950" cy="180" r="3" />
          <circle cx="1120" cy="690" r="2.5" />
          <circle cx="520" cy="560" r="2.5" />
          <circle cx="890" cy="790" r="3" />
        </g>

      </svg>
    </div>
  );
}



