
import React from 'react';
import { CallBack } from '../components/cards/CallBack';
import HomeCarousel from '../components/carousels/HomeCarousel';
import { LoginModal } from '../components/modals/LoginModal';
import { RequestQuote } from '../components/modals/RequestQuote';
import { WhatWeOffer } from '../components/segments/WhatWeOffer';
import { Welcome } from '../components/welcome/Welcome';
import Image from '../images/image.jpg';

const Home = () => {
  return (
    <>
        <RequestQuote />
        <LoginModal />
        <HomeCarousel />
        <div className="d-flex quote pr-3">
          <div className="pl-5 pr-5">
            Jast Tech aims at bringing your business to life.
          </div>
          <a
            href="#"
            className="btn btn-sm btn-secondary hvr-curl-bottom-left"
            data-toggle="modal"
            data-target="#requestQuote"
          >
            Request Quote
          </a>
        </div>
        <div class="container marketing">
          <div class="row featurette">
            <div class="col-md-7">
              <Welcome />
            </div>
            <div class="col-md-5">
              <br />
              <br />
              <img
                class="mt-5 featurette-image img-fluid mx-auto"
                src={Image}
                alt=""
              />
            </div>
          </div>
          <div
            class="row featurette"
            style={{
              marginTop: '5rem',
              marginBottom: '3rem'
            }}
          >
            <WhatWeOffer />
          </div>
        </div>
        <div
          className="featurette-colored"
          style={{
            paddingTop: '3rem',
            paddingBottom: '3rem',
            marginBottom: '5rem'
          }}
        >
          <div className="container">
            <div className="row featurette">
              <div class="col-md-7">
                <CallBack />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Home;
