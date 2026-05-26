export function Education() {
  return (
    <section>
      <p className="section-label">Education</p>
      <h2 className="section-title mb-6">Education</h2>
      <article className="card-minimal p-6 md:p-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-base font-medium text-blue-gray-900">
              BSc, Computer Science
            </h3>
            <p className="mt-0.5 text-sm text-blue-gray-500">
              Machon Lev, Jerusalem College of Technology
            </p>
          </div>
          <span className="text-sm text-blue-gray-400">
            Expected graduation June 2026
          </span>
        </div>
      </article>
    </section>
  );
}
