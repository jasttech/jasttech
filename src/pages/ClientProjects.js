import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';

const ClientProjects = () => {
  return (
    <>
      <Header title="Client Projects" />
      <div className="project-item-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Link to="/projects/idropcap-app">
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
                  Idropcap app helps our users in four major sectors which include
               
                Real-estate, Architecture, Agriculture and Land surveying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProjects;
