export default function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 shadow-2xl backdrop-blur-sm transition-colors duration-200">
      <h3 className="text-sm font-semibold tracking-widest text-slate-100">
        {title}
      </h3>
      <div className="mt-4 text-sm leading-7 text-slate-200 sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

