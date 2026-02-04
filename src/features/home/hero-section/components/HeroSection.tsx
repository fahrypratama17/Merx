"use client";

import Image from "next/image";
import Button from "@/shared/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer } from "@/shared/components/animation/StaggerContainer";
import { fadeInUp } from "@/shared/components/animation/FadeInUp";

const HeroSection = () => {
  return (
    <section id={"Hero"} className="relative h-screen overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={"/assets/Background-2.png"}
          alt={"background"}
          fill
          className="absolute inset-0 object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative container flex items-center justify-center">
          <div className="glass-pane">
            <motion.h2 variants={fadeInUp} className="flex gap-3 text-white">
              Welcome to Merx
              <span>
                <Image
                  src={"/assets/Logo-white.svg"}
                  alt={"logo"}
                  width={20}
                  height={20}
                />
              </span>
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="title !text-white">
              Where Buying and Selling Feels Simple
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl text-white/80">
              Merx connects buyers and sellers in a simple, focused marketplace
              where managing and discovering products feels effortless.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href={"/login"}>
                <Button
                  text={"Start Your Store or Shop"}
                  icon={"/assets/Right-icon.svg"}
                  width={20}
                  height={20}
                  className={
                    "bg-primaryBtn-bg hover:bg-primaryBtn-hover text-textBtn border-border flex cursor-pointer items-center gap-2 rounded-xl border-2 p-2 px-6"
                  }
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
