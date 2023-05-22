import React, { useState, useEffect } from 'react';

import { useParams, useLocation } from "react-router-dom";
import NavBar from '../Layout/Navbar/NavBar';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';
import Footer from '../Layout/Footer/Footer';

import "./Modal.css"
const Modal = (props) => {
    const { state } = useLocation();
    const { loggedIn, cards } = state;





    return (
        <section className='modal'>
            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (

                <section className='modalContainer'>
                    <header className="modalHeader">
                        <h2>{cards.weeks}</h2>
                    </header>
                    <div className='modalContent'>
                        <div>
                            <h3>opdracht:</h3>
                            {cards.opdracht}
                        </div>
                        <div className='modalimg'>
                            <h3>foto:</h3>
                            <img className='modalimgimg' src={cards.img} alt="" />
                        </div>
                        <div>
                            <h3>uitleg van de foto</h3>
                            {cards.imgUileg}
                        </div>
                        <div>
                            <h3>samenwerking:</h3>
                            {cards.Samenwerking}
                        </div>
                        <div>
                            <h3>succes of fouten?</h3>
                            {cards.succesFouten}
                        </div>
                    </div>
                </section>
            ) : (
                <NotLoggedIn />
            )}
            <Footer />
        </section>
    );
}

export default Modal;