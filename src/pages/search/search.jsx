import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { BlogContext } from '../blogs/hooks/blog-context';
import { ItemsContext } from '../../pages/items/hooks/items-context';
import { useContext } from 'react';
function Search(props) {
  const dataBlogs = useContext(BlogContext);
  const dataItems = useContext(ItemsContext);
  const products = dataBlogs.concat(dataItems);
  const [searchValue, setSearchValue] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    const results = products.filter((product) => {
      const hasTag = product.tags.includes(searchValue);
      const hasTitle = product.title.includes(searchValue);
      return hasTag || hasTitle;
    });
    setSearchProducts(results);
  }, [searchValue, dataBlogs, dataItems]);
  const handleLinkClick = (product) => {
    if (searchValue) {
      if (product.type === 'blog') {
        return {
          pathname: `/blogs/${product.id}`,
        };
      } else if (product.type === 'item') {
        return {
          pathname: `/collections/${product.id}`,
        };
      }
    }
  };
  return (
    <div className='left-active'>
      <div className='flex'>
        <input
          className='search-store-input'
          type='text'
          placeholder='Search our store...'
          value={searchValue}
          onChange={handleChange}
        />
        <Link
          to={{
            pathname: `/search/${searchValue}`,
          }}
          className='-ml-8 cursor-pointer hover:text-cyan'
          onClick={props.handleDisplaySearch}
        >
          <i className='fa fa-search'></i>
        </Link>
      </div>
      <div
        className={`${searchValue ? 'list-item-search p-4' : ''}`}
        onClick={props.handleDisplay}
      >
        {searchValue && <h1 className='font-bold m-4'>Products</h1>}
        {searchValue && searchProducts.length === 0 && (
          <p className='font-bold mx-4'>
            Your search for "{searchValue}" did not yield any results.
          </p>
        )}
        {searchValue && searchProducts.length !== 0 && (
          <p className='font-bold mx-4'>
            Search: {searchProducts.length} results found for "{searchValue}"
          </p>
        )}
        {searchValue &&
          searchProducts.map((product, index) => {
            return (
              <Link
                key={index}
                className='flex justify-center items-center left-active my-5'
                to={handleLinkClick(product)}
                onClick={props.handleDisplaySearch}
              >
                <img
                  className='w-1/4 rounded-xl'
                  src={`${
                    product.type === 'blog' ? product.image : product.avatarUrl
                  }`}
                  alt={`${product.title}`}
                />
                <div className='w-2/3 mx-4'>
                  <h1 className='text-lg font-bold'>{product.title}</h1>
                  {product.type === 'item' && (
                    <h1 className='text-lg font-bold text-cyan'>
                      $
                      {product.details.mod === 'SALE'
                        ? product.salePrice
                        : product.price}
                    </h1>
                  )}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
