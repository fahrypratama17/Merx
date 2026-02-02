import Image from "next/image";
import Button from "@/shared/components/Button";

const HeroSection = () => {
  return (
    <section id={"Hero"} className="relative h-screen overflow-hidden">
      <Image
        src={"/assets/Background-2.png"}
        alt={"background"}
        fill
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative container flex items-center justify-center">
        <div className="glass-pane">
          <h2 className="flex gap-3 text-white">
            Welcome to Merx
            <span>
              <Image
                src={"/assets/Logo-white.svg"}
                alt={"logo"}
                width={20}
                height={20}
              />
            </span>
          </h2>
          <h1 className="title !text-white">
            Where Buying and Selling Feels Simple
          </h1>
          <p className="max-w-xl text-white/80">
            Merx connects buyers and sellers in a simple, focused marketplace
            where managing and discovering products feels effortless.
          </p>
          <Button
            text={"Start Your Store or Shop"}
            icon={"/assets/Right-icon.svg"}
            width={20}
            height={20}
            className={
              "bg-primaryBtn-bg hover:bg-primaryBtn-hover text-textBtn border-border flex items-center gap-2 rounded-xl border-2 p-2 px-6"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
