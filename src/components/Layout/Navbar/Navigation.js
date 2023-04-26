import NavLinks from "./NavLinks"

import "./Navigation.css"
const Navigation = (props) => {
    return(
        <nav className="Navigation">
            <NavLinks loggedIn={props.loggedIn}/>
            
        </nav>
        
    );
}

export default Navigation