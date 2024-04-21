"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Button from "@/ui/Button";

type Props = {};

const HeroBtn = (props: Props) => {
  return (
    <Button className="mt-[5.5rem] flex  items-center gap-4 self-start rounded-sm px-12 py-3 md:py-3.5 lg:py-4 lg:text-lg">
      <span className="font-semibold uppercase tracking-wider md:text-base">
        Plant Now
      </span>{" "}
      <motion.span
        initial={{ x: 0 }}
        animate={{
          x: "1rem",
          transition: {
              type: "tween",
              duration: 0.7,
            repeat: Infinity,
          },
        }}
      >
        <FaArrowRight />
      </motion.span>
    </Button>
  );
};

export default HeroBtn;
