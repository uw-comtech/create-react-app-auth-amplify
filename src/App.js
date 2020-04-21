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
		    <a href="/register.html">Register New Contact for SMS</a>
		  </li>
		  <li>
		    <a href="https://124cguf2h5.execute-api.us-west-2.amazonaws.com/prod/pages/designer">QnA Content Designer</a>
		  </li>
		  <li>
		    <a href="https://search-qnabot-elastic-1inpourwtv4ol-ttrgwhoiwncjz3re2vvn6slyfa.us-west-2.es.amazonaws.com/_plugin/kibana/">Log Analytics Dashboard</a>
		  </li>
		</ul>
    );
  }
}

export default withAuthenticator(App, true);
