export default function Header() {
  return (
    <header className="py-10 sm:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-[0.22em] text-slate-50 sm:text-6xl">
          ARYΛN DUTT
        </h1>
        <p className="mt-4 font-mono text-sm text-slate-300 sm:text-base">
          Data Science &amp; AI @ NTU | Researcher @ MIT Julia Lab
        </p>
        <p className="mt-3 text-xs text-slate-400 sm:text-sm">
          Singapore | Email:{" "}
          <a href="mailto:aryan.dutt43@gmail.com">aryan.dutt43@gmail.com</a> |
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/aryan-dutt-" target="_blank">
            aryan-dutt-
          </a>{" "}
          | GitHub:{" "}
          <a href="https://github.com/Aryand43" target="_blank">
            Aryand43
          </a>
        </p>
      </div>
      <div className="mx-auto mt-10 h-px max-w-4xl bg-white/5" />
    </header>
  );
}
