import React from 'react';
import Banner from './Banner';
import Libraries from './libraries/page';
import Image from 'next/image';


const Homepage = () => {
  return (
    <div>
      <Banner/>
    <Libraries/>
    </div>
  );
};

export default Homepage;