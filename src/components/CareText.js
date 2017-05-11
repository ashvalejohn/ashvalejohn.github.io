import React, { Component } from 'react';

export default class CareText extends Component {

  render(){
    return(
      <div className='care-text'>
        <h1 className='care-text__title'>{this.props.tabName} {this.props.title}</h1>
        <p className='care-text__info'>{this.props.info}</p>
      </div>
    );
  }
}
