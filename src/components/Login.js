import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import Sign_img from './Sign_img';
const Login = () => {

    const history = useNavigate();

    const [inputv, setInputv] = useState({
        email: '',
        password: ''
    });

    const [data, setData] = useState([]);
    // console.log(inputv)
    const getData = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;

        setInputv(() => {
            return {
                ...inputv,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("LoginData");

        const { email, password } = inputv;

        if (email === '') {
            alert("email is required");
        } else if (!email.includes("@")) {
            alert("plz enter valid email")
        } else if (password === '') {
            alert("Password is required");
        } else if (password.length < 5) {
            alert("Password length should be greater than 5");
        } else {
            if (getUserArr && getUserArr.length) {
                const userdata = JSON.parse(getUserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password;
                });

                if (userlogin.length == 0) {
                    alert("Please Enter Valid Details!")
                } else {
                    console.log("User Logged in Successfully");
                    localStorage.setItem("User_Login", JSON.stringify(userlogin));
                    history('/details');
                }

            }
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>
                            <Form.Group className='mb-3 col-lg-6' controlId='formbasicemail'>
                                <Form.Control type='email' onChange={getData} name='email' placeholder='Your Email'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-6' controlId='formbasicpassword'>
                                <Form.Control type='password' name='password' onChange={getData} placeholder='Your Password'></Form.Control>
                            </Form.Group>
                            <Button type='submit' className='mb-3' onClick={addData} style={{ background: "rgb(67,185,127)" }}>Submit</Button>

                        </Form>
                        <p className='mb-3'>Create Account <span><NavLink to='/'>SignUp</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>

            </div>
        </>
    )
}

export default Login;