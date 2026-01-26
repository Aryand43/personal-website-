import Header from "../components/Header";
import Section from "../components/Section";

export default function Page() {
  return (
    <div className="container">
      <Header />

      <Section title="Summary" animationIndex={0}>
        <p>
          Data Science &amp; AI undergraduate at NTU and researcher at the MIT
          Julia Lab. For more information on my work, reach out at{" "}
          <a href="mailto:aryan.dutt43@gmail.com">aryan.dutt43@gmail.com</a> or{" "}
          <a href="mailto:aryan020@e.ntu.edu.sg">aryan020@e.ntu.edu.sg</a>.
        </p>
      </Section>

      <Section title="Skills" animationIndex={1}>
        <ul>
          <li>
            <b>Top Skills:</b> JavaScript, React.js, TypeScript
          </li>
          <li>
            <b>Languages:</b> English (Native/Bilingual), Spanish (Elementary),
            Hindi (Limited Working)
          </li>
        </ul>
      </Section>

      <Section title="Certifications" animationIndex={2}>
        <ul>
          <li>Analyze Apple’s Stock and Financials with Bloomberg Terminal</li>
          <li>AI Essentials</li>
          <li>Machine Learning Specialization</li>
          <li>Foundations of Cybersecurity</li>
          <li>Neural Networks and Deep Learning</li>
        </ul>
      </Section>

      <Section title="Experience" animationIndex={3}>
        <ul>
          <li>
            <b>SenticNet</b> — Undergraduate Researcher (Jan 2026 – Present) ·
            Singapore
            <br />
            Neuro-symbolic AI research on symbol-grounded conceptual
            representations; hybrid symbolic-neural pipelines for semantic
            normalization, concept extraction, and graph-based reasoning.
          </li>
          <li>
            <b>MIT CSAIL (MIT Julia Lab)</b> — Undergraduate Researcher (Jul 2025
            – Present) · Cambridge, MA
            <br />
            Neural Lyapunov methods for nonlinear stability and region-of-
            -attraction estimation; contributions to NeuralLyapunov.jl
            (RoA-aware optimization, expressive parameterizations,
            convergence-verified training).
          </li>
          <li>
            <b>NTU College of Computing and Data Science (CCDS)</b> — Research
            Assistant (Aug 2025 – Jan 2026) · Singapore
            <br />
            Led SymbolBurn jailbreak framework; designed BASIL verifier
            (hypergraph contradiction detection, entropy pruning, differentiable
            rerouting). Submitting to ACL 2026.
          </li>
          <li>
            <b>Nanyang Technological University</b> — Research Intern (Jan 2025 –
            Jul 2025) · Singapore
            <br />
            Thermal enhancement pipeline for metal additive manufacturing;
            delta-T mapping with CLAHE/guided filtering/quantized SR; deployed
            for closed-loop diagnostics.
          </li>
          <li>
            <b>SEAQR</b> — Software Engineer (Mar 2025 – May 2025) · Singapore
          </li>
          <li>
            <b>Tagit</b> — Software Engineer (Jan 2025 – Mar 2025) · Singapore
          </li>
          <li>
            <b>ServBridge Incorporated Pte Ltd</b> — AI Developer (Nov 2024 – Mar
            2025) · Singapore
          </li>
          <li>
            <b>BioMetallica</b> — Software Engineer (Oct 2024 – Nov 2024)
          </li>
          <li>
            <b>Ministry of Home Affairs Singapore</b> — National Serviceman (Nov
            2022 – Nov 2024) · Singapore
          </li>
          <li>
            <b>RevisionDojo (YC F24)</b> — Software Engineer (Aug 2024 – Oct
            2024) · London Area, UK
          </li>
          <li>
            <b>OkerLiving</b> — Software Engineer (May 2024 – Aug 2024) ·
            Singapore
          </li>
          <li>
            <b>Campus AI</b> — Software Engineer (Jun 2023 – Aug 2023)
          </li>
        </ul>
      </Section>

      <Section title="Education" animationIndex={4}>
        <ul>
          <li>
            <b>Nanyang Technological University Singapore</b> — Bachelor of
            Computing (Hons), Data Science &amp; Artificial Intelligence (Minor:
            Mathematics) (2025 – 2028)
          </li>
          <li>
            <b>International Baccalaureate</b> — IB Diploma (Aug 2020 – May 2022)
          </li>
        </ul>
      </Section>

      <Section title="Honors &amp; Awards" animationIndex={5}>
        <ul>
          <li>Extended Essay Exhibition</li>
          <li>Certificate of Recognition</li>
          <li>Academic Merit Certificate</li>
        </ul>
      </Section>
    </div>
  );
}

