import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashComponent from './splash/splash';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import IndexContainer from './index/index_container';

const App = () => (
    <>
        <Modal />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/register" component={SignupFormContainer} />
        <Route exact path="/" component={SplashComponent} />
        <Switch>
        <ProtectedRoute exact path="/channel/:serverId" component={IndexContainer} />
        <ProtectedRoute exact path="/channel/:serverId/:channelId"  component={IndexContainer}/>
        </Switch>
    </>
);

export default App;