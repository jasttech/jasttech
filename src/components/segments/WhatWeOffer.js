import {Link } from 'react-router-dom'
import serviceRoutes from '../routing/serviceRoutes';

const WhatWeOffer = () => (
  <>
    <div className="container">
      <h2 class="featurette-heading">What we Offer.</h2>
      <p class="lead">
        Our approach to business is simple, We provide quality and timely
        solutions that enable you improve your business. Through active research
        and insight, we strategize with our customers in devising cost efficient
        solutions and deliver them using the best possible technologies.
      </p>
      <div class="row mt-5">
        {serviceRoutes.map((prop, key) => {
          return (

        <div class="col-lg-4">
          <div className="row">
            <div className="col-md-2">
              <span style={{
                fontSize: '3rem'
              }}>

              {prop.icon}
              </span>
            </div>
            <div className="col-md-10">
                  <Link to={prop.layout + prop.path}>
                    <h4>{prop.name}</h4>
                  </Link>
                  <small>
                {prop.detail}
              </small>
            </div>
          </div>
        </div>
          )
        })}
       
      </div>
      <div className="row mt-5">
        <div className="offset-md-4 col-md-4">
          <Link to="/services" className="btn btn-block btn-lg btn-success">LEARN ABOUT OUR SERVICES</Link>
        </div>
      </div>
    </div>
  </>
);

export { WhatWeOffer };
