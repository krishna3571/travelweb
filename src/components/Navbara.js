import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { CiLocationOn } from "react-icons/ci";
import img from "../components/pexels-valiphotos-589802.jpg";
import offer from "../components/image-01.png";
import offer02 from "../components/offer_02-3150-min.png";
import offer03 from "../components/pexels-anne-sophie-parent-1111377-2105416.jpg";
// import Typed from 'typed.js'; // Import typed.js


const Navbar = () => {



    return (
        <>
            <div className="landing-page">
                <header>
                    <a href="#">
                        <img
                            src={img}
                            alt="logo"
                            className="logo"
                        />
                    </a>

                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="icons">
                        <FontAwesomeIcon icon={faBars} id="menu-icon" />
                        <FontAwesomeIcon icon={faTimes} id="close-icon" />
                    </label>

                    <nav className="navbar2">
                        <a href="#" className="nav-item" style={{ '--i': 0 }}>Hotel</a>
                        <a href="#" className="nav-item" style={{ '--i': 1 }}>Tour</a>
                        <a href="#" className="nav-item" style={{ '--i': 2 }}>Activity</a>
                    </nav>
                </header>

                <section className="content">
                    <div className="video-overlay">
                        <video autoPlay loop muted playsInline className="background-video">
                            <source
                                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05"
                                type="video/mp4"
                            />
                        </video>
                        <h1 className='font_01'>Let the journey begin</h1>
                        <p>Get the best prices on 2,000,000+ properties, worldwide</p>
                    </div>
                </section>
                <div className='container'>
                    <div className='box_0'>
                        <div className='dot'>

                        </div>
                    </div>
                </div>

            </div>

            
            <div className='row2'>

                <div className='just-1 mt-2'>

                    <div class="article-container">
                        <div class="article-img-holder"></div>
                    </div>
                </div>

                <div className='just-1 mt-2'>
                    <div class="article-container">
                        <div class="article-img-holder"></div>
                    </div>

                </div>

            </div>

            <div className='container'>

                {/* <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 rett'>
                        <div class="img-wrapper">
                            <img class="inner-img" src={offer} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 rett'>
                        <div class="img-wrapper">
                            <img class="inner-img" src={offer02} />
                        </div>
                    </div>
                </div> */}




                <div className='destion'>
                    <h1 className='font_sett'>Top destinations</h1>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>

                        <img className='box_img img-fluid' src={offer03} />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <img className='box_img img-fluid' src={offer03} />

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <img className='box_img img-fluid' src={offer03} />

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>

                        <img className='box_img img-fluid' src={offer03} />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <img className='box_img img-fluid' src={offer03} />

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <img className='box_img img-fluid' src={offer03} />

                    </div>
                </div>

            </div>



            {/* contecdt */}



        </>
    );
}

export default Navbar;
