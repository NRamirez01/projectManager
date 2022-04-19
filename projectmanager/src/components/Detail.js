import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Detail = (props) => {
  const [project, setProject] = useState({});
  const { id } = useParams();

  const removeFromDom = (projectId) => {
    setProject(project.filter((project) => project._id !== projectId));
  };

  const deleteProject = (projectId) => {
    axios
      .delete("http://localhost:8000/api/project/" + projectId)
      .then((res) => {
        removeFromDom(projectId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/project/" + id)
      .then((res) => {
        console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>Title: {project.title}</p>
      <p>Price: {project.price}</p>
      <p>Description: {project.description}</p>
      <Link to={`/home`}>
        <button
          onClick={(e) => {
            deleteProject(project._id);
          }}
        >
          Delete
        </button>
      </Link>
    </div>
  );
};
export default Detail;
