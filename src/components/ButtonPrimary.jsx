import React from 'react'

function ButtonPrimary({label, backgroundColor = "bg-primary hover:bg-terciary", }) {

  return (
    <button className={`${backgroundColor} w-full md:w-[500px] py-4 text-white font-serif font-bold text-[14px] lg:text-[22px] uppercase p-5 rounded-[50px] hover:cursor-pointer hover:scale-95 hover:transition duration-300 ease-in-out`}>
      {label}
    </button>
  )
}

export default ButtonPrimary