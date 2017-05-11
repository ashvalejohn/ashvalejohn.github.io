import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(){
    return(
      <ul className='nav'>
        <NavLink
          to='/types-of-care/:level'
          className='nav__button'
          activeClassName='nav__button--selected'>
          <li>What are the types of senior care?</li>
        </NavLink>

        <NavLink
          to='/paying-for-care/:level'
          className='nav__button'
          activeClassName='nav__button--selected'>
          <li>How do I pay for senior care?</li>
        </NavLink>
        <NavLink
          to='/talking-about-care/:level'
          className='nav__button'
          activeClassName='nav__button--selected' >
          <li>How do I talk about senior care?</li>
        </NavLink>
      </ul>
    );
}
