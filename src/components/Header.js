import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaRegSun, FaMoon} from 'react-icons/fa';

const Header = () => {
    const [] = useState()

    return (
    <div className="section-1">
    <div className="heading">
        <div className="heading__secondary">
            From Television to the web
        </div>

        <div className="heading__primary">
            Latest news
        </div>
    </div>

    <div className="navbar">
        <nav className="navbar-container">
            <div className="navbar__item">
                <Link to={`/`} className="navbar__item-link">Home</Link>
            </div>
            <div className="navbar__item">
                <Link to={`Newsify/About/`} className="navbar__item-link">About</Link>
            </div>
            <div className="navbar__item">
                <Link to="/" className="navbar__item-link">My Blog</Link>
            </div>
            <div className="navbar__item">
                <Link to="/" className="navbar__item-link">Contact</Link>
            </div>
            <div className="navbar__item">
                <Link to="/" className="navbar__item-link">
                    <FaFacebookF className="navbar__item-link--img"  />
                </Link>
                <Link to="/" className="navbar__item-link">
                    <FaInstagram className="navbar__item-link--img"  />
                </Link>
                <Link to="/" className="navbar__item-link">
                    <FaTwitter className="navbar__item-link--img"  />
                </Link>
                <Link to="/" className="navbar__item-link">
                    <FaPinterest className="navbar__item-link--img"  />
                </Link>
            </div>
        </nav>
    </div>
    </div>
    );
};

export default Header;

{/* <div class="navbar__item">
                <!-- <a href="#" class="navbar__item-link">
                    <img class="navbar__item-link--img" src="./img/fb-small.jpg" alt="facebook">
                </a> -->
                <div class="navbar__item-block">
                    <svg class="navbar__item-icon">
                        <use class="navbar__item-pos" xlink:href="img/sprite.svg#icon-facebook2"></use>
                    </svg>
                </div>
                <div class="navbar__item-block">
                    <svg class="navbar__item-icon">
                        <use class="navbar__item-pos" xlink:href="img/sprite.svg#icon-instagram"></use>
                    </svg>
                </div>
                <div class="navbar__item-block">
                    <svg class="navbar__item-icon">
                        <use class="navbar__item-pos" xlink:href="img/sprite.svg#icon-twitter"></use>
                    </svg>
                </div>
                <div class="navbar__item-block">
                    <svg class="navbar__item-icon">
                        <use class="navbar__item-pos" xlink:href="img/sprite.svg#icon-pinterest"></use>
                    </svg>
                </div>
                <div class="navbar__item-block">
                <svg class="navbar__item-icon">
                    <use class="navbar__item-pos" xlink:href="img/sprite.svg#icon-contrast"></use>
                </svg>
            </div>
        </div> */}