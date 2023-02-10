import React from 'react';
import Header from "./components/header";
import Head from 'next/head';
import Footer from "./components/footer";

export default function Contact() {
  return (
    <>
    <Head>
        <title>KickStart Finance and Business Coaching</title>
        <meta
        name="description"
        content="Learn about the biggest mistakes business owners make with their business finances, to set up and manage your business accounting quickly and efficiently and how to understand your business financial needs and master financial forecasting and budgeting. Sign up now!"
        />
    </Head>
    <Header/>
    <section className='contactHero'>
        <div>
            <h1 className='heading'></h1>
        </div>
    </section>
    <section className='formSection'>
        <h2 className='heading2'>Contact</h2>
        <ul>
            <li>Email: <a href='mailto:info@yourbusinessfinances.com'>info@yourbusinessfinances.com</a> or contact us by filling out the form below...</li>
        </ul>
        <span></span>
        <div className='contactForm'>
            <form action="/" method="post" className='contactSubmitForm'>
                <ul>
                    <li>Name *</li>
                </ul>
                <div className='firstAndLast'>
                    <input type="text" id="fname" name="first_name" placeholder='first name' required/>
                    <span></span>
                    <input type="text" id="lname" name="last_name" placeholder='last name' required/>
                </div>
                <span></span>
                <ul>
                    <li>Email *</li>
                </ul>
                <input type="email" id="email" name="email" placeholder='email' required/>
                <span></span>
                <div className='checkBox'>
                    <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Register for our 'Kickstart Your Business Finances' course" />
                        <label for="vehicle1"> Register for our 'Kickstart Your Business Finances' course</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Sign up for a free introductory Coaching session" />
                        <label for="vehicle2"> Sign up for a free introductory Coaching session</label>
                    </div>
                    <div>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Other (fill in message below)" />
                        <label for="vehicle3"> Other (fill in message below)</label>
                    </div>
                </div>
                <span></span>
                <ul>
                    <li>Message</li>
                </ul>
                <textarea id='message' rows={10}/>
                <span></span>
                <div>
                    <a className='heroButton'>SUBMIT</a>
                </div>
            </form>
        </div>
    </section>
    <Footer /> 
    </>
  )
}
