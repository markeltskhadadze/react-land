import React from 'react'
import { useSelector } from 'react-redux'
import '../assets/css/header.css'

export function Header() {
    const nav = useSelector((state) => state.header.headerNav)

    return (
        <div className='header-container'>
            <div className='logo'>Logo</div>
            <div className="flex gap-4">
                { nav.map((item, index) => (
                    <p className="header-nav" key={ index }>{ item }</p>
                )) }
            </div>
        </div>
    )
}