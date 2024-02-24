import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';



export default function Navbar() {

    const [cartView, setCartView] = useState(false);
    let data = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        const isConfirmed = window.confirm("Confirm Logout Request?");
    
        // Check if user confirmed the logout
        if (isConfirmed) {
            // Remove authToken from localStorage
            localStorage.removeItem("authToken");
            
            // Redirect to login page
            navigate("/login");
        }
    
        // localStorage.removeItem("authToken");
        // navigate("/login");
    }


    return (
        <div className='nav-div'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fst-italic" to="/">TastyMasic</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto mb-2 ml-3">
                            <li className='nav-item'>
                                <Link className="nav-link active fw-bold fs-6" aria-current="page" to="/">Home</Link>
                            </li>

                            {(localStorage.getItem("authToken")) ?
                                <li className='nav-item'>
                                    <Link className="nav-link active fw-bold fs-6" aria-current="page" to="/myOrder">Orders</Link>
                                </li>
                                : ""}
                        </ul>

                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link className="btn bg-white text-success mx-2" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-2" to="/creatuser">SignUp</Link>
                            </div>
                            :
                            <div>
                                <div className='btn bg-white text-success mx-2 pt-1 pb-2' onClick={() => { setCartView(true) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                    </svg> 
                                    {/* &nbsp; <Badge pill bg="danger">{data.length}</Badge> */}
                                    {data.length > 0 && (
                                        <Badge pill bg="danger fs-6 fw-light bg-t py-0 px-1">{data.length}</Badge>
                                    )}
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}

                                <div className='btn fw-bold bg-white text-danger mx-2' onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};


// body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;http://localhost:3000/
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     font-family: 'NHaasGroteskDSOro-65Md' !important;
//     font-family: "Square721 Blk Italic V2";
//   }
//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }

