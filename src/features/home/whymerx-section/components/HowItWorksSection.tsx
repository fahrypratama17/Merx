import {
  buyerItem,
  sellerItem,
} from "@/features/home/whymerx-section/data/data";
import Button from "@/shared/components/Button";

const HowItWorksSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-0 space-y-4 text-center lg:mb-10">
          <h1 className="title">How It Works</h1>
          <p className="subtitle italic">
            A simple flow for buying and selling on Merx.
          </p>
        </div>
        <div className="mx-auto grid w-5/6 grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center overflow-hidden rounded-xl border pb-8">
            <h3 className="bg-primaryBtn-bg w-full py-8 text-center">
              For Buyers
            </h3>
            <div className="flex flex-col gap-4">
              {buyerItem.map((item) => (
                <div key={item.id} className="border p-4">
                  <h4>{item.title}</h4>
                  <p className="text-sm">{item.sub}</p>
                </div>
              ))}
            </div>
            <Button
              text={"Start Shopping"}
              icon={"/assets/login-icon.svg"}
              className={
                "bg-muted text-navbar mt-8 flex items-center gap-2 rounded-xl p-2 px-6"
              }
            />
          </div>
          <div className="flex flex-col items-center overflow-hidden rounded-xl border pb-8">
            <h3 className="bg-primaryBtn-bg w-full py-8 text-center">
              For Sellers
            </h3>
            <div className="flex flex-col gap-4">
              {sellerItem.map((item) => (
                <div key={item.id} className="border p-4">
                  <h4>{item.title}</h4>
                  <p className="text-sm">{item.sub}</p>
                </div>
              ))}
            </div>
            <Button
              text={"Start Selling"}
              icon={"/assets/login-icon.svg"}
              className={
                "bg-muted text-navbar mt-8 flex items-center gap-2 rounded-xl p-2 px-6"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
