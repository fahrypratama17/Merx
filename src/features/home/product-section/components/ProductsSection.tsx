"use client";

import dynamic from "next/dynamic";
import { products } from "@/features/home/product-section/data/data";
import { motion } from "framer-motion";
import { staggerContainer } from "@/shared/components/animation/StaggerContainer";
import { fadeInUp } from "@/shared/components/animation/FadeInUp";

const ProductsSection = () => {
  const AnimatedProducts = dynamic(
    () =>
      import("@/features/home/product-section/components/AnimatedProducts").then(
        (mod) => mod.AnimatedProducts,
      ),
    { ssr: false },
  );

  return (
    <section id={"Products"} className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.h1 variants={fadeInUp} className="title">
            Products
          </motion.h1>
          <motion.p variants={fadeInUp} className="subtitle italic">
            A curated selection of items from sellers who value clarity and
            quality.
          </motion.p>
        </div>
        <div>
          <AnimatedProducts testimonials={products} />
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsSection;
