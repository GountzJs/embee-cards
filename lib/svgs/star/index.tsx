import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

export function Star({ color = "#e3092b", ...props }: Props) {
  return (
    <svg viewBox="0 0 10.77 10.25" {...props}>
      <path
        d="m5.38 0 1.26 3.93 4.13-.02-3.35 2.42 1.29 3.92-3.33-2.44-3.32 2.44 1.29-3.92L0 3.91l4.12.02L5.38 0z"
        style={{
          fill: color,
        }}
      />
    </svg>
  );
}
