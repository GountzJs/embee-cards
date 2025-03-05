import { CardContent } from "../../components/card-content";
import { CardCover } from "../../components/card-cover";
import { CardDecorator } from "../../components/card-decorator";
import { CardDescription } from "../../components/card-description";
import { CardNumber } from "../../components/card-number";
import { CardStars } from "../../components/card-stars";
import { CardTitle } from "../../components/card-title";
import { CardCategory } from "../../models/enums/card-category.enum";
import { CardBorder } from "../../svgs/card-border";
import { T1Gradient } from "../../svgs/t1-gradient";

interface Props {
  category: CardCategory;
  name: string;
  description: string;
  identify: string;
  url: string;
}

export function CardEmbeejayz({
  category,
  name,
  description,
  identify,
  url,
}: Props) {
  return (
    <div className="relative w-[300px] h-[450px] flex items-center justify-center select-none">
      <div className="w-full h-full grid place-items-center">
        <T1Gradient
          width={300}
          height={450}
          className="row-start-1 col-start-1"
        />
        <CardBorder
          width={300}
          height={450}
          className="row-start-1 col-start-1"
        />
        <CardContent>
          <div className="flex flex-col px-4 pt-4 h-full w-full">
            <CardDecorator category={category} />
            <div className="flex flex-col items-center justify-center w-full">
              <CardStars category={category} />
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
