import React, { useState } from 'react'
import axios from 'axios';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
const Main = (props) => {
    
    const [project, setProject] = useState([]);
    
    return (
        <div>
           <ProjectForm project={project} setProject={setProject} />
            <hr/>
           <ProjectList project={project} setProject={setProject} />
        </div>
    )
}
export default Main;