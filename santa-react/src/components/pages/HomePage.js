import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckForm from '../forms/CheckForm';
import { checking } from '../../actions/auth';

class HomePage extends React.Component {

	 submit = data => 
	 	this.props.checking(data).then(() => this.props.history.push("/NicePage"));
	 


	render() {
		return (
			<div>
			  <h1> Home Page </h1>
			  <Link to ="/NicePage"> Nice List </Link>
			  <Link to ="/NaughtyPage"> Nice List </Link>

			  <CheckForm submit={this.submit} />
		  	</div>

		);
	}
}



HomePage.propTypes = {
	history: PropTypes.shape({
	   push: PropTypes.func.isRequired
	}).isRequired,
	checking: PropTypes.func.isRequired
};


export default connect(null, { checking })(HomePage);


