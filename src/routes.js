import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CSS from './components/CSS'

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={CSS} exact path='/css' />
    </Switch>
)