import "./OurAdvantage.css"
import img1 from "../../assets/adv-1.jpg"

function OurAdvantage() {
  return (
    <>
      <OAsection1/>
      <OAsection2/>
    </>
  )
}

function OAsection1() {
    return (
        <section className="OA-section1">

            <div className="OA-s1-text-container">
                <h1>What Distinguishes Us</h1>
                <p>Our executives have successfully directed sales teams at leading high-growth SaaS firms, equipping us with a deep understanding of the talent required to ensure success.</p>
                <p>You have the option to select the model that aligns best with your business requirements:</p>
                <ul>
                    <li><strong>Managed Model</strong> – you delegate the entire process to us. We handle the recruitment, training, and management of an offshore sales team. Experience seamless results without the hassle.</li>
                    <li><strong>Recruiter Model</strong> – whether you are looking to add 1-2 cost-effective sales representatives or integrate 20 into an existing system, our expert recruiters will guarantee you find the ideal candidates.</li>
                </ul>
            </div>

            <div className="OA-s1-image-container">
                <img src={img1} alt="Sales team collaboration"/>
            </div>
            
        </section>
    )
}
function OAsection2() {
    return (
        <div className="OAsection2">
        <section className="benefits-container">

            <h1>Advantages for you</h1>

            <div className="benefits">
                <div className="benefit">
                    <h2>➔ Enhance sales and revenue by 3-5 times</h2>
                    <p>Unlock significant potential by employing representatives who cost between $1,000 and $2,000 per month, yet deliver performance comparable to your existing team.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Reduce Customer Acquisition Cost (CAC)</h2>
                    <p>Achieve up to an 80% reduction in expenditure on top-tier talent, thereby boosting profitability and minimizing financial losses.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Foster greater diversity within your organization</h2>
                    <p>Diverse teams consistently outperform their less diverse counterparts.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Expand your pipeline and revenue</h2>
                    <p>Recruit 3-4 equally effective representatives for the same investment as one of your current employees.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Strategically target lower revenue Annual Contract Value (ACV) segments</h2>
                    <p>Explore markets that may have previously seemed impractical to penetrate.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Create transformative opportunities</h2>
                    <p>Offer exceptional career prospects to ambitious sales professionals who are fully committed to achieving success.</p>
                </div>

            </div>

        </section>
        </div>
    )
}


export default OurAdvantage
