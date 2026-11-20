import react from 'react'
import './Navbar.css'

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
            Dropdown button
            </button>
                <ul class="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
        </div>

      </div>
    </nav>
    </>
  )
}