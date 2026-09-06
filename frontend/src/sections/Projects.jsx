// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import SectionHeading from "../components/SectionHeading";
// import ProjectCard from "../components/ProjectCard";
// import { projects } from "../data/projects";

// export default function Projects() {
//   const carouselRef = useRef(null);
//   const [activeProject, setActiveProject] = useState(0);

//   const updateActiveProject = () => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const cards = Array.from(carousel.children);
//     const closestCard = cards.reduce(
//       (closest, card, index) =>
//         Math.abs(card.offsetLeft - carousel.scrollLeft) < closest.distance
//           ? { index, distance: Math.abs(card.offsetLeft - carousel.scrollLeft) }
//           : closest,
//       { index: 0, distance: Number.POSITIVE_INFINITY }
//     );

//     setActiveProject(closestCard.index);
//   };

//   const goToProject = (index) => {
//     carouselRef.current?.children[index]?.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "start",
//     });
//   };

//   return (
//     <section id="projects" className="py-[125px] border-b border-line bg-paper max-[640px]:py-[85px]">
//       <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
//         <SectionHeading
//           index="04"
//           eyebrow="Selected works"
//           title="A few things I've built."
//         >
//           A small selection of projects spanning real-time applications,
//           productivity tools and frontend experiments.
//         </SectionHeading>

//         <div
//           ref={carouselRef}
//           className="no-scrollbar flex gap-6 w-full overflow-x-auto pb-[14px] [scroll-behavior:smooth] [scroll-snap-type:x_mandatory] [overscroll-behavior-x:contain] max-[800px]:gap-5 max-[560px]:gap-4"
//           onScroll={updateActiveProject}
//           aria-label="Project carousel"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className="flex-[0_0_calc((100%-48px)/3)] min-w-0 [scroll-snap-align:start] [scroll-snap-stop:always] max-[800px]:flex-[0_0_calc((100%-20px)/2)] max-[560px]:flex-[0_0_100%]"
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//             >
//               <ProjectCard project={project} featured={project.featured} />
//             </motion.div>
//           ))}
//         </div>

//         <div
//           className="hidden max-[560px]:flex justify-center items-center gap-2 mt-5"
//           aria-label="Project navigation"
//         >
//           {projects.map((project, index) => (
//             <button
//               key={project.id}
//               type="button"
//               className={
//                 index === activeProject
//                   ? "w-[22px] h-[7px] p-0 border-0 rounded-full bg-accent cursor-pointer transition-[width,background,box-shadow] duration-[250ms] ease-in-out [box-shadow:0_0_10px_color-mix(in_srgb,var(--accent)_65%,transparent)]"
//                   : "w-[7px] h-[7px] p-0 border-0 rounded-full bg-line cursor-pointer transition-[width,background,box-shadow] duration-[250ms] ease-in-out"
//               }
//               onClick={() => goToProject(index)}
//               aria-label={`Go to project ${index + 1}`}
//               aria-current={index === activeProject ? "true" : undefined}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const carouselRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);

  // =========================================
  // CALCULATE TOTAL SLIDES
  // =========================================

  const calculateSlides = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = Array.from(carousel.children);

    if (!cards.length) return;

    const containerWidth = carousel.clientWidth;
    const cardWidth = cards[0].getBoundingClientRect().width;

    const styles = window.getComputedStyle(carousel);

    const gap =
      parseFloat(styles.columnGap) ||
      parseFloat(styles.gap) ||
      0;

    // How many cards can fit inside the carousel
    const visibleCards = Math.max(
      1,
      Math.floor(
        (containerWidth + gap) /
          (cardWidth + gap)
      )
    );

    // Number of possible starting positions
    const slides = Math.max(
      1,
      cards.length - visibleCards + 1
    );

    setTotalSlides(slides);

    // Keep active slide valid after resize
    setActiveSlide((current) =>
      Math.min(current, slides - 1)
    );
  };

  // =========================================
  // DETECT CURRENT SLIDE WHILE SCROLLING
  // =========================================

  const updateActiveSlide = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.children[0];

    if (!firstCard) return;

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const styles = window.getComputedStyle(carousel);

    const gap =
      parseFloat(styles.columnGap) ||
      parseFloat(styles.gap) ||
      0;

    // One complete movement of the carousel
    const slideWidth = cardWidth + gap;

    if (slideWidth <= 0) return;

    // Find which position we're currently at
    const currentSlide = Math.round(
      carousel.scrollLeft / slideWidth
    );

    // Don't allow the value to go beyond the dots
    const safeSlide = Math.max(
      0,
      Math.min(
        currentSlide,
        totalSlides - 1
      )
    );

    setActiveSlide(safeSlide);
  };

  // =========================================
  // GO TO SPECIFIC SLIDE
  // =========================================

  const goToSlide = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.children[index];

    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveSlide(index);
  };

  // =========================================
  // INITIAL CALCULATION + RESIZE
  // =========================================

  useEffect(() => {
    calculateSlides();

    const handleResize = () => {
      calculateSlides();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // Recalculate once projects are rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateSlides();
    }, 100);

    return () => clearTimeout(timer);
  }, [projects.length]);

  return (
    <section
      id="projects"
      className="
        py-[125px]
        border-b
        border-line
        bg-paper
        max-[640px]:py-[85px]
      "
    >
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <SectionHeading
          index="04"
          eyebrow="Selected works"
          title="A few things I've built."
        >
          A small selection of projects spanning real-time
          applications, productivity tools and frontend experiments.
        </SectionHeading>


        {/* =========================================
            PROJECT CAROUSEL
        ========================================= */}

        <div
          ref={carouselRef}
          onScroll={updateActiveSlide}
          className="
            no-scrollbar
            flex
            gap-6
            w-full
            overflow-x-auto
            pb-[14px]

            [scroll-behavior:smooth]
            [scroll-snap-type:x_mandatory]
            [overscroll-behavior-x:contain]

            max-[800px]:gap-5
            max-[560px]:gap-4
          "
          aria-label="Project carousel"
        >

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="
                flex-[0_0_calc((100%_-_48px)_/_3)]
                min-w-0

                [scroll-snap-align:start]
                [scroll-snap-stop:always]

                max-[800px]:flex-[0_0_calc((100%_-_20px)_/_2)]

                max-[560px]:flex-[0_0_100%]
              "
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <ProjectCard
                project={project}
                featured={project.featured}
              />
            </motion.div>
          ))}

        </div>


        {/* =========================================
            SLIDING DOT NAVIGATION
        ========================================= */}

        {totalSlides > 1 && (
          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              mt-6
            "
            aria-label="Project navigation"
          >

            {Array.from({
              length: totalSlides,
            }).map((_, index) => {

              const isActive =
                index === activeSlide;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    goToSlide(index)
                  }
                  aria-label={`Go to project slide ${
                    index + 1
                  }`}
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                  className={`
                    h-[7px]
                    p-0
                    border-0
                    rounded-full
                    cursor-pointer

                    transition-all
                    duration-[300ms]
                    ease-in-out

                    ${
                      isActive
                        ? `
                          w-[22px]
                          bg-accent
                          [box-shadow:0_0_10px_color-mix(in_srgb,var(--accent)_65%,transparent)]
                        `
                        : `
                          w-[7px]
                          bg-line
                          hover:bg-accent
                        `
                    }
                  `}
                />
              );
            })}

          </div>
        )}

      </div>
    </section>
  );
}