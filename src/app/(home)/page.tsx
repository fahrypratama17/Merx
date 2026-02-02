import HeroContainer from "@/features/home/hero-section/container/HeroContainer";
import Navbar from "@/shared/components/Navbar";
import WhyMerxContainer from "@/features/home/whymerx-section/container/WhyMerxContainer";
import ProductsContainer from "@/features/home/product-section/container/ProductsContainer";
import Footer from "@/shared/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroContainer />
        <WhyMerxContainer />
        <ProductsContainer />
      </main>
      <Footer />
    </>
  );
};

export default page;
