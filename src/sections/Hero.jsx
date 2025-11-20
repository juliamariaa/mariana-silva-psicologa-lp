import React from 'react'

// Components
import Logo from "../components/Logo"
import ButtonPrimary from "../components/ButtonPrimary"

// Assets
import MarianaSilvaSmilingProfile from "../assets/mariana-silva-smiling-profile.png"
import ClientPhotos from "../assets/client-photos.png"

const Hero = () => {

  return (
    <section className="bg-[url('/src/assets/background-hero.webp')] bg-cover bg-center">
      <div className='max-w-[1409px] lg:max-h-[800px] flex flex-col lg:flex-row items-center lg:justify-between md:mx-auto pt-5 xl:pt-0 px-3 2xl:px-0'>

        <div className="max-w-[550px] flex flex-col gap-3 xl:gap-4">
          <Logo widthSrc='w-[280px] xl:w-[350px]'/>

          <div className='flex flex-col'>
            <h1 className="font-serif text-[48px] lg:text-[64px] text-terciary leading-tight">Sua psicóloga</h1>
            <p className='text-gray lg:text-[22px]'>
              Você não precisa enfrentar tudo sozinha. A Terapia 
              Cognitivo-Comportamental pode te ajudar a enxergar 
              com mais leveza.
            </p>
          </div>

          <ButtonPrimary label="Quero começar a terapia" />

          <div className='flex items-center gap-2 md:gap-3'>
            <img 
              className='h-6 lg:h-7' 
              src={ClientPhotos} 
              alt="Fotos de 5 clientes satisfeitas" 
            />
            <span className='text-primary text-sm md:text-lg'>+ 500 vidas transformadas</span>
          </div>
        </div>

        <div>
          <img 
            className='w-full max-h-[800px]'
            src={MarianaSilvaSmilingProfile} 
            alt="Mariana Silva, psicóloga" 
          />
        </div>
        
      </div>
    </section>
  )
}

export default Hero