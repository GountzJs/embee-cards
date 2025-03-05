import { CardCategory } from "../../models/enums/card-category.enum";
import { Star } from "../../svgs/star";
import { StarIncomplete } from "../../svgs/star-incomplete";

interface Props {
  category: CardCategory;
}

export function CardStars({ category }: Props) {
  const getColor = () => {
    if (category === CardCategory.T1) return "#e3092b";
    return "#6bc6d9ff";
  };
  const color = getColor();

  return (
    <div className="flex items-center justify-center gap-1 w-full">
      <Star color={color} width={18} height={18} />
      <Star color={color} width={18} height={18} />
      <Star color={color} width={18} height={18} />
      <StarIncomplete color={color} width={18} height={18} />
      <StarIncomplete color={color} width={18} height={18} />
    </div>
  );
}
