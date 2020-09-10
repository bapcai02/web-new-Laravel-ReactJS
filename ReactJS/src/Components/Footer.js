import React, { Component } from 'react'
import {BrowserRouter as Link, NavLink} from "react-router-dom";
export default class footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                        <div className="col-md-5">
                            <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html" className="logo"><img src="./img/logo.png" alt =""/></a>
                            </div>
                            <ul className="footer-nav">
                                <li>Privacy Policy</li>
                                <li>Advertisement</li>
                            </ul>
                            <div className="footer-copyright">
                                <span>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © DEVELOPER<i className="fa fa-heart-o" aria-hidden="true" /> by <p>DANG VAN HA</p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="footer-widget">
                                <h3 className="footer-title">About Us</h3>
                                <ul className="footer-links">
                                    <li><NavLink to ="/about"> About </NavLink></li>
                                    <li><NavLink to ="/contact"> Contact </NavLink></li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-widget">
                                <h3 className="footer-title">Catagories</h3>
                                <ul className="footer-links">
                                    <li>Web Design</li>
                                    <li>JavaScript</li>
                                    <li>Css</li>
                                    <li>Jquery</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                            <h3 className="footer-title">Join our Newsletter</h3>
                            <div className="footer-newsletter">
                                <form>
                                <input className="input" type="email" name="newsletter" placeholder="Enter your email" />
                                <button className="newsletter-btn"><i className="fa fa-paper-plane" /></button>
                                </form>
                            </div>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                    </footer>

            </div>
        )
    }
}
