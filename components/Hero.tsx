"use client";

import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>
          Avtomobil tapın, bron edin və ya icarəyə götürün - tez və asanlıqla!
        </h1>

        <p className="hero__subtitle">
          Bizim sifariş prosesimizlə avtomobil icarəsi təcrübənizi sadələşdirin.
        </p>

        <CustomButton
          title="Avtomobilləri axtar"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className='object-contain' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero