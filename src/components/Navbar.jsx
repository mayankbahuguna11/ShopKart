import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <>
        <div className='top-bar'>  
            <div className='container-fluid'>
                <span>NEW </span>
                Free shipping on orders above ₹499 | Easy 7-day returns
            </div>  
        </div>
        </>
    )
}