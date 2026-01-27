export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-widest text-slate-50 sm:text-6xl">
          ARYΛN DUTT
        </h1>
        <p className="mt-4 font-mono text-sm text-slate-300">
          Data Science &amp; AI @ NTU | Researcher @ MIT JuliaLab
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Singapore | Email:{" "}
          <a href="mailto:aryan102004@gmail.com">aryan102004@gmail.com</a> |
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
