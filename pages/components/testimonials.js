import React from 'react';
import Image from 'next/image';
//
import left_chevron from "../../images/left.png";
import right_chevron from "../../images/right.png";

export default function Testimonials() {
  return (
    <section id='testimonials'>
        <div className='container testimonialsContent'>
            <div>
                <h1 className='heading2'>Testimonials</h1>
            </div>
            <div>
                <Image
                src={left_chevron} 
                />
                <div>
                    <Image 
                    src={left_chevron} 
                    alt="client-headshot" 
                    width={250}
                    className="logo"
                    />
                    <div>
                        <p>Starting a new business can be overwhelming and when it comes to finances there's a lot to learn. Jasmina has an amazing ability to speak on your level and make financial management achievable for anyone. KickStart not only took the pressure off but taught and equipped me to get the best out of my financial management. </p>
                    </div>
                </div>
                <Image
                src={right_chevron} 
                />
            </div>
        </div>
    </section>
  )
}
