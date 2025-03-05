interface Props {
  url: string;
  alt: string;
}

export function CardCover({ url, alt }: Props) {
  return (
    <img
      src={url}
      className="object-cover h-[180px] w-auto"
      height={180}
      width={260}
      alt={alt}
    />
  );
}
