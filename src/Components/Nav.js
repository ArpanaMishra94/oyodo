import React, {useState} from "react";
import "./Nav.css";
import {GiHamburgerMenu} from "react-icons/gi";

const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <div>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        OYODO
                    </h2>
                </div>

                <div className={
                    showMediaIcons ? "menu-item mobile-menu-item" : "menu-item"
                }>
                    <ul>
                        <li>HOME</li>
                        <li>DAPIBUS</li>
                        <li>ULTRICIES</li>
                        <li>BIBENDUM</li>
                        <li>MAGNA</li>
                    </ul>
                </div>

                <div className="nav-right">
                    <div className="hamburger-menu">
                        <a href="#"
                            onClick={
                                () => setShowMediaIcons(!showMediaIcons)
                        }>
                            <GiHamburgerMenu color="#1ef9f3"/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
