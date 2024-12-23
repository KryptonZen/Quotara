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

                <div className="SectionButton">
                    <button> <Link to='ContactUs'>Start Hiring</Link> </button>
                </div>
                
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
        <div className='Section' id="section1">
            
            <div className="TextBlock">
                <h2 className="SectionHeading">Effortless Remote Hiring Made Simple!</h2>
                <p className="SectionDescription">Curious about the advantages of international sales reps but unsure where to begin? You’ve come to the right place!</p>
                <ul className="SectionChecklist">
                    <li>Exceptional English proficiency</li>
                    <li>Extensive sales experience</li>
                    <li>The ideal sales talent for your business</li>
                    {/* <li>Only $1,000/month for top talent</li> */}
                </ul>
            </div>

            <img className="ImageBlock" src={img1} alt="person working on laptop" />
        </div>   
    )
}

function Section2() {
    return (
        <div className='Section' id="section2">

            <img className="ImageBlock" src={img2} alt="person working on laptop" />

            <div className="TextBlock" id="Section2TextBlock">
                <h2 className="SectionHeading">We'll find the perfect match for your needs!</h2>
                <p className="SectionDescription">Your ideal employee is whitin reach, ready to make a difference</p>
                <ul className="SectionChecklist">
                    <li> <strong>Seamless remote recruitment</strong> </li>
                        <p>Let our skilled recruiting team handle the search, interviews, and comprehensive vetting of candidates for you</p>
                    <li> <strong>Assured access to elite remote talent</strong> </li>
                        <p>We ensure that you find the right match for your business, and if any unforeseen situations occur, we will provide a replacement at no extra cost</p>
                    <li> <strong>Transparent pricing</strong> </li>
                        <p>‍Once you’ve chosen your ideal candidate, you’ll only pay a single, transparent fee. No hidden or recurring charges.</p>
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
                    <h2 className="SectionHeading">Entirely Managed Sales Teams</h2>
                    <p className="SectionDescription">We build personalized SDR, BDR, and AE teams that are tailored to the distinct specifications provided by our clients</p>
                    <ul className="SectionChecklist">
                        <li>Secure the finest 1% of global sales talent</li>
                        <li>Experienced US sales management to supervise team performance effectively</li>
                        <li>Easy operation, proven success.</li>
                    </ul>
                </div>

                <img className="ImageBlock" src={img3} alt="people collaborating at work" />
                
            </div>
        </div>
    )
}

export default MainSection
