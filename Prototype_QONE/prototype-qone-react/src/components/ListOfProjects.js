import React, {useEffect, useState} from 'react';
import CreateProject from '../modals/CreateProject'
import Card from './Card';

const ListOfProjects = () => {
    const [modal, setModal] = useState(false);
    const [projectList, setProjectList] = useState([])
    
    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        let response = await fetch('http://localhost:4999/api/projects').then((response)=>response.json()).then((data)=> data.data)
        if(response){
            setProjectList(response)
        }
    }

    const deleteProject = async (index) => {
        let tempList = projectList
        await fetch(`http://localhost:4999/api/project/${index}`, {method: 'DELETE'}).then(() => console.log('Delete successful' ));
        setProjectList(tempList)
        window.location.reload()
    }

    const updateListArray = async (obj, index) => {
        let tempList = projectList
        await fetch(`http://localhost:4999/api/project/${index}`, {method: 'PUT', body: JSON.stringify(obj), headers : {'Content-Type': 'application/json'
        }}).then((response)=>console.log(response));
        
        setProjectList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveProject = async (projectObj) => {

        await fetch('http://localhost:4999/api/project', {method: 'POST', body: JSON.stringify(projectObj), headers : {'Content-Type': 'application/json'
        }}).then((response)=>console.log(response));
        setProjectList(projectList)
        setModal(false)
        window.location.reload()
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Project List</h3>
                <button className = "btn mt-2" style = {{backgroundColor:"#e27602"}} onClick = {() => setModal(true)} >Create project</button>
            </div>
            <div className = "project-container">
            {projectList && projectList.map((obj) => <Card projectObj = {obj} index = {obj.globalId} deleteProject = {deleteProject} updateListArray = {updateListArray}/> )}
            </div>
            <CreateProject toggle = {toggle} modal = {modal} save = {saveProject}/>
        </>
    );
};

export default ListOfProjects;