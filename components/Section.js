export default function Section({ title, children, animationIndex = 0 }) {
  return (
    <div
      className="section"
      style={{ animationDelay: `${0.2 * animationIndex}s` }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

