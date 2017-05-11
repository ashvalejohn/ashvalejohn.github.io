import React, { Component } from 'react';

import Nav from './Nav';
import CareText from './CareText';
import CareList from './CareList';
import MoreInfoButton from './MoreInfoButton';
import NearYouButton from './NearYouButton';
import CareNearYou from './CareNearYou';

export default class TypesOfCare extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLevel: 'Loading',
      currentInfo: 'Loading',
      currentUrl: 'loading'
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.chooseCareLevel = this.chooseCareLevel.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.setState(function(){
      const initLevel = this.props.match.params.level;
      console.log(this.props);
      if (initLevel === ':level'){
        return {
          currentLevel: 'Test',
          currentInfo: 'Test',
          currentUrl: 'test'
        }
      }else{
        return {
          currentLevel: initLevel,
          currentInfo: 'butt',
          currentUrl: 'butt'
        }
      }

    });
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
        text: 'Well-designed Independent Living communities offer a rich variety of lifestyle options for older adults who generally require little assistance with activities of daily living (bathing, dressing, preparing meals). Dining options, greater security and freedom from home maintenance are the mainstays of these congregate senior communities, but just as important to the creation of an enhanced sense of resident well-being are a wide variety of planned social, educational and recreational programs, as well as the daily opportunities for socialization with peers. Independent Living housing ranges from Villas or Casitas to studio apartments and these residences are often situated on campuses of significant size with wellness and fitness centers, pools and spas, beauty salons and barber shops, a variety of dining venues, computer and meeting centers, libraries, guest accommodations and outdoor amenities such as gardens and nature trails as well as transportation services.',
        url: 'independent-living'
      }, {
        type: 'Assisted Living',
        text: 'Assisted Living, sometimes called Personal Care, is a type of care that supports individuals with their basic Activities of Daily Living (ADLs), including bathing, dressing, preparing meals, and, in some cases, medication assistance or reminders. Residents of Assisted Living communities, whether stand-alone or part of Continuing Care Retirement Community (CCRC), benefit from the community’s planned social, educational and recreational programs, as well as the daily opportunities for socialization with peers. Three daily meals are generally provided. Assisted Living housing tends to be more intimate, offering an enhanced home-like atmosphere. Apartments are generally studio or one-bedroom, with kitchenettes. Safety features such as call systems and handrails are standard. ',
        url: 'assisted-living'
      },{
        type: 'Memory Care',
        text: 'Memory Care is designed to support the specific needs of residents with Alzheimer’s disease, memory loss and dementia. Many Memory Care centers develop innovative educational and social programs that engage residents in the daily activities that slow memory loss and provide continuity through structured support. Some Memory Care centers have distinct locations for programs that address the wide range of resident memory loss.',
        url: 'memory-care'
      }, {
        type: 'Rehabilitation & Skilled Nursing',
        text: 'Often called skilled nursing and rehab centers or nursing homes, Nursing Care communities offer both long-term skilled nursing care and short-term skilled nursing and rehabilitation services. While supporting individuals with their basic Activities of Daily Living (ADLs), including bathing, dressing, preparing meals, Nursing Care communities also provide complex medical care using the services of licensed nurses and therapists (physical, occupational, nutritional and speech). Nursing Care services are often utilized by individuals requiring short-term medical support after an injury, surgery or illness-related hospital stay. Nursing Care communities generally have 24-hour licensed care staffing. Nursing Care housing is generally a private suite or shared accommodations. Well-designed Nursing Care communities enhance recovery and healing with planned social, educational and recuperative programs, as well as with an emphasis on home-like comforts.',
        url: 'rehab-skilled-nursing'
      },{
        type: 'Continuing Care (CCRC)',
        text: 'Continuing Care Retirement Communities (CCRC) are designed to let residents age in place, with flexible accommodations designed to meet residents’ changing health and housing requirements. CCRCs generally offer Independent Living, Assisted Living, Memory Care and Nursing Care on a single campus. Because residents do not have to move as their life situations may change, CCRCs provide a significant sense of community. Residents often enter the community through its Independent Living component. CCRCs are recognized for their robust planned social, educational and recreational programs, as well as resident camaraderie. CCRC housing ranges from Villas or Casitas to studio apartments. In some CCRCs it is not necessary to move in order to receive a different type of care. These residences are often situated on campuses of significant size with wellness and fitness centers, pools and spas, a variety of dining venues, beauty salons and barber shops, computer and meeting centers, libraries, guest accommodations and outdoor amenities such as gardens and nature trails as well as transportation services. Some CCRCs offer a LifeCare contract. With LifeCare, residents pay an entrance fee plus a monthly service fee. The contract provides for future costs of health care, including assisted living, memory care, skilled nursing, rehabilitation or even long term care on site at a predictable rate.',
        url: 'ccrc'
      }, {
        type:'Home Health Care',
        text: 'Home Health Care provides services from certified nurses, often in combination with occupational, physical and speech therapies. Certified Social Workers and Registered Dieticians may also provide support. Home Health Care is delivered in a residence, including some congregate senior communities. Home Health Care may also offer a full range of personal care and companionship services, that include assistance with Activities of Daily Living (ADLs) such as bathing, dressing, preparing meals, as well as shopping, light housekeeping, and errands. Care is usually provided under the supervision of a Registered Nurse. Home Health Care has two main components. The first is the orchestration of comprehensive medical assessments and treatments, including effective symptom control, to reach immediate and short term clinical goals after illness, hospitalization or surgery. The second is the education and training that allows patients to integrate new self-management skills into their daily lifestyle. Both are important in the recovery of optimal wellness and vitality.',
        url: 'home-health-care'
      }
    ];

    return(
      <div className='care-container'>
        <Nav/>
        <div className='care-info'>
          <div className='care-text-and-near-you'>
            <CareText
              title={this.state.currentLevel}
              tabName='Learn About'
              info={this.state.currentInfo}/>
            <div className='cta-buttons'>
              <MoreInfoButton
                pageName='Paying For'
                sendTo='/paying-for-care'
                currentLevel={this.state.currentLevel}
                currentUrl={this.state.currentUrl}/>
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
