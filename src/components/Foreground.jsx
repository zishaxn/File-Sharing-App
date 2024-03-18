import React, { useRef } from "react";
import Card from "./Card";
function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is a Sample Text, and It makes no sense at all.",
      fileSize: ".5Mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium velit",
      fileSize: "3.5Mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is another sample text with variations.",
      fileSize: "1Mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Yet another sample description for testing.",
      fileSize: "2Mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "View Details",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] p-8 top-0 left-0 flex gap-10 flex-wrap"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
