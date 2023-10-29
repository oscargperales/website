import React from 'react';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div>
        <div className="skills-div">
          <h1 className="main-skills-h1">
            <span className="main-skills"><strong>Main Skills & Tools</strong></span>
          </h1>
          <div className="main-skills">
            <SkillsItems config={skillsConfig.mainSkills} />
          </div>
        </div>

        {/* Center-align the text */}
        <div className="center-text">
          <h1 className="complementary-skills-h1">
            <span className="complementary-skills"><strong>Complementary Skills & Tools</strong></span>
          </h1>
        </div>
        
        <div className="complementary-skills">
          <SkillsItems config={skillsConfig.complementarySkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
