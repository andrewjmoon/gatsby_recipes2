import React, {useContext} from 'react'
import {navigate} from 'gatsby'
import { IdentityContext } from '../../identity-context'

const Login = () => {
    const {netlifyIdentity} = useContext(IdentityContext)
    netlifyIdentity.on('login', (user) => {
        navigate('/user/dashboard')
    })

    return (
        <div>
            <h1>
                Login Page
            </h1>
            <button onClick={() => {
                netlifyIdentity.open()
            }}>
                Login
            </button>
        </div>
    )
} 

export default Login