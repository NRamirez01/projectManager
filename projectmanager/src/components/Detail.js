import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [project, setProject] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/project/" + id)
            .then( res => {
                console.log(res.data);
                setProject(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <p>Title: {project.title}</p>
            <p>Price: {project.price}</p>
            <p>Description: {project.description}</p>
        </div>
    )
}
export default Detail;