import './Navbar.css'
import barsIcn from "../../assets/bars2.svg"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function OpenBarMenu() { setIsOpen(true) }
    function CloseBarMenu() { setIsOpen(false) }

    return (
        <nav className='Navbar'>
            <div className="NavDiv">
                <Logo/>
                <NavLinks/>
                
                <button className='BarsButton' onClick={OpenBarMenu}>
                    <img src={barsIcn} alt="menu-icon"/>
                </button>
                
                {isOpen &&
                    <div className='BarMenu'>
                        <ul className='MenuNavLinks'>
                        <button onClick={CloseBarMenu}> → </button>
                        <hr />
                            <Link to="/" onClick={CloseBarMenu}> <li> Home </li> </Link>
                            <Link to="OurAdvantage" onClick={CloseBarMenu}> <li> Why Us? </li> </Link>
                            <Link to="AboutUs" onClick={CloseBarMenu}> <li> About Us </li> </Link>
                            <Link to="ContactUs" onClick={CloseBarMenu}> <li> Pricing </li> </Link>
                        </ul>
                    </div>}
            </div>
        </nav>
    )
}

const Logo = () => <Link to='/' className='Logo'> Quotara </Link>

{/* <div className='Logo'> Quotara </div> */}

function NavLinks() {
    return (
        <ul className='NavLinks'>
            <Link to=''> </Link>
            <Link to="/"> <li> Home </li> </Link>
            <Link to="OurAdvantage"> <li> Our Advantage </li> </Link>
            <Link to="AboutUs"> <li> About Us </li> </Link>
            <Link to="ContactUs"> <li> Pricing </li> </Link>
        </ul>

    )
}

export default Navbar
