import React from 'react';
import EventList from './EventList';
import EventFilters from './EventFilters';
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
        
    </div>
    </div>
    
)

export default DashboardPage;