import React from 'react'

// Components
import SectionHeader from '../components/SectionHeader'
import TherapyCard from '../components/TherapyCard'

const WhyTherapy = () => {
  return (
    <section className='bg-secondary'>

      <div className='w-full max-w-[1409px] px-3 2xl:px-0 flex flex-col gap-8 mx-auto py-10 lg:py-14'>
        <SectionHeader title="A terapia é para você que," textAlign="text-left" />

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <TherapyCard 
            text='Está sempre se cobrando demais e tem dificuldade em se permitir descansar' 
             background = "bg-[url('/src/assets/bg-therapy-primary.webp')]"
            color='text-white'
          />

          <TherapyCard text='Sofre com ansiedade, pensamentos acelerados ou autocrítica' />

          <TherapyCard text='Tem dificuldade de lidar com mudanças ou com o passado' />

          <TherapyCard text='Quer entender melhor suas emoções e melhorar seus relacionamentos' />

          <TherapyCard 
            text='A Terapia Cognitivo-Comportamental (TCC) é uma abordagem terapêutica baseada em evidências, que ajuda você a entender como seus pensamentos influenciam suas emoções e comportamentos.' 
            flexBox='flex gap-2 justify-center items-center'
            maxWidthText='max-w-[805px]'
            colSpan='lg:col-span-3'
            background = "bg-[url('/src/assets/bg-therapy-beige-large.webp')]"
            divider='block'
          />

          <TherapyCard 
            title='Atendimento online' 
            text='Com sigilo, acolhimento e para todo o Brasil'
            background = "bg-[url('/src/assets/bg-therapy-primary-padlock.webp')]"
            color='text-white'
           />
        </div>
      </div>

    </section>
  )
}

export default WhyTherapy