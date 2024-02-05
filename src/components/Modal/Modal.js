import React, { useState, useEffect } from 'react';

import { useParams, useLocation } from "react-router-dom";
import NavBar from '../Layout/Navbar/NavBar';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';
import Footer from '../Layout/Footer/Footer';
import ReplySection from "../Reply/Reply";

import "./Modal.css"
const Modal = (props) => {
    const { state } = useLocation();
    const { loggedIn, cards } = state;





    return (
        <section className='modal'>
            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (
                <>
                    <section className='modalContainer'>
                        <header className="modalHeader">
                            <h2>{cards.weeks}</h2>
                        </header>
                        <div className='modalContent'>
                            { cards?.opdracht ? (<div>
                                <h3>opdracht:</h3>
                                {cards?.opdracht}
                            </div>) : <span></span>}
                            <div className='modalimg'>
                                <h3>foto:</h3>
                                <img className='modalimgimg' src={cards.img} alt="" />
                            </div>
                            {cards?.imgUileg ? (<div>
                                <h3>uitleg van de foto</h3>
                                {cards?.imgUileg}
                            </div>) : <span></span>}
                            {cards?.Samenwerking ? (
                                <div>
                                    <h3>samenwerking:</h3>
                                    {cards?.Samenwerking}
                                </div>

                            ) : <span></span>}
                            {cards?.succesFouten ? (
                                <div>
                                    <h3>succes of fouten?</h3>
                                    {cards?.succesFouten}
                                </div>

                            ) : <span></span>}
                            {cards?.werkproc ? (<div>
                                <h3>terug komende werkprocessen </h3>
                                {cards.werkproc}
                            </div>) : <span></span>}
                        </div>
                    </section>
                    <div className="replies">
                        <ReplySection />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )
            }
            <Footer />
        </section >
    );
}

export default Modal;