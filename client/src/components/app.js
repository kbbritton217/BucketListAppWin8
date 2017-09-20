import React, { Component } from 'react';
import NavBarHeader from './Nav';
//import BandList from '../containers/BandList';
import Video from './video/video';
import Signin from './auth/signin';

	export default class App extends Component {
  		render() {
    			return (
      			<div>
	      			<NavBarHeader />
  	      			<Video />
                {this.props.children}
      			</div>
    		);
  		}
	}
