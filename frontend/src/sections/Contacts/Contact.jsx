import SectionHeading from "../../components/SectionHeading";
import ContactForm from "./ContactForm";
import { profile } from "../../data/profile";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiFileText, FiDownload } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[125px] bg-dark text-dark-text border-b border-dark-line max-[640px]:py-[85px]"
    >
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's make something worthwhile."
          dark
        >
          Have an opportunity, an idea or simply want to connect? Send a message
          and I'll get back to you.
        </SectionHeading>

        <div className="grid grid-cols-2 gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
          <div>
            <p className="max-w-[560px] m-0 font-serif text-[clamp(40px,5vw,65px)] leading-[1] tracking-[-0.04em] max-[640px]:text-[45px]">
              Good work starts with a good conversation.
            </p>

            <a
              className="mt-[45px] inline-flex items-center gap-[10px] pb-2 border-b border-dark-line text-[14px]"
              href={`mailto:${profile.email}`}
            >
              <FiMail /> {profile.email} <FiArrowUpRight className="text-accent" />
            </a>

            <div className="flex flex-wrap gap-6 mt-[35px]">
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
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] text-muted hover:text-accent"
              >
                <FiFileText /> View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Ayush-Gaur-Resume.pdf"
                className="inline-flex items-center gap-2 text-[12px] text-muted hover:text-accent"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
