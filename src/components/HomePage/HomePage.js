import { redirect, useLocation, Link, useNavigate, } from "react-router-dom";
import NavBar from "../Layout/Navbar/NavBar";
import Footer from "../Layout/Footer/Footer";
import NotLoggedIn from "../NotLoggedIn/NotLoggedIn";
import ReplySection from "../Reply/Reply";

import "./HomePage.css"
const HomePage = (props) => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const loggedIn = state


    const RedirectPackhouse = () => {
        navigate("/packhouse", { state: { loggedIn: loggedIn } })
    }

    const RedirectPackhouseChapter2 = () => {
        navigate("/packhouse-chapter-2", { state: { loggedIn: loggedIn } })

    }

    const Reflection = () => {
        navigate("/reflectie", { state: { loggedIn: loggedIn } } )
    }

    return (
        <section className="content">

            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (

                <>
                    <div className="blog">
                        <article className="blogMe">
                            <div className="introduction">
                                <header className="introductionHeader">
                                    <h1>Informatie over mij</h1>
                                </header>
                                <h3>Naam: Shi Hua Liu</h3>
                                <h3>Opleiding: Software development</h3>
                                <h3>School: Mbo Mediacollege Amsterdam</h3>
                                <div>
                                    <h4>Stage gelopen bij deze bedrijven:</h4>
                                    <ul className="stageLijst">
                                        <li>Packhouse</li>
                                    </ul>
                                </div>
                                <div className="Bio">
                                    <h3>Biografie</h3>
                                    <p>
                                        Ik ben Shi Hua Liu, ik doe momenteel de opleiding Software development op het Mediacollege Amsterdam. <br />
                                        Ik ben op deze opleiding gekomen omdat mijn vrienden er heen zouden gaan en het leek mij ook wel interessant om dit te doen. <br />
                                        Op dit moment heb ik al wat begrip van React en Vue, maar ik zou graag mijn kennis uit willen breiden in Javascript frameworks. <br />
                                    </p>

                                    <div className="Stages">
                                        <h3>Waar ben ik?</h3>
                                        <div>
                                            <h4>1ste stage</h4>
                                            <h4>Bedrijf: Packhouse</h4>
                                            <p>
                                                Packhouse is een klein software bedrijf dat specialiseert in het maken en brengen van producten voor klanten. <br />
                                                De producten dat ze opleveren is software en games voor verschillende klanten en bedrijven. <br />
                                                Waar ze mee werken is Vue en Unity.<br />
                                            </p>
                                        </div>
                                        <div>
                                            <h4>2de stage</h4>
                                            <h4>Bedrijf: Packhouse</h4>
                                            <p>
                                                ben hier weer begonnen met mijn 2de stage omdat de sfeer en de team geweldig is. <br />
                                                het plan was dat ik aan unity zou werken, maar door omstandigheden is dat niet gebeurd
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div className="miniNav">
                            <h3>Stages:</h3>
                            <div className="links">
                                <div className="linkBox">
                                    <a className="link" href="" onClick={RedirectPackhouse}>Packhouse</a>
                                </div>
                            </div>
                            <div className="links">
                                <div className="linkBox">
                                    <a className="link" href="" onClick={RedirectPackhouseChapter2}>Packhouse chapter 2</a>
                                </div>
                            </div>
                            <div className="links">
                                <div className="linkBox">
                                    <a className="link" href="" onClick={Reflection}>reflectie</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="replies">
                        <ReplySection />
                    </div>
                </>
            ) : (
                <NotLoggedIn />
            )}
            <Footer />

        </section>
    );
}

export default HomePage;