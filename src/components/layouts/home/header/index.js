import React from 'react';
import Intro from './Intro';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <div className='bg-light'>
        <p className='text-cyan text-center text-base py-6'>
          Get 35% off for&nbsp;
          <Link
            className='hover:text-pink transition-colors underline'
            to='/collections'
            // style={{ textDecoration: 'underline' }}
          >
            Summer Collection
          </Link>
          &nbsp;- 2023
        </p>
      </div>
      <Intro />
    </header>
  );
}

export default Header;
