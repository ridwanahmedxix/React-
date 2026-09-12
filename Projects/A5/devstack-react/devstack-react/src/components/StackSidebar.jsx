function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-extrabold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-[10px] font-medium text-slate-400">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
        <span className="grid h-7 min-w-7 place-items-center rounded-full bg-slate-50 px-2 text-[10px] font-bold text-slate-500">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
          <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-slate-50 text-slate-300">
            +
          </div>
          <p className="mt-3 text-xs font-semibold text-slate-500">
            Your stack is empty
          </p>
          <p className="mt-1 text-[10px] leading-5 text-slate-400">
            Add technologies from the cards to start building your stack.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-2.5"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-50">
                <img
                  src={technology.icon}
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-slate-800">
                  {technology.name}
                </p>
                <p className="mt-0.5 text-[9px] font-medium text-slate-400">
                  {technology.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-300 transition hover:bg-red-50 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onRemoveAll}
        className="mt-5 w-full rounded-md border border-red-200 bg-white px-4 py-2.5 text-[11px] font-bold text-red-500 transition hover:bg-red-50"
      >
        Remove All
      </button>
    </aside>
  );
}

export default StackSidebar;