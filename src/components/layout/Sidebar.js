import React , { useState } from 'react';
import {
    FaInbox,
    FaRegCalendar,
    FaRegCalendarAlt,
    FaChevronDown
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../context/index';
import { Projects } from './Projects';

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
        <span><FaChevronDown /></span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">
        Projects will be here !
    </ul>
    
    {/* <Projects /> */}

</div>
    )
}

