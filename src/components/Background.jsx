import React from "react";

const Background = () => {
  return (
    <>
      <div className="z-[2] fixed h-screen w-full">
        <div className="absolute w-full text-3xl text-zinc-600 font-semibold flex justify-center top-[5%]">
          Documents
        </div>
        <h1 className="absolute text-zinc-900 text-[10rem] top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold ">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
