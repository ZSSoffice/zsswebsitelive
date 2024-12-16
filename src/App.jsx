import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SisterCompanies from './components/SisterCompanies'
import Carousel from './components/Carousel'
import Services from './components/Services'
import RiskProtection from './components/RiskProtection'
import LogoMarquee from './components/LogoMarquee'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl space-y-12 md:space-y-20">
          <LogoMarquee />
          <About />
          <SisterCompanies />
          <Carousel />
          <Services />
          <RiskProtection />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
