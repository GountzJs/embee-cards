import { CardCategory } from "../../models/enums/card-category.enum";
import { T1Logo } from "../../svgs/t1-logo";
import { CupWorlds } from "../cup-worlds";

interface Props {
  category: CardCategory;
}

export function CardDecorator({ category }: Props) {
  return (
    <div className="flex items-center justify-between px-2 w-full">
      {category === CardCategory.T1 && <T1Logo />}
      {category === CardCategory.T1 && <CupWorlds />}
    </div>
  );
}
