import React from 'react';
import EventList from './EventList';
import EventFilters from './EventFilters';
import {Link} from 'react-router-dom';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
// import FamousCard from './FamousCard';
const DashboardPage = () => (

    <div>
        <EventFilters/>
        <div className="card">
        <div className="blog-card">
            <EventList/>
        </div>
        <div className="famous-card">
            {/* <FamousCard/> */}
        </div>   
        {true && <Link to="/add" className="button-floating"><button><FontAwesomeIcon icon={faPlus}/></button></Link> }
    </div>
    

    </div>
    
)

export default DashboardPage;