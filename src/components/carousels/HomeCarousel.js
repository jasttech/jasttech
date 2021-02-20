import { Link } from "react-router-dom";
import Image1 from "../../images/image3.jpg";
import Image2 from "../../images/image5.jpg";
import Image3 from "../../images/image8.jpg";

const HomeCarousel = () => {
  return (
    <>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" src={Image3} alt="First slide" />
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>IDROPCAP MOBILE APP.</h1>
                <p>
                  Real-estate, Architecture, Agriculture and Land surveying, all
                  in one app.
                </p>
                <p>
                  <a
                    href="https://idropcap.com"
                    class="btn btn-sm btn-primary"
                    role="button"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src={Image1} alt="Second slide" />
            <div class="container">
              <div class="carousel-caption">
                <h1>WEBSITE DESIGN & DEVELOPMENT.</h1>
                <p>
                  Provides high quality and cost effective web design and
                  development solutions for your business needs.
                </p>
                <p>
                  <Link
                    class="btn btn-sm btn-primary"
                    to="/services/web-development"
                    role="button"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src={Image2} alt="Third slide" />
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>DATA ANALYTICS.</h1>
                <p>Using data analytics to augment your businesses.</p>
                <p>
                  <Link
                    class="btn btn-sm btn-primary"
                    to="/services/data-analytics"
                    role="button"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default HomeCarousel;
