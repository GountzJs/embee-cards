interface Props {
  identify: string;
}

export function CardNumber({ identify }: Props) {
  return (
    <p className="pt-0.5 text-center font-montserrat font-medium text-[12px] text-[#fff] h-fit w-full">
      #{identify}
    </p>
  );
}
