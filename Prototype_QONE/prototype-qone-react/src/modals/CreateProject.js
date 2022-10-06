import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateProject = ({modal, toggle, save}) => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "projectName"){
            setProjectName(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let projectObj = {}
        projectObj["Name"] = projectName
        projectObj["Description"] = description
        save(projectObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create project</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>project Name</label>
                        <input type="text" className = "form-control" value = {projectName} onChange = {handleChange} name = "projectName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateProject;