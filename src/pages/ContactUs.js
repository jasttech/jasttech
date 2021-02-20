import styled from 'styled-components';
import { Header } from '../components/layout/Header';

const Head = styled.h2`
  font-weight: 900;
  font-size: 3rem;
  color: #6f6f6f;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Frame = styled.iframe`
  border: 0;
  width: 100%;
  height: 70vh;
  margin-bottom: 5vh;
  border-bottom: 1px solid #d3d3d3;
`;
const ContactUs = () => {
  return (
    <>
        <Header title="Contact Us" />
      <Frame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.714511978435!2d32.639151980402964!3d0.41331216365916046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db79ef14fdfff%3A0x61cad9b63b2a5340!2sBulindo%20Medical%20Centre!5e0!3m2!1sen!2sug!4v1608237842112!5m2!1sen!2sug"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></Frame>
      <br />
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <Head>Contact Us</Head>
            <span
              style={{
                color: 'GrayText'
              }}
            >
              Let's start a conversation, please fill out the form below and
              you'll be called within 24 hours!
            </span>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
