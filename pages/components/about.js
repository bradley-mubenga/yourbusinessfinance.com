import React from 'react'

export default function About() {
  return (
    <section id='about'>
        <div className='container aboutContent'>
            <div className='mainText'>
                <h1 className='heading2'>In This Course You'll Learn</h1>
                <div className='listOfPoints'>
                    <p>1. Bigest mistakes business owners make with their business finances!</p>
                    <p>2. How to set up and manage your business accounting quickly and efficiently.</p>
                    <p>3. How to understand your business financial needs and master financial forecasting and budgeting</p>
                </div>
            </div>
            <div className='aboutContactForm'>
                <div>
                    <p className='listItem contactFormPText'>Gain access to an exclusive live Q & A with Jasmina by signing up before the official launch.</p>
                </div>
                <form action="/send-data-here" method="post">
                    <input type="text" id="name" name="first" placeholder='Name'/>
                    <span></span>
                    <input type="email" id="email" name="email" placeholder='Email'/>
                    <span></span>
                    <button type="submit">Join Waiting List</button>
                </form>
            </div>
        </div>
    </section>
  )
}
