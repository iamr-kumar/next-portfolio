import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center rounded transition-colors cursor-default group">
      <span className="text-[#0085FF] group-hover:text-white transition-colors group-hover:-rotate-12 group-hover:scale-110">
        <FaCheckCircle />
      </span>
      <h6 className="ml-2 text-sm md:text-base">{text}</h6>
    </div>
  );
};

export default ListItem;
