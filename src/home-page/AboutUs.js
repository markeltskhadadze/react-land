import React from 'react'
import aboutUs from '../assets/images/about-us.png'
import '../assets/css/about-us.css'
export function AboutUs() {

    return (
        <div>
            <h2>About Us</h2>
            <div className="flex justify-center gap-16 px-5">
                <div className="flex flex-col gap-10">
                    <div>
                        <p className="about-company">
                            Our company has been operating on the market since 2014. Today we specialize in the production of custom-made metal products and metal structures according to individual drawings and samples:
                        </p>
                        <ul className="about-company">
                            <li>-artistic forging</li>
                            <li>-welding works</li>
                            <li>-installation and dismantling</li>
                            <li>-argon welding</li>
                            <li>-production of designs of any complexity</li>
                            <li>-polymer coating</li>
                        </ul>
                    </div>
                    <button className="discuss-btn">Discuss the idea</button>
                </div>
                <img className="about-company-image" src={ aboutUs } alt="about-company-image" />
            </div>
        </div>
    )
}