import React from 'react'
import { working_out2 } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Get started exercising <br className='sm:block hidden'/>in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Select your workout exercise, 
          start recording, and then get 
          started! You will start getting
          personalized feedback as soon as 
          you start exercising.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={working_out2}
          alt='working out'
          className='w-[80%] h-[80%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
