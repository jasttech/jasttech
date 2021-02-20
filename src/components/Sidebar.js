import { Link } from 'react-router-dom';
import serviceRoutes from './routing/serviceRoutes';

const Sidebar = () => {
  return (
    <>
      <ul class="list-group">
        {serviceRoutes.map((prop, key) => (
          <li class="list-group-item">
            <Link to={prop.layout + prop.path}>{prop.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <div className="card bg-warning">
        <div className="card-body">
          <h3>For Business Inquiries</h3>
          You can also send us an email and we’ll get in touch shortly, or You
          Can Call to our Troll Free Number - +256 (0) 31 2314411
        </div>
      </div>
    </>
  );
};

export { Sidebar };
