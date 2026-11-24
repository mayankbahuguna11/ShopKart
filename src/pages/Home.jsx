import React from 'react'
import "./Home.css"

// Trending Product Data
const products = [
 {
   id: 1,
    name: "boAt Rockerz 450",
    category: "Electronics",
    price: 1599,
    rating: 4.5,
    reviews: 1200,
    image: "/images/products/headphones.png"
  },

  {
    id: 2,
    name: "Noise ColorFit Pro 4",
    category: "Electronics",
    price: 2999,
    rating: 4.6,
    reviews: 2300,
    image: "/images/products/noisefit.png"
  },

    {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/sneakers.png"
  },   

  {    
  id: 4,
  name: "Levi's Jeans",
  category: "Fashion",
  price: 2099,
  rating: 4.5,
  reviews: 890,
  image: "/images/products/jeans.png",
},

{ 
  id: 5,
  name: "boAt Airdopes 141",
  category: "Electronics",
  price: 1299,
  rating: 4.4,
  reviews: 3400,
  image: "/images/products/airdopes.png",
},

{
  id: 6,
  name: "Iphone 17 pro max",
  category: "Electronics",
  price: 124000,
  rating: 4.9,
  reviews: 2100,
  image: "/images/products/iphone.png",
},

{
  id: 7,
  name: "Men's Casual Shirt",
  category: "Fashion",
  price: 899,
  rating: 4.3,
  reviews: 760,
  image: "/images/products/ferrari.png",
},

{
  id: 8,
  name: "Minimalist Table Lamp",
  category: "Home & Kitchen",
  price: 1199,
  rating: 4.5,
  reviews: 540,
  image: "/images/products/lamp.png",
},
];

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

     <section className="categories-section">
      <div className="section-heading">
        <h2>Shop by Category</h2>
        <p>Find the perfect product for your needs.</p>
      </div>


    <div className="categories-container"> 
      <div className="card " style={{ width: '18rem',  background:'#e0f2fe'}}>
        <img src="/images/category-electronics.png" className="card-img-top" alt="headphones" />
        <div className="card-body">
          <h5 className="card-title">Electronics</h5>
          <p className="card-text">1200+ Products</p>
        </div>
      </div>

            <div className="card" style={{ width: '18rem', backgroundColor: '#fee0fe' }}>
        <img src="/images/category-fashion.png" className="card-img-top" alt="headphones" />
        <div className="card-body">
          <h5 className="card-title">Fasion</h5>
          <p className="card-text">1800+ Products</p>
        </div>
      </div>

     <div className="card" style={{ width: '18rem', backgroundColor: '#fffed3' }}>
        <img src="/images/category-home.png" className="card-img-top" alt="headphones" />
        <div className="card-body">
          <h5 className="card-title">Home & Kitchen</h5>
          <p className="card-text">950+ Products</p>
        </div>
      </div>

       <div className="card" style={{ width: '18rem',backgroundColor: '#ffe9f6' }}>
        <img src="/images/category-beauty.png" className="card-img-top" alt="headphones" />
        <div className="card-body">
          <h5 className="card-title">Beauty & personal Care</h5>
          <p className="card-text">750+ Products</p>
        </div>
      </div>

       <div className="card" style={{ width: '18rem' , backgroundColor: '#fce7f3'}}>
        <img src="/images/category-fitness.png" className="card-img-top" alt="headphones" />
        <div className="card-body">
          <h5 className="card-title">Sports & Fitness</h5>
          <p className="card-text">600+ Products</p>
        </div>
      </div>

       <div className="card" style={{ width: '18rem' , backgroundColor: '#fcf7e7'}}>
        <img src="/images/category-books.png" className="card-img-top" alt="headphones" />
        <div className="card-body">
          <h5 className="card-title">Books</h5>
          <p className="card-text">800+ Products</p>
        </div>
      </div>
    </div>
    </section>


    <section className="products-section" id="trending">
      <div className="section-heading">
        <div className="trending-heading">
          <h2 className="trending-title">
            <img src="/icons/trending.png" alt="Trending" />
            Trending <strong>Now</strong>
          </h2>
          <p className="trending-subtitle">
            Most popular choices this week
          </p>
        </div>
        <a href="/products" className='view-products'>
        View all products →</a>
      </div>
      
{/* Starting with cart section */}
      <div className="trending-product-grid">
        {products.map((product) => (
          <div 
          className="trending-product-card"
            key={product.id}>

            <div className="trending-product-image">
              <img 
              src={product.image} 
              alt={product.name} 
              />

            </div>

             <div className="trending-product-details">

                <div className="trending-product-meta">

                  <span className="trending-product-category">
                    {product.category}
                  </span>

                  <span className="trending-product-rating">
                    ⭐ {product.rating} ({product.reviews})
                  </span>

                </div>

                <h3>{product.name}</h3>

                <div className="trending-product-price">
                  ₹{product.price}
                </div>

                <div className="trending-product-actions">

                  <button className="trending-buy-now-button">
                    Buy Now
                  </button>

                  <button className="trending-cart-button">
                    <img
                      src="/icons/product-cart.png"
                      alt="Cart"
                    />
                  </button>

                </div>

              </div>

          </div>
        ))}
      </div>

    </section>
    </>
  )
}
