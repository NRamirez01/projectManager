import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProjectList = (props) => {
  const { removeFromDom, project, setProject } = props;
  const deleteProject = (projectId) => {
      axios.delete('http://localhost:8000/api/project/' + projectId)
          .then(res => {
              removeFromDom(projectId)
          })
          .catch(err => console.log(err))
  }

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
                <td>
                  <Link to={"/api/project/edit/" + oneProject._id}>Edit</Link>
                </td>
                <td>
                <button onClick={(e)=>{deleteProject(oneProject._id)}}>
                            Delete
                        </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProjectList;
