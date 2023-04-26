import React, { useState, useEffect } from 'react';
import Data from "../../Data"
import { useLocation, useNavigate } from "react-router-dom"

import "./Packhouse.css"
import NavBar from '../Layout/Navbar/NavBar';
import Footer from '../Layout/Footer/Footer';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';

const Packhouse = (props) => {

    const [AllData, setAllData] = useState(Data)
    const [PackhouseData, setPackhouseData] = useState([])
    const { state } = useLocation()
    const loggedIn = state
    const navigate = useNavigate()

    useEffect(() => {
        AllData.map(data => {
            setPackhouseData(data.packhouse)
        })
    }, [])

    const OpenModal = (id) => {
        navigate(`/modal/${id}`, { state: { loggedIn: loggedIn, id: id}})
    }

    const card = PackhouseData.map(Cards => {
        return (
            <article className='Card' key={Cards.id} onClick={() => OpenModal(Cards.id)}>
                <h2>{Cards.weeks}</h2>
            </article>
        )
    })

    return (
        <section className='collection'>
            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (
                <section className='CardCollection'>
                    <header className='CardHeader'>
                        <h1>Packhouse</h1>
                    </header>
                    <div className='description'>
                        <p>Klik een van de kaarten om informatie te krijgen.</p>
                    </div>
                    <div className='Cards'>
                        {card}
                    </div>
                </section>
            ) : (
                <NotLoggedIn />
            )}

            <Footer />
        </section>

    );
}

export default Packhouse;