import React from 'react';
import Image from 'next/image';
//
import logo from "../../images/logo.png";
import youtube from "../../images/youtube.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import podcast from "../../images/podcast.png";

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='container footerContainer'>
            <div>
                <Image src={logo} alt="kickstart logo" className='logo'/>
            </div>
            <div className='imageLinks'>
                <ul className='imageLinksIcons'>
                    <li>
                        <a href='https://www.instagram.com/KickstartYourBuisinessFinance/'>
                            <Image src={instagram} width={30} height={30} alt="instagram-tiny-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UCD-IWvnZWmLsemcG6apWMUw'>
                            <Image src={youtube} width={30} height={30} alt="youtube-tiny-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/KickStartYourBuisinessFinance/'>
                            <Image src={facebook} width={30} height={30} alt="facebook-tiny-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/company/kickstart-your-buisiness-finance/'>
                            <Image src={linkedin} width={30} height={30} alt="linkedin-tiny-icon"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.buzzsprout.com/2050421/episodes'>
                            <Image src={podcast} width={30} height={30} alt="podcast-tiny-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='copyrightText'>
                <p>KickStart Finances © {new Date().getFullYear()}. Web design by <a href='https://creativebradley.com'>Creative Bradley</a></p>
            </div>
        </div>
    </footer>
  )
}
