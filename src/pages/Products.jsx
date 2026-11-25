import React from 'react'
import "./Products.css"

const products = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },
    {
    id: 2,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },
    {
    id: 3,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },
     {
    id: 4,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },
     {
    id: 5,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },
     {
    id: 6,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },
];


export default function Products() {
  return (
    <>
    <main className="products-page">

      <section className="products-banner">

        <div className="banner-content">
          
          <h1>All <span>Products</span></h1>
          <p>Explore our wide range of top quality products</p>

        </div>
      </section>

      {/* Filter option starts here */}

      {/* Sidebar starts here */}
      <section className="products-content">
        <aside className="filter-sidebar">

          {/* First div start*/}
          <div className="filter-title">
            <h3>FILTERS</h3>
            <button>Clear All</button>
          </div>
          {/* First div end */}

          {/* Second div */}
          <div className="filter-group">
            <h4>Categories</h4>
            <label><input type="checkbox" />Electronics</label>
            <label><input type="checkbox" />Fashion</label>
            <label><input type="checkbox" />Home & Kitchen</label>
            <label><input type="checkbox" />Beauty</label>
            <label><input type="checkbox" />Sports</label>
            <label><input type="checkbox" />Books</label>
          </div>
          {/* Second div end */}

          {/* Third div start */}
          <div className="filter-group">
            <h4>Price Range</h4>
            <input type="range" min="199" max="20000" />
              
            <div className="price-range">
              <span>₹199</span>
              <span>₹20,000+</span>
            </div>
          </div>
          {/* Third div end */}

          {/* Fourth div start */}

          <div className="filter-group">
            <h4>Ratings</h4>
            <label><input type="checkbox"/>⭐⭐⭐⭐⭐</label>
            <label><input type="checkbox"/>⭐⭐⭐⭐☆ & Above</label>
            <label><input type="checkbox"/>⭐⭐⭐☆☆ & Above</label>
          </div>
          {/* Fourth div end */}

          {/* Fifth div start */}
          <div className="filter-group">
            <h4>Availability</h4>
            <label><input type="checkbox" />In Stock</label>
            <label><input type="checkbox" />Out of Stock</label>
          </div>
          {/* Fifth div end */}

        </aside>

{/* Product page images start */}

        <div className="products-area">
          <div className="products-header">
            <p>Showing all products</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                
                <div className="product-image">
                  {product.discount && (
                    <span className='discount-badge'>-{product.discount}</span>
                  )}

                  <button className="wishlist-button">♡</button>
                  <img src={product.image} alt={product.name} />

                </div>

                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                </div>

                <div className="rating">
                  ⭐ {product.rating}
                  <span>({product.reviews})</span>
                </div>

                <div className="product-price">
                  ₹{product.price}
                  <del>{product.originalPrice}</del>
                  <button className="add-cart-button"> 🛒 Add to Cart </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      
    </main>
    </>
  )
}

