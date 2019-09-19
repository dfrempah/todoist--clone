import React, { useEffect } from 'react';
import { Checkbox } from '../../Checkbox';
import { useTasks } from '../hooks/'
import { collatedTasks } from '../constants/index';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers/index';
import { useSelectedProjectValue, useProjectsValue } from '../../components/context/index';




export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue(selectedProject);
    const { tasks } = useTasks(selectedProject);


    // console.log("this is projects",projects)
    // console.log("this is tasks",tasks)




    let projectName = '';

    if(projects && selectedProject && !collatedTasksExist(selectedProject) ){
        console.log(projects)
        projectName = getTitle(projects, selectedProject)
        console.log("project name is ", projectName)
    }

    // if(collatedTasksExist(selectedProject) && selectedProject){
    //     projectName = getCollatedTitle(collatedTasks, selectedProject)
    //     console.log('projectName 2: ', projectName.name)
    // }


    // useEffect(() => {
    //     document.title = `${projectName}: Todoist`
    // })
    return(
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key = {`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}