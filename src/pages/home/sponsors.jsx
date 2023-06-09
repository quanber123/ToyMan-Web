import React from 'react';
import sponsor1 from '../../assets/images/sponsors/logo1_compact.png';
import sponsor2 from '../../assets/images/sponsors/logo2_compact.png';
import sponsor3 from '../../assets/images/sponsors/logo3_compact.png';
import sponsor4 from '../../assets/images/sponsors/logo5_compact.png';
import LazyLoad from 'react-lazyload';
function Sponsors() {
  const sponsorsImg = [sponsor1, sponsor2, sponsor3, sponsor4];
  const sponsor = sponsorsImg.map((sponsor, index) => {
    return (
      <LazyLoad key={index} offset={100} once>
        <img src={sponsor} alt={index} />
      </LazyLoad>
    );
  });
  return (
    <section className='container m-auto flex justify-between my-16 left-active'>
      {sponsor}
    </section>
  );
}

export default Sponsors;
