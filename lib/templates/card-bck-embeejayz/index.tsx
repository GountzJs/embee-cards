import bgShaco from "../../assets/bg-shaco.png";

export function CardBackEmbeejayz() {
  return (
    <div className="relative w-[300px] h-[450px] flex items-center justify-center select-none">
      <div className="row-start-1 col-start-1 bg-gradient-to-r from-orange-light via-orange-dark to-red-dark p-2 rounded-3xl">
        <img className="rounded-xl" src={bgShaco} width={300} height={450} />
      </div>
    </div>
  );
}
