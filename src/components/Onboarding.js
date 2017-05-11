import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Onboarding extends Component{
  constructor(props){
    super(props);
    this.state = {
      lookingFor: 'A Relative'
    }

    this.updateLookingFor = this.updateLookingFor.bind(this);
  }

  updateLookingFor(e){
    this.setState({
      lookingFor: e.target.value
    });
  }

  render(){
    return (
      <form action="" className='onboarding'>
        <legend className='onboarding__title'>Tell us about yourself:</legend>

        <label className='onboarding__label'>First Name</label>
          <input type="text" name='firstName' className='onboarding__input'/>

        <label className='onboarding__label'>Last Name</label>
          <input type="text" name='lastName' className='onboarding__input'/>

        <label className='onboarding__label'>Email Address</label>
          <input type="email" name='emailAddress' className='onboarding__input'/>

        <p className='onboarding__label'>I’m looking for:</p>
        <div className='onboarding__looking-for'>

          <div className='onboarding__radio'>
            <input
              name='lookingForMyself'
              id='lookingForMyself'
              type='radio'
              onChange={this.updateLookingFor}
              value='Myself'
              checked={this.state.lookingFor === 'Myself'}/>
            <label htmlFor='lookingForMyself'>Myself</label>
          </div>

          <div className='onboarding__radio'>
            <input
              name='lookingForARelative'
              id='lookingForARelative'
              type='radio'
              onChange={this.updateLookingFor}
              value='A Relative'
              checked={this.state.lookingFor === 'A Relative'}
              />
            <label htmlFor='lookingForARelative'>A Relative</label>
          </div>

          <div className='onboarding__radio'>
            <input
              name='lookingForAFriend'
              id='lookingForAFriend'
              type='radio'
              onChange={this.updateLookingFor}
              value='A Friend'
              checked={this.state.lookingFor === 'A Friend'}
              />
            <label htmlFor='lookingForAFriend'>A Friend</label>
          </div>
        </div>

        <Link to='/common-questions'><button className='onboarding__button'>Learn More</button></Link>
        <Link to='/common-questions'><p className='onboarding__skip'>Skip</p></Link>
      </form>
    );
  }
}
