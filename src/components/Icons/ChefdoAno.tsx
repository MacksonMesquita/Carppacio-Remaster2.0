import { Icon } from "../types";

export function ChefdoAno({ color = "currentColor" }: Icon) {
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
        d="M53.22 200S80 184 128 184s74.78 16 74.78 16l37-113.39a4.09 4.09 0 0 0-5.71-5l-53.43 26.64a4.12 4.12 0 0 1-5.35-1.56L131.52 34a4.1 4.1 0 0 0-7 0l-43.81 72.72a4.11 4.11 0 0 1-5.36 1.56L22 81.66a4.1 4.1 0 0 0-5.72 5Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M88 155.41a236.31 236.31 0 0 1 80 0"
      />
    </svg>
  );
}
