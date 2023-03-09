import React from 'react'
import {Router} from '@reach/router'
import PrivateRoute from '../../components/private-route'
import Login from '../../components/login'



const Dash = ()=> <h1>Dashboard Page</h1>

const Default = ()=> <h1>Default Page</h1>

const App = () => {
    return (
    <>
    <Router basepath="/user">
        <PrivateRoute component={Dash} path= "/dashboard" />
        <Login path= "/login" />
        <Default path="/" />
    
    </Router>
    </>
    )
}

export default App