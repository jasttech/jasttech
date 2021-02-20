import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs';
import ClientProjects from '../../pages/ClientProjects';
import CodeSnippets from '../../pages/CodeSnippets';
import ContactUs from '../../pages/ContactUs';
import Home from '../../pages/Home';
import MockupDesigns from '../../pages/MockupDesigns';
import News from '../../pages/News';
import OpenSource from '../../pages/OpenSource';
import Products from '../../pages/Products';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Services from '../layout/Services';
import { PageLoading } from '../loaders/Page';
import PrivateRoute from './PrivateRoute';

const Routes = (props) => {
  return (
    <>
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route path="/products" component={Products} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/mockup-designs" component={MockupDesigns} />
        <Route path="/code-snippets" component={CodeSnippets} />
        <Route path="/open-source" component={OpenSource} />
        <Route path="/client-projects" component={ClientProjects} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/services" render={(props) => <Services {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
