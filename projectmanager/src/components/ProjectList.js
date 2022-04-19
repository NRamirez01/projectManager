import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProjectList = (props) => {
  const { project, setProject } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/project")
      .then((res) => {
        console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {project.map((oneProject, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/api/project/${oneProject._id}`}>
                    {oneProject.title}
                  </Link>
                </td>
                <td>{oneProject.price}</td>
                <td>{oneProject.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProjectList;
