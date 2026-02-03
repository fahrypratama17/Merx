"use client";

import {
  buyerItem,
  sellerItem,
} from "@/features/home/whymerx-section/data/data";
import Button from "@/shared/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const HowItWorksSection = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <section className="pb-20">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-0 space-y-4 text-center lg:mb-10">
          <h1 className="title">How It Works</h1>
          <p className="subtitle italic">
            A simple flow for buying and selling on Merx.
          </p>
        </div>
        <div className="mx-auto grid w-5/6 grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center pb-8">
            <div
              className="bg-secondaryBtn-bg flex w-full cursor-pointer justify-center rounded-xl py-8 text-center"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <h3 className="pr-6 font-semibold lg:text-xl">For Buyers</h3>
              {isOpen1 ? <ChevronDown /> : <ChevronUp />}
            </div>
            <AnimatePresence>
              {isOpen1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-4 pt-8">
                    {buyerItem.map((item, id) => {
                      const isLeft = id % 2 === 1;

                      return (
                        <div
                          key={item.id}
                          className="grid grid-cols-[1fr_40px_1fr] py-4"
                        >
                          <div className={isLeft ? "pr-4 text-right" : ""}>
                            {isLeft && (
                              <>
                                <h3 className="pb-2 text-xl font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-justify opacity-80">
                                  {item.sub}
                                </p>
                              </>
                            )}
                          </div>

                          <div className="relative flex items-center justify-center">
                            <span className="absolute top-0 bottom-0 w-0.5 bg-gray-300" />
                            <span className="bg-secondaryBtn-bg z-10 flex h-5 w-5 items-center justify-center rounded-full text-sm md:h-10 md:w-10 md:text-lg">
                              {item.id}
                            </span>
                          </div>

                          <div className={!isLeft ? "pl-4" : ""}>
                            {!isLeft && (
                              <>
                                <h3 className="pb-2 text-xl font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-justify opacity-80">
                                  {item.sub}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      text={"Start Shopping"}
                      icon={"/assets/shopping.svg"}
                      width={20}
                      height={20}
                      className={
                        "text-textBtn mt-8 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 p-2 px-6 transition-transform duration-300 hover:-translate-y-2 hover:bg-blue-700"
                      }
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center pb-8">
            <div
              className="bg-secondaryBtn-bg flex w-full cursor-pointer justify-center rounded-xl py-8 text-center"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <h3 className="pr-6 font-semibold lg:text-xl">For Seller</h3>
              {isOpen2 ? <ChevronDown /> : <ChevronUp />}
            </div>
            <AnimatePresence>
              {isOpen2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full overflow-hidden"
                >
                  <div className="flex flex-col gap-4 pt-8">
                    {sellerItem.map((item, id) => {
                      const isLeft = id % 2 !== 1;

                      return (
                        <div
                          key={item.id}
                          className="grid grid-cols-[1fr_40px_1fr] py-4"
                        >
                          <div className={isLeft ? "pr-4 text-right" : ""}>
                            {isLeft && (
                              <>
                                <h3 className="pb-2 text-xl font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-justify opacity-80">
                                  {item.sub}
                                </p>
                              </>
                            )}
                          </div>

                          <div className="relative flex items-center justify-center">
                            <span className="absolute top-0 bottom-0 w-0.5 bg-gray-300" />
                            <span className="bg-secondaryBtn-bg z-10 flex h-5 w-5 items-center justify-center rounded-full text-sm md:h-10 md:w-10 md:text-lg">
                              {item.id}
                            </span>
                          </div>

                          <div className={!isLeft ? "pl-4" : ""}>
                            {!isLeft && (
                              <>
                                <h3 className="pb-2 text-xl font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-justify opacity-80">
                                  {item.sub}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      text={"Start Selling"}
                      icon={"/assets/cashier.svg"}
                      width={20}
                      height={20}
                      className="mt-8 flex scale-105 cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500 p-2 px-6 text-slate-900 transition-transform duration-300 hover:-translate-y-2 hover:bg-[#D97706]"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
