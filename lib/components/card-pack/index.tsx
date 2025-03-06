import { useEffect, useState } from "react";
import packBottom from "../../assets/pack/bottom.png";
import packTop from "../../assets/pack/top.png";

interface Props {
  isOpen: boolean;
}

export function CardPack({ isOpen }: Props) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setHide(true);
      }, 700);
    }
  }, [isOpen]);

  return (
    <div className="relative w-[300px] h-[522px]">
      <img
        src={packBottom}
        className="absolute bottom-0 left-0"
        width={300}
        height={416}
        alt="Pack bottom"
      />
      <img
        src={packTop}
        className={`absolute top-[38px] left-0 transition-all duration-700 ease-in-out origin-bottom-left ${
          isOpen && "rotate-[-10deg]"
        } ${hide && "opacity-0"}`}
        width={300}
        height={106}
        alt="Pack top"
      />
    </div>
  );
}
