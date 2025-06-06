import React from "react";
import { motion } from "framer-motion";

const GridBlock = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={`${className} h-fit w-[98vw] md:w-[90vw] py-4 pl-4 pr-8 flex md:flex-wrap gap-2 overflow-x-auto`}
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default GridBlock;
