import React from 'react'

export default function About() {
  return (
    <section id='about'>
        <div className='container'>
            <h1 className='heading2'>In This Course You'll Learn</h1>
            <div className='listContainer'>
                <ol>
                    <li className='listItem'>1. Bigest mistakes business owners make with their business finances!</li>
                    <li className='listItem'>2. How to set up and manage your business accounting quickly and efficiently.</li>
                    <li className='listItem'>3. How to understand your business financial needs and master financial forecasting and budgeting</li>
                </ol>
            </div>
            <div className='contactForm'>
                <div>
                    <p className='listItem'>Gain access to an exclusive live Q & A with Jasmina by signing up before the official launch.</p>
                </div>
                <form action="/send-data-here" method="post">
                    <input type="text" id="name" name="first" placeholder='Name'/>
                    <span></span>
                    <input type="email" id="email" name="email" placeholder='Email'/>
                    <span></span>
                    <button type="submit">Join Waiting LSist</button>
                </form>
            </div>
        </div>
    </section>
  )
}
