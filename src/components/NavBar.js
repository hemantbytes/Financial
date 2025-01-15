// import React from 'react'

// export default function NavBar() {

//     const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
//     const [scrollPosition, setScrollPosition] = useState(0);
  
//     useEffect(() => {
//       function handleResize() {
//         setIsSmallScreen(window.innerWidth < 992);
//       }
  
//       function handleScroll() {
//         setScrollPosition(window.scrollY);
//       }
  
//       window.addEventListener('resize', handleResize);
//       window.addEventListener('scroll', handleScroll);
  
//       return () => {
//         window.removeEventListener('resize', handleResize);
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
  
//     useEffect(() => {
//       const fixedTopElement = document.querySelector('.fixed-top');
  
//       if (isSmallScreen) {
//         if (scrollPosition > 45) {
//           fixedTopElement.classList.add('bg-white', 'shadow');
//         } else {
//           fixedTopElement.classList.remove('bg-white', 'shadow');
//         }
//       } else {
//         if (scrollPosition > 45) {
//           fixedTopElement.classList.add('bg-white', 'shadow');
//           fixedTopElement.style.top = '-45px';
//         } else {
//           fixedTopElement.classList.remove('bg-white', 'shadow');
//           fixedTopElement.style.top = '0';
//         }
//       }
//     }, [isSmallScreen, scrollPosition]);


//   return (
//     <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
//     <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
//         <div className="col-lg-6 px-5 text-start">
//             <small><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
//             <small className="ms-4"><i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
//         </div>
//         <div className="col-lg-6 px-5 text-end">
//             <small><i className="fa fa-envelope text-primary me-2"></i>info@example.com</small>
//             <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
//         </div>
//     </div>

//     <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
//         <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
//             <h1 className="display-5 text-primary m-0">Finanza</h1>
//         </a>
//         <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto p-4 p-lg-0">
//                 <a href="index.html" className="nav-item nav-link active">Home</a>
//                 <a href="about.html" className="nav-item nav-link">About</a>
//                 <a href="service.html" className="nav-item nav-link">Services</a>
//                 <div className="nav-item dropdown">
//                     <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                     <div className="dropdown-menu border-light m-0">
//                         <a href="project.html" className="dropdown-item">Projects</a>
//                         <a href="feature.html" className="dropdown-item">Features</a>
//                         <a href="team.html" className="dropdown-item">Team Member</a>
//                         <a href="testimonial.html" className="dropdown-item">Testimonial</a>
//                         <a href="404.html" className="dropdown-item">404 Page</a>
//                     </div>
//                 </div>
//                 <a href="contact.html" className="nav-item nav-link">Contact</a>
//             </div>
//             <div className="d-none d-lg-flex ms-2">
//                 <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
//                     <small className="fab fa-facebook-f text-primary"></small>
//                 </a>
//                 <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
//                     <small className="fab fa-twitter text-primary"></small>
//                 </a>
//                 <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
//                     <small className="fab fa-linkedin-in text-primary"></small>
//                 </a>
//             </div>
//         </div>
//     </nav>
// </div>
//   )
// }



import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      function handleResize() {
        setIsSmallScreen(window.innerWidth < 992);
      }
  
      function handleScroll() {
        setScrollPosition(window.scrollY);
      }
  
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const fixedTopElement = document.querySelector('.fixed-top');
  
      if (isSmallScreen) {
        if (scrollPosition > 45) {
          fixedTopElement.classList.add('bg-white', 'shadow');
        } else {
          fixedTopElement.classList.remove('bg-white', 'shadow');
        }
      } else {
        if (scrollPosition > 45) {
          fixedTopElement.classList.add('bg-white', 'shadow');
          fixedTopElement.style.top = '-45px';
        } else {
          fixedTopElement.classList.remove('bg-white', 'shadow');
          fixedTopElement.style.top = '0';
        }
      }
    }, [isSmallScreen, scrollPosition]);


  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
            <small><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
            <small className="ms-4"><i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
            <small><i className="fa fa-envelope text-primary me-2"></i>info@example.com</small>
            <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
        </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="display-5 text-primary m-0">Finanza</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/services" className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu border-light m-0">
                        <Link to="/product" className="dropdown-item">Products</Link>
                        <Link to="/projects" className="dropdown-item">Projects</Link>
                        <Link to="/feature" className="dropdown-item">Features</Link>
                        <Link to="/team" className="dropdown-item">Team Member</Link>
                        <Link to="/testimonal" className="dropdown-item">Testimonial</Link>
                        <Link to="/pageError" className="dropdown-item">404 Page</Link>
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="d-none d-lg-flex ms-2">
                <Link className="btn btn-light btn-sm-square rounded-circle ms-3" to="/">
                    <small className="fab fa-facebook-f text-primary"></small>
                </Link>
                <Link className="btn btn-light btn-sm-square rounded-circle ms-3" to="/">
                    <small className="fab fa-twitter text-primary"></small>
                </Link>
                <Link className="btn btn-light btn-sm-square rounded-circle ms-3" to="/">
                    <small className="fab fa-linkedin-in text-primary"></small>
                </Link>
            </div>
        </div>
    </nav>
</div>
  )
}

