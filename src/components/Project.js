
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import myImage1 from '../img/service-1.jpg';
import myImage2 from '../img/service-2.jpg';
import myImage3 from '../img/service-3.jpg';
import myImage4 from '../img/service-4.jpg';

export default function Projects () {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Adjust the number of slides for smaller screens
        },
      },
      {
        breakpoint: 576, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Adjust the number of slides for even smaller screens
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    // Make sure the sliderRef is not null before accessing it
    if (sliderRef.current) {
      // You can also add any other initialization code here
    }
  }, []);

  return (
    <div className="container-xxl py-5" >
       <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: ' 600px ' }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Projects
          </p>
          <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
        </div>
        <Slider {...settings} ref={sliderRef}>
        <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                    <img className="img-fluid rounded" src={myImage1} alt="" />
                    <Link to=""><i className="fa fa-link fa-3x text-primary"></i></Link>
                </div>
                <div className="project-title">
                    <h4 className="mb-0">Financial Planning</h4>
                </div>
            </div>
            <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                    <img className="img-fluid rounded" src={myImage2} alt="" />
                    <Link to=""><i className="fa fa-link fa-3x text-primary"></i></Link>
                </div>
                <div className="project-title">
                    <h4 className="mb-0">Cash Investment</h4>
                </div>
            </div>
            <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                    <img className="img-fluid rounded" src={myImage3} alt="" />
                    <Link to=""><i className="fa fa-link fa-3x text-primary"></i></Link>
                </div>
                <div className="project-title">
                    <h4 className="mb-0">Financial Consultancy</h4>
                </div>
            </div>
            <div className="project-item pe-5 pb-5">
                <div className="project-img mb-3">
                    <img className="img-fluid rounded" src={myImage4} alt="" />
                    <Link to=""><i className="fa fa-link fa-3x text-primary"></i></Link>
                </div>
                <div className="project-title">
                    <h4 className="mb-0">Business Loans</h4>
                </div>
            </div>
        </Slider>
        <div className="text-center" style={{ marginTop: '25px' }}>
          <button className="btn btn-primary mx-2 left-prev" onClick={prevSlide}>
          <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn btn-primary mx-2 right-next" onClick={nextSlide}>
          <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};









// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// class Projects extends React.Component {
//   render() {
//     const options = {
//       autoplay: true,
//       smartSpeed: 1000,
//       margin: 25,
//       loop: true,
//       center: true,
//       dots: false,
//       nav: true,
//       navText: [
//         '<i className="bi bi-chevron-left"></i>',
//         '<i className="bi bi-chevron-right"></i>'
//       ],
//       responsive: {
//         0: {
//           items: 1
//         },
//         576: {
//           items: 1
//         },
//         768: {
//           items: 2
//         },
//         992: {
//           items: 3
//         }
//       }
//     };

//     return (
//       <div className="container-xxl py-5" style={{ marginTop: '370px',}}>
//         <div className="container">
//           <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
//             <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
//             <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
//           </div>
//           <OwlCarousel className="Project-carousel" {...options}>
//           <div className="project-item pe-5 pb-5">
//                     <div className="project-img mb-3">
//                         <img className="img-fluid rounded" src="img/service-1.jpg" alt="" />
//                         <a to=""><i className="fa fa-link fa-3x text-primary"></i></a>
//                     </div>
//                     <div className="project-title">
//                         <h4 className="mb-0">Financial Planning</h4>
//                     </div>
//                 </div>
//                 <div className="project-item pe-5 pb-5">
//                     <div className="project-img mb-3">
//                         <img className="img-fluid rounded" src="img/service-2.jpg" alt="" />
//                         <a to=""><i className="fa fa-link fa-3x text-primary"></i></a>
//                     </div>
//                     <div className="project-title">
//                         <h4 className="mb-0">Cash Investment</h4>
//                     </div>
//                 </div>
//                 <div className="project-item pe-5 pb-5">
//                     <div className="project-img mb-3">
//                         <img className="img-fluid rounded" src="img/service-3.jpg" alt="" />
//                         <a to=""><i className="fa fa-link fa-3x text-primary"></i></a>
//                     </div>
//                     <div className="project-title">
//                         <h4 className="mb-0">Financial Consultancy</h4>
//                     </div>
//                 </div>
//                 <div className="project-item pe-5 pb-5">
//                     <div className="project-img mb-3">
//                         <img className="img-fluid rounded" src="img/service-4.jpg" alt="" />
//                         <a to=""><i className="fa fa-link fa-3x text-primary"></i></a>
//                     </div>
//                     <div className="project-title">
//                         <h4 className="mb-0">Business Loans</h4>
//                     </div>
//                 </div>
//           </OwlCarousel>
//           <div className="text-center" style={{ marginTop: '25px' }}>
//              <button className="btn btn-primary mx-2 left-prev" >
//              <i className="bi bi-chevron-left"></i>           </button>
//              <button className="btn btn-primary mx-2 right-next">
//              <i className="bi bi-chevron-right"></i>
//           </button>
//          </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Projects;

// import React, { useState, useEffect } from 'react';

// function Project() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div className='container'>
//       <div className='row'>
//         {data &&
//           data.map((item) => (
//             <div key={item.id} className='col-md-3'>
//               <div className='card'>
//                 <img src={item.thumbnailUrl} className='card-img-top' alt={item.title} />
//                 <div className='card-body'>
//                   <h5 className='card-title'>{item.title}</h5>
//                   <p className='card-text'>Album ID: {item.albumId}</p>
//                   <p className='card-text'>Photo ID: {item.id}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Project;
