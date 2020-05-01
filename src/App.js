import React, { Component } from 'react';
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
		    <a href="/register.html">Register New Contact for UW Medicine COVID-19 Connect</a>
		  </li>
		  <li>
		    <a href="https://7rk1cwechb.execute-api.us-west-2.amazonaws.com/prod/pages/designer">QnA Content Designer</a>
		  </li>
		  <li>
		    <a href="">Log Analytics Dashboard</a>
		  </li>
		</ul>
    );
  }
}

export default withAuthenticator(App, true);
