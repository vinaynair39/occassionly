import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import SignupPage from '../components/SignupPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import AddEventPage from '../components/AddEventPage';
import EventCard from '../components/EventCard';
import UserDetailsPage from '../components/UserDetailsPage';
import EditEventPage from '../components/EditEventPage';
import MyEventsPage from '../components/MyEventsPage';
import PrivateRoute from './PrivateRoute';
import EditUserDetails from '../components/EditUserDetails';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/signup" component={SignupPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/add" component={AddEventPage} exact={true}/>
        <PrivateRoute path='/event/:id' component={EventCard}></PrivateRoute>
        <PrivateRoute path='/edit/:id' component={EditEventPage}></PrivateRoute>
        <PrivateRoute path='/user/:handle' component={MyEventsPage}></PrivateRoute>
        <PrivateRoute path='/edit' component={EditUserDetails} exact={true}></PrivateRoute>
        <PrivateRoute path='/me' component={MyEventsPage} exact={true}></PrivateRoute>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
