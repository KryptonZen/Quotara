import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to the top on route change
    window.scrollTo(0, 0)
  }, [location]) // Runs every time the location (route) changes

  return null
}

export default ScrollToTop
