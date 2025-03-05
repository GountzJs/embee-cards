import DOMPurify from "dompurify";
import { CardCategory } from "../../models/enums/card-category.enum";

interface Props {
  name: string;
  category: CardCategory;
}

export function CardTitle({ category, name }: Props) {
  const getColor = () => {
    if (category === CardCategory.T1) return "#e3092b";
    return "#e3092b";
  };
  const color = getColor();
  const sanitizedName = DOMPurify.sanitize(name);

  return (
    <p
      className={`font-sigmar font-normal text-[${color}] font-extrabold text-2xl text-center w-full`}
      dangerouslySetInnerHTML={{ __html: sanitizedName }}
    ></p>
  );
}
