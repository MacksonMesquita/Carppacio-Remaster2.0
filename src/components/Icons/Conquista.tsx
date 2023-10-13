import { Icon } from "../types";

export function Conquista({ color = "currentColor" }: Icon) {
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
        d="M96 224h64M128 184v40M58 128H48a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32M198 128h10a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M64 48h128a8 8 0 0 1 8 8v55.1c0 39.7-31.75 72.6-71.45 72.9A72 72 0 0 1 56 112V56a8 8 0 0 1 8-8Z"
      />
    </svg>
  );
}
