import React, { useState, useEffect } from 'react';
import Data2 from "../../Data"
import { useLocation, useNavigate } from "react-router-dom"

import "./Packhouse.css"
import NavBar from '../Layout/Navbar/NavBar';
import Footer from '../Layout/Footer/Footer';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';

const PackhouseChp2 = (props) => {

    const [AllData, setAllData] = useState(Data2)
    const [PackhouseData, setPackhouseData] = useState([])
    const [infoCards, setInfoCards] = useState()
    const { state } = useLocation()
    const loggedIn = state
    const navigate = useNavigate()

    useEffect(() => {
        AllData.map(data => {
            setPackhouseData(data.packhouse)
        })
    }, [])

    const OpenModal = (cards,id) => {
        console.log(cards, "cardds")
        navigate(`/modal/${id}`, { state: { loggedIn: loggedIn, cards: cards}})
    }
    const card = PackhouseData.map(cards => {
        console.log(cards)
        return (
            <article className='Card' key={cards.id} onClick={() => OpenModal(cards, cards.id)}>
                <h2>{cards.weeks}</h2>
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

export default PackhouseChp2;