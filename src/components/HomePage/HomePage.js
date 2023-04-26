import { redirect, useLocation } from "react-router-dom";
import NavBar from "../Layout/Navbar/NavBar"

import "./HomePage.css"
const HomePage = (props) => {
    const { state } = useLocation()

    const loggenIn = state
    return (
        <section className="content">

            <NavBar />
            {loggenIn ? (
                
                <h1>je bent ingelogged</h1>
            ) : (
                <h1>login om de pagina te kunnen zien</h1>
            )}


        </section>
    );
}

export default HomePage;