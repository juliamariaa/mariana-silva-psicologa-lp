import React from 'react'

// Components
import Hero from "../sections/Hero"
import WhyTherapy from "../sections/WhyTherapy"
import Testimonials from "../sections/Testimonials"
import About from "../sections/About"
import InstagramSection from "../sections/InstagramSection"
import Faq from "../sections/Faq"
import Cta from "../sections/Cta"
import Footer from "../layouts/Footer"

function Home() {
  return (
    <>
      <Hero />
      <WhyTherapy />
      <Testimonials />
      <About />
      <InstagramSection />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}

export default Home