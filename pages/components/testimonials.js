import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
//
import left_chevron from "../../images/left.png";
import right_chevron from "../../images/right.png";
//
import TestimonialSlider from './testimonialSlider';
//
export default function Testimonials() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [clientIndex, setClientIndex] = useState(0)

  async function getTestimonialData() {
    const response = await fetch(`${window.location.origin}/api/feedback`);
    setTestimonialData(await response.json());
  }

  useEffect(() => {
    getTestimonialData();
  },[]);

  if(!testimonialData) {
    return console.log("No data")
  }

  function moveLeft()
  {
    if (clientIndex === 0)
    {
      setClientIndex(testimonialData.length - 1)
    }
    else
    {
      setClientIndex(clientIndex - 1);
    }
  }

  function moveRight()
  {
    if (clientIndex === testimonialData.length - 1)
    {
      setClientIndex(0)
    }
    else
    {
      setClientIndex(clientIndex + 1)
    }
  }

  return (
    <section id='testimonials'>
      <div className='container'>
        <h1 className='heading2'>Testimonials</h1>
        <div className='testimonialContainer'>
          <div>
              <Image src={left_chevron} width="50" alt='left chevron' className='chevron' onClick={moveLeft}/>
          </div>
          <div>
            <TestimonialSlider data={testimonialData[clientIndex]}/>
          </div>
          <div>
              <Image src={right_chevron} width="50" alt='left chevron'className='chevron' onClick={moveRight}/>
          </div>
        </div>
      </div>
    </section>
  )
}