export function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-title">
      <span>{number}</span>
      <h2>{children}</h2>
      <div className="title-arrow" />
    </div>
  );
}
