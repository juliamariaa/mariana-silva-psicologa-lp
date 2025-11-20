import React from 'react'

// Components
import SectionHeader from "../components/SectionHeader"

// Assets
import MarianaSilvaPortraitSide from "../assets/mariana-silva-portrait-side.png"

const About = () => {
  return (
    <section>
      <div className='md:max-w-3xl lg:max-w-[1409px] mx-auto px-3 2xl:px-0 flex flex-col xl:flex-row lg:justify-between items-center'>
        <div className='mb-4 lg:mb-0'>
          <img
            className='w-full max-h-[800px]'
            src={MarianaSilvaPortraitSide } 
            alt="Mariana Silva, psicóloga" 
          />
        </div>

        <div className='md:max-w-[500px] lg:max-w-[700px] mb-10 xl:mb-0 flex flex-col justify-center items-between gap-3'>
          <SectionHeader tag="Um pouco sobre" title="Mariana Silva, sua psicóloga" colorTag='text-primary' colorTitle='text-terciary' textAlign="text-left" />
          <p className='text-gray lg:text-[24px]'>
            Graduada em Psicologia pela Universidade Presbiteriana Mackenzie e pós-graduada 
            em Terapia Cognitivo-Comportamental pela PUC-SP. Atua há mais de 8 anos ajudando 
            adultos e adolescentes a lidarem com questões como ansiedade, autocobrança, 
            insegurança e dificuldades nos relacionamentos.
            <br /> <br />
            Com base na Terapia Cognitivo-Comportamental (TCC), seu trabalho é pautado em estratégias 
            práticas, acolhimento e escuta ativa. Mariana acredita que todos têm a capacidade de transformar 
            sua forma de pensar, sentir e agir.  O- processo terapêutico é um caminho de reconexão e autonomia.
            <br /> <br />
            Atende de forma online e presencial, oferecendo um espaço seguro, ético e sem julgamentos para quem 
            busca mais equilíbrio emocional e qualidade de vida.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About