import React, { useState } from "react";
import Logo from "./Logo";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState(false); // NOT icon, but the nav/menu
  console.log(nav);

  return (
    <header className="border-b border-gray-200 bg-white h-[72px] w-screen flex items-center justify-between px-6 absolute">
      <h1 className="w-44 h-auto relative left-[50%] translate-x-[-50%] hover:bg-black hover:text-white py-2 px-[0.2em]">
        <Logo />
      </h1>

      <div onClick={() => setNav(!nav)}>
        {nav ? (
          // if nav is "true", show close icon
          <IoMdClose size={30} />
        ) : (
          // if nav is "false", show menu icon
          <IoMdMenu size={30} className="hover:cursor-pointer" />
        )}
      </div>
    </header>
  );
};

export default Header;
