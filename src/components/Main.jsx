import React,{ useEffect } from 'react';
// import { locomotiveAnimation } from '../utils/locomotiveScroll.js';
// import { loadingAnimation } from '../utils/loadingAnimation.js';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';

const Main = () => {
  useEffect(() => {
    // loadingAnimation();
    // locomotiveAnimation();
  }, []);
  return (
    <div id="main">
      <Page1 />
      <Page2 />
      <Page9 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      
    </div>
  );
};

export default Main;
