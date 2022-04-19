import React, { useState } from 'react'
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
const Main = (props) => {
    
    const [project, setProject] = useState([]);

    const removeFromDom = projectId => {
        setProject(project.filter(project => project._id !== projectId));
    }
    return (
        <div>
           <ProjectForm project={project} setProject={setProject} />
            <hr/>
           <ProjectList project={project} setProject={setProject}  removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;