import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`group ${featured ? "" : ""}`}>
      <div className="relative aspect-[1.55] overflow-hidden bg-accent-soft border border-line">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full block object-cover [filter:saturate(.82)] transition-[transform,filter] duration-[450ms] ease-in-out group-hover:scale-[1.035] group-hover:[filter:saturate(1)]"
        />
        <span className="absolute top-[9px] left-[9px] px-[7px] py-[5px] bg-bg text-text text-[9px]">
          {project.number}
        </span>
      </div>

      <div className="flex justify-between gap-3 pt-[13px]">
        <div>
          <p className="m-0 mb-1 text-muted text-[9px] tracking-[0.12em]">{project.year}</p>
          <h3 className="m-0 font-serif text-[23px] font-medium">{project.title}</h3>
        </div>

        <div className="flex gap-[6px]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub`}
            className="w-[30px] h-[30px] border border-line grid place-items-center text-muted"
          >
            <FiGithub />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="w-[30px] h-[30px] border border-line grid place-items-center text-muted"
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>

      <p className="max-w-full text-muted leading-[1.6] text-[12px] my-[10px]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-[5px]">
        {project.tech.map((tech) => (
          <span key={tech} className="border border-line px-[7px] py-[5px] text-muted text-[9px]">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
