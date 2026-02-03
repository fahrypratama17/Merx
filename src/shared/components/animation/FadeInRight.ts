import { Variants } from "framer-motion";

export const fadeInRight: Variants = {
  hidden: {
    x: 30,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
