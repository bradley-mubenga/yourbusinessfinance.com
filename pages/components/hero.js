import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='hero'>
        <div>
            <h1 className='heading'>'KICKSTART YOUR BUSINESS FINANCES' Course</h1>
            <div className='buttonBox'>
              <a href="/contact" className='heroButton' type='button'>Contact us</a>
            </div>
        </div>
    </section>
  )
}
