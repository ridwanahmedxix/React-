import { useState } from "react";

function Brand() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2" aria-label="Dev Stack home">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand text-[10px] font-extrabold text-white shadow-sm">
        DS
      </span>
      <span className="text-base font-extrabold tracking-tight">
        Dev <span className="gradient-text">Stack</span>
      </span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Technologies", "#technologies"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-page">
        <div className="hidden h-[72px] items-center lg:flex">
          <Brand />

          <nav className="mx-auto flex items-center gap-7" aria-label="Main navigation">
            {links.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`text-[12px] font-semibold transition ${
                  index === 0
                    ? "text-pink-600"
                    : "text-slate-500 hover:text-slate-950"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button className="text-[12px] font-semibold text-slate-600 transition hover:text-slate-950">
              Sign In
            </button>
            <button className="rounded-full bg-gradient-brand px-5 py-2.5 text-[12px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Sign Up
            </button>
          </div>
        </div>

        <div className="grid h-[64px] grid-cols-3 items-center lg:hidden">
          <button
            onClick={() => setOpen((value) => !value)}
            className="flex w-fit items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-50"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <div className="justify-self-center">
            <Brand />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button className="hidden text-[11px] font-semibold text-slate-600 sm:block">
              Sign In
            </button>
            <button className="rounded-full bg-gradient-brand px-3.5 py-2 text-[10px] font-bold text-white sm:px-4 sm:text-[11px]">
              Sign Up
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-slate-100 py-3 lg:hidden" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              >
                {label}
              </a>
            ))}
            <button className="mt-2 block w-full rounded-lg border border-slate-200 px-3 py-2.5 text-left text-sm font-semibold text-slate-600 sm:hidden">
              Sign In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;