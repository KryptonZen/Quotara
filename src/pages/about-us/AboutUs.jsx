import "./AboutUs.css"
import visionImg from "../../assets/vision_new.jpg"
import missionImg from "../../assets/mission_new.jpg"
import clientIcn from "../../assets/client-centric_approach.png"
import costIcn from "../../assets/cost-effectiveness.png"
import scalIcn from "../../assets/innovation.png"
import innovIcn from "../../assets/excellence.png"


function AboutUs() {
    return (
        <>
        <div className="AboutUsTop">
            <div className="AU-container">

                <section className="AU-vision" id="AU-section1">
                    <h1>Our Vision</h1>
                    <div className="content">
                        <img src={visionImg} alt="Vision Image"/>
                        <div className="text">
                            <p>
                            Quotara aims to establish itself as the foremost sales provider globally, serving as a competitive advantage for our clients within their respective industries.
                            We are committed to an ongoing quest for innovation and excellence, which fundamentally shapes our sales strategy.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="mission" id="AU-section2">
                    <h1>Our Mission</h1>
                    <div className="content">
                        <div className="text">
                            <p>
                            We are committed to consistently providing the highest standard of sales services, while also surpassing client expectations.
                            Our dedicated team of professionals is continually working to enhance their skills and performance, ensuring that we remain the most effective partner for your business.
                            </p>
                        </div>
                        <img src={missionImg} alt="Mission Image"/>
                    </div>
                </section>
            </div>
        </div>
        <BottomSection/>
        </>
    )
}
function BottomSection() {
    return (
        <section className="BottomSection">
            <div className="features-container">

                <div className="feature">
                    <img src={clientIcn} alt="Client-Centric Icon"/>
                    <h3>A Client-Centric Approach</h3>
                    <p>
                        Our teams work closely with our clients to fully understand their needs and requirements and tailor fit our solutions accordingly.
                    </p>
                </div>

                <div className="feature">
                    <img src={costIcn} alt="Cost Effectiveness Icon"/>
                    <h3>Cost Effectiveness</h3>
                    <p>
                        We specialize in creating solutions that both deliver unmatched results while also actively driving cost savings.
                    </p>
                </div>

                <div className="feature">
                    <img src={scalIcn} alt="Scalability Icon"/>
                    <h3>Scalability & Flexibility</h3>
                    <p>
                        We offer a range of services that encompasses the needs of any and all businesses' sales and growth goals.
                    </p>
                </div>

                <div className="feature">
                    <img src={innovIcn} alt="Innovation Icon"/>
                    <h3>Innovation & Excellence</h3>
                    <p>
                        We seek to continuously innovate and improve our industry knowledge while holding ourselves to the highest of performance standards.
                    </p>
                </div>

            </div>
        </section>
    )
}


export default AboutUs
