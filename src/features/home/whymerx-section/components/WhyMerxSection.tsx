import { whyMerxData } from "@/features/home/whymerx-section/data/data";
import Card from "@/shared/components/Card";

const WhyMerxSection = () => {
  return (
    <section id={"Why-Merx"}>
      <div className="centered container py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1fr]">
          <div className="my-auto">
            <h1 className="title">Why Merx</h1>
            <p className="subtitle">
              Built for people who buy and sell with focus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {whyMerxData.map((item) => (
              <Card key={item.id} title={item.title} sub={item.sub} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMerxSection;
