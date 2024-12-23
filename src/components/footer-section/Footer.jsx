import "./Footer.css"
import { Link } from "react-router-dom"
import linkedIn from "../../assets/Linkedin-Logo.png"

function Footer() {
    return (
        <div className="FooterArea">

            <div className="FooterContainer">

                <div className="footer-left-section">
                    <h1>Quotara</h1>
                    <p>
                    A key advantage of the world's largest and rapidly growing companies lies in their strategic use of international sales talent.
                    This approach not only helps in cutting costs and boosting revenue but also creates life-altering opportunities for eager sales professionals on a global scale.
                    </p>
                    <a href="https://www.linkedin.com/company/quotara1/" target="_blank"> <img src={linkedIn} alt="linked-in" /> </a>
                </div>

                <div className="footer-right-section">
                    <ul>
                        <li> <Link to="OurAdvantage">Why Us?</Link> </li>
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
