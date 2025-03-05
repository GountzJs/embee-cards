import { CardCategory } from "../../models/enums/card-category.enum";
import { Star } from "../../svgs/star";
import { StarIncomplete } from "../../svgs/star-incomplete";

interface Props {
  category: CardCategory;
  rating?: number;
  isSpecial?: boolean;
}

export function CardStars({ category, rating, isSpecial }: Props) {
  const getColor = () => {
    if (category === CardCategory.T1) return "#e3092b";
    return "#6bc6d9ff";
  };
  const color = getColor();

  if (isSpecial)
    return (
      <div className="flex items-center justify-center gap-1 w-full">
        <Star color={color} width={18} height={18} />
      </div>
    );

  return (
    <div className="flex items-center justify-center gap-1 w-full">
      {Array.from({ length: 5 }).map((_, i) => {
        if (rating && i <= rating)
          return <Star color={color} width={18} height={18} />;
        return <StarIncomplete color={color} width={18} height={18} />;
      })}
    </div>
  );
}
