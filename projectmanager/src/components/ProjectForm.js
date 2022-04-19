import React, { useState } from 'react'
import axios from 'axios';

const ProjectForm= (props) => {
    const {project, setProject} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/project', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProject([...project, res.data]);
            })
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange= {(e)=> setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange= {(e)=> setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange= {(e)=> setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )


    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //         .then(res=>setMessage(res.data.message))
    //         .catch(err=>console.log(err))
    // }, []);
    // return (
    //     <div>
    //         <h2>Message from the backend: {message}</h2>
    //     </div>
    // )
}

export default ProjectForm;

