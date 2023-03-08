import React from 'react'
import {Router} from '@reach/router'
import PrivateRoute from '../../components/private-route'
import Login from '../../components/login'
import TestPage from '../../components/test'




const Dash = ()=> <h1>Dashboard Page</h1>

const Default = ()=> <h1>Default Page</h1>

const App = () => {
    <Router basepath="/app">
        <PrivateRoute component={Dash} path= "/dashboard" />
        <Login path= "/login" />
        <TestPage path="/test" />
        <Default path="/" />
        Hello
    </Router>
}

export default App