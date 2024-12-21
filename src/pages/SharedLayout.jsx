import { Outlet } from "react-router-dom"
import Footer from "../components/footer-section/Footer"
import Navbar from "../components/navbar/Navbar"

function SharedLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default SharedLayout
