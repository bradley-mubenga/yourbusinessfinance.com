import React from 'react'

export default function About() {
  return (
    <section id='about'>
        <div className='container'>
            <div className='aboutContent'>
                <h1 className='heading2'>In This Course You'll Learn</h1>
                <ul>
                    <li>1. Biggest mistakes business owners make with their business finances!</li>
                    <li>2. How to set up and manage your business accounting quickly and efficiently.</li>
                    <li>3. How to understand your business financial needs and master financial forecasting and budgeting.</li>
                </ul>
            </div>
            <div className='aboutContactForm'>
                <h3>Gain access to an exclusive live Q & A with Jasmina by signing up before the official launch.</h3>
                <div className='emailSubForm'>
                    <form action="/send-data-here" method="post">
                        <input type="text" id="name" name="first" placeholder='Name'/>
                        <span></span>
                        <input type="email" id="email" name="email" placeholder='Email'/>
                        <span></span>
                        <button type="submit">Join Waiting List</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
