import React, { useState, useEffect } from 'react';

import { useParams, useLocation } from "react-router-dom";
import NavBar from '../Layout/Navbar/NavBar';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';
import Footer from '../Layout/Footer/Footer';
import Data from "../../Data"

import "./Modal.css"
const Modal = (props) => {
    const { state } = useLocation()
    const { loggedIn, id } = state

    const [AllData, setAllData] = useState(Data)
    const [PackhouseData, setPackhouseData] = useState([])

    useEffect(() => {
        AllData.map(data => {
            setPackhouseData(data.packhouse)
        })
    }, [])

    const info = PackhouseData.map(MappedData => {
        
    })

    return (
        <section className='modal'>
            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (
                <section className='modalContainer'>

                </section>
            ) : (
                <NotLoggedIn />
            )}
            <Footer />
        </section>
    );
}

export default Modal;