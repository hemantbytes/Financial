import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myImage1 from '../img/testimonial-1.jpg';
import myImage2 from '../img/testimonial-2.jpg';
import myImage3 from '../img/testimonial-3.jpg';
import myImage4 from '../img/testimonial-4.jpg';

export default function () {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    dots: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
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

  useEffect(() => {
    // Make sure the sliderRef is not null before accessing it
    if (sliderRef.current) {
      // You can also add any other initialization code here
    }
  }, []);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };


  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: ' 600px ' }}>
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
            <h1 className="display-5 mb-5">What Our Clients Say!</h1>
        </div>
        <Slider {...settings} ref={sliderRef}>
            <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                    <div className="btn-square bg-white border rounded-circle">
                        <i className="fa fa-quote-right fa-2x text-primary"></i>
                    </div>
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </div>
                <center>
                <img className="rounded-circle mb-3" src={myImage1} alt="" />
                </center>
                <h4>Client Name</h4>
                <span>Profession</span>
            </div>
            <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                    <div className="btn-square bg-white border rounded-circle">
                        <i className="fa fa-quote-right fa-2x text-primary"></i>
                    </div>
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </div>
                <center>
                <img className="rounded-circle mb-3" src={myImage2} alt="" />
                </center>
                <h4>Client Name</h4>
                <span>Profession</span>
            </div>
            <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                    <div className="btn-square bg-white border rounded-circle">
                        <i className="fa fa-quote-right fa-2x text-primary"></i>
                    </div>
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </div>
                <center>
                <img className="rounded-circle mb-3" src={myImage3} alt="" />
                </center>
                <h4>Client Name</h4>
                <span>Profession</span>
            </div>
            <div className="testimonial-item">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                    <div className="btn-square bg-white border rounded-circle">
                        <i className="fa fa-quote-right fa-2x text-primary"></i>
                    </div>
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </div>
                <center>
                <img className="rounded-circle mb-3" src={myImage4} alt="" />
                </center>
                <h4>Client Name</h4>
                <span>Profession</span>
            </div>
            </Slider>
    
            <div className="text-center mt-3" style={{ display: 'none', marginTop : '25px' ,}}>
          {Array.from({ length: 4 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot-button ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
    </div>
</div>
  )
}




// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// class Testimonial extends React.Component {
//   render() {
//     const options = {
//       autoplay: true,
//       smartSpeed: 1000,
//       center: true,
//       margin: 24,
//       dots: true,
//       loop: true,
//       nav: false,
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
//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px'  }}>
//             <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
//             <h1 className="display-5 mb-5">What Our Clients Say!</h1>
//           </div>
//           <OwlCarousel className="testimonial-carousel" {...options}>
//             {/* Testimonial items here */}
           
//             <div className="testimonial-item">
//                 <div className="testimonial-text border rounded p-4 pt-5 mb-5">
//                     <div className="btn-square bg-white border rounded-circle">
//                         <i className="fa fa-quote-right fa-2x text-primary"></i>
//                     </div>
//                     Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
//                 </div>
//                 <center>
//                 <img className="rounded-circle mb-3" src="img/testimonial-1.jpg" alt="" />
//                 </center>
//                 <h4>Client Name</h4>
//                 <span>Profession</span>
//             </div>
//             <div className="testimonial-item">
//                 <div className="testimonial-text border rounded p-4 pt-5 mb-5">
//                     <div className="btn-square bg-white border rounded-circle">
//                         <i className="fa fa-quote-right fa-2x text-primary"></i>
//                     </div>
//                     Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
//                 </div>
//                 <center>
//                 <img className="rounded-circle mb-3" src="img/testimonial-2.jpg" alt="" />
//                 </center>
//                 <h4>Client Name</h4>
//                 <span>Profession</span>
//             </div>
//             <div className="testimonial-item">
//                 <div className="testimonial-text border rounded p-4 pt-5 mb-5">
//                     <div className="btn-square bg-white border rounded-circle">
//                         <i className="fa fa-quote-right fa-2x text-primary"></i>
//                     </div>
//                     Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
//                 </div>
//                 <center>
//                 <img className="rounded-circle mb-3" src="img/testimonial-3.jpg" alt="" />
//                 </center>
//                 <h4>Client Name</h4>
//                 <span>Profession</span>
//             </div>
//             <div className="testimonial-item">
//                 <div className="testimonial-text border rounded p-4 pt-5 mb-5">
//                     <div className="btn-square bg-white border rounded-circle">
//                         <i className="fa fa-quote-right fa-2x text-primary"></i>
//                     </div>
//                     Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
//                 </div>
//                 <center>
//                 <img className="rounded-circle mb-3" src="img/testimonial-4.jpg" alt="" />
//                 </center>
//                 <h4>Client Name</h4>
//                 <span>Profession</span>
//             </div>
            
//           </OwlCarousel>
//         </div>
//       </div>
//     );
//   }
// }

// export default Testimonial;
