import React from "react";

const About = (props) => {
  const about = props.about.start
  const aboutExit = props.about.aboutExit



  return (
      <section id="about">
           <div className="about-card" style={{backgroundColor: "#263238"}}>
                <div className="card-header">
                  <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                />{" "}
                &nbsp;{" "}
                <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                />{" "}
                &nbsp;{" "}
                <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    />
                </div>
                <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                        height: "auto",
                        fontsize: "120%",
                        lineHeight: "138",
                        backgroundColor: "#F6F6F6",
                        color: "#8e8d8a",
                        padding: "2rem"
                    }}
                  >
                    {about}
                    <br/>
                    {aboutExit}
                  </div>
                </div>
              </section>
  );
                  }

export default About;