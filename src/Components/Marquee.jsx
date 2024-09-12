import React from "react";
import { motion } from "framer-motion";

function Marquee({ imageurl, direction }) {
  return (
    <div className="flex w-full py-10 overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className=" py-15 gap-[10rem] flex flex-shrink-0 pr-[10rem] "
      >
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="w-[8vw] flex-shrink-0" />
        ))}
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="w-[8vw] flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className=" py-15 gap-[10rem] flex flex-shrink-0 pr-[10rem] "
      >
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="w-[8vw] flex-shrink-0" />
        ))}
        {imageurl.map((url, index) => (
          <img key={index} src={url} className=" w-[8vw] flex-shrink-0" />
        ))}
      </motion.div>
      
    </div>
  );
}

export default Marquee;
