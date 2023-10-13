import { Icon } from "../types";

export function PratoPremio({ color = "currentColor" }: Icon) {
  return (
    <svg
      className="w-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M80 40v48M80 128v96M208 168h-56s0-104 56-128v184M48 40l-8 48a40 40 0 0 0 80 0l-8-48"
      />
    </svg>
  );
}
