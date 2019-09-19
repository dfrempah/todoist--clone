import React, { useState  } from 'react'
import { useSelectedProjectValue, useProjectsValue } from '../context/index';
import { IndividualProject } from './IndividualProject';




export const Projects = ({activeValue = null}) => {
    const [active , setActive] = useState(activeValue);
    const { projects } = useProjectsValue()
    const { setSelectedProject} = useSelectedProjectValue();
        
    return(
        <ul>
        {
            projects &&
        projects.map(project => (
            <li
            styles = {{ display: "inline-block"}}
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid="project-action"
            className = {
                active === project.projectId
                ? 'active sidebar__project'
                : 'sidebar__project'
            }
            onClick = {() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId)
            }}
            ><IndividualProject project={project} /></li>
          

        ))  
        }
        </ul>
    )

}