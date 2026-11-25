import react from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
{/*Main Shipping bar*/}
    <div className="top-bar">
     <div className="container-fluid"> <span className="new-badge">New</span>
     Free shipping on order above ₹499|Easy 7-day returns
     </div>
    </div>

{/*Main Navbar*/}
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        
{/*logo */}
        <a href="/">
        <img src="images/logo.png" alt="shopkart-Logo" className="shopkart-logo" />
         </a>

        {/*All Categories Dropdown */}
        <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Categories
            </button>
                <ul className="dropdown-menu">

                    <li><a className="dropdown-item" href="#">Electronics</a></li>
                    <li><a className="dropdown-item" href="#">Fashion</a></li>
                    <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
                    <li><a className="dropdown-item" href="#">Beauty & Personal Care</a></li>
                    <li><a className="dropdown-item" href="#">Sports & Fitness</a></li>
                    <li><a className="dropdown-item" href="#">Books & Stationery</a></li>

                </ul>
        </div>

         {/* Mobile Toggle */}
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar" >
            <span className="navbar-toggler-icon"></span> </button>

        {/* Navigation */}
          <div className="collapse navbar-collapse" id="shopKartNavbar">
            <ul className="navbar-nav main-nav">

              <li className="nav-item"> <NavLink className="nav-link active" to="/"> Home 
              </NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/products"> Products</NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/deals"> Deals </NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/about"> About Us </NavLink> </li>
              <li className="nav-item"> <NavLink className="nav-link" to="/contact"> Contact </NavLink> </li>
              
            </ul>


        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search for products..." />
          <button className="search-btn">
            <img src="/icons/search-icon.png" alt="Search" />
          </button>
        </div>

        {/* Icons */}
        <div className="nav-actions">
          <img src="/icons/heart.png" alt="Wishlist" className="nav-icon" />

          <div className="cart-wrapper">
            <img src="/icons/cart-icon.png" alt="Cart" className="nav-icon" />
            <span className="cart-count">3</span> </div>

          </div>

        </div>

      </div>
    </nav>
      </>
);
}