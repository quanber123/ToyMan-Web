import React from 'react';
import HomePreviewItem from '../../home-items/home-preview-item';
function BestSellers({ collections }) {
  const bestSellers = collections
    .filter((item) => item.details.mod === 'SALE')
    .slice(0, 6)
    .map((item, index) => {
      return <HomePreviewItem key={index} {...item} />;
    });
  return <React.Fragment>{bestSellers}</React.Fragment>;
}

export default BestSellers;
