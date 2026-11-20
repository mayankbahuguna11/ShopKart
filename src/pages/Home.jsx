import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <>
  {/*Hero-section*/}
    
    <section className='hero-section'>
      <div className='hero-content'>
        <h1>Good Choices. <br/>Great Prices.</h1>

        <p>Everything you need, <br/> delivered to your doorstep.</p>
        <div className='hero-buttons'>
          <button className='shop-btn'>Shop Now</button>
          <button className='deal-btn'>Explore Deals</button>
        </div>

{/*Hero Benefits*/}
    <div className="hero-benefits">
      <div className="benefit-item">
        <img src="/icons/secure.png" alt="" />
        <p>100% Secure Payments</p>
      </div>

      <div className="benefit-item">
        <img src="/icons/clock.png" alt="" />
        <p>7 Days Easy Returns</p>
      </div>
      
      <div className="benefit-item">
        <img src="/icons/express-delivery.png" alt="" />
        <p>Fast & Free Delivery</p>
      </div>
    </div>

      </div>
    </section>
    </>
  )
}
