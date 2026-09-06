import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { stats } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-[125px] border-b border-line bg-paper max-[640px]:py-[85px]"
    >
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <SectionHeading index="02" eyebrow="About" title="A developer who cares about the details.">
          I enjoy turning ideas into clean interfaces and reliable full-stack products.
          My focus is on readable code, thoughtful UX and solving real-world problems.
        </SectionHeading>

        <div className="grid grid-cols-[1.05fr_0.95fr] gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[650px] text-[18px] leading-[1.9] max-[640px]:text-[16px] [&>p+p]:mt-6"
          >
            <p>
              I'm Ayush Gaur, a Computer Science student and Full Stack MERN
              Developer. I like working across the stack — from designing a
              responsive React interface to building APIs, authentication and
              database logic behind it.
            </p>
            <p>
              I'm continuously learning, experimenting with new technologies
              and looking for opportunities where I can build something useful
              while growing as an engineer.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 border-t border-l border-line">
            {stats.map((stat) => (
              <div
                className="min-h-[150px] p-[25px] border-r border-b border-line flex flex-col justify-between max-[640px]:min-h-[125px] max-[640px]:p-[17px]"
                key={stat.label}
              >
                <strong className="font-serif text-[43px] font-medium max-[640px]:text-[34px]">
                  {stat.value}
                </strong>
                <span className="text-muted text-[12px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
