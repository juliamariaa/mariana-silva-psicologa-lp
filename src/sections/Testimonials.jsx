import React from 'react'

// Components
import SectionHeader from '../components/SectionHeader'
import TestimonialCards from '../components/testimonialCards'

const Testimonials = () => {
  return (
    <section className='bg-secondary'>
      <div className='max-w-[1409px] mx-auto flex flex-col gap-8 pb-10 lg:pb-14 px-3 2xl:px-0'>
        <SectionHeader 
          tag='Depoimentos' 
          title='Quem já passou por aqui, tem algo importante pra te contar' 
          colorTag='text-terciary'
        />

        <TestimonialCards />
      </div>
    </section>
  )
}

export default Testimonials