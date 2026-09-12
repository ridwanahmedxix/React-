function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="container-page grid min-h-[520px] items-center gap-10 py-16 md:grid-cols-[1.1fr_.9fr] md:py-20 lg:min-h-[590px] lg:py-24">
        <div>
          <h1 className="max-w-[680px] text-4xl font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[58px]">
            Build Your Ideal
            <span className="block gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-[580px] text-sm leading-6 text-slate-500 sm:text-base">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-brand px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-7 py-3 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-pink-100 via-violet-100 to-cyan-100 blur-3xl" />
          <img
            src="/hero-stack.svg"
            alt="Layered development technology stack illustration"
            className="relative w-full drop-shadow-[0_20px_30px_rgba(79,70,229,0.12)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;