import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import serviceRoutes from '../routing/serviceRoutes';
import { Sidebar } from '../Sidebar';
import { Header } from './Header';

const Section = styled.section`
 margin-top: 8vh;
`
const Services = () => {
  return (
    <>
      <Header title="Services" />

      {/* <Breadcrumbs /> */}

      <Section className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Switch>
              {serviceRoutes.map((prop, key) => {
                return (
                  <Route
                    path={prop.layout + prop.path}
                    component={prop.page}
                    key={key}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
