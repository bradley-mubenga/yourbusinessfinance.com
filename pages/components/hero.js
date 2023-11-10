import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='hero'>
        <div>
            <h1 className='heading'>KICKSTART YOUR BUSINESS FINANCES COURSE</h1>
            <div className='buttonBox'>
              <a href="https://www.udemy.com/course/become-your-own-cfo/" className='heroButton' type='button' target='_blank'>Find out more</a>
            </div>
        </div>
    </section>
  )
}
