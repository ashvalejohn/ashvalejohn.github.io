import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component{
  render(){
    return (
      <div className='welcome'>
        <h1 className='welcome__title'>Is your loved one
          <span className='welcome__title--thriving'> thriving?</span>
        </h1>
        <p className='welcome__text'>Helping your parents take charge of their future can seem daunting if you don’t know where to begin.</p>
        <h2 className='welcome__subtitle'>We're here to help.</h2>
        <p className='welcome__text'>Use this app to find answers to your questions as you begin this process.</p>
        <Link to='getting-started'><button className='welcome__button'>Get Started</button></Link>
      </div>
    );
  }
}
