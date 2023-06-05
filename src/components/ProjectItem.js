import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyNames = technologies.map((techName) => {
    return <span key={techName}>{techName}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyNames}
      </div>
    </div>
  );
}

export default ProjectItem;
