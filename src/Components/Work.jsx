import React, { useState } from "react";
import { useScroll } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://assets.awwwards.com/awards/submissions/2022/04/62691e3f5b03b475709242.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets.awwwards.com/awards/element/2022/10/6357db1076ce7765201223.png",
      top: "57%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/f0/e6/82/f0e682d43a7b151d911ed49cc57e3175.jpg",
      top: "47%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/5dbfbe5b9bf13e1ebb54e91f/6595c1f5a32f7660a90a9120_refokus-hero.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
      top: "50%",
      left: "45%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageshow(arr) {
      setimages((prev) =>
        prev.map((item, index) => arr.indexOf(index) === -1
          ? { ...item, isActive: false }
          : { ...item, isActive: true }
      ));
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageshow([]);
        break;
      case 1:
        imageshow([0]);
        break;
      case 2:
        imageshow([0, 1]);
        break;
      case 3:
        imageshow([0, 1, 2]);
        break;
      case 4:
        imageshow([0, 1, 2, 3]);
        break;
      case 5:
        imageshow([0, 1, 2, 3, 4]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto relative text-center mt-10">
        <h1 className="text-[30vw] leading-none font-medium">work</h1>
        <div className="w-full h-full absolute top-2">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-72 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
