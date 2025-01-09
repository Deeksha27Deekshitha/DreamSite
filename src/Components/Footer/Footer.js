import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">


            {/* left Side */}
            <div className="flexColStart f-left">
                <img src="./logo1.png" alt="Logo" width={120}/>
                <span className="secondaryText">
                    Our Vision is to providing you the best properties
                </span>
            </div>
           
        </div>
    </section>
  )
}

export default Footer;
