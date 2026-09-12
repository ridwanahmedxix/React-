function Footer() {
  const groups = [
    {
      title: "Product",
      links: ["Home", "Technologies", "Projects"],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Careers"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand text-[10px] font-extrabold text-white">
                DS
              </span>
              <span className="text-base font-extrabold tracking-tight">
                Dev <span className="gradient-text">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex gap-5 text-[10px] font-bold text-slate-500">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">GitHub</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">Twitter</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">LinkedIn</a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-[10px] font-medium text-slate-400 transition hover:text-slate-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-5 text-[10px] font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#home" className="hover:text-slate-800">Privacy</a>
            <a href="#home" className="hover:text-slate-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;