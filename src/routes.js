import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CSS1 from './components/CSS1'

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={CSS1} exact path='/css1' />
    </Switch>
)