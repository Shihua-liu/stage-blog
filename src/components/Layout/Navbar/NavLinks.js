import "./Navigation.css"

import React from "react"
import { Link } from "react-router-dom"
const NavLinks = (props) => {
    return (
        <>
            {props.loggedIn ? (
                <ul className="NavBar" >
                    <Link to="/">
                        <li className="NavBar__list">
                            <a className="NavBar__list--links" href="">Loguit</a>
                        </li>
                    </Link>
                </ul >
            ) : (
                <ul className="NavBar" >
                    <Link to="/">
                        <li className="NavBar__list">
                            <a className="NavBar__list--links" href="">Klik hier en login om de Blog te kunnen bekijken</a>
                        </li>
                    </Link>
                </ul>
            )}
        </>




    )
}

export default NavLinks