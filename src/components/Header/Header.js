import React from 'react';
import "./Header.css";

import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navBar">
            <a className="navbar-brand" href="/">
                <img className="stema" width="160" height="78" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Candidates">Candidates</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/PoliticalParties">Political Parties</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/PastElections">Past elections</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Vote">Vote</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;