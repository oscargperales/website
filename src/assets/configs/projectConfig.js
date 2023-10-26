import cover from "../images/2014_FHD.png"

import {TbBrandGithubFilled} from "react-icons/tb";

import React from 'react'

const projectConfig = [
  {
      id: "project-1",
      title: "J Cole Album Analysis",
      links: [
      {
           name:"repo",
           url: "https://github.com/oscargperales/jcoleproject",
           icon: <TbBrandGithubFilled/>,
      }
      ],
      image: cover,
      description: "Analyzed J. Cole's albums, exploring music and song connentions.",
      target: "_blank"
    }
]

export default projectConfig