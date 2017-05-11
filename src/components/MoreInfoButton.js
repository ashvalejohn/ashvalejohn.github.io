import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MoreInfoButton extends Component{
  render(){
    const newUrl = `${this.props.sendTo}/${this.props.currentUrl}`;

    return (
      <Link to='/'>
        <button className='cta-button__more-info'>
          {this.props.pageName}<br/> {this.props.currentLevel}
        </button>
      </Link>
    );
  }
}
