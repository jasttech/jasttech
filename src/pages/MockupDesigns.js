import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import HomeScreen from '../images/HomeScreen.png';

const MockupDesigns = () => {
  return (
    <>
    <Header title="Mock up Designs" />
 
      <div className="project-item-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Link to="/mockups/idropcap-app">
                <h2
                  class="featurette-heading"
                  style={{
                    color: '#ffffff'
                  }}
                >
                  Idrop cap Mobile App.
                </h2>
              </Link>
              <p class="lead">
                Morbi at metus sed quam lobortis porta. Etiam ornare nibh varius
                tincidunt tincidunt. Sed vel ullamcorper nulla. Nullam suscipit
                felis nec augue aliquet, in vestibulum eros sagittis. Nam
                consequat risus sed eros luctus, in fermentum odio finibus.
              </p>
            </div>
            <div className="col-md-4">
              <img src={HomeScreen} alt="" className="mockup-sized" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-item-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={HomeScreen} alt="" className="mockup-sized" />
            </div>
            <div className="col-md-8">
              <Link to="/mockups/idropcap-app">
                <h2 class="featurette-heading">EasyBus Mobile App.</h2>
              </Link>
              <p class="lead">
                Morbi at metus sed quam lobortis porta. Etiam ornare nibh varius
                tincidunt tincidunt. Sed vel ullamcorper nulla. Nullam suscipit
                felis nec augue aliquet, in vestibulum eros sagittis. Nam
                consequat risus sed eros luctus, in fermentum odio finibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Link to="/mockups/idropcap-app">
                <h2
                  class="featurette-heading"
                  style={{
                    color: '#ffffff'
                  }}
                >
                  UG Bill Web Application.
                </h2>
              </Link>
              <p class="lead">
                Morbi at metus sed quam lobortis porta. Etiam ornare nibh varius
                tincidunt tincidunt. Sed vel ullamcorper nulla. Nullam suscipit
                felis nec augue aliquet, in vestibulum eros sagittis. Nam
                consequat risus sed eros luctus, in fermentum odio finibus.
              </p>
            </div>
            <div className="col-md-4">
              <img src={HomeScreen} alt="" className="mockup-sized" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockupDesigns;
