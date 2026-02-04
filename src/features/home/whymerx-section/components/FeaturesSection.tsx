"use client";

import { featuresItem } from "@/features/home/whymerx-section/data/data";
import Card from "@/shared/components/Card";
import { staggerContainer } from "@/shared/components/animation/StaggerContainer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/shared/components/animation/FadeInUp";

const FeaturesSection = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h1 variants={fadeInUp} className="title">
          Features
        </motion.h1>
        <motion.p variants={fadeInUp} className="subtitle pb-20 italic">
          Everything you need to buy and sell, without the complexity.
        </motion.p>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuresItem.map((item) => (
            <motion.div variants={fadeInUp} key={item.id}>
              <Card icon={item.icon} title={item.title} sub={item.sub} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
