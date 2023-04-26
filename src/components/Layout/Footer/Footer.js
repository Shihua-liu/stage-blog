import "./Footer.css"

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="info">
                <div>
                    <p>Naam: Shi Hua Liu</p>
                </div>
                <div>
                    <p>Studentnummer: 31684</p>
                </div>
                <div>
                    <p>Email: 31684@ma-web.nl</p>
                </div>
                <div className="portfolio">
                    <a className="portfolioLink" href="http://shi-hua-liu.nl" target="_blank">Link naar portfolio</a>
                </div>
            </div>
            <div className="navigation">

            </div>
        </footer>
    );
}

export default Footer;