import React, { useState } from 'react';
import { FaSearch, FaTwitter, FaFacebookF, FaInstagram, FaRss, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const closeSearch = () => {
        setSearchOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <div className="logo">Blogin</div>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/header-styles">Header Styles</a>
                    <a href="/pages">Pages</a>
                    <a href="/author-details">Author Details</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className="icons">
                    <FaSearch className="icon" onClick={toggleSearch} />
                    <FaTwitter className="icon" />
                    <FaFacebookF className="icon" />
                    <FaInstagram className="icon" />
                    <FaRss className="icon" />
                    <FaBars className="menu-icon" onClick={toggleMenu} />
                </div>
            </header>
            {searchOpen && (
                <div className="search-overlay" onClick={closeSearch}>
                    <div className="search-bar" onClick={(e) => e.stopPropagation()}>
                        <input type="text" placeholder="Search..." />
                        <button onClick={closeSearch}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
