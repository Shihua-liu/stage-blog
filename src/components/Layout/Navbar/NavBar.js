import Navigation from "./Navigation"
import MobileNavigation from "./MobileNavigation";

import "./Navigation.css";

const NavBar = (props) => {
    return ( 
        <div className="NavBar">
            <Navigation loggedIn={props.loggedIn}/>
            <MobileNavigation loggedIn={props.loggedIn}/>
        </div>
     );
}
 
export default NavBar;