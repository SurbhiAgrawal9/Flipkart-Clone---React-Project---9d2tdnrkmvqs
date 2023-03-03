import React from 'react'
import './Navbar.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from 'react';
import { CartContext } from '../Context/Context';


const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated, user } = useAuth0();
    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;

    const logoURL = ' https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    // const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (

        <header>

            <div className="logo">
                <a href="#">
                    <img src={logoURL} alt="Flipkart" />
                </a>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search for products, brands and more" />
                <button type="submit">Search</button>
            </div>
            <div className="cart">
                <NavLink to="/Cart" >
                    <i className="fa fa-shopping-cart"></i>
                    <span>Cart</span>
                    <h6 className='cartlength'>{state.length}</h6>
                </NavLink>
            </div>

            <div className="login">
                {
                    isAuthenticated ? (
                        <>
                            <button className='set' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                            <Tippy content={<div>
                                {user.name} <br />
                                {user.email}
                            </div>}>
                                <div className="setuser">
                                    {/* <i class="fa-solid fa-user"></i> */}
                                    <img src={user.picture} width={50} />
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <button className='set' onClick={() => loginWithRedirect()}>
                                Login
                            </button>
                            <Tippy content={<p>No User Found</p>}>
                                <div className="setuser">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </Tippy>
                        </>
                    )
                }

            </div>
        </header>





    )
}

export default Navbar