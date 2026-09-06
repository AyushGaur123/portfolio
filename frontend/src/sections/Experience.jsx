import SectionHeading from "../components/SectionHeading";
import { education, experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-[125px] border-b border-line max-[640px]:py-[85px]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <SectionHeading index="05" eyebrow="Experience" title="Where I'm learning and growing." />

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
          <div>
            <p className="mb-[18px] text-[11px] tracking-[0.18em] uppercase text-accent font-bold">
              Experience
            </p>
            {experience.map((item) => (
              <article
                className="border-t border-line pt-6 pb-[30px]"
                key={`${item.title}-${item.company}`}
              >
                <div className="flex justify-between text-muted text-[11px] uppercase tracking-[0.08em] max-[640px]:flex-col max-[640px]:gap-[10px]">
                  <span>{item.duration}</span>
                  <span>{item.company}</span>
                </div>
                <h3 className="mt-[17px] mb-[10px] font-serif text-[29px] font-medium">
                  {item.title}
                </h3>
                <p className="max-w-[650px] text-muted leading-[1.75] m-0">{item.description}</p>
              </article>
            ))}
          </div>

          <div>
            <p className="mb-[18px] text-[11px] tracking-[0.18em] uppercase text-accent font-bold">
              Education
            </p>
            {education.map((item) => (
              <article className="border border-line p-7 bg-paper" key={item.degree}>
                <span className="text-muted text-[13px]">{item.year}</span>
                <h3 className="mt-[17px] mb-[10px] font-serif text-[29px] font-medium">
                  {item.degree}
                </h3>
                <p className="text-muted text-[13px] my-[7px]">{item.branch}</p>
                <p className="text-muted text-[13px] my-[7px]">{item.college}</p>
                <strong className="inline-block mt-[18px] text-accent">SGPA {item.sgpa}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
