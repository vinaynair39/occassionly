import React from 'react';
import EventList from './EventList';
// import EventFilter from './EventFilter';
// import FamousCard from './FamousCard';
const DashboardPage = () => (

    <div>
        {/* <BlogFilter/> */}
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