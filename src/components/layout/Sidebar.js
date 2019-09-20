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
    const { setSelectedProject } = useSelectedProjectValue( );
    const [active, setActive] = useState('inbox');
    const [showProject, setShowProjects ] = useState(true)



    return(
        <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li datatest-id="inbox" 
        className={active === 'inbox' ? 'active' : undefined}
        onClick={() => {
            setActive('inbox')
            setSelectedProject('INBOX')
        }}
        > 
             <span><FaInbox /></span>
             <span className="labelSpace">Inbox</span>
        </li>
        <li datatest-id="today"
        className={active === 'today' ? 'active' : undefined}
        onClick={() => {
            setActive('today')
            setSelectedProject('TODAY')
        }}>
             <span><FaRegCalendar/></span>
             <span className="labelSpace">Today</span>
        </li>
        <li datatest-id="next_7"
        className={active === 'next_7' ? 'active' : undefined}
        onClick={() => {
            setActive('next_7')
            setSelectedProject('NEXT_7')
        }}>
             <span><FaRegCalendarAlt/></span>
             <span className="labelSpace">Next 7 days</span>
        </li>
    </ul>


    <div className="sidebar__middle" onClick={() => setShowProjects(!showProject)}>
      <span>
      <FaChevronDown className={!showProject ? 'hidden-projects' : undefined}/>
      </span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">
        {showProject && <Projects />}
       
        
    </ul>

    {showProject && <AddProject />}
      

    

</div>
    )
}

