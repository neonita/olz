import React, { useState } from "react";
import {
  MdArrowForwardIos,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaFolder } from "react-icons/fa";

const SubBar = () => {
  const [open, setOpen] = useState(false);
  console.log(`🔵 isOpen: ${open}`);

  // https://github.com/neonita/react-weather-proj/blob/main/src/WeatherForecast.js

  return (
    <li className="h-auto">
      <button
        className="pl-2 pr-[0.2em] w-full h-auto border-b bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-activeBlue flex items-center justify-between relative z-40"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <FaFolder size={20} className="fill-sky-300" />
          <span>about</span>
        </span>

        {open ? (
          <MdKeyboardArrowUp className="fill-gray-400" size={20} />
        ) : (
          <MdKeyboardArrowDown className="fill-gray-400" size={20} />
        )}
      </button>

      {/* content when button is clicked */}
      <div
        className={
          open
            ? "border-b  w-full relative ease-in-out duration-300 z-20 top-0 "
            : "relative ease-in-out duration-300 z-20 top-[-1000px]"
        }
      >
        I am info Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt odit assumenda recusandae nemo. Sapiente necessitatibus
        deserunt dicta quod, sed debitis.
      </div>
    </li>
  );
};

export default SubBar;
