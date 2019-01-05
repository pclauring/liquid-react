import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Form extends Component {
  state = { userName: '' }

	handleSubmit = (event) => {
  	event.preventDefault();
    //console.log("Event: Submit ", this.state.userName);
    // axios.get(`https://api.github.com/users/${this.state.userName}`)
   
    // axios.get(` https://pokeapi.co/api/v2/pokemon/ditto`, {
    //   headers: { 
    //   'Access-Control-Allow-Origin' : '*',
    //   },
    // responseType: 'json',
    //  })
     axios.get(` https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(resp => {
    console.log(resp);
    // this.props.onSubmit(resp.data);
    });
  };
  
	render () {
  	return (
    		<form onSubmit={this.handleSubmit}>
  		  <Input type="text" 
        			// ref={(input) => this.userNameInput = input}
               onChange={(event) => this.setState({ userName: event.target.value})}
        			 placeholder="Github Username" />
  		    <Button type="submit">Add Card</Button>
  		  </form>
    )};
};

export default Form;
