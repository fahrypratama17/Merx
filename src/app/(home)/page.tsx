import HeroContainer from "@/features/home/hero-section/container/HeroContainer";
import Navbar from "@/shared/components/Navbar";
import WhyMerxContainer from "@/features/home/whymerx-section/container/WhyMerxContainer";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroContainer />
        <WhyMerxContainer />
      </main>
    </>
  );
};

export default page;
