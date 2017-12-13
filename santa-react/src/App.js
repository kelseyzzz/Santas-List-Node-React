import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import NicePage from './components/pages/NicePage';
import NaughtyPage from './components/pages/NaughtyPage';
// import NaughtyRoute from './components/routes/NaughtyRoute';

const App = () => 
  <div class="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/NicePage" exact component={NicePage} />
    <Route path="/NaughtyPage" exact component={NaughtyPage} />
  </div>

// add location={location}
 // App.propTypes = {
 // 	location: PropTypes.shape({
 // 		pathname: PropTypes.string.isRequired
 // 	}).isRequired
 // }; 

export default App;


/// will change route path of both nice and naughty page to NiceRoute and NaughtyRout