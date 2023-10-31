import React from 'react'
import "@styles/footer.css"
import { SiConvertio } from 'react-icons/si'
export default function Footer() {
    return (
        <>
            <footer className="footer_area mt-5 section_padding_130_0">
                <div className="container">
                    <div className="row">
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Footer Logo--> */}
                                <div className="footer-logo mb-3 ">
                                    <h1>
                                        <span><SiConvertio style={{ width: "50", height: "50", fill: "#dd4343" }} /> PDF CONVERTER</span>
                                    </h1>
                                </div>
                                <p>Appland is completely creative, lightweight, clean app landing page.</p>
                                {/* <!-- Copywrite Text--> */}
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">About</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Corporate Sale</a></li>
                                        <li><a href="#">Terms &amp; Policy</a></li>
                                        <li><a href="#">Community</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">Support</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Term &amp; Conditions</a></li>
                                        <li><a href="#">Help &amp; Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">Contact</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Call Centre</a></li>
                                        <li><a href="#">Email Us</a></li>
                                        <li><a href="#">Term &amp; Conditions</a></li>
                                        <li><a href="#">Help Center</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="d-flex flex-wrap justify-content-between align-items-center  border-top">
                            <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
                            <ul className="nav col-md-4 justify-content-end">
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
