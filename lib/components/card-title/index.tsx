import DOMPurify from "dompurify";
import { CardCategory } from "../../models/enums/card-category.enum";

interface Props {
  name: string;
  category: CardCategory;
}

export function CardTitle({ category, name }: Props) {
  const getColor = () => {
    if (category === CardCategory.T1) return "text-t1-primary";
    if (category === CardCategory.Embee) return "text-embee-primary";
    if (category === CardCategory.Troll) return "text-troll-primary";
    return "text-lol-primary";
  };
  const color = getColor();
  const sanitizedName = DOMPurify.sanitize(name);

  return (
    <p
      className={`font-sigmar font-normal ${color} font-extrabold text-2xl text-center w-full`}
      dangerouslySetInnerHTML={{ __html: sanitizedName }}
    ></p>
  );
}
