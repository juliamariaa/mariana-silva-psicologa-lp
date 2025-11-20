import React from 'react'

// Components
import SectionHeader from '../components/SectionHeader'
import ButtonPrimary from '../components/ButtonPrimary'
import InstagramPostCard from '../components/InstagramPostCard'

const InstagramSection = () => {
  return (
    <section className='bg-primary'>
      <div className='max-w-[1409px] mx-auto pt-10 lg:pt-14 pb-[321px] px-3 2xl:px-0 flex flex-col items-center gap-8'>

        <SectionHeader tag="Novidades toda semana" title="Acompanhe nosso instagram" colorTag="text-white" colorTitle="text-white" />

        <div className='flex flex-col xl:flex-row justify-center gap-3'>
          <InstagramPostCard />
          <InstagramPostCard />
          <InstagramPostCard />
        </div>
        
        <ButtonPrimary label="Abrir instagram" backgroundColor="bg-terciary hover:bg-secondary" />
      </div>
    </section>
  )
}

export default InstagramSection