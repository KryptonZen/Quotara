import "./ContactUs.css"
import dotsPattern from '../../assets/dots-pattern.png'

function ContactUs() {
    return (
        <section className="FormSection">
            
            <div className="ContactBackground">
                <img src={dotsPattern} alt="background-pattern" />
                <img src={dotsPattern} alt="background-pattern" />
            </div>

            <div className="form-container">

                <div className="form-header">
                    <h1>Contact Us</h1>
                    <p>Help us better understand your business and your specific needs.</p>
                </div>
                
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" name="first-name" placeholder="First Name" required/>
                        <input type="text" name="last-name" placeholder="Last Name" required/>
                    </div>

                    <div className="form-row">
                        <input type="email" name="email" placeholder="Work Email" required/>
                        <input type="tel" name="phone" placeholder="Phone Number" required/>
                    </div>

                    <div className="form-row">
                        <input type="url" name="site-link" placeholder="Company Website or Linkeden profile"/>
                        {/* <input type="text" placeholder="How many employees work at your company?"/> */}
                    </div>

                    <div className="form-row">
                        <input type="text" name="looking-for" placeholder="Looking for more than sales talent? Let us know what you're looking for."/>
                    </div>

                    {/* <div className="form-row">
                        <input type="text" placeholder="Headquarters"/>
                    </div> */}

                    <div className="form-row">
                        <button type="submit">Schedule a call with us</button>
                    </div>

                </form>

            </div>
        </section>
    )
}

export default ContactUs
