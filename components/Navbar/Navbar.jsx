import React, { useState, useEffect } from "react";
import FolderButton from "./FolderButton";

const Navbar = ({ navState }) => {
  const mobileNav = `bg-white w-screen md:w-[230px] h-auto md:h-screen md:border-r border-gray-200 absolute z-40 left-0`;
  const mobileNavOpen = `${mobileNav} top-[72px] md:block`;
  const mobileNavClosed = `${mobileNav} top-[-2000px] md:block md:top-[72px]`;

  const [folders, setFolders] = useState([]);

  const fetchFolders = async () => {
    const response = await fetch("/api/folders");
    const data = await response.json();
    console.log(data);

    setFolders(data);
  };

  // Calls fetchFolders() as soon as the page renders
  useEffect(() => {
    fetchFolders();
  }, []);

  return (
    <nav className={navState ? mobileNavOpen : mobileNavClosed}>
      <ul>
        {folders.map((folder, index) => (
          // render a component
          <FolderButton
            title={folder.title}
            href={folder.href}
            hrefTitle={folder.hrefTitle}
            description={folder.description}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
