export default function SectionHeading({ index, eyebrow, title, children, dark = false }) {
  return (
    <div className="grid grid-cols-[70px_minmax(0,780px)] gap-7 items-start mb-[70px] max-[640px]:grid-cols-1 max-[640px]:gap-[5px] max-[640px]:mb-[45px]">
      <div className="pt-[7px] text-accent text-[11px] tracking-[0.12em]">{index}</div>
      <div>
        <p className="mb-[18px] text-[11px] tracking-[0.18em] uppercase text-accent font-bold">
          {eyebrow}
        </p>
        <h2 className="m-0 font-serif text-[clamp(40px,5vw,67px)] leading-[0.98] font-medium tracking-[-0.04em] max-[640px]:text-[42px]">
          {title}
        </h2>
        {children && (
          <p className={`max-w-[650px] mt-[22px] leading-[1.8] ${dark ? "text-dark-muted" : "text-muted"}`}>
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
