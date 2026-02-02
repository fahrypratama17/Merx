import { cardProps } from "@/shared/types/types";

const Card = ({ title, sub }: cardProps) => {
  return (
    <div className="bg-muted/40 border-border/60 rounded-xl border p-4 shadow-2xl transition-colors duration-300 hover:border-black">
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
        {sub}
      </p>
    </div>
  );
};

export default Card;
