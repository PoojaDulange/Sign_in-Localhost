import Modal from 'react-bootstrap/Modal'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Details = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

    var todayDate = new Date().toISOString().slice(0, 10);

    const [logindata, setLoginData] = useState([]);

    const logOut = () => {
        localStorage.removeItem("User_Login");
        history("/");
    }
    const Birthday = () => {
        const udata = localStorage.getItem("User_Login");
        if (udata && udata.length) {
            const details = JSON.parse(udata);
            setLoginData(details);

            const userbirth = logindata.map((el, k) => {
                return el.date == todayDate
            });
            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }
    useEffect(() => {
        Birthday();
    }, []);
    return (
        <>
            {
                logindata.length === 0 ? "Error" :
                    <>
                        <h1 className='text-center'>{logindata[0].name}</h1>
                        <Button className='position-absolute end-0' onClick={logOut}>LogOut</Button>
                        {
                            logindata[0].date === todayDate ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{logindata[0].name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Wish you many many happy Birthday</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='secondary' onClick={handleClose}>Cancel</Button>
                                        <Button variant='primary' onClick={handleClose}>Done</Button>
                                    </Modal.Footer>
                                </Modal> : ""
                        }

                    </>
            }
        </>
    )
}

export default Details;