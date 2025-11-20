import React from 'react'

// Components
import SectionHeader from '../components/SectionHeader'
import Accordion from '../components/Accordion'


const Faq = () => {
  return (
    <section className="bg-[url('/src/assets/background-faq.webp')] bg-cover bg-center max-w-[1409px] mx-auto mt-[-189px] ">
      <div className='flex flex-col gap-6 lg:gap-8 py-10 lg:py-14 px-3 2xl:px-0 mx-auto w-full md:max-w-[678px] lg:max-w-[1168px]'>
        <SectionHeader tag="Faq" title="Perguntas Frequentes" />
        <Accordion />
      </div>
    </section>
  )
}

export default Faq