import React from 'react'
import { apple, working_out1, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={working_out1}
          alt='working out'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Check that your <br className='sm:block hidden'/> form is correct</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Improper form can lead to injuries and diminish the effectiveness of the exercise. Many people may not be 
        aware of the correct form for specific exercises or may prioritize lifting heavier weights over proper technique. 
        Factors such as lack of knowledge, inadequate supervision, and overestimation of one's abilities can contribute to improper form.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>  
    </section>
  )
}

export default Billing
