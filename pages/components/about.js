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
            <div>
                <form action="/send-data-here" method="post">
                    <label for="first">Name</label>
                    <input type="text" id="name" name="first" />
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}
