import React, { useState } from 'react'
import '@styles/navbar.css'
import NavButton from '@/ui/Buttons/NavButton'
import { SiConvertio } from 'react-icons/si'
import { motion } from 'framer-motion'
import Link from 'next/link'
export default function Navbar() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-grey px-3">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold " href="/" onClick={() => setIsActive(!isActive)}>
                    <motion.div className='d-inline-block pe-1'
                        animate={{
                            rotate: isActive ? 360 : 0
                        }}
                        transition={{ duration: 1 }}>
                        <SiConvertio style={{ width: "50", height: "50", fill: "#dd4343" }} />
                    </motion.div>
                    PDF CONVERTER
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto d-flex gap-0 gap-lg-2">
                        <li className="nav-item dropdown">
                            <motion.a
                                whileHover={{ scale: 1.2 }} className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </motion.a>
                            <ul style={{zIndex:'99999'}} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <ul className='p-0'>
                                    <li><a className="dropdown-item text-uppercase fw-bold disabled" href="#">CONVERT TO PDF</a></li>
                                    <div className="dropdown-divider"></div>
                                    <li><Link className="dropdown-item text-uppercase" href="/excel-to-pdf">Excel to pdf </Link></li>
                                    <li><Link className="dropdown-item text-uppercase" href="/word-to-pdf">Word to pdf</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" href="/split-pdf">Split pdf</Link></li>
                                </ul>
                                <hr />
                                <ul className='p-0'>
                                    <li><a className="dropdown-item text-uppercase disabled fw-bold" href="#">CONVERT From PDF</a></li>
                                    <div className="dropdown-divider"></div>
                                    <li><a className="dropdown-item text-uppercase" href="#">Excel to pdf </a></li>
                                    <li><a className="dropdown-item text-uppercase" href="#">Word to pdf</a></li>
                                    <li><a className="dropdown-item text-uppercase" href="#">Split pdf</a></li>
                                </ul>
                            </ul>

                        </li>
                        <li className="nav-item">
                            <motion.a whileHover={{ scale: 1.2 }} className="nav-link mx-2 active" aria-current="page" href="#">Home</motion.a>
                        </li>
                        <li className="nav-item">
                            <motion.a whileHover={{ scale: 1.2 }} className="nav-link mx-2" href="#">Products</motion.a>
                        </li>
                        <li className="nav-item">
                            <motion.a whileHover={{ scale: 1.2 }} className="nav-link mx-2" href="#">Pricing</motion.a>
                        </li>


                    </ul>
                    <div className="navbar-nav ms-auto d-lg-inline-flex">
                        <NavButton text="blog" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
