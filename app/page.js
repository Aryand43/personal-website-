import Header from "../components/Header";
import Section from "../components/Section";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <div className="mx-auto max-w-5xl px-6 pb-10 sm:px-8">
        <Header />

        <div className="grid gap-6 sm:gap-8">
          <Section title="Summary">
            <p className="text-pretty">
              For more information on my prior and ongoing work outlined below,
              feel free to reach out to{" "}
              <a href="mailto:aryan.dutt43@gmail.com">aryan.dutt43@gmail.com</a>{" "}
              or <a href="mailto:aryan020@e.ntu.edu.sg">aryan020@e.ntu.edu.sg</a>.
            </p>
          </Section>

          <Section title="Skills">
            <ul className="space-y-2">
              <li>
                <b className="font-semibold text-slate-100">Top Skills:</b>{" "}
                Tailwind CSS, JavaScript, React.js
              </li>
              <li>
                <b className="font-semibold text-slate-100">Languages:</b>{" "}
                English (Native or Bilingual), Spanish (Elementary), Hindi
                (Limited Working)
              </li>
            </ul>
          </Section>

          <Section title="Certifications">
            <ul className="space-y-2">
              <li>
                Analyze Apple's Stock and Financials with Bloomberg Terminal
              </li>
              <li>AI Essentials</li>
              <li>Machine Learning Specialization</li>
              <li>Foundations of Cybersecurity</li>
              <li>Neural Networks and Deep Learning</li>
            </ul>
          </Section>

          <Section title="Experience">
            <ul className="space-y-4">
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">SenticNet</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">
                  Undergraduate Researcher
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  January 2026 - Present (1 month) · Singapore
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Conducting neuro-symbolic AI research under Prof. Erik Cambria
                  (NTU CCDS / MIT Media Lab), focusing on symbol-grounded
                  conceptual representations for interpretable affective and
                  concept-level reasoning. Work includes designing hybrid
                  symbolic-neural pipelines for semantic normalization, concept
                  extraction, and graph-based reasoning within nextgeneration
                  SenticNet architectures.
                </p>
              </li>

              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">
                    MIT Computer Science and Artificial Intelligence Laboratory
                    (CSAIL)
                  </b>
                </div>
                <div className="mt-1 text-sm text-slate-200">
                  Undergraduate Researcher in the MIT Julia Lab
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  July 2025 - Present (7 months) · Cambridge, Massachusetts,
                  United States
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Researching neural Lyapunov methods for nonlinear stability
                  and region-ofattraction (RoA) estimation under Principal
                  Investigator Dr. Chris Rackauckas. Contributing to
                  NeuralLyapunov.jl, with a focus on RoA-aware optimization,
                  expressive Lyapunov parameterizations, and convergence-verified
                  training within the SciML ecosystem. Work involves analyzing
                  Lyapunov decrease conditions, Jacobian spectra, and
                  optimization dynamics to ensure stability guarantees under
                  learned controllers.
                </p>
              </li>

              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">
                    NTU College of Computing and Data Science (CCDS)
                  </b>
                </div>
                <div className="mt-1 text-sm text-slate-200">
                  Research Assistant
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  August 2025 - January 2026 (6 months) · Singapore
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Leading research on SymbolBurn, a full-stack jailbreak
                  framework targeting aligned neuro-symbolic LLMs. Under the
                  guidance of Prof. Anupam Chattopadhyay, I architected layered
                  attacks (e.g., contradiction injection, belief drift) and
                  designed BASIL, a real-time verifier using hypergraph
                  contradiction detection, entropy-based pruning, and
                  differentiable rerouting. Benchmarked against GPT-4o, Claude,
                  and DeepSeek with 80% recovery and &lt;10% latency overhead.
                  Submitting to ACL 2026.
                </p>
              </li>

              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">
                    Nanyang Technological University Singapore
                  </b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Research Intern</div>
                <div className="mt-1 text-xs text-slate-400">
                  January 2025 - July 2025 (7 months) · Singapore
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Worked under Prof. Paulo Bartolo and Dr. Shubham Chandra to
                  design a patent-pending thermal enhancement pipeline for metal
                  additive manufacturing. Developed a delta-T mapping framework
                  combining CLAHE, guided filtering, and quantized
                  super-resolution (QuickSRNetSmall) for realtime single-channel
                  thermal recovery. Engineered a perceptually-aligned LAB delta-E
                  to Celsius transform, integrated overlays for solidification
                  velocity, and deployed the full stack for closed-loop
                  diagnostics in powder bed fusion and directed energy
                  deposition systems.
                </p>
              </li>

              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">SEAQR</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Software Engineer</div>
                <div className="mt-1 text-xs text-slate-400">
                  March 2025 - May 2025 (3 months) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">Tagit</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Software Engineer</div>
                <div className="mt-1 text-xs text-slate-400">
                  January 2025 - March 2025 (3 months) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">ServBridge Incorporated Pte Ltd</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">AI Developer</div>
                <div className="mt-1 text-xs text-slate-400">
                  November 2024 - March 2025 (5 months) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">BioMetallica</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Software Engineer</div>
                <div className="mt-1 text-xs text-slate-400">
                  October 2024 - November 2024 (2 months) · Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">Ministry of Home Affairs Singapore</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">National Serviceman</div>
                <div className="mt-1 text-xs text-slate-400">
                  November 2022 - November 2024 (2 years 1 month) · Singapore,
                  Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">RevisionDojo (YC F24)</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Software Engineer</div>
                <div className="mt-1 text-xs text-slate-400">
                  August 2024 - October 2024 (3 months) · London Area, United
                  Kingdom
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">OkerLiving</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Software Engineer</div>
                <div className="mt-1 text-xs text-slate-400">
                  May 2024 - August 2024 (4 months) · Singapore, Singapore
                </div>
              </li>
              <li className="rounded-xl border border-white/5 bg-slate-950/20 p-6 transition-colors duration-200">
                <div className="font-medium text-slate-100">
                  <b className="font-semibold">Campus AI</b>
                </div>
                <div className="mt-1 text-sm text-slate-200">Software Engineer</div>
                <div className="mt-1 text-xs text-slate-400">
                  June 2023 - August 2023 (3 months) · Singapore, Singapore
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

          <Section title="Honors-Awards">
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

