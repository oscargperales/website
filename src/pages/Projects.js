import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import projectConfig from "../assets/configs/projectConfig"
import "../assets/images/OIG.jpeg"
import React from 'react'

const Projects = () => {
    return (
      <div className="wrapper">
        {projectConfig.map((project) => (
          <CardItem key={project.id} item={project} />
        ))}
      </div>
    );
  };
  
  export default Projects