import React, { Component } from 'react';
import Modal from 'react-modal';

export default class CareNearYou extends Component{
  render(){
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel='Care Near You Modal'>
        <button className='modal__close-button' onClick={this.props.onRequestClose}>Close</button>
        <h1 className='modal__title'>{this.props.currentLevel} Near You</h1>
        <div className='modal__care-info'>
          <img className='care-info__img' alt='Hacienda at the River' src={require('../../assets/img/img.jpg')}/>
            <h1 className='care-info__title'>Hacienda at the River</h1>
        </div>
      </Modal>

    );
  }
}
