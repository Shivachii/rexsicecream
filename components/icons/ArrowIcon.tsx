type Direction = "up" | "down" | "north-east" | "south-east" | "south-west";

const rotations: Record<Direction, number> = {
  "north-east": 0,
  up: -45,
  down: 135,
  "south-east": 90,
  "south-west": 180,
};

export function ArrowIcon({ direction = "north-east", className = "" }: { direction?: Direction; className?: string }) {
  return (
    <svg
      className={`icon-arrow ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
