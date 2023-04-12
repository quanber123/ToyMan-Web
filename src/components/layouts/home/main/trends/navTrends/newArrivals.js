import React from 'react';
import Item from '../item';
function NewArrivals(props) {
  const newArrivals = props.itemsData
    .filter((item) => item.details.mod === 'NEW')
    .slice(0, 6)
    .map((item, index) => {
      return <Item key={index} {...item} />;
    });
  return <React.Fragment> {newArrivals}</React.Fragment>;
}

export default NewArrivals;