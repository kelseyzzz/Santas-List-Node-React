import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


// const NaughtyRoute = ({ isAuthenticated, component: Component, ...rest })=> (

// 	<Route {...rest} render={props => isAuthenticated ? <Component {...props} >} />

// );

// NaughtyRoute.propTypes = {
// 	component: PropTypes.func.isRequired,
// 	isAuthenticated: PropTypes.bool.isRequired
// };

// function mapStateToProps(state) {
// 	return {
// 		isAuthenticated: !!state.user.token
// 	}
// }


// export default connect(mapStateToProps)(NaughtyRoute);

