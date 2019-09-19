import React , { useState } from 'react';
import {
    FaInbox,
    FaRegCalendar,
    FaRegCalendarAlt,
    FaChevronDown
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../context/index';
import { Projects } from './Projects';
import { AddProject } from './AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const [active, setActive] = useState('inbox');
    const [showProject, setShowProjects ] = useState(true)



    return(
        <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li datatest-id="inbox" className="inbox"> 
             <span><FaInbox /></span>
             <span className="labelSpace">Inbox</span>
        </li>
        <li datatest-id="today" className="today">
             <span><FaRegCalendar/></span>
             <span className="labelSpace">Today</span>
        </li>
        <li datatest-id="next_7" className="next_7">
             <span><FaRegCalendarAlt/></span>
             <span className="labelSpace">Next 7 days</span>
        </li>
    </ul>


    <div className="sidebar__middle">
      
    </div>
    <span><FaChevronDown /></span>
    <ul className="sidebar__projects">
   
        <h2>Projects</h2>
        <Projects />
    </ul>
        <AddProject />

    {/* <Projects /> */}
    

</div>
    )
}

