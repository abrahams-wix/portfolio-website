const webStack = [
  { name: "React", logoUrl: "/images/logos/react.svg" },
  { name: "TypeScript", logoUrl: "/images/logos/javaScript.svg" },
  { name: "Node.js", logoUrl: "/images/logos/node.svg" },
  { name: "Express", logoUrl: "/images/logos/node.svg" },
  { name: "HTML & CSS", logoUrl: "/images/logos/html.svg" },
];

const dataStack = [
  { name: "Python", logoUrl: "/images/logos/python.svg" },
  { name: "SQL", logoUrl: "/images/logos/sql.svg" },
  { name: "PostgreSQL", logoUrl: "/images/logos/postgres.svg" },
];

const aiTools = [
  { name: "Claude Code", description: "API validation & doc drafting" },
  { name: "Cursor", description: "AI-assisted development" },
  { name: "Agent Skills", description: "CLI & REST agent workflows" },
  { name: "MCP", description: "Model Context Protocol" },
];

const tools = [
  { name: "Git", logoUrl: "/images/logos/git.svg" },
  { name: "Unix / Linux", logoUrl: "/images/logos/Linux.svg" },
  { name: "macOS", logoUrl: "/images/logos/macOS.svg" },
];

const categories = [
  { title: "Web", items: webStack },
  { title: "Data", items: dataStack },
  { title: "AI & Dev Tools", items: aiTools },
  { title: "Tools", items: tools },
];

function SkillItem({ name, logoUrl, description }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      {logoUrl ? (
        <img src={logoUrl} alt="" className="h-5 w-5 shrink-0 opacity-70" />
      ) : (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-gray-100 text-[10px] font-medium text-blue-gray-500">
          {name.charAt(0)}
        </span>
      )}
      <div className="min-w-0 text-left">
        <p className="text-sm text-blue-gray-800">{name}</p>
        {description && (
          <p className="text-xs text-blue-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="card-minimal p-5">
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-blue-gray-400">
        {title}
      </h3>
      <div className="divide-y divide-blue-gray-100">
        {items.map((item) => (
          <SkillItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export function SkillsCards() {
  return (
    <section>
      <p className="section-label text-center">Skills</p>
      <h2 className="section-title mb-10 text-center">Stack</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <SkillCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
