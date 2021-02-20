import { Link } from 'react-router-dom';
import serviceRoutes from '../routing/serviceRoutes';

const Breadcrumbs = () => {
  return (
    <>
      <nav id="breadcrumb" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Services</a>
          </li>
          {/* {serviceRoutes.map((prop, key) => {
            return (
              <li class="breadcrumb-item active" aria-current="page">
                <Link to={prop.layout + prop.path}>{prop.name}</Link>
              </li>
            );
          })} */}
        </ol>
      </nav>
    </>
  );
};

export { Breadcrumbs };
