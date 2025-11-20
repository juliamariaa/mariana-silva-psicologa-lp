import React from 'react'

// Components
import Logo from '../components/Logo'

// Assets
import PaperClip from '../assets/paperclip.svg'

function Footer() {
  return (
    <footer className='p-0 m-0'>
      <div>

        <div className='w-full bg-primary'>
          <div className='max-w-[1409px] flex flex-col md:flex-row md:justify-between items-center px-2 xl:px-0 py-4 mx-auto'>
            <Logo color="white" widthSrc="w-[250px]" />
            <p className='text-white text-center mt-2'>© 2025 Mariana Silva. Todos os direitos reservados.</p>
          </div>
        </div>

        <div className='w-full bg-terciary'>
          <div className='max-w-[1409px] mx-auto'>
              <a className='flex gap-2 justify-center py-3 hover:cursor-pointer' href='https://www.linkedin.com/in/j%C3%BAlia-maria/' target='_blank'>
                <img src={PaperClip} alt="Link para página da desenvolvedora Júlia Maria" />
                <p className='text-white'>Desenvolvido por <span className='font-bold'>Júlia Maria</span></p>
              </a>
          </div>
        </div >
      </div>
    </footer>
  )
}

export default Footer