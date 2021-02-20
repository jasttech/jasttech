import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import 'hover.css';
import './App.css';
import Home from './pages/Home';
import { Navbar } from './components/layout/Navbar';
import Routes from './components/routing/Routes';
import setAuthToken from './utils/SetAuthToken';
import Footer from './components/layout/Footer';
import Swal from 'sweetalert2';


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const themer = theme === 'light' ? 'dark' : 'light';
    setTheme(themer);
  };
  useEffect(() => {
    Swal.fire({
      icon: 'warning',
      title: 'Please be patient..',
      text: 'Our site is still under construction!',
      footer: '<a href="mailto:info@jonahgeek.tech">Talk to a technician?</a>'
    })
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <div className={`${theme}-theme`}>

        <Router>
          <Navbar />
          <Switch>
            <Route component={Routes} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;