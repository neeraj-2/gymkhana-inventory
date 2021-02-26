import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import UserProfile from './components/profiles/UserProfile';
import Modal from './components/pages/Modal';

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={UserProfile} />
            {/* <Route path="/logout" component={Logout}/> */}
            {/* <Route path="/notification" component={Notification}/> */}
            <Route path="/modal" component={Modal} />
        </Switch>
    );
};

export default Router;
