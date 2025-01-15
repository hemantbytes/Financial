import React from 'react';
import CountUp from 'react-countup';

export default function Facts  ()  {
  return (
    <div className="container-fluid facts my-5 py-5" style={{ background: 'linear-gradient(rgba(53, 94, 252, .95), rgba(53, 94, 252, .95)), url(../img/bg.png)' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <i className="fa fa-users fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white" data-toggle="counter-up">
              <CountUp start={0} end={1234} duration={5} /> {/* Replace 1234 with your desired number */}
            </h1>
            <span className="fs-5 text-white">Happy Clients</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <i className="fa fa-check fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white" data-toggle="counter-up">
              <CountUp start={0} end={1234} duration={5} /> {/* Replace 1234 with your desired number */}
            </h1>
            <span className="fs-5 text-white">Projects Completed</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white" data-toggle="counter-up">
              <CountUp start={0} end={1234} duration={5} /> {/* Replace 1234 with your desired number */}
            </h1>
            <span className="fs-5 text-white">Dedicated Staff</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <i className="fa fa-award fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white" data-toggle="counter-up">
              <CountUp start={0} end={1234} duration={5} /> {/* Replace 1234 with your desired number */}
            </h1>
            <span className="fs-5 text-white">Awards Achieved</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
        </div>
      </div>
    </div>
  );
}


