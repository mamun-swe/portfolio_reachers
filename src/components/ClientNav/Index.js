import React, { useState, useEffect } from 'react'
import '../../styles/client/navbar/style.scss'
import { Icon } from 'react-icons-kit'
import { Link, NavLink } from 'react-router-dom'
import { ic_menu, ic_close } from 'react-icons-kit/md'

import Logo from '../../assets/static/Logo.png'

const Index = () => {
    const [show, setShow] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })


    return (
        <div className="custom-navbar">
            <div className={scrolled ? "main-navbar shadow" : "main-navbar"} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img src={Logo} className="img-fluid" alt="..." />
                                    </Link>
                                </div>

                                {/* Toggle Bars */}
                                <div className="ml-auto d-lg-none">
                                    <Icon
                                        icon={ic_menu}
                                        size={25}
                                        className="bars"
                                        onClick={() => setShow(true)}
                                    />
                                </div>

                                {/* Menu bar backdrop */}
                                <div className={show ?
                                    "ml-auto page-links-menu-bar show-backdrop" :
                                    "ml-auto page-links-menu-bar"}
                                    onClick={() => setShow(false)}
                                >
                                    {/* Menu */}
                                    < div className={show ? "my-menu open-sidemenu" : "my-menu"} >
                                        <ul>
                                            <li><NavLink activeClassName="is-Active" exact to="/">home</NavLink></li>
                                            <li><NavLink activeClassName="is-Active" exact to="/about-us">about</NavLink></li>
                                            <li><NavLink activeClassName="is-Active" exact to="/contact-us">contact</NavLink></li>
                                            <li><NavLink activeClassName="is-Active" exact to="/login">login</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;