import React from 'react'
import HeroImg from '../assets/react.png'
export default function Hero() {
    return (
        <section  className=" grid-cols-6  hidden lg:block w-full scroll-mt-16 md:mb-24 lg:mb-34 lg:scroll-mt-24" aria-label="About me">
            <div data-tilt><img data-tilt className='w-7/10 hover:animate-pulse' src={HeroImg} alt="" /></div>
        </section>
    )
}
