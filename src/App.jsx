import './App.css'
import OurAdvantage from './pages/our-advantage/OurAdvantage'
import AboutUs from './pages/about-us/AboutUs'
import ContactUs from './pages/contact-us/ContactUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/not-found/Error'
import SharedLayout from './pages/SharedLayout'
import ScrollToTop from './functions/ScrollToTop'
import OutboundSDRs from './pages/services/OutboundSDRs'

function App() {

  return (
    <BrowserRouter basename='Quotara'>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={ <SharedLayout/> }>
          <Route index element={ <HomePage/> }/>
          <Route path='OutboundSDRs' element={ <OutboundSDRs/> } />
          <Route path='OurAdvantage' element={ <OurAdvantage/> } />
          <Route path='AboutUs' element={ <AboutUs/> } />
          <Route path='ContactUs' element={ <ContactUs/> } />
        </Route>
        <Route path='*' element={ <ErrorPage/> }/>
      </Routes>
    </BrowserRouter>
    // <OutboundSDRs/>
  )
}

export default App
