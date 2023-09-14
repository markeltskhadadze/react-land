import React from 'react'
import bgImage from '../assets/images/banner-bg.png'
import '../assets/css/banner.css'

export function Banner() {
    const Background = {
        backgroundImage: 'url(' + bgImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minWidth: '1440px',
        height: '764px'
    };
    return (
        <div style={ Background }>
            <div className="banner-content">
                <p className="banner-title">Metal products and artistic forging</p>
                <p className="banner-description">Exclusive exterior items, furniture, sculpture, gifts
                    There is an idea, but no one has an exclusive
                    can't hit the mark?
                </p>
                <button className="discuss-btn">Discuss the idea</button>
            </div>
        </div>
    )
}