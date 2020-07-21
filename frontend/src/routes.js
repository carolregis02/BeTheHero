import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './Logon';
import Register from './Register';
import Profile from './Profile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}