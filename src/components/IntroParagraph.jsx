export function AboutSection() {
  return (
    <section className="text-left">
      <p className="section-label">About</p>
      <h2 className="section-title mb-5">Developer documentation at Wix</h2>
      <div className="space-y-4 text-sm leading-relaxed text-blue-gray-600 md:text-base">
        <p>
          I write API documentation and developer guides at Wix — building sample
          apps, validating behavior in live sites with Claude and MCP, and
          partnering with engineering on platform, app, and site-building APIs.
        </p>
        <p>
          My work sits at the intersection of full-stack development and
          developer experience: turning complex platform capabilities into docs
          and workflows external developers can actually use.
        </p>
        <p className="text-blue-gray-500">
          Jerusalem · Cleveland roots · B.Sc. Computer Science, JCT
        </p>
      </div>
    </section>
  );
}
