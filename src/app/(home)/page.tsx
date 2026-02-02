import HeroContainer from "@/features/home/hero-section/container/HeroContainer";
import Navbar from "@/shared/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroContainer />
      </main>
    </>
  );
};

export default page;
