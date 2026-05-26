const role = {
  title: "API Technical Writer",
  company: "Wix",
  period: "Jul 2025 – Present",
  highlights: [
    "Drove AI native development by building and testing Wix features using tools like Claude and Cursor, including custom MCPs and agent skills.",
    "Focused on API usability by building and testing sample apps and tutorials that showcase realistic developer workflows.",
    "Built internal full stack tools to streamline documentation, notably automating changelog processes and platform wide notices to improve team efficiency.",
    "Wrote developer documentation optimized for both AI consumption and human readability, ensuring clarity and usability for Wix's app and site building APIs.",
  ],
};

export function Experience() {
  return (
    <section>
      <p className="section-label">Experience</p>
      <h2 className="section-title mb-8">Job experience</h2>
      <article className="card-minimal p-6 md:p-8">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-base font-medium text-blue-gray-900">
              {role.title}
            </h3>
            <p className="mt-0.5 text-sm text-blue-gray-500">{role.company}</p>
          </div>
          <span className="text-sm text-blue-gray-400">{role.period}</span>
        </div>
        <ul className="space-y-2 pl-4 text-sm leading-relaxed text-blue-gray-600">
          {role.highlights.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
