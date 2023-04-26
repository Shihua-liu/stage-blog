import NavLinks from "./NavLinks"
import Hamburger from "./Navigation.css"
import React, { useState } from 'react';

import "./Navigation.css"

import {AiOutlineCloseCircle} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"

const MobileNavigation = (props) =>{

    const [open, setOpen] = useState(false);

    const hamburgericon = <GiHamburgerMenu className={Hamburger} size="4rem" color="black"
    onClick={() => setOpen(!open)}/>

    const closeicon = <AiOutlineCloseCircle className={Hamburger} size="4rem" color="black"
    onClick={() => setOpen(!open)}/>
    
    return(
        <nav className="MobileNavigation">
            {open ? closeicon : hamburgericon}
            {open && <NavLinks loggedIn={props.loggedIn}/>}
        
        </nav>
        
    )
}

export default MobileNavigation