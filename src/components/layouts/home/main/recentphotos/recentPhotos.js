import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import recent_img1 from '../../../../../assets/images/recentPhotos/post5-copyright.webp';
import recent_img2 from '../../../../../assets/images/recentPhotos/post9-copyright.webp';
import recent_img3 from '../../../../../assets/images/recentPhotos/post10-copyright.webp';
import recent_img4 from '../../../../../assets/images/recentPhotos/post11-copyright.webp';
import '../../../../../assets/css/main/recentphotos/recentphotos.css';
import Spinner from '../../../../../Spinner';
function RecentPhotos() {
  const photos = [recent_img1, recent_img2, recent_img3, recent_img4];
  const [recentPhotos, setRecentPhotos] = useState(photos);
  return (
    <section className='text-center container m-auto'>
      <h1 className='text-3xl mt-24'>Recent Photos</h1>
      <h3 className='text-xl text-cyan m-8'>Check Gallery</h3>
      <div className='flex items-center'>
        {recentPhotos.map((imgUrl, index) => {
          return (
            <LazyLoad
              key={index}
              className='w-1/4 m-6 overflow-hidden'
              height={563}
              offset={100}
              once
              placeholder={<Spinner />}
            >
              <img className='recent-photos' src={imgUrl} alt={index} />
            </LazyLoad>
          );
        })}
      </div>
    </section>
  );
}

export default RecentPhotos;