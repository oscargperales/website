import cover from "../images/jcole.jpeg";
import web from "../images/web.jpeg";
import { BsGithub } from "react-icons/bs";

const projectConfig = [
  {
    id: "project-2",
    title: "J Cole Album Analysis",
    completed: false, // This project is in progress
     links: [
      {
        name: "repo",
        url: "https://github.com/oscargperales/jcoleproject",
        icon: <BsGithub />,
      },
    ],
    image: cover,
    description: "Analyzed J. Cole's studio albums, exploring music and song connections.",
    target: "_blank",
  },
  {
    id: "project-1",
    title: "Personal Website",
    completed: true, // This project is complete
    links: [
      {
        name: "repo",
        url: "https://github.com/oscargperales/website",
        icon: <BsGithub />,
      },
    ],
    image: web,
    description: "Source code for my personal website that showcases my data science portfolio",
    target: "_blank",
  },
];

export default projectConfig;
