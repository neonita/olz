import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "../Navbar/Navbar";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState(false); // NOT icon, but the nav/menu

  return (
    <header className="h-auto w-screen">
      <section className="border-b border-gray-200 bg-white h-[72px] w-full flex items-center justify-between px-6 absolute z-50">
        <h1 className="w-44 h-auto relative md:static left-[50%] translate-x-[-50%] md:translate-x-0 hover:bg-black hover:text-white py-2 px-[0.2em]">
          <Logo />
        </h1>

        <div onClick={() => setNav(!nav)} className="block md:hidden ">
          {nav ? (
            // if nav is "true", show close icon
            <IoMdClose size={32} />
          ) : (
            // if nav is "false", show menu icon
            <IoMdMenu size={32} className="hover:cursor-pointer" />
          )}
        </div>
      </section>

      <section>
        <Navbar navState={nav} />
      </section>
    </header>
  );
};

export default Header;
