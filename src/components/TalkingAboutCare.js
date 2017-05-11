import React, { Component } from 'react';

import Nav from './Nav';
import CareText from './CareText';
import CareList from './CareList';

export default class TalkingAboutCare extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLevel: 'When to Talk',
      currentInfo: 'Knowing that your loved one may benefit from additional support can become clear suddenly, perhaps as the result of a specific event, or may be a gradual realization, as the subtle clues of diminished life pleasure and fragile health add up. But it cannot hurt to be prepared. You will have some of the groundwork laid and know how your loved one feels about many potentially tricky issues that would be better not tackled in a rush. So, talk early, and talk often.'
    };

    this.chooseCareLevel = this.chooseCareLevel.bind(this);
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

  render(){
    const levels = [
    { type: 'When to Talk',
      text: 'Knowing that your loved one may benefit from additional support can become clear suddenly, perhaps as the result of a specific event, or may be a gradual realization, as the subtle clues of diminished life pleasure and fragile health add up. But it cannot hurt to be prepared. You will have some of the groundwork laid and know how your loved one feels about many potentially tricky issues that would be better not tackled in a rush. So, talk early, and talk often.',
      url: 'when-to-talk'
    }, {
      type: 'What to Say',
      text: 'Aging creates opportunities. There’s little need to begin a discussion about senior living options with the premise that a change in an elder’s living situation must involve loss and limitation, as much as a loss may very well be the precipitating factor in the changed circumstances. Researching senior care options and understanding their relative strengths and limitations, as well as how various aspects of each may be blended for optimal results, means that discussion about change may begin as a discussion about choice.',
      url: 'what-to-say'
    },{
      type: 'Pick the Right Moment',
      text: 'As pressing as it may seem to begin discussions about the future with a loved one after you have become aware of some triggering event or pattern, be sure to pick a moment that will not add additional stress. Do not blind side them. A large family gathering is probably not the place. Consider scheduling a special time to talk; let them know that there is something important you would like to discuss. Ask them when and where would be good for them. Remember, this is a decision you will be making together and their continuing input is just as vital for its success as yours is. It might be useful to set up a recurring time to talk about upcoming decisions and let the rest of your time together be free of the topic.',
      url: 'pick-the-moment'
    }, {
      type: 'Get Outside Support',
      text: 'This is a time of significant change and seeking the counsel of someone who has personal or professional experience with senior living opportunities may be of great help in making decisions and avoiding common mistakes. You may want to confer with an outside expert on your own before starting the dialog with your loved one or ask your loved one if it would be ok to include that person in your discussions. Having someone from the ‘outside’ also may diffuse some of the tension that can accompany discussions about upcoming change.',
      url: 'get-support'
    },{
      type: 'Make it a Conversation',
      text: 'It is unlikely that your loved one will not have noticed the changes in their behavior and lifestyle that you have begun to notice, even if they do not want to acknowledge them. Make sure to ask questions that will help you realize how they have been experiencing and perceiving their own process of aging. Be willing to follow their lead. There will likely be some surprises for you that will help you be a good partner throughout this time of change. Listen.',
      url: 'conversation'
    }, {
      type:'Sample Questions',
      text: 'You no doubt know your loved one better than anyone and realize how best to start this dialog, but here are some questions that we have found helpful in getting the process not only started but moving towards solutions. Is there anything you would like to have in your every day life that you don’t have now? Can you imagine feeling more secure every day? What would help with that? Would you enjoy more companionship of people your age or would that feel limiting? Would you like to have a program of regular activities and events? Would you enjoy group outings to your city’s cultural events? What is your optimal way to manage your meals? Would you like having someone cook for you? What is the best size of living space for you? What does it look like? What’s in it?',
      url: 'sample-questions'
    }
  ];

    return(
      <div className='care-container'>
        <Nav/>
        <div className='care-info'>
          <div className='care-text-and-cta-buttons'>
            <CareText
              title={this.state.currentLevel}
              info={this.state.currentInfo}/>
            <button className='cta-button__call-us'>Have Questions?<br/>Call Us!</button>
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
