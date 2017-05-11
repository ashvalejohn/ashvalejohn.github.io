import React, { Component } from 'react';

import Nav from './Nav';
import MoreInfoButton from './MoreInfoButton';
import NearYouButton from './NearYouButton';
import CareText from './CareText';
import CareList from './CareList';
import CareNearYou from './CareNearYou';

export default class PayingForCare extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLevel: 'Independent Living',
      currentInfo: 'Independent Living is most often paid for with private funds. Some Independent Living communities require an entrance fee and may or may not involve condominium ownership. Some communities are rental. Supplemental health services may be paid for with long-term care insurance, if the policy allows. Supplemental private insurance will not pay for Independent Living.',
      currentUrl: 'independent-living',
      modalIsOpen: false
    };

    this.chooseCareLevel = this.chooseCareLevel.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  chooseCareLevel(level){
    this.setState(function(){
      return {
        currentLevel: level.type,
        currentInfo: level.text,
        currentUrl: level.url
      }
    });
  }

  openModal() {
    this.setState(function(){
      return {
        modalIsOpen: true
      }
    });

  }

  closeModal() {
    this.setState(function(){
      return {
        modalIsOpen: false
      }
    });
  }

  render(){
    const levels = [
      {
        type: 'Independent Living',
        text: 'Independent Living is most often paid for with private funds. Some Independent Living communities require an entrance fee and may or may not involve condominium ownership. Some communities are rental. Supplemental health services may be paid for with long-term care insurance, if the policy allows. Supplemental private insurance will not pay for Independent Living.',
        url: 'independent-living'
      }, {
        type: 'Assisted Living',
        text: 'Assisted Living can be paid for from private funds or with a mixture of private funds and long-term care insurance. Supplemental private insurance will not pay for Assisted Living.',
        url: 'assisted-living'
      },{
        type: 'Memory Care',
        text: 'Private funds supplemented by long-term care insurance policies is the most common way to pay for Memory Care, but Medicare and private supplemental insurance may pay for the short-term skilled nursing and rehab care that may be required at times.',
        url: 'memory-care'
      }, {
        type: 'Rehabilitation & Skilled Nursing',
        text: 'Reimbursement for Nursing Care community patients and residents depends largely on length of stay. Different funding sources kick in at different intervals. Short-term rehabilitation stays are often covered by Medicare and/or private insurance, including long-term care insurance. (Certain criteria in terms of length of hospital stay and care requirements while in the Nursing Care community have to be met to receive Medicare payments and it is worthwhile to discuss these with a discharge coordinator at the hospital.) For long-term care residents, private funds, Medicaid, and long-term care insurance are the typical methods of payment.',
        url: 'rehab-skilled-nursing'
      },{
        type: 'Continuing Care (CCRC)',
        text: 'CCRCs generally require an entrance fee, which can be refundable to an individual or estate. Residents also pay a monthly service fee, based both on the services utilized and the nature of the contract they may have signed when entering the CCRC. CCRCs can be paid for from private funds or with a mixture of private funds and long-term care insurance, depending on the level of care. Most CCRCs have a short-term rehab program that is Medicare certified.',
        url: 'ccrc'
      }, {
        type: 'Home Health Care',
        text: 'Home Health Care can be paid for in a number of ways. If the Home Health Agency is certified for it, Medicare pays for care with the primary goal of improving the patient’s current health condition so that the patient can live independently again. Specific conditions must be met. If a patient does not qualify for Medicare, especially if services rendered are not medical, then expenses may be paid by private long-term care insurance or private funds.',
        url: 'home-health-care'
      }, {
        type: 'Medigap',
        text: 'A Medigap policy is health insurance that fills the gaps left in Original Medicare Plan coverage for eldercare. The plans, sometimes called Medicare Supplemental Insurance, are sold by private companies but regulated by the federal government and must conform to one of several standardized Medigap policy types. The Original Medicare Plan and the supplemental plans are designed to dovetail, each paying for a portion of the covered health care costs. Depending upon which state an elder lives in, he or she may choose from up to 12 policies, and each plan, designated A - L, has a different set of basic and extra benefits. Generally, elders must have Medicare Part A and Part B to begin with and then supplement with the additional coverage. Although the specific benefits of any provider’s Medigap Plan A through L will be the same, costs can vary, and, additionally, not all companies providing this coverage sell all available policies. It pays to shop around. Spouses are not covered by each other’s policies.',
        url: 'medigap'
      }
    ];

    return(
      <div className='care-container'>
        <Nav/>
        <div className='care-info'>
          <div className='care-text-and-cta-buttons'>
            <CareText
              title={this.state.currentLevel}
              tabName='Paying for'
              info={this.state.currentInfo}/>
            <div className='cta-buttons'>
              <MoreInfoButton
                sendTo='/types-of-care'
                pageName='Learn About'
                currentLevel={this.state.currentLevel}
                currentUrl={this.state.currentUrl}
                />
              <NearYouButton
                currentLevel={this.state.currentLevel} openModal={this.openModal}
                />
              <CareNearYou
                isOpen={this.state.modalIsOpen}
                currentLevel={this.state.currentLevel}
                onRequestClose={this.closeModal}
                />
            </div>
          </div>
          <CareList
            levels={levels}
            currentLevel={this.state.currentLevel}
            chooseCareLevel={this.chooseCareLevel}/>
        </div>
      </div>
    );
  }
}
