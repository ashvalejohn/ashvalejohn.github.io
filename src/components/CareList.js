import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CareList extends Component {
  render(){
    return(
      <ul className='care-list'>
        {this.props.levels.map((level) => {
          return (
            <Link to={level.url} key={level.url}>
              <li
                style={level.type === this.props.currentLevel ? { backgroundColor: '#27448D',
                    border: '1px solid #27448D',
                    color: 'white',
                  } : null}
                className='care-list__option'

                onClick={this.props.chooseCareLevel.bind(this, level)}>
              {level.type}
              </li>
            </Link>
          );
          }, this)
        }
      </ul>
    );
  }
}
