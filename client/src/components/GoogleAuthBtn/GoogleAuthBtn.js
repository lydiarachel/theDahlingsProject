import React, { Component } from 'react'

class GoogleAuthBtn extends Component {

    render(){
        return (
            <a href='http://localhost:8080/auth/google' className='btn btn-large btn-auth-page'>Google+</a>
        )
    }
}

export default GoogleAuthBtn