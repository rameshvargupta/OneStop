import React from 'react'

const GFooter = () => {
    return (
        <div>


            <div className="footer">

                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-3">

                        <div className="Fsection1">

                            <div className="image">
                                <img className='img-fluid' src="./SpImages/29.jpg" alt="" />
                            </div>

                            <h6>Product of here is very chief and good quality.
                                so Give me one chance to show my product </h6>
                            <div className="icons">
                                <i class="fa-brands fa-facebook mx-2"></i>
                                <i class="fa-brands fa-instagram mx-2"></i>
                                <i class="fa-brands fa-twitter mx-2"></i>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 col-sm-6 col-lg-3 my-2">
                        <div className="Fsection2">
                            <h2>My Categories</h2>
                            <hr />
                            <ul>
                                <li> <a href="">Footewear</a></li>
                                <li> <a href="">Bag</a></li>
                                <li> <a href="">Shirt</a></li>
                                <li> <a href="">Women Cloth</a></li>
                                <li> <a href="">Jeans</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-2 my-2">
                        <div className="Fsection3">
                            <h2>Links</h2>
                            <hr />
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Account</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-4 my-2">

                        <div className="Fsection4">
                            <h2>Contact Us</h2>
                            <hr />
                            <ul>
                                <li><i class="fa-solid fa-location-dot mx-2"></i><a href="">Noida Sector 41 Uttar Pradesh Pincode 201303</a></li>
                                <li><i class="fa fa-phone mx-2"></i><a href="">+91 9811 075 657</a></li>
                                <li><i class="fa-solid fa-envelope mx-2"></i><a href="">manisulatech@gmail.com</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            <div className='LastFooter'>All Rights Reserved @ 10-2023. <span>Owner <strong> Manish Kaushik </strong>Email-manisulatech@gmail.com</span></div>

        </div>
    )
}

export default GFooter