import React, { Component } from 'react';

export default class NearYouButton extends Component{

  render(){
    return (
      <button onClick={this.props.openModal} className='cta-button__near-you'>
        {this.props.currentLevel}<br/>
        Near You
      </button>
    );
  }
}
