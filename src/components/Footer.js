import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Our Office</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                    <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-youtube"></i></Link>
                    <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Services</h4>
                <Link className="btn btn-link" to="">Financial Planning</Link>
                <Link className="btn btn-link" to="">Cash Investment</Link>
                <Link className="btn btn-link" to="">Financial Consultancy</Link>
                <Link className="btn btn-link" to="">Business Loans</Link>
                <Link className="btn btn-link" to="">Business Analysis</Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link className="btn btn-link" to="">About Us</Link>
                <Link className="btn btn-link" to="">Contact Us</Link>
                <Link className="btn btn-link" to="">Our Services</Link>
                <Link className="btn btn-link" to="">Terms & Condition</Link>
                <Link className="btn btn-link" to="">Support</Link>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative w-100">
                    <input className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}


