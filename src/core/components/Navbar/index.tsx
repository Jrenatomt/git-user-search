import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const Navbar = () => (

    <nav className="nav-container">
        <div>

        <Link to="/" className="home-title">
          <h4>Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>

);

export default Navbar;