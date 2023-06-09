import React, { useContext } from 'react';
import { CartContext } from '../cart/hooks/cart-context';
function Icons(props) {
  const { amount } = useContext(CartContext);
  const { handleDisplaySearch, handleDisplayCart, handleDisplayWish } = props;
  return (
    <ul className='flex text-xl text-grayDark'>
      <li className='m-4 header-nav' onClick={handleDisplaySearch}>
        <i className='fa fa-search'></i>
      </li>
      <li className='relative m-4 header-nav' onClick={handleDisplayCart}>
        <button className='cart-items-count p-2 text-sm'>
          {amount > 0 ? amount : 0}
        </button>
        <i className='fa fa-shopping-cart'></i>
      </li>
      <li className='m-4 header-nav' onClick={handleDisplayWish}>
        <i className='fa fa-heart'></i>
      </li>
    </ul>
  );
}

export default Icons;
