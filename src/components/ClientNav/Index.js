import React, { useState, useEffect } from 'react'
import '../../styles/client/component/navbar/style.scss'
import { Icon } from 'react-icons-kit'
import { NavLink } from 'react-router-dom'
import { ic_menu } from 'react-icons-kit/md'
import { Dropdown } from 'react-bootstrap'

const Index = () => {
    const [show, setShow] = useState(false)
    const [isDrop, setDrop] = useState(false)
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
            <div className={scrolled ? "main-navbar shadow scrolled" : "main-navbar"} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">

                                {/* Toggle Bars */}
                                <div className="ml-auto d-lg-none">
                                    <Icon
                                        icon={ic_menu}
                                        size={25}
                                        className="bars"
                                        onClick={() => setShow(true)}
                                        style={{ color: '#fff' }}
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
                                            <li><NavLink activeClassName="is-Active" exact to="/about">about</NavLink></li>
                                            {/* <li><NavLink activeClassName="is-Active" exact to="/publication/2020">publications</NavLink></li> */}
                                            <li>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="none"
                                                        className="shadow-none"
                                                        onToggle={() => setDrop(!isDrop)}
                                                    >publications</Dropdown.Toggle>

                                                    <Dropdown.Menu
                                                        className="rounded-0 border-0 shadow"
                                                        show={isDrop}>
                                                        <Dropdown.Item href="">Action</Dropdown.Item>
                                                        <Dropdown.Item href="">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </li>
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