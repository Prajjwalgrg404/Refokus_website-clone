import React from "react";
import { PiArrowLineUpRightBold } from "react-icons/pi";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-3 flex justify-between items-center border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <PiArrowLineUpRightBold />
        <div className="links flex gap-14 ml-20 text-white">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-18 bg-zinc-700"></span>
            ) : (
              <a key={index} className="flex font-regular items-center gap-1" href="">
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
