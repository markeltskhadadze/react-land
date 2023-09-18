import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'
import 'swiper/css'
import '../assets/css/partners.css'

export function OurPartners() {
    const partners = useSelector((state) => state.partners.partnersList)

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
            >
                { partners.map((item, index) => (
                    <SwiperSlide key={ index } className='slider-partners'>
                        <img src={ require('../assets/images/partners.png') } alt="partners"></img>
                        <p>{ item.name }</p>
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    )
}