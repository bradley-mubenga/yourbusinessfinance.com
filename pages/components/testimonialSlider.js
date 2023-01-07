import React from 'react';
import Image from 'next/image';

export default function TestimonialSlider({ data }) {
  return (
    <section>
      {
        data ? (
        <div>
          <Image src={data.src} width="200" height="200" alt={`image of ${data.name}`} className="clientImage"/>
          <div className='testimonialText'>
            <h3 className='clientName'>{data.name}, {data.company}</h3>
            <p className='clientFeedback'>{data.feedback}</p>
          </div>
        </div> ) : (<h1>No Data</h1>)
      }
    </section>
  )
}
