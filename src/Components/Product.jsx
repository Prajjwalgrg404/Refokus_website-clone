import React from "react";
import Button from "./Button";

function Product({ elem,mover,count }) {
  return (
    <div className="w-full h-[23rem] py-20 text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl capitalize font-medium">{elem.title}</h1>

        <div className="dets w-1/3">
          <p className="mb-5">{elem.description}</p>
          <div className="flex items-center gap-7">
            {elem.live && <Button />}
            {elem.case && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
