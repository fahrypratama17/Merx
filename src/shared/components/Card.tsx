import { cardProps } from "@/shared/types/types";

const Card = ({ icon, title, sub }: cardProps) => {
  return (
    <div className="bg-card border-border/60 rounded-xl border p-4 shadow-lg transition-colors duration-300 hover:border-black hover:shadow-2xl">
      <img src={icon} alt={"icon"} width={28} height={28} className="mb-2" />
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed">{sub}</p>
    </div>
  );
};

export default Card;
