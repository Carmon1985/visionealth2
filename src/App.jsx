import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Services from './pages/Services'
import About from './pages/About'
import DoctorProfile from './pages/DoctorProfile'
import Contact from './pages/Contact'
import EyeExaminations from './pages/EyeExaminations'
import AdvancedDiagnostics from './pages/AdvancedDiagnostics'
import OptiLight from './pages/OptiLight'
import EyeConditions from './pages/EyeConditions'
import Patients from './pages/Patients'
import Blog from './pages/Blog'
import Promotions from './pages/Promotions'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter basename="/visionealth2">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/doctor/:slug" element={<DoctorProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/eye-examinations" element={<EyeExaminations />} />
          <Route path="/services/advanced-diagnostics" element={<AdvancedDiagnostics />} />
          <Route path="/services/optilight" element={<OptiLight />} />
          <Route path="/services/eye-conditions" element={<EyeConditions />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
