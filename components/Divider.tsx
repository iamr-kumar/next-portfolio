import React from "react";

export enum Alignment {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

const Divider = (props: { heading: string; alignment?: Alignment }) => {
  const { heading, alignment = Alignment.RIGHT } = props;
  return (
    <div
      className={`flex items-center justify-center absolute w-[100%] -top-6 mb-2 px-4 ${
        alignment === Alignment.LEFT ? "flex-row-reverse" : ""
      }`}
    >
      <div className="bg-[#aeaeae] h-px w-[65%]"></div>
      <h1 className={`font-dancingScript text-[#aeaeae] ${alignment === Alignment.LEFT ? "mr-4" : "ml-4"}`}>
        {heading}
      </h1>
    </div>
  );
};

export default Divider;
