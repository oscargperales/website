import React from "react";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTableau,
  SiDjango,
  SiJupyter,
} from "react-icons/si";
import { BsGit, BsTerminal } from "react-icons/bs";

const skillsConfig = {
  mainSkills: [
    {
      id: "skills-0",
      className: "skill-icon",
      icon: <SiPython size={50} />,
      text: "Python",
    },
    {
      id: "skills-1",
      className: "skill-icon",
      icon: <SiJupyter size={50} />,
      text: "Jupyter Notebook",
    },
    {
      id: "skills-2",
      className: "skill-icon",
      icon: <BsGit size={50} />,
      text: "Git",
    },
  ],
  complementarySkills: [
    {
      id: "skills-2",
      className: "skill-icon",
      icon: <BsTerminal size={50} />,
      text: "Z Shell",
    },
    {
      id: "skills-3",
      className: "skill-icon",
      icon: <SiTableau size={50} />,
      text: "Tableau",
    },
    {
      id: "skills-4",
      className: "skill-icon",
      icon: <SiReact size={50} />,
      text: "React",
    },
    {
      id: "skills-5",
      className: "skill-icon",
      icon: <SiDjango size={50} />,
      text: "Django",
    },
    {
      id: "skills-6",
      className: "skill-icon",
      icon: <SiHtml5 size={50} />,
      text: "HTML 5",
    },
    {
      id: "skills-7",
      className: "skill-icon",
      icon: <SiJavascript size={50} />,
      text: "Javascript",
    },
    {
      id: "skills-8",
      className: "skill-icon",
      icon: <SiCss3 size={50} />,
      text: "CSS 3",
    },
  ],
};

export default skillsConfig;
