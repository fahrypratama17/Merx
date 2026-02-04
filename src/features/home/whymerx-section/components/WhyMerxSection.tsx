"use client";

import { whyMerxItem } from "@/features/home/whymerx-section/data/data";
import Card from "@/shared/components/Card";
import { motion } from "framer-motion";
import { staggerContainer } from "@/shared/components/animation/StaggerContainer";
import { fadeInUp } from "@/shared/components/animation/FadeInUp";

const WhyMerxSection = () => {
  return (
    <section id={"Why-Merx"} className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="centered container py-0 lg:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1fr]">
          <div className="my-auto space-y-5">
            <motion.h1 variants={fadeInUp} className="title">
              Why Merx
            </motion.h1>
            <motion.p variants={fadeInUp} className="subtitle">
              Built for people who buy and sell with focus.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {whyMerxItem.map((item) => (
              <motion.div variants={fadeInUp} key={item.id}>
                <Card icon={item.icon} title={item.title} sub={item.sub} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyMerxSection;
