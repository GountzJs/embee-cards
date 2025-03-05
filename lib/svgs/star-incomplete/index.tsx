import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

export function StarIncomplete({ color = "#e3092b", ...props }: Props) {
  return (
    <svg viewBox="0 0 13.05 12.46" {...props}>
      <path
        d="m6.52 1.23 1.26 3.93 4.13-.02-3.35 2.41 1.29 3.92-3.33-2.43-3.32 2.43 1.28-3.92-3.34-2.41 4.12.02 1.26-3.93z"
        style={{
          fill: "none",
          stroke: color,
          strokeMiterlimit: 10,
          strokeWidth: ".75px",
        }}
      />
    </svg>
  );
}
