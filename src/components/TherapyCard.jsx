import React from 'react'

function TherapyCard({title, text, colSpan, background = "bg-[url('/src/assets/bg-therapy-beige.webp')]", color = 'text-primary', flexBox='flex flex-col justify-end', divider = 'hidden', maxWidthText}) {
  return (
    <div className={`${flexBox} ${colSpan} ${background} bg-cover bg-no-repeat bg-center w-full h-[300px] p-4 rounded-lg`}>
      <h3 className={`${color} uppercase`}>{title}</h3>

      <div className='flex gap-2'>
        <div className={`${divider} w-3 lg:w-1 lg:h-12 bg-primary rounded-lg`}></div>
        <p className={`${color} ${maxWidthText} lg:text-[22px]  leading-[1.4]`}>{text}</p>
      </div>
    </div>
  )
}

export default TherapyCard