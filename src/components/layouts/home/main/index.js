import React, { Suspense, lazy } from 'react';
const Categories = lazy(() => import('./category/categories'));
const Items = lazy(() => import('./trends/trends'));
const Animated = lazy(() => import('./animated/Animated'));
const FeedBack = lazy(() => import('./feedback/feedBack'));
const Loves = lazy(() => import('./loves/loves'));
const RecentPhotos = lazy(() => import('./recentphotos/recentPhotos'));
const Questions = lazy(() => import('./questions/questions'));
const Sponsors = lazy(() => import('./sponsors/sponsors'));
function Main() {
  return (
    <Suspense
      fallback={
        <div>
          <i className='fa fa-spinner fa-spin'></i>
        </div>
      }
    >
      <main>
        <Categories />
        <Items />
        <Animated />
        <FeedBack />
        <Loves />
        <RecentPhotos />
        <Questions />
        <Sponsors />
      </main>
    </Suspense>
  );
}

export default Main;