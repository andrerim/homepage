import React from "react";
import "./projects.css";

const Project = props => {
  return (
    <div className="project">
      <a href={props.projectLink}><img className="projectimg" src={props.projectimg}  width="400px" alt="project screenshot"></img></a>
      <div className="projectinfo">
        <h1>
          <a className="demoLink"href={props.projectLink}>{props.projectName}</a>
        </h1>
        <p>
          {props.projectSummary + " "} 
          <a id="repLink" href={props.projectRep}>
            Repository
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
