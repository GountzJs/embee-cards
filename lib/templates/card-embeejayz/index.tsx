import { CardContent } from "../../components/card-content";
import { CardCover } from "../../components/card-cover";
import { CardDecorator } from "../../components/card-decorator";
import { CardDescription } from "../../components/card-description";
import { CardNumber } from "../../components/card-number";
import { CardStars } from "../../components/card-stars";
import { CardTitle } from "../../components/card-title";
import { CardCategory } from "../../models/enums/card-category.enum";
import { CardBorder } from "../../svgs/card-border";
import { CardGradient } from "../../svgs/card-gradient";

interface Props {
  category: CardCategory;
  name: string;
  description: string;
  identify: string;
  url: string;
  isSpecial?: boolean;
  ranking?: number;
}

export function CardEmbeejayz({
  category,
  name,
  description,
  identify,
  url,
  ranking = 1,
  isSpecial = false,
}: Props) {
  const getGradientColor = () => {
    if (category === CardCategory.T1) return "#711420";
    if (category === CardCategory.Embee) return "#755914";
    return "#5c9398ff";
  };

  const getBorderColor = () => {
    if (category === CardCategory.T1) return "#e3092b";
    if (category === CardCategory.Embee) return "#a57713";
    return "#6bc6d9ff";
  };

  return (
    <div className="relative w-[300px] h-[450px] flex items-center justify-center select-none">
      <div className="w-full h-full grid place-items-center">
        <CardGradient
          color={getGradientColor()}
          width={300}
          height={450}
          className="row-start-1 col-start-1"
        />
        <CardBorder
          width={300}
          height={450}
          className="row-start-1 col-start-1"
          color={getBorderColor()}
        />
        <CardContent>
          <div className="flex flex-col px-4 pt-4 h-full w-full">
            <CardDecorator category={category} />
            <div className="flex flex-col items-center justify-center w-full">
              <CardStars
                category={category}
                isSpecial={isSpecial}
                ranking={ranking}
              />
              <CardTitle category={category} name={name} />
              <CardCover url={url} alt={`Card ${name}`} />
            </div>
            <div className="flex flex-col items-center justify-center h-full mt-2 w-full">
              <CardDescription category={category} description={description} />
              <CardNumber identify={identify} />
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
