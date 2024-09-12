import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../videos/video1.webm";
import video2 from "../videos/video2.webm";
import video3 from "../videos/video3.webm";
import video4 from "../videos/video4.webm";
import video5 from "../videos/video5.webm";

function Products() {
  const products = [
    {
      title: "cula",
      description:
        " We immersed ourselves in a 3D world we created to explai how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Sevdesk",
      description:
        " We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description:
        " An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR AI",
      description:
        " We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 23);
  };

  return (
    <div className="mt-10 relative">
      {products.map((elem, index) => (
        <Product key={index} elem={elem} mover={mover} count={index} />
      ))}
      <div className="top-0 w-full h-full pointer-events-none absolute ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[43%] overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-white"
          >
            <video src={video1} autoPlay muted loop />
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-green-200"
          >
            <video src={video2} autoPlay muted loop />
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-green-300"
          >
            <video src={video3} autoPlay muted loop />
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-green-400"
          >
            <video src={video4} autoPlay muted loop />
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + `rem` }}
            className=" w-full h-full bg-green-500"
          >
            <video src={video5} autoPlay muted loop />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
