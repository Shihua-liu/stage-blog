import "./Reflectie.css"
import React, { useState, useEffect } from 'react';

import { useParams, useLocation } from "react-router-dom";
import NavBar from '../Layout/Navbar/NavBar';
import Footer from '../Layout/Footer/Footer';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';

import GitAccount from "./Img-reflectie/Github-account.jpg"
const Reflectie = (props) => {
    const { state } = useLocation();
    const { loggedIn } = state;
    return (

        <div className="ref">
            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (
                <div className="Reflection">
                    <section className="Intro">
                        <h1>
                            Reflectie
                        </h1>
                        <p>Door deze jaar heen ben ik 2x stage gaan lopen en ik heb een hoop gezien en geleerd. Het was een avontuur en het was me een genoegen om bij Packhouse mijn stages te doen!</p>
                    </section>

                    <section className="Leerdoelen">
                        <h1>
                            Leerdoelen
                        </h1>
                        <p>
                            - Mijn grootste leerdoel was om meer javascript te leren en dat is me zeker gelukt. <br />
                            - In een bedrijfs omgeving werken. <br />
                            - kennis en vaardigheden ontwikkelen of verder uitbreiden.
                        </p>
                    </section>

                    <section className="LeerdoelenUitleggen">
                        <h3>
                            Leerdoelen uitleg
                        </h3>
                        <div className="leerdoelUitleg">
                            <h4>
                                1ste leerdoel:
                            </h4>
                            <p>
                                Zoals er al staat, was meer Javascript leren mijn grootste leerdoel, sinds je er veel mee kan doen, de meeste projecten tegenwoordig worden gemaakt met gebruik van javascript en mijn kennis met javascript was enorm klein. Dus ik gaf mezelf de uitdaging om stage te lopen bij een bedrijf dat veel gebruik maakt met Javascript. Packhouse maakt veel gebruik van Typescript, Vue en soms React. Hier heb ik veel geleerd door projecten te maken voor de klant en soms ook uit mijn comfort zone te gaan door bijvoorbeeld een discord bot te maken met gebruik van DiscordJS.
                            </p>
                        </div>
                        <div className="leerdoelUitleg">
                            <h4>
                                2de leerdoel:
                            </h4>
                            <p>
                                In een klas werken is natuurlijk heel anders dan in een bedrijf. Ik heb veel lopen werken met collega's en heb ook vaak hulp kunnen vragen. Ook dingen zoals in een portal werken, Github met pull requesten en merge reviews. ook heb ik bijvoorbeeld lope werken met api's waarmee we werken of dat ik een bestand nodig heb van een collega of er is een snel een bugfix nodig of van project heen en weer gaan omdat er iets nieuws/veranderingen nodig is.
                            </p>
                        </div>
                        <div className="leerdoelUitleg">
                            <h4>
                                3de leerdoel:
                            </h4>
                            <p>
                                Dit sluit beetje aan op de eerste en tweede leerdoelen, maar dit gaat meer over universeel zou ik zeggen. Door bijvoorbeeld met iets heel anders te gaan doen en kleine taakjes buiten coderen, zoals koffie zetten voor iedereen, schoonmaken, dingentjes ophalen van winkels, optijd je vrije dagen en als je ziek bent snel env roeg door te geven. Of als er een onverwachte situatie komt dat ik het snel moet regelen.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2>
                            Bijdragen:
                        </h2>
                        <p>
                            - Murder At The Mansion (MATM)<br />
                            - Spy training<br />
                            - Crazy game show<br />
                            - Japanese Born Ape Society website en marketplace (JBAS)<br />
                            - Packhouse Portal
                            - Vue library
                        </p>
                    </section>

                    <section>
                        <h4>
                            Bijdragen uitleg:
                        </h4>
                        <p>
                            In mijn eerste stage periode in Packhouse was mijn grootste bijdrage in JBAS vooral voor de website, want er waren veel eisen waar in aan moest voldoen, maar uiteindelijk kregen we niks meer te horen en was het een project dat we hadden geschrapt. Dit komt door slechte communicatie en levering van de klant. wij hadden vaak de klant gecontacteerd voor foto's maar nooit reactie terug gekregen. <br/><br/>

                            In mijn tweede stage periode heb ik vooral aan MATM gezeten, omdat de lauch van de game binnenkort kwam en na de lauchs allemaal data moesten verzamelen van pensen die het speelde en verbeteringen moesten verwerken. hier heb ik enorm veel geleerd in Vue en Typescript. Dit komt omdat het de de populairste game was van X-cube en het was echt enorm gaaf om bij z'on enorme game te kunnen werken. <br/> <br/>

                            Mijn andere bijdragen waren niet enorm groot. daar heb ik wel wat aan gezeten maar dat was vooral bugfixes, styling veranderingen en/of toevoegingen of veranderingen.<br/><br/>

                            In het begin had ik bijvoorbeeld gewerkt in de portal en dat was om soort de deadlines van de taken of milestones te laten zien, en volgens een oude stagiare had dat hem enorm geholpen met andere taken van hem.
                            <br/><br/>
                            Als ik beetje vergelijk met hoe ik toen en nu werk, is het wel een verschil. Ik wist eerst niet hoe ik bijvoorbeeld een probleem moet aanpakken, maar nu kan ik heel makkelijk weten wat ik moet gebruiken en wanneer het de beste moment is.  
                        </p>
                        <img src={GitAccount} alt="github account" />
                    </section>


                </div>
            ) : (
                <NotLoggedIn />
            )}
            <Footer />

        </div>
    );
}

export default Reflectie;