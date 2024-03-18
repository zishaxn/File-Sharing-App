import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiDownload } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 0.8 }}
        whileTap={{ scale: 0.8 }}
        dragElastic={0.4}
        className="relative h-72 w-60 bg-white rounded-[40px] overflow-hidden p-8"
      >
        <LuFileSpreadsheet size="1.9em" />
        <p className=" text-zinc-950 font-sm mt-5 leading-tight font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute w-full left-0 bottom-0">
          <div className="flex justify-between items-center mb-3 py-3 px-8">
            <h5 className=" text-md">{data.fileSize}</h5>
            <span className=" w-8 h-8 rounded-full flex justify-center items-center bg-zinc-600">
              {data.close ? (
                <IoCloseOutline size="1.1em" />
              ) : (
                <HiDownload size="1.1em" />
              )}
            </span>
          </div>
          {data.tagDetails.isOpen && (
            <div
              className={`tag w-full py-3 ${
                data.tagDetails.tagColor === "blue"
                  ? "bg-sky-600"
                  : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-md font-semibold">
                {data.tagDetails.tagTitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
