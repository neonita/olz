import React from "react";
import FolderButton from "./FolderButton";
// import { folder_data } from "../../../folder_data";

const Navbar = ({ navState }) => {
  const mobileNav = `bg-white w-screen md:w-[230px] h-auto md:h-screen md:border-r border-gray-200 absolute z-40 left-0`;
  const mobileNavOpen = `${mobileNav} top-[72px] md:block`;
  const mobileNavClosed = `${mobileNav} top-[-2000px] md:block md:top-[72px]`;

  // const fetchFolders = async () => {
  //   const response = await fetch("./api/folders/");
  //   const data = await response.json();
  //   console.log(data);
  // };
  // fetchFolders();

  // const folders = async () => await fetchFolders();

  return (
    <nav className={navState ? mobileNavOpen : mobileNavClosed}>
      <ul>
        <FolderButton />
      </ul>
    </nav>
  );
};

export default Navbar;
