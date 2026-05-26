const contactLinks = [
  {
    href: "tel:+972586272403",
    icon: "/images/phone.svg",
    label: "+972 058-627-2403",
  },
  {
    href: "mailto:soclofa@gmail.com",
    icon: "/images/email.svg",
    label: "soclofa@gmail.com",
  },
];

const socialLinks = [
  {
    href: "https://github.com/abrahams-wix",
    icon: "/images/github.svg",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/avi-soclof/",
    icon: "/images/linkedin.svg",
    label: "LinkedIn",
  },
];

function LinkItem({ href, icon, label, external }) {
  return (
    <a
      href={href}
      className="link-subtle inline-flex items-center gap-2 text-sm"
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <img src={icon} alt="" className="h-4 w-4 opacity-50" />
      <span>{label}</span>
    </a>
  );
}

export const Links = () => {
  return (
    <section className="border-t border-blue-gray-200/80 pt-6">
      <p className="section-label">Contact</p>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {contactLinks.map((link) => (
          <LinkItem key={link.label} {...link} />
        ))}
        {socialLinks.map((link) => (
          <LinkItem key={link.label} {...link} external />
        ))}
      </div>
    </section>
  );
};
