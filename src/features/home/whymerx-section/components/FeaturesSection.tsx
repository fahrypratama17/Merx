import { featuresItem } from "@/features/home/whymerx-section/data/data";
import Card from "@/shared/components/Card";

const FeaturesSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Features</h1>
        <p className="subtitle pb-20 italic">
          Everything you need to buy and sell, without the complexity.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuresItem.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              sub={item.sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
