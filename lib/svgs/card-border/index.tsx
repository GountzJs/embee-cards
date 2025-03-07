import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

export function CardBorder({ color = "#e3092b", ...props }: Props) {
  return (
    <svg id="CARTA_9999" viewBox="0 0 300 450" {...props}>
      <defs>
        <style>{`.cls-1{fill: ${color}}`}</style>
      </defs>
      <path
        d="M269.64 0H30.36C13.59 0 0 12.1 0 27.03v395.94C0 437.9 13.59 450 30.36 450h239.27c16.77 0 30.36-12.1 30.36-27.03V27.03C300 12.1 286.41 0 269.64 0Zm20.78 418.83c0 11.69-10.64 21.17-23.78 21.17H33.36c-13.13 0-23.78-9.48-23.78-21.17V31.17C9.58 19.48 20.22 10 33.36 10h233.28c13.13 0 23.78 9.48 23.78 21.17v387.67Z"
        className="cls-1"
      />
      <path
        d="M260 435.79H40c-14.07 0-23.53-8.7-23.53-21.65V35.86c0-13.36 9.02-21.65 23.53-21.65h220.01c14.95 0 23.53 7.89 23.53 21.65v378.28c0 14.57-7.7 21.65-23.53 21.65ZM40 16.21c-13.35 0-21.32 7.35-21.32 19.65v378.28c0 11.94 8.37 19.65 21.32 19.65h220.01c14.55 0 21.32-6.25 21.32-19.65V35.86c0-7.34-2.77-19.65-21.32-19.65H40Z"
        className="cls-1"
      />
      <path
        d="M132.08 424.32h35.83c3.25 0 5.88 2.64 5.88 5.88v10.02h-47.6V430.2c0-3.25 2.64-5.88 5.88-5.88Z"
        className="cls-1"
      />
    </svg>
  );
}
