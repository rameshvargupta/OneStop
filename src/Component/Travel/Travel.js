import React from 'react'
import { Link } from 'react-router-dom';
import TFooter from './TFooter';

const Travel = () => {
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
            <li><Link className='active' to={'/'}>Home</Link></li>
            <li><Link to={'/Shopping'}>Shopping</Link></li>
            <li><Link to={'/Restaurant'}>Restaurant</Link></li>
            <li><Link to={'/Travel'}>Travel</Link></li>
            <li><Link to={'/VideoMusic'}>Video/Music</Link></li>
            <li><Link to={'/Gaming'}>Gaming</Link></li>
            <li><Link to={'/Contact'}>Contact Us</Link></li>
          </div>

          <div className="smallcart" onClick={openNav}>
            <i class="fa-solid fa-bars"></i>
          </div>

          <div id="mySidenav" class="sidenav" onClick={openNav}>
            <button class="openbtn" onClick={closeNav}>X</button>
            <li><Link className='active' to={'/'}>Home</Link></li>
            <li><Link to={'/Shopping'}>Shopping</Link></li>
            <li><Link to={'/Restaurant'}>Restaurant</Link></li>
            <li><Link to={'/Travel'}>Travel</Link></li>
            <li><Link to={'/VideoMusic'}>Video/Music</Link></li>
            <li><Link to={'/Gaming'}>Gaming</Link></li>
            <li><Link to={'/Contact'}>Contact Us</Link></li>
          </div>

        </div>
      </div>
      <div className="subImage">
        <img src="./Images/6.jpg" alt="" />
      </div>

      <h1 style={{ textAlign: "center" }}>Travel Component</h1>

      <TFooter />

    </div>
  )
}

export default Travel
