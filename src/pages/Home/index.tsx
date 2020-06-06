import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';


import './style.css';
import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
                <main>
                    <h1>Your garbage collection marketplace.</h1>
                    <p>We help people to find points to collect.</p>
                    
                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Register a garbage collection point</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;

