import React from 'react';
import EventList from './EventList';
import EventFilters from './EventFilters';

const DashboardPage = () => (
  <main className="content-container" aria-labelledby="campusflow-title">
    <h1 id="campusflow-title">CampusFlow Events</h1>
    <p className="subtitle">Discover what is happening around Florida Tech and plan your week.</p>
    <EventFilters />
    <div className="card">
      <div className="blog-card">
        <EventList />
      </div>
    </div>
  </main>
);

export default DashboardPage;