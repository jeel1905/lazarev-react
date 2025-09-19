// /src/utils/locomotiveScroll.js
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

 const locomotiveAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainer = document.querySelector('#main');
  if (!scrollContainer) {
    console.error('Element #main not found');
    return;
  }

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? 'transform' : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
  ScrollTrigger.refresh();
};
export { locomotiveAnimation };