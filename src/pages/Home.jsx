import React from 'react';

// Components
import Hero from '../sections/Hero';
import WhyTherapy from '../sections/WhyTherapy';
import Testimonials from '../sections/Testimonials';
import About from '../sections/About';
import InstagramSection from '../sections/InstagramSection';
import Faq from '../sections/Faq';
import Cta from '../sections/Cta';
import Footer from '../layouts/Footer';

function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <WhyTherapy />
        <Testimonials />
        <About />
        <InstagramSection />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </>
  );
}

export default Home;
