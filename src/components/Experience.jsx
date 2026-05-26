const roles = [
  {
    title: "API Technical Writer",
    company: "Wix",
    period: "Jul 2025 – Present",
    highlights: [
      "Built sample apps and tutorials that show developers how to adopt Wix APIs in realistic workflows.",
      "Validated API behavior in live apps and sites with Claude and MCP before publishing.",
      "Built internal tools and agent skills to automate documentation drafting and publishing workflows.",
      "Partnered with engineering on technical accuracy for platform, app, and site-building APIs.",
    ],
  },
];

export function Experience() {
  return (
    <section>
      <p className="section-label">Experience</p>
      <h2 className="section-title mb-8">Work</h2>
      <div className="space-y-4">
        {roles.map((role) => (
          <article key={role.company} className="card-minimal p-6 md:p-8">
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
        ))}
      </div>
    </section>
  );
}
