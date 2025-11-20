import React, { useState } from 'react'

// Data
import accordionData from '../data/accordionData'

// Assets
import Arrow from '../assets/arrow.svg'

const Accordion = () => {
  const [abertoIndex, setAbertoIndex] = useState(null)

  const toggleAccordion = (index) => {
    setAbertoIndex(abertoIndex === index ? null : index)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-1 lg:gap-4">
      {accordionData.map((item, index) => (
        <div key={index} className="rounded overflow-hidden mb-2">
          <div
            className="flex justify-between items-center bg-primary text-white p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.question}</h3>
            <img
              className={`${abertoIndex === index ? 'rotate-180' : 'rotate-0'} transition-all duration-700 ease-in-out`}
              src={Arrow}
              alt="Seta branca"
            />
          </div>

          <div
            className={`
              bg-primary text-white px-4 transition-all duration-500 ease-in-out overflow-hidden
              ${abertoIndex === index ? 'max-h-[500px] opacity-100 px-4 pb-4' : 'max-h-0 opacity-0 p-0'}
            `}
          >
            <p>{item.response}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
