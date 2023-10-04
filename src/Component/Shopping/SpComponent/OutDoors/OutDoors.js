import React from 'react'
import { Link } from 'react-router-dom'
import SpFooter from '../../SpFooter'

const OutDoors = () => {

  function openNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "230px";
  }

  function closeNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div onClick={closeNav}>
      <div className="Navbar">
        <div className=" NavStart">
          <Link to={"/"} >
            <div className="logo">
              <img src="./SpImages/mainLogo.png" alt="" />
            </div>
          </Link>

          <div className="login2">
            <li><Link to={'/Shopping'}>Home</Link></li>
            <li><Link to={'/Electronics'}>Electronic</Link></li>
            <li><Link to={'/Clothing'}>Clothing</Link></li>
            <li><Link to={'/HomeGarden'}>Home & Garden</Link></li>
            <li><Link className='active' to={'/OutDoors'}>Outdoors</Link></li>
            <li><Link to={'/BestSellers'}>Best Sellers</Link></li>
            <li><Link to={'/Offers'}>Offers</Link></li>

          </div>

          <div className="smallcart" onClick={openNav}>
            <i class="fa-solid fa-bars"></i>
          </div>

          <div id="mySidenav" class="sidenav" onClick={openNav}>
            <button class="openbtn" onClick={closeNav}>X</button>
            <li><Link to={'/Shopping'}>Home</Link></li>
            <li><Link to={'/Electronics'}>Electronic</Link></li>
            <li><Link to={'/Clothing'}>Clothing</Link></li>
            <li><Link to={'/HomeGarden'}>Home & Garden</Link></li>
            <li><Link className='active' to={'/OutDoors'}>Outdoors</Link></li>
            <li><Link to={'/BestSellers'}>Best Sellers</Link></li>
            <li><Link to={'/Offers'}>Offers</Link></li>
          </div>

        </div>
      </div>

      <div className="TopImage">

        <div className="image">
          <img className='img-fluid' src="./Images/shoppingImage.jpeg" alt="" />
        </div>

        <h1>Out Doors Page</h1>

      </div>


      <SpFooter />

    </div>
  )
}

export default OutDoors