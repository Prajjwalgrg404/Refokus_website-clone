import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [
    {
      url: "https://static.wixstatic.com/media/bfb249_bdb880a8e963451db24b7e2dda1758c2~mv2.png/v1/fill/w_616,h_290,al_c,q_85,enc_auto/Frame%2039.png",
      number: 48,
    },
    {
      url: "https://fictivedigital.co.uk/wp-content/uploads/2023/08/accred-6.png",
      number: 2,
    },
    {
      url: "https://static.wixstatic.com/media/bfb249_bdb880a8e963451db24b7e2dda1758c2~mv2.png/v1/fill/w_616,h_290,al_c,q_85,enc_auto/Frame%2039.png",
      number: 11,
    },
    {
      url: "https://fictivedigital.co.uk/wp-content/uploads/2023/08/accred-6.png",
      number: 48,
    },
    {
      url: "https://static.wixstatic.com/media/bfb249_bdb880a8e963451db24b7e2dda1758c2~mv2.png/v1/fill/w_616,h_290,al_c,q_85,enc_auto/Frame%2039.png",
      number: 2,
    },
    {
      url: "https://fictivedigital.co.uk/wp-content/uploads/2023/08/accred-6.png",
      number: 11,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-16">
      {data.map((elem,index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
