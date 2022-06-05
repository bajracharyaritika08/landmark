import React from "react";
import CommonButton from "./CommonButton";
import '../assets'


const Navbar = () => {
    return(
        <>
            <nav className="main-nav">
                <div className="logo">
                    <img src="../assets/images/logo.jpg" alt="" />
                    <h2>
                    <span>L</span>and
                    <span>M</span>ark
                    </h2>
                </div>
                {/* Here starts the menu  */}
                <div className="menu-link">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Job & Apply</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul>
                        <li>
                            <a href=""><CommonButton/></a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Here starts the hero section  */}
            <section className="hero-section">
                    <img src="" alt="" />
            </section>
        </>
    );
}

export default Navbar;