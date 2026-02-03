import { AnimatedProducts } from "@/features/home/product-section/components/AnimatedProducts";
import { products } from "@/features/home/product-section/data/data";

const ProductsSection = () => {
  return (
    <section id={"Products"} className="section">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <h1 className="title">Products</h1>
          <p className="subtitle italic">
            A curated selection of items from sellers who value clarity and
            quality.
          </p>
        </div>
        <div>
          <AnimatedProducts testimonials={products} />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
