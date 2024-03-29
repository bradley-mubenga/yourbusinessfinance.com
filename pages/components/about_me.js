import React from 'react';
import Image from 'next/image';

export default function About_Me() {
  return (
    <section id="aboutMeSection">
        <div>
            <Image src="https://ik.imagekit.io/yrdximse9a/kickstart/jas_about_image.webp?updatedAt=1676032386270" className='responsiveImage' width={3995} height={3994}/>
        </div>
        <div>
            <h2 className='heading2'>Hi, great to meet you, <br className='brVisible'/> I’m Jasmina.</h2>
            <ul>
                <li>As a financial and business coach, I’m on a mission to see every single business owner equipped to master their business finances! With my background in corporate finance and years of experience running and assisting startups and small businesses, I have the tools you need to master your business finances with ease and confidence.</li>
                <li>My ‘Kickstart Your Business Finance’ course, which will not only help you avoid those big money mistakes but will give you a step-by-step plan to set up your financial and administrative management like a pro."</li>
                <li>For more information or to sign up, message us via our <a href='/contact'>contact page</a></li>
            </ul>
        </div>
    </section>
  )
}
