import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="FooterArea">

            <div className="FooterContainer">

                <div className="footer-left-section">
                    <h1>Quotara</h1>
                    <p>
                        The best kept secret of the largest and fastest growing companies in the world is their
                        utilization of international sales talent. Reduce cost & grow revenue while providing life-changing
                        opportunities to hungry international sales professionals.
                    </p>
                    {/* <div className="social-icon">
                        <a href="#" target="_blank">
                        <img src="linkedin-icon.png" alt="LinkedIn" />
                        </a>
                    </div> */}
                </div>

                <div className="footer-right-section">
                    <ul>
                        <li> <Link to="OurAdvantage">Our Advantage</Link> </li>
                        <li> <Link to="AboutUs">About Us</Link> </li>
                        <li> <Link to="ContactUs">Get a Price</Link> </li>
                    </ul>
                    <Link to="ContactUs" className="lts-button">Let’s Talk Sales | »</Link>
                </div>

            </div>

        </div>
    )
}

export default Footer
