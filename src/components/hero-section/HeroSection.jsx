import './HeroSection.css'
import dotsPattern from '../../assets/dots-pattern.png'

function HeroSection() {

    return (
        <div className='HeroSection'>

            <div className="HeroBackground">
                <img src={dotsPattern} alt="background-pattern" />
                <img src={dotsPattern} alt="background-pattern" />
            </div>

            <div className="HeroForeground">

                <header className="HeroContent">

                    <div className="HeroHeading">
                        <h1>Highly skilled sales professionals at up to 80% lower cost than U.S- based reps<pre>.</pre> </h1>
                    </div>

                    <div className="HeroDescription">
                        <p>We identify and recruit exceptional international sales professionals. If you prefer to avoid the complexities
                            of overseeing overseas sales representatives, we can create a completely managed sales team for you.</p>
                    </div>
                    
                    <div className="HeroButtons">
                        <button onClick={()=>window.scrollTo(0, 1820)} className="HeroBtnLeft"> Managed Solutions </button>
                        <button onClick={()=>window.scrollTo(0, 700)} className="HeroBtnRight"> Recruitment </button>
                    </div>

                </header>

            </div>
            
        </div>
    )
}


export default HeroSection
