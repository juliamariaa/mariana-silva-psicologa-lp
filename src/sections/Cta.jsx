import React from 'react'

// Components
import SectionHeader from '../components/SectionHeader'
import ButtonPrimary from '../components/ButtonPrimary'

const Cta = () => {
  return (
    <section>
      <div className='max-w-[500px] lg:max-w-[1055px] flex flex-col items-center gap-4 lg:gap-6 mx-auto px-3 py-10 lg:py-14'>
        <div>
          <SectionHeader title="Que tal dar o primeiro passo hoje?" colorTitle="text-terciary" />
          <p className='text-gray text-center lg:text-[22px] max-w-[804px] mx-auto mt-3 leading-normal'>
            Cuidar da sua saúde mental é um ato de coragem e carinho com você mesma. 
            Se você sente que é hora de começar, clique no botão abaixo e agende sua sessão. 
          </p>
        </div>
        <ButtonPrimary label="Quero começar a terapia" />
      </div>
    </section>
  )
}

export default Cta