import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = { userName: '' }

	handleSubmit = (event) => {
  	event.preventDefault();
    //console.log("Event: Submit ", this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp => {
    console.log(resp);
    // this.props.onSubmit(resp.data);
    });
  };
  
	render () {
  	return (
    		<form onSubmit={this.handleSubmit}>
  		  <input type="text" 
        			// ref={(input) => this.userNameInput = input}
               onChange={(event) => this.setState({ userName: event.target.value})}
        			 placeholder="Github Username" />
  		    <button type="submit">Add Card</button>
  		  </form>
    )};
};

export default Form;
