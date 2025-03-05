import { CardCategory } from "../../models/enums/card-category.enum";

interface Props {
  category: CardCategory;
  description: string;
}

export function CardDescription({ category, description }: Props) {
  const getColor = () => {
    if (category === CardCategory.T1) return "#711420";
    return "#cdcccc";
  };
  const color = getColor();

  return (
    <p
      className={`bg-[${color}] leading-tight text-center font-medium font-montserrat text-[12px] text-[#fff] px-4 pt-4 pb-2 h-full rounded-md`}
    >
      {description}
    </p>
  );
}
