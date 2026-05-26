const articles = [
  {
    title: "Handle Sandboxing in the Editor",
    topic: "Site Extensions",
    url: "https://dev.wix.com/docs/build-apps/develop-your-app/extensions/site-extensions/handle-sandboxing-in-the-editor",
  },
  {
    title: "Extend an Object with Custom Fields",
    topic: "Data Extension Schemas",
    url: "https://dev.wix.com/docs/develop-websites-sdk/code-your-site/extend-wix-business-solutions/data-extension-schemas/extend-an-object-with-custom-fields",
  },
  {
    title: "About Data Extension Schemas",
    topic: "Data Extension Schemas",
    url: "https://dev.wix.com/docs/develop-websites-sdk/code-your-site/extend-wix-business-solutions/data-extension-schemas/about-data-extension-schemas",
  },
  {
    title: "Migrate from Web Methods to HTTP Endpoints",
    topic: "Wix CLI",
    url: "https://dev.wix.com/docs/wix-cli/guides/development/http-endpoints/migrate-from-web-methods-to-http-endpoints",
  },
  {
    title: "About Wix Skills",
    topic: "AI Tools",
    url: "https://dev.wix.com/docs/api-reference/articles/ai-tools/about-wix-skills",
  },
  {
    title: "About Wix Skills for the CLI",
    topic: "Wix CLI",
    url: "https://dev.wix.com/docs/wix-cli/guides/development/about-wix-skills",
  },
];

function ExternalIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 opacity-40"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export function Writing() {
  return (
    <section>
      <p className="section-label">Documentation</p>
      <h2 className="section-title mb-3">Public documentation</h2>
      <p className="mb-8 max-w-2xl text-sm text-blue-gray-500">
        Technical articles on dev.wix.com — documentation optimized for both
        AI consumption and human readability.
      </p>
      <ul className="divide-y divide-blue-gray-100 border-y border-blue-gray-100">
        {articles.map((article) => (
          <li key={article.url}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-blue-gray-900"
            >
              <div className="min-w-0 text-left">
                <p className="text-sm font-medium text-blue-gray-800 group-hover:text-blue-gray-900">
                  {article.title}
                </p>
                <p className="mt-0.5 text-xs text-blue-gray-400">
                  {article.topic}
                </p>
              </div>
              <ExternalIcon />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
