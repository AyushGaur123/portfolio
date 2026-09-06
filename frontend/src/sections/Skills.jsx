// import SectionHeading from "../components/SectionHeading";
// import { skills } from "../data/portfolioData";

// export default function Skills() {
//   return (
//     <section id="skills" className="py-[125px] border-b border-line max-[640px]:py-[85px]">
//       <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
//         <SectionHeading
//           index="03"
//           eyebrow="Toolkit"
//           title="Technologies I use to turn ideas into products."
//         />

//         <div className="border-t border-line">
//           {Object.entries(skills).map(([group, items], index) => (
//             <div
//               className="grid grid-cols-[70px_180px_1fr] items-center gap-5 min-h-[110px] border-b border-line max-[640px]:grid-cols-[35px_1fr] max-[640px]:gap-[10px] max-[640px]:py-[22px] max-[640px]:min-h-0"
//               key={group}
//             >
//               <span className="text-muted text-[11px]">0{index + 1}</span>
//               <h3 className="m-0 font-serif text-[27px] font-medium capitalize">{group}</h3>
//               <div className="flex flex-wrap gap-2 max-[640px]:col-start-2">
//                 {items.map((item) => (
//                   <span
//                     key={item}
//                     className="border border-line py-[7px] px-[10px] text-muted text-[11px]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/portfolioData";
import { toolBadges } from "../data/skillIcons";

// split an array into two balanced columns, filled top-to-bottom
function splitColumns(items) {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

function SkillPairList({ items }) {
  const [left, right] = splitColumns(items);

  return (
    <div className="flex gap-6">
      <div className="flex-1 flex flex-col gap-3">
        {left.map((item) => (
          <span key={item} className="text-muted text-[13px]">
            {item}
          </span>
        ))}
      </div>
      <div className="w-px bg-line shrink-0" />
      <div className="flex-1 flex flex-col gap-3">
        {right.map((item) => (
          <span key={item} className="text-muted text-[13px]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const textGroups = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-[125px] border-b border-line max-[640px]:py-[85px]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <SectionHeading
          index="03"
          eyebrow="Toolkit"
          title="Technologies I use to turn ideas into products."
        />

        <p className="italic text-accent text-[15px] max-w-[560px] mb-14">
          "Comfortable across the stack — from the pixels users see to the endpoints that serve them."
        </p>

        <div className=" border border-line bg-paper p-10 max-[640px]:p-6 ">
          <div className="grid grid-cols-2 gap-x-16 gap-y-14 max-[800px]:grid-cols-1 max-[800px]:gap-y-10">
            {textGroups.map(({ key, label }, index) => (
              <div key={key}>
                <h3 className="flex items-center gap-3 m-0 mb-6 font-serif text-[22px] font-medium">
                  <span className="text-accent text-[12px] font-sans font-normal">
                    0{index + 1}
                  </span>
                  {label}
                </h3>
                <SkillPairList items={skills[key]} />
              </div>
            ))}

            <div>
              <h3 className="flex items-center gap-3 m-0 mb-6 font-serif text-[22px] font-medium">
                <span className="text-accent text-[12px] font-sans font-normal">04</span>
                Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool) => {
                  const badge = toolBadges[tool];
                  const Icon = badge?.icon;

                  return (
                    <div
                      key={tool}
                      className="flex flex-col items-center gap-2 w-[68px]"
                      title={tool}
                    >
                      <div
                        className="w-[46px] h-[46px] rounded-[14px] grid place-items-center shadow-sm"
                        style={{ backgroundColor: badge?.bg ?? "var(--accent)" }}
                      >
                        {Icon && <Icon size={22} style={{ color: badge?.fg ?? "#fff" }} />}
                      </div>
                      <span className="text-muted text-[10px] text-center leading-tight">
                        {tool}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
