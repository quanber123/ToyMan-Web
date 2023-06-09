import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogContext } from '../blogs/hooks/blog-context';
import { ItemsContext } from '../items/hooks/items-context';
import Search from './search';
function SearchPage() {
  const dataBlogs = useContext(BlogContext);
  const dataItems = useContext(ItemsContext);
  const products = dataBlogs.concat(dataItems);
  const { search } = useParams();
  const handleLinkClick = (product) => {
    if (search) {
      if (product.type === 'blog') {
        return {
          pathname: `blogs/${product.id}`,
        };
      } else if (product.type === 'item') {
        return {
          pathname: `collections/${product.id}`,
        };
      }
    }
  };
  const product = products
    .filter(
      (product) =>
        product.title === search ||
        product.tags.find((value) =>
          value.toLowerCase().includes(search.toLowerCase())
        )
    )
    .map((product, index) => {
      const img = product.type === 'item' ? product.avatarUrl : product.image;
      const title = product.title;
      const price =
        product.type === 'item'
          ? product.details.mod === 'SALE'
            ? `$ ${product.salePrice}`
            : `$ ${product.price}`
          : '';
      const date = product.dateUpLoad;
      return (
        <Link
          to={handleLinkClick(product)}
          className='w-1/2 mx-auto my-16 flex justify-center text-base'
        >
          <article
            key={index}
            className='w-full flex justify-start items-center border border-gray  rounded-xl'
          >
            <img className='w-1/3 rounded-l-xl' src={img} alt={title} />
            <div>
              <h1 className='mx-4'>{title}</h1>
              <h1 className='text-cyan mx-4'>{price}</h1>
              <h1 className='mx-4'>{date}</h1>
            </div>
          </article>
        </Link>
      );
    });
  return (
    <section className='right-active'>
      <div className='flex bg-darkLight h-20'>
        <div className='container m-auto flex items-center font-bold'>
          <Link to='/'>
            <h1 className='text-cyan text-xl'>Home</h1>
          </Link>
          <h1 className='text-cyan text-xl m-2'>/</h1>
          <h1 className='text-pink text-xl'>
            Search: {product.length} Results found for "{search}"
          </h1>
        </div>
      </div>
      <div className='container m-auto text-center mt-24'>
        <p className='text-xl font-bold my-8'>
          Your search for "{search}" revealed the following:
        </p>
        <div className='w-1/2 m-auto text-2xl'>
          <Search />
        </div>
      </div>
      <div className='p-16'>
        {product.length !== 0 ? (
          product
        ) : (
          <p className='text-2xl text-center m-12 font-bold'>
            Not found for "{search}"
          </p>
        )}
      </div>
    </section>
  );
}

export default SearchPage;
