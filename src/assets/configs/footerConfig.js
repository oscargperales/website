import React from "react";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

const footerConfig = {
  icons: [
    {
      id: "footer-0",
      url: "https://github.com/oscargperales",
      className: "social-icon",
      target: "_blank",
      icon: <FiGithub size={75} />,
    },
    {
      id: "footer-1",
      url: "https://www.linkedin.com/in/oscar-gperales/",
      className: "social-icon",
      target: "_blank",
      icon: <SiLinkedin size={75} />,
    },
  ],
};

export default footerConfig;
