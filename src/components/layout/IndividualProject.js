import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; 
import { useProjectsValue , useSelectedProjectValue } from '../context/index';
import { firebase } from '../../firebase';




export const IndividualProject = (props) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const {projects, setProjects }= useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    

    const deleteProject = projectId => {
        firebase
        .firestore()
        .collection("projects")
        .doc('0yW2GQZxrEekQbWHKQdo')
        .delete()
        .then(() => {
            setProjects([...projects]);
            setSelectedProject('INBOX');
        })
    };

    return(
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name" style ={{ marginLeft: 5}}>{props.project.name}</span>
            <span className="sidebar__project-delete" onClick = {() => setShowConfirm(!showConfirm)}>
                <FaTrashAlt />
                {showConfirm && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure you want to delete this Project?</p>
                          
                            <button
                            type="button"
                            onClick={() => deleteProject(props.project.projectId)}>
                            Delete
                            </button>
                            <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                            
                          
                        </div>

                    </div>
                )}
            </span>
        </>
    )
}