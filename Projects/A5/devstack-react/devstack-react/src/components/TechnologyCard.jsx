function TechnologyCard({ technology, added, onAdd }) {
  return (
    <article className="group flex min-h-[315px] flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-100 bg-white">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-7 w-7 object-contain"
            loading="lazy"
          />
        </div>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-base font-extrabold tracking-tight text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-auto border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between gap-2 text-[10px] font-semibold text-slate-400">
          <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
            {technology.category}
          </span>
          <span>{technology.difficulty}</span>
          <span className="flex items-center gap-1 text-slate-600">
            <span className="text-amber-400">★</span>
            {technology.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={added}
          className={`mt-4 w-full rounded-md px-4 py-3 text-[11px] font-bold transition ${
            added
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {added ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;