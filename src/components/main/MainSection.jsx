import "./MainSection.css"
import img1 from "../../assets/h3.jpg"
import img2 from "../../assets/h2.jpg"
import img3 from "../../assets/h1.jpg"
import { Link } from "react-router-dom"

function MainSection() {
    return (
        <main className="MainSection">
            <section className="MainSectionA">
                <Section1/>
                <Section2/>
            </section>

            <section className="MainSectionB">
                <Section3/>
            </section>
        </main>
    )
}

function Section1() {
    return (
        <>
        <div className='Section' id="section1">
            
            <div className="TextBlock">
                <h2 className="SectionHeading"> Hassle-free remote hiring!</h2>
                <p className="SectionDescription">Want to explore the benefits of international sales reps but don’t know where to start? You’re in the right place!</p>
                <ul className="SectionChecklist">
                    <li>Excellent English skills</li>
                    <li>Years of experience in sales</li>
                    <li>The perfect sales rep for your company</li>
                    <li>Only $1,000/month for top talent</li>
                </ul>
            </div>

            <img className="ImageBlock" src={img1} alt="person working on laptop" />
            
        </div>
        
        <button className="SectionButton"> <Link to='ContactUs'>Start Hiring</Link> </button>
        </>
    )
}

function Section2() {
    return (
        <div className='Section' id="section2">

            <img className="ImageBlock" src={img2} alt="person working on laptop" />

            <div className="TextBlock" id="Section2TextBlock">
                <h2 className="SectionHeading">Let us find the perfect fit for you!</h2>
                <p className="SectionDescription">Your new favorite employee is just a step away</p>
                <ul className="SectionChecklist">
                    <li> <strong>Effortless remote hiring</strong> </li>
                        <p>Our professional recruiting team will find, interview and thoroughly vet candidates for you</p>
                    <li> <strong>Guaranteed top remote talent</strong> </li>
                        <p>‍We guarantee the perfect fit for your company, and in the event of any unforeseen circumstances, will replace your hired talent for you free of cost.</p>
                    <li> <strong>No hidden or recurring fees</strong> </li>
                        <p>‍Once you’ve selected your perfect candidate, a straightforward one-time fee is all you’ll pay</p>
                </ul>
            </div>
            
        </div>
    )
}

function Section3() {
    return (
        <div id="section3Bg">
            <div className='Section' id="section3">

                <div className="TextBlock">
                    <h2 className="SectionHeading">Fully Managed Sales Teams</h2>
                    <p className="SectionDescription">We build custom SDR/BDR/AE teams to fit our client’s specs.</p>
                    <ul className="SectionChecklist">
                        <li>Hire top 1% international sales talent</li>
                        <li>Proven US sales management to oversee team performance</li>
                        <li>No hassle, just results</li>
                    </ul>
                </div>

                <img className="ImageBlock" src={img3} alt="people collaborating at work" />
                
            </div>
        </div>
    )
}

export default MainSection
