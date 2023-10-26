import {AiOutlineHome} from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import {FaLaptopCode} from "react-icons/fa";

import React from "react";

const menuConfig = {

  sidebarData: [
    {
        id: "menu-0",
        title: "Home",
        path: "/website",
        icon: <AiOutlineHome  size={50}/>,
        className: "nav-text"
    },
    {
        id: "menu-1",
        title: "Projects",
        path: "/projects",
        icon: <FiGithub size={50}/>,
        className: "nav-text"
    },
    {
        id: "menu-2",
        title: "Skills",
        path: "/skills",
        icon: <FaLaptopCode size={50}/>,
        className: "nav-text"
    }
  ]
}

export default menuConfig