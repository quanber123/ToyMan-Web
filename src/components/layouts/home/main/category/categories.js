import React, { Suspense, lazy, useState } from 'react';
import categoriesData from '../../../../../data/categoriesData.js';
import Spinner from '../../../../../app/Spinner.js';
import LazyLoad, { lazyload } from 'react-lazyload';
const Category = lazy(() => import('./category.js'));
function Categories() {
  const [categories, setCategories] = useState(categoriesData);
  const newCategories = categories.map((category, index) => {
    return <Category key={index} {...category} />;
  });
  return (
    <div className='category-title container mx-auto mt-16 right-active'>
      <h1 className='text-center text-3xl font-semibold'>Shop By Age</h1>
      <h3 className='text-center text-cyan text-xl mt-4 mb-8'>
        Our Collections
      </h3>
      <div className='flex justify-around items-center'>{newCategories}</div>
    </div>
  );
}

export default Categories;
