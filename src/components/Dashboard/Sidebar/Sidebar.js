import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import { useContext} from 'react';
import { useEffect,useState } from 'react';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const [isDoctor,setIsDoctor]= useState(false)

    useEffect(()=>{
        fetch('https://arcane-fjord-93576.herokuapp.com/isDoctor',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsDoctor(data));
    },[])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
               {
                   isDoctor && <div>
                        <li>
                    <Link to="/doctor/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white" >
                      <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Doctors</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>

                   </div>
               }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;