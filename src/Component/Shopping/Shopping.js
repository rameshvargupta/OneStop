import React from 'react'
import SpFooter from './SpFooter';
import { Link } from 'react-router-dom';

const Shopping = () => {

  function openNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "230px";
  }

  function closeNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div>

      <div onClick={closeNav}>

        <div className="Navbar">
          <div className=" NavStart">
            <Link to={"/"} >
              <div className="logo">
                <img src="./SpImages/mainLogo.png" alt="" />
              </div>
            </Link>

            <div className="login2">
              <li><Link className='active' to={'/Shopping'}>Home</Link></li>
              <li><Link to={'/Electronics'}>Electronic</Link></li>
              <li><Link to={'/Clothing'}>Clothing</Link></li>
              <li><Link to={'/HomeGarden'}>Home & Garden</Link></li>
              <li><Link to={'/OutDoors'}>Outdoors</Link></li>
              <li><Link to={'/BestSellers'}>Best Sellers</Link></li>
              <li><Link to={'/Offers'}>Offers</Link></li>

            </div>

            <div className="smallcart" onClick={openNav}>
              <i class="fa-solid fa-bars"></i>
            </div>

            <div id="mySidenav" class="sidenav" onClick={openNav}>
              <button class="openbtn" onClick={closeNav}>X</button>
              <li><Link className='active' to={'/SpHome'}>Home</Link></li>
              <li><Link to={'/Electronic'}>Electronic</Link></li>
              <li><Link to={'/Clothing'}>Clothing</Link></li>
              <li><Link to={'/HomeGarden'}>Home & Garden</Link></li>
              <li><Link to={'/OutDoors'}>Outdoors</Link></li>
              <li><Link to={'/BestSellers'}>Best Sellers</Link></li>
              <li><Link to={'/Offers'}>Offers</Link></li>
            </div>

          </div>
        </div>

        <div className='box2'>
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active topImage">
                <img className='img-fluid' src="../Images/shop.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item topImage">
                <img className='img-fluid' src="./SpImages/2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item topImage">
                <img className='img-fluid' src="./SpImages/10.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="container">
            <h2 style={{ textAlign: "center", margin: "50px 0 50px 0" }}>DEALS OF THE DAY</h2>
            <div className="row box3 top">
              <div className="col-sm-12 col-lg-4">
                <img className='img-fluid' src="./SpImages/3.jpg" alt="" />
              </div>
              <div className="col-md-12 col-lg-4">
                <img className='img-fluid' src="./SpImages/10.jpg" alt="" />
              </div>
              <div className="col-md-12 col-lg-4">
                <img className='img-fluid' src="./SpImages/6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <h2 style={{ textAlign: "center", margin: "50px 0 60px 0" }}>BEST SELLING PRODUCTS</h2>
          </div>

          <div className="container box4">
            <div className="row ">
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/14.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Sari Cotton Bag</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;620</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;350</span></h5>
                  </figcaption>
                </figure>
              </div>

              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/15.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Summer Cloth</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;1220</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;640</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/18.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>T Shirt</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;530</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;250</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/1.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Woodland Belt</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;410</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;220</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/16.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Ladies Cloth</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;1320</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;749</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/9.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Ladies Frogs</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;850</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;449</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/12.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Combo sets</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;1249</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;799</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/11.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Combo sets</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;1180</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;719</span></h5>
                  </figcaption>
                </figure>
              </div>
            </div>



          </div>

          <h2 style={{ textAlign: "center", margin: "50px 0 50px 0" }}>EVERYONE'S FAVORITE</h2>

          <div className="container box4">
            <div className="row">
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/20.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Summer Wear</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;849</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;499</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/21.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Nighty Frogs</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;1049</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;599</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/10.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Dupatta</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;620</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;349</span></h5>
                  </figcaption>
                </figure>
              </div>
              <div className="col-6 col-md-6 col-sm-6 col-lg-3">
                <figure>
                  <img className='img-fluid' src="./SpImages/29.jpg" alt="" />
                  <figcaption>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <h4>Party Cloth</h4>
                    <h5><del style={{ color: "GrayText" }}> &#8377;1019</del><span style={{ color: "Green", fontWeight: "bold" }}>  &#8377;749</span></h5>
                  </figcaption>
                </figure>
              </div>
            </div>
            <button className='viewbtn'>View All</button>
          </div>

          <h2 style={{ textAlign: "center", margin: "10px 0 50px 0" }}>SHOP BY CATEGORIES</h2>

          <div className="container box5 ">
            <div className="row box3">
              <div className="  col-md-6 col-sm-6 col-lg-4 slider ">
                <img className='img-fluid slidercolor' src="./SpImages/22.jpg" alt="" />
              </div>
              <div className=" col-md-6 col-sm-6 col-lg-4 slider">
                <img className='img-fluid slidercolor' src="./SpImages/23.jpg" alt="" />
              </div>
              <div className=" col-md-6 col-sm-6 col-lg-4 slider">
                <img className='img-fluid slidercolor' src="./SpImages/26.jpg" alt="" />
              </div>
              <div className=" col-md-6 col-sm-6 col-lg-4 slider">
                <img className='img-fluid slidercolor' src="./SpImages/27.jpg" alt="" />
              </div>
              <div className=" col-md-6 col-sm-6 col-lg-4 slider">
                <img className='img-fluid slidercolor' src="./SpImages/32.jpg" alt="" />
              </div>
              <div className=" col-md-6 col-sm-6 col-lg-4 slider">
                <img className='img-fluid slidercolor' src="./SpImages/31.jpg" alt="" />
              </div>
            </div>
          </div>
          <h2 style={{ textAlign: "center", margin: "10px 0 50px 0" }}>CUSTOMER FEEDBACK</h2>

          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" style={{ color: "red" }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="container">
                  <div className="row box6">

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4> Newton</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4>Ainstine</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4>Mendlife</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="carousel-item">

                <div className="container">
                  <div className="row box6">

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4> Newton</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4>Ainstine</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4>Mendlife</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="carousel-item">

                <div className="container">
                  <div className="row box6">

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4> Newton</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4>Ainstine</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 my-3">
                      <div className="box7">
                        <h6>"Excellent service! Fast delivery and great quality products. Will definitely shop here again."
                          "The website is easy to navigate, and the checkout process was smooth. Impressed with the variety of products available."
                        </h6>
                        <div className="row">
                          <div className="col-4">
                            <img className=' last' src="./SpImages/10.jpg" alt="" />
                          </div>
                          <div className="col-6">
                            <h4>Mendlife</h4>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="container box8">
            <div className="">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-3 my-2">
                  <h5 className='box9'><i class="fa fa-arrow-left mx-2"></i> 30 days return money</h5>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 my-2">
                  <h5 className='box9'><i class="fa fa-male mx-2"></i> 90% customer satisfied</h5>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 my-2">
                  <h5 className='box9'><i class="fa fa-save-money mx-2"></i> 100% secure payment</h5>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 my-2">
                  <h5 className='box9'><i class="fa fa-arrow-left mx-2"></i>No charge free shipping </h5>
                </div>
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>

        <SpFooter/>

      </div>

    </div>
  )
}
export default Shopping;
