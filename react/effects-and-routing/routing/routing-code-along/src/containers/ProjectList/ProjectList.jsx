import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../services/project-services";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((data) => setProjects(data));
  }, []);
  return (
    <section>
      {ProjectList.map((project) => {
        return <p>{project.title}</p>;
      })}
    </section>
  );
};

export default ProjectList;
