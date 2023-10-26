import {FiGithub} from "react-icons/fi";
import {SiSocialLinkedin} from "react-icons/si";
import React from "react";

const footerConfig = {
  icons: [
    {
      id: "footer-0",
      url: "https://github.com/oscargperales",
      className: "social-icon",
      target: "_blank",
      icon: <FiGithub size={75}/>
    },
    {
      id: "footer-1",
      url: "https://www.linkedin.com/in/oscar-gperales/",
      className: "social-icon",
      target: "_blank",
      icon: <SiSocialLinkedin size={75}/>
    }
  ]
}

export default footerConfig