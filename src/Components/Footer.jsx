import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-36">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 ">Socials</h4>
            {["instagram", "twitter", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-3 capitalize text-zinc-600" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-3 capitalize text-zinc-400" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2">
            <p className="text-zinc-300 text-right mb-10">Refokus is a poinnering digital agencg driving by design and empowered by technology </p>
            <button className="px-4 py-2 bg-purple-800 ml-20 text-white text-sm rounded-md">Enterprise Partner</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
