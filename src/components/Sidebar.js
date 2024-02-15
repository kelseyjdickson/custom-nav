import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
  ];

  const displaySidebar = links.map((link, path) => {
    return (
      <Link
        className="mb-3"
        to={link.path}
        key={link.label}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {displaySidebar}
    </div>
  );
};

export default Sidebar;
