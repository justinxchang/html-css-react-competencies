import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import CSS from './components/CSS'
import ReactPage from './components/ReactPage'

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={CSS} path='/css' />
        <Route component={ReactPage} path='/react' />
    </Switch>
)