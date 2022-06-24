import Button from 'react-bootstrap/esm/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const history = useNavigate();
    return (
        <>
            <div className='container'>
                <div className='error d-flex flex-column justify-content-lg-center align-items-center'>
                    <h4>404 Error ! Page Not Found </h4>
                    <Button className='btn btn-primary' onClick={() => history('/')}>Redirect Login Page</Button>
                </div>

            </div>
        </>
    )
}

export default Error