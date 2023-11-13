import React from 'react'
import styles from '../style'
import Button from './Button'
import {test} from '../assets'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Watch our AI Demo!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We use OpenAI's Vision API and machine learning to analyze your form in real time.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      <video src={test} width="600" height="300" controls="controls" autoplay="true" />
      </div>
    </section>
  )
}

export default CTA
