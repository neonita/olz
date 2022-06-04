import React, { useState } from "react";
import {
  MdArrowForwardIos,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaFolder } from "react-icons/fa";

const SubBar = ({ title, href, hrefTitle, description }) => {
  const [open, setOpen] = useState(false); // console.log(`🔵 isOpen: ${open}`);
  const ButtonCl = `pl-2 pr-[0.2em] w-full h-auto border-b bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-activeBlue flex items-center justify-between relative z-40`;

  return (
    <li className="h-auto">
      <button className={ButtonCl} onClick={() => setOpen(!open)}>
        <span className="flex items-center gap-2">
          <FaFolder size={20} className="fill-sky-300" />
          <span>{title}</span>
        </span>

        {open ? (
          <MdKeyboardArrowUp className="fill-gray-400" size={20} />
        ) : (
          <MdKeyboardArrowDown className="fill-gray-400" size={20} />
        )}
      </button>

      {/* 
        [MOBILE] 
        content when button is clicked 
      */}
      <div
        className={open ? "block border-b w-full py-[0.2em] px-2" : "hidden"}
      >
        {description}
      </div>
    </li>
  );
};

export default SubBar;
