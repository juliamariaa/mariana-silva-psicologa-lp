import React from 'react'

const SectionHeader = ({tag, title, colorTag = 'text-primary', colorTitle = 'text-primary', textAlign= 'text-center'}) => {
  return (
    <div>
      {tag && <p className={`${colorTag} ${textAlign} font-sans font-bold uppercase tracking-wide mb-2`}>{tag}</p>}
      <h2 className={`${colorTitle} ${textAlign} font-serif text-[40px] lg:text-[56px] leading-none`}>{title}</h2>
    </div>
  )
}

export default SectionHeader