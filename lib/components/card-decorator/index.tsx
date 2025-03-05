import { CupWorlds } from "../../icons/cup-worlds";
import { LolesportsLogo } from "../../icons/lolesports-logo";
import { T1Logo } from "../../icons/t1-logo";
import { CardCategory } from "../../models/enums/card-category.enum";
import { ElderDragon } from "../../svgs/elder-dragon";

interface Props {
  category: CardCategory;
}

export function CardDecorator({ category }: Props) {
  return (
    <div className="flex items-center justify-between px-2 w-full">
      {category === CardCategory.T1 && <T1Logo />}
      {category === CardCategory.T1 && <CupWorlds />}
      {category === CardCategory.Lolesports && <LolesportsLogo />}
      {category === CardCategory.Lolesports && (
        <ElderDragon width={35} height={35} />
      )}
    </div>
  );
}
