import React from 'react'
import { Link } from 'react-router-dom';

const RContact = () => {
  function openNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "230px";
  }

  function closeNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div onClick={closeNav} style={{textAlign:"center"}}>

    <div className="Navbar">
      <div className=" NavStart">
        <Link to={"/"} >
          <div className="logo">
            <img src="./SpImages/mainLogo.png" alt="" />
          </div>
        </Link>

        <div className="login2">
          <li><Link  to={'/Restaurant'}>Home</Link></li>
          <li><Link  to={'/GreateDeal'}>Greate Deal</Link></li>
          <li><Link to={'/Menu'}>Menu</Link></li>
          <li><Link to={'/Reciepes'}>Reciepes</Link></li>
          <li><Link className='active' to={'/RContact'}>Contact Us</Link></li>

        </div>

        <div className="smallcart" onClick={openNav}>
          <i class="fa-solid fa-bars"></i>
        </div>

        <div id="mySidenav" class="sidenav" onClick={openNav}>
          <button class="openbtn" onClick={closeNav}>X</button>
          <li><Link  to={'/Restaurant'}>Home</Link></li>
          <li><Link  to={'/GreateDeal'}>Greate Deal</Link></li>
          <li><Link to={'/Menu'}>Menu</Link></li>
          <li><Link to={'/Reciepes'}>Reciepes</Link></li>
          <li><Link className='active' to={'/RContact'}>Contact Us</Link></li>
        </div>

      </div>
    </div>

    <div className="subImage">
      <img src="./Images/1.jpg" alt="" />
    </div>


    <h1>Contact Component</h1>
  </div>
  )
}

export default RContact