import { CupWorlds } from "../../icons/cup-worlds";
import { LolesportsLogo } from "../../icons/lolesports-logo";
import { T1Logo } from "../../icons/t1-logo";
import { CardCategory } from "../../models/enums/card-category.enum";
import { BoxShaco } from "../../svgs/box-shaco";
import { HatShaco } from "../../svgs/hat-shaco";

interface Props {
  category: CardCategory;
}

function T1Decorator() {
  return (
    <>
      <T1Logo />
      <CupWorlds />
    </>
  );
}

function LolesportsDecorator() {
  return (
    <>
      <LolesportsLogo />
      <BoxShaco width={35} height={35} />
    </>
  );
}

function EmbeeDecorator() {
  return (
    <>
      <HatShaco />
      <HatShaco width={35} height={35} />
    </>
  );
}

export function CardDecorator({ category }: Props) {
  return (
    <div className="flex items-center justify-between px-2 w-full">
      {category === CardCategory.T1 && <T1Decorator />}
      {category === CardCategory.Lolesports && <LolesportsDecorator />}
      {category === CardCategory.Embee && <EmbeeDecorator />}
    </div>
  );
}
