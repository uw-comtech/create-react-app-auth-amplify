import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
    <ul>
		  <li>
		    <a href="/register.html">Register New UW Medicine COVID-19 Connect for SMS</a>
		  </li>
		  <li>
		    <a href="">QnA Content Designer</a>
		  </li>
		  <li>
		    <a href="">Log Analytics Dashboard</a>
		  </li>
		</ul>  
    );
  }
}

export default withAuthenticator(App, true);
