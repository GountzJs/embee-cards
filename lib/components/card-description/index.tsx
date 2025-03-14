import { CardCategory } from "../../models/enums/card-category.enum";

interface Props {
  category: CardCategory;
  description: string;
}

export function CardDescription({ category, description }: Props) {
  const getColor = () => {
    if (category === CardCategory.T1) return "bg-t1-primary-dark";
    if (category === CardCategory.Embee) return "bg-embee-primary-dark";
    if (category === CardCategory.Troll) return "bg-troll-primary-dark";
    return "bg-lol-primary-dark";
  };
  const color = getColor();

  return (
    <p
      className={`${color} leading-tight text-center font-medium font-montserrat text-[12px] text-white px-4 pt-4 pb-2 h-full rounded-md`}
    >
      {description}
    </p>
  );
}
