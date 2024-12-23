import "./OutboundSDRs.css"
import salesRepImg from "../../assets/out-1.jpg"
import teamImg from "../../assets/out-2.png"

import costlyImg from "../../assets/out-sdr/s5-1.png"
import performImg from "../../assets/out-sdr/s5-2.png"
import highImg from "../../assets/out-sdr/s5-3.png"

import efficImg from "../../assets/out-sdr/rev.png"
import acquImg from "../../assets/out-sdr/cus.png"
import raisImg from "../../assets/out-sdr/awar.png"
import optimImg from "../../assets/out-sdr/s4-4.png"


function OutboundSDRs() {
    return (
        <div className="OutSDRs">
            <ReachProspects/>
            <WhatWeDo/>
            <HowWeDoIt/>
            <ProblemsSDR/>
            <WhySDRImportant/>
        </div>
    )
}

function ReachProspects() {
    return (
        <section class="reach-prospects">
            <div class="container">
                <div class="text-content">
                    <h1>Reach more prospects.<br/>Drive more sales.</h1>
                    <p>Our sales reps drive targeted outreach, deliver qualified opportunities, and fuel your sales growth—fast and efficiently.</p>
                </div>
                <div class="image-content">
                    <img src={salesRepImg} alt="Sales Rep"/>
                </div>
            </div>
        </section>
    )
}

function WhatWeDo() {
    return (
        <section class="what-we-do">
            <div class="container">
                <h1>What We Do</h1>

                <div class="services-div">
                    <div class="service">
                        <h2>Lead Generation</h2>
                        <p>We seek out and identify the best potential customers for your particular product or service.</p>
                    </div>

                    <ul class="service-list">
                        <li>Prospecting</li>
                        <li>Pipeline Management</li>
                        <li>Outreach</li>
                        <li>Appointment Setting</li>
                        <li>Meeting Sales Targets</li>
                    </ul>

                </div>

            </div>
        </section>
    )
}

function HowWeDoIt() {
    return (
        <section class="how-we-do-it">

            <div class="container">
                <div class="image-content">
                    <img src={teamImg} alt="Team"/>
                </div>

                <div class="text-content">
                    <h1>How We Do it</h1>
                    <ul>
                        <li><strong>Expertly trained reps</strong> <br/> Our SDRs are rigorously trained in outbound sales techniques and strategies.</li>
                        <li><strong>Targeted Prospecting</strong> <br/> We focus on finding and reaching the right leads for your business.</li>
                        <li><strong>Personalized Outreach</strong> <br/> Tailored communications that enhance engagement and drive results.</li>
                        <li><strong>Qualified Opportunities</strong> <br/> We deliver high quality opportunities, ensuring your sales team is focused on closing deals.</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

function ProblemsSDR() {
    return (
        <section class="problems-sdr">
            <div class="container">

                <h1>Problems with SDR teams</h1>

                <div class="problems-grid">

                    <div class="problem">
                        <img src={costlyImg} alt="Costly Resource"/>
                        <p><strong>They are a costly resource</strong><br/>Median total expense is $125k/year/SDR when taking into account overheads and additional costs.</p>
                    </div>

                    <div class="problem">
                        <img src={performImg} alt="Performance Issues"/>
                        <p><strong>Performance is increasingly difficult</strong><br/>More SDR teams than ever are struggling to deliver and achieve consistent results.</p>
                    </div>

                    <div class="problem">
                        <img src={highImg} alt="High Attrition"/>
                        <p><strong>High attrition & short in-seat lifespan</strong><br/>An average attrition rate of 49% means constant and costly re-hiring and revamping.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

function WhySDRImportant() {
    return (
        <section class="why-sdr-important">

            <div class="container">
                <h2>Why Outbound SDRs are important and how we can help</h2>
                
                <div class="importance-grid">

                    <div class="importance-item">
                        <img src={efficImg} alt="Efficient Predictable Revenue"/>
                        <p><strong>Efficient Predictable Revenue</strong><br/>Well run SDR teams provide hyper efficient (low CAC) way to quickly scale revenue.</p>
                    </div>

                    <div class="importance-item">
                        <img src={acquImg} alt="Acquire Right Customers"/>
                        <p><strong>You Acquire the Right Customers</strong><br/>Customized parameters ensure only the highest value and lowest churn customers are targeted.</p>
                    </div>

                    <div class="importance-item">
                        <img src={raisImg} alt="Raise Brand Awareness"/>
                        <p><strong>You Raise Brand Awareness</strong><br/>Targeted outreach via outbounding creates massive brand awareness in potential future customers.</p>
                    </div>

                    <div class="importance-item">
                        <img src={optimImg} alt="Optimize AE Time"/>
                        <p><strong>You Save & Optimize AE Time</strong><br/>One of the highest paid resources at any company is the Account Executive team.</p>
                    </div>

                </div>

            </div>

        </section>
    )
}


export default OutboundSDRs
