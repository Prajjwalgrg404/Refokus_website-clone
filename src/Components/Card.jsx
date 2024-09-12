import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Card({ width, start, para, hover }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`p-5 rounded-md bg-zinc-800 ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full ">
        {start === true && (
          <>
            
            <div className="w-full">
              <div className="w-full flex justify-between items-start">
                <h3>Get in Touch</h3>
                <MdOutlineArrowRightAlt />
                
              </div>
              <h1 className="text-4xl mt-10 font-medium">Let's get to it.</h1>
              <h1 className="text-7xl mt-52 font-semibold">Start a Project</h1>
            <button className="px-3 py-1 rounded-full mt-3 border-[1px] text-white">
              Contact us
            </button>
            </div>
             
          </>
        )}
        {para && (
          <div>
            <div className="w-full">
              <div className="w-full flex justify-between items-center">
                <h3>Blog</h3>
                <MdOutlineArrowRightAlt />
              </div>
              <h1 className="text-4xl mt-10 font-medium">News & Insights</h1>
            </div>
            <p className="text-sm w-2/3 mt-[17rem] text-zinc-500 font-medium">
            News & Insights on web designing, Webflow Development, and Creative Development
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
