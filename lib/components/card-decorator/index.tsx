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
      <HatShaco width={40} height={40} />
      <BoxShaco style={{ marginTop: 5 }} width={50} height={50} />
    </>
  );
}

export function CardDecorator({ category }: Props) {
  if (category === CardCategory.Embee)
    return (
      <div className="flex items-start justify-between h-[60px] w-full">
        <EmbeeDecorator />
      </div>
    );

  return (
    <div className="flex items-center justify-between w-full">
      {category === CardCategory.T1 && <T1Decorator />}
      {category === CardCategory.Lolesports && <LolesportsDecorator />}
    </div>
  );
}
