import Header from "../components/Header";
import Section from "../components/Section";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <div className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 sm:pb-24">
        <Header />

        <div className="grid gap-6 sm:gap-7">
          <Section title="Summary">
            <p className="text-pretty">
              Data Science &amp; AI undergraduate at NTU and researcher at the
              MIT Julia Lab. For more information on my work, reach out at{" "}
              <a href="mailto:aryan.dutt43@gmail.com">aryan.dutt43@gmail.com</a>{" "}
              or <a href="mailto:aryan020@e.ntu.edu.sg">aryan020@e.ntu.edu.sg</a>.
            </p>
          </Section>

          <Section title="Skills">
            <ul className="space-y-2">
              <li>
                <b className="font-semibold text-slate-100">Top Skills:</b>{" "}
                JavaScript, React.js, TypeScript
              </li>
              <li>
                <b className="font-semibold text-slate-100">Languages:</b>{" "}
                English (Native/Bilingual), Spanish (Elementary), Hindi (Limited
                Working)
              </li>
            </ul>
          </Section>

          <Section title="Certifications">
            <ul className="space-y-2">
              <li>Analyze Apple’s Stock and Financials with Bloomberg Terminal</li>
              <li>AI Essentials</li>
              <li>Machine Learning Specialization</li>
              <li>Foundations of Cybersecurity</li>
              <li>Neural Networks and Deep Learning</li>
            </ul>
          </Section>

          <Section title="Experience">
            <ul className="space-y-3">
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="mt-1 font-medium text-slate-100">
                  <b className="font-semibold">SenticNet</b> — Undergraduate
                  Researcher (Jan 2026 – Present) · Singapore
                </div>
                <div className="mt-2 text-slate-200">
                  Neuro-symbolic AI research on symbol-grounded conceptual
                  representations; hybrid symbolic-neural pipelines for semantic
                  normalization, concept extraction, and graph-based reasoning.
                </div>
              </li>

              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="mt-1 font-medium text-slate-100">
                  <b className="font-semibold">MIT CSAIL (MIT Julia Lab)</b> —
                  Undergraduate Researcher (Jul 2025 – Present) · Cambridge, MA
                </div>
                <div className="mt-2 text-slate-200">
                  Neural Lyapunov methods for nonlinear stability and
                  region-of-attraction estimation; contributions to
                  NeuralLyapunov.jl (RoA-aware optimization, expressive
                  parameterizations, convergence-verified training).
                </div>
              </li>

              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="mt-1 font-medium text-slate-100">
                  <b className="font-semibold">
                    NTU College of Computing and Data Science (CCDS)
                  </b>{" "}
                  — Research Assistant (Aug 2025 – Jan 2026) · Singapore
                </div>
                <div className="mt-2 text-slate-200">
                  Led SymbolBurn jailbreak framework; designed BASIL verifier
                  (hypergraph contradiction detection, entropy pruning,
                  differentiable rerouting). Submitting to ACL 2026.
                </div>
              </li>

              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="mt-1 font-medium text-slate-100">
                  <b className="font-semibold">Nanyang Technological University</b>{" "}
                  — Research Intern (Jan 2025 – Jul 2025) · Singapore
                </div>
                <div className="mt-2 text-slate-200">
                  Thermal enhancement pipeline for metal additive manufacturing;
                  delta-T mapping with CLAHE/guided filtering/quantized SR;
                  deployed for closed-loop diagnostics.
                </div>
              </li>

              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">SEAQR</b> — Software Engineer (Mar
                  2025 – May 2025) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">Tagit</b> — Software Engineer (Jan
                  2025 – Mar 2025) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">ServBridge Incorporated Pte Ltd</b>{" "}
                  — AI Developer (Nov 2024 – Mar 2025) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">BioMetallica</b> — Software
                  Engineer (Oct 2024 – Nov 2024)
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">Ministry of Home Affairs Singapore</b>{" "}
                  — National Serviceman (Nov 2022 – Nov 2024) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">RevisionDojo (YC F24)</b> — Software
                  Engineer (Aug 2024 – Oct 2024) · London Area, UK
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">OkerLiving</b> — Software Engineer
                  (May 2024 – Aug 2024) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-200 sm:p-5">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">Campus AI</b> — Software Engineer
                  (Jun 2023 – Aug 2023)
                </div>
              </li>
            </ul>
          </Section>

          <Section title="Education">
            <ul className="space-y-2">
              <li>
                <b className="font-semibold text-slate-100">
                  Nanyang Technological University Singapore
                </b>{" "}
                — Bachelor of Computing (Hons), Data Science &amp; Artificial
                Intelligence (Minor: Mathematics) (2025 – 2028)
              </li>
              <li>
                <b className="font-semibold text-slate-100">
                  International Baccalaureate
                </b>{" "}
                — IB Diploma (Aug 2020 – May 2022)
              </li>
            </ul>
          </Section>

          <Section title="Honors &amp; Awards">
            <ul className="space-y-2">
              <li>Extended Essay Exhibition</li>
              <li>Certificate of Recognition</li>
              <li>Academic Merit Certificate</li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}

