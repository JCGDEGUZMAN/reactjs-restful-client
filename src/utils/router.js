import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Profiles from "../modules/profile/profiles"
import NewProfile from "../modules/profile/new_profile";

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route 
                        path="/"
                        component={Profiles}
                        exact
                    />
                    <Route 
                        path="/new-profile"
                        component={NewProfile}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;