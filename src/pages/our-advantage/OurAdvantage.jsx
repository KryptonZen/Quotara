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
                <h1>What Sets Us Apart</h1>
                <p>Our execs have led sales teams at top high growth SaaS companies so we know exactly what caliber of talent is needed to guarantee success.</p>
                <p>You can choose the model that best suits your business needs:</p>
                <ul>
                    <li><strong>Managed Model</strong> – you outsource the entire job to us. We recruit, train, & manage an offshore sales team. No headache, just results.</li>
                    <li><strong>Recruiter Model</strong> – want to explore 1-2 low-cost sales reps or plug 20 into a system that’s already working? Our professional recruiters ensure you get the right candidates.</li>
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

            <h1>Benefits to you</h1>

            <div className="benefits">
                <div className="benefit">
                    <h2>➔ Increase sales/revenue by 3-5x</h2>
                    <p>Realize massive potential through reps that cost 1-2k/month but perform just as well as your current reps.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Lower CAC</h2>
                    <p>Spend up to 80% less on top talent to increase profitability & reduce burn.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Increase the diversity within your organization</h2>
                    <p>Diverse teams are high-performing teams.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Increase pipeline/revenue</h2>
                    <p>Hire 3-4 equally productive reps at the same cost as just 1 of your current heads.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Efficiently target lower revenue ACV streams</h2>
                    <p>Tap into markets that might otherwise have been unfeasible.</p>
                </div>

                <div className="benefit">
                    <h2>➔ Provide life-changing opportunities</h2>
                    <p>Provide once-in-a-lifetime opportunities to hungry sales professionals that are 100% driven to succeed.</p>
                </div>

            </div>

        </section>
        </div>
    )
}


export default OurAdvantage
