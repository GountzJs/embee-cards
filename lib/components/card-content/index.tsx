interface Props {
  children: React.ReactNode;
}

export function CardContent({ children }: Props) {
  return (
    <div className="row-start-1 col-start-1 h-[435px] w-[280px]">
      {children}
    </div>
  );
}
