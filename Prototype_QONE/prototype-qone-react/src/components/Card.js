



import React, {useState} from 'react';
import EditProject from '../modals/EditProject'

const Card = ({projectObj, index, deleteProject, updateListArray}) => {
    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal);
    }

    const updateProject = (obj) => {
        updateListArray(obj, projectObj.globalId)
    }

    const handleDelete = () => {
        deleteProject(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": "#e27602"}}></div>
            <div class = "project-holder">
                <span class = "card-header" style={{"background-color": "#e27602", "border-radius": "10px"}}>{projectObj.Name}</span>
                <p className = "mt-3">{projectObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : "#e27602", "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : "#e27602", "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditProject modal = {modal} toggle = {toggle} updateProject = {updateProject} projectObj = {projectObj}/>
        </div>
    );
};

export default Card;