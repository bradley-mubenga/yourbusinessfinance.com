//COMPONENTS
import React from 'react';
import Image from 'next/image';
//IMAGES
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className='header'>
        <div>
            <Image 
                src={logo} 
                alt="kickstart-finance-logo" 
                width={250}
                className="logoImage"
            />
        </div>
    </header>
  )
}
