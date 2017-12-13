import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class CheckForm extends React.Component {
	state ={

		data:{
			name: ''
		},
		loading: false,
		errors: {}
	};

	onChangeName = e =>
	 this.setState({ 
	 	data: { ...this.state.data, [e.target.name]: e.target.value }
	 });


	 onSubmit = () => {
	 	const errors = this.validate(this.state.data);
	 	this.setState({ errors });
	 	// check for errors
	 	if (Object.keys(errors).length === 0) {
	 		this.setState({ loading: true });
	 		this.props.submit(this.state.data).catch(err =>
		 		 this.setState({ errors: err.response.data.errors, loading: false })
	 		 );
	 	}
	 };

	 validate = (data) => {
	 	const errors = {};
	 	if (!data.name) errors.name = "Can't be blank";
	 	return errors;	
	 };


	render() {
		
		const { data, errors, loading } = this.state;

		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				{errors.global && (
				   <Message negative>
					 <Message.Header> Something went wrong</Message.Header>
					 <p>{errors.global}</p>
				   </Message>
				 )}
				<Form.Field error={!!errors.name}>
				<label htmlFor="name"> Name </label>
				<input 
				  type="text"
				  id="name"
				  name="name"
				  placeholder= "Chris Kringle"
				  value={data.name}
				  onChange={this.onChangeName}
				  />
				  {errors.name && <InlineError text={errors.name} />}
				</Form.Field>
				<Button primary>Check it!</Button>
			</Form>
		);
	}
}


CheckForm.propTypes = {
	submit: PropTypes.func.isRequired
}; 


export default CheckForm;





