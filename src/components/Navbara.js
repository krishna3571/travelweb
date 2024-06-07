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
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import FadingGallery from './FadingGallery';

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

                {/* contecdt */}

            <div className='container mt-5'>


                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This card has supporting text below as a natural lead-in to additional content.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                                    card has even longer content than the first to show that equal height action.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
            
            <FadingGallery />

        </>
    );
}

export default Navbar;
