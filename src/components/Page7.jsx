// import React,{ useEffect } from 'react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Page7 = () => {
//   useEffect(() => {
//   gsap.from('#btm7-part2 h4', {
//     x: 100,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: '#btm7-part2',
//       start: 'top 80%',
//       end: 'top 10%',
//       scrub: true,
//       markers: true,
//     },
//   });
// }, []);

//   return (
//     <div id="page7">
//       <h1>Digital Product Design Process</h1>
//       <div id="page7-content">
//         <div id="blue-btn">
//           <h4>
//             See all Case Studies <i className="ri-arrow-right-up-line"></i>
//           </h4>
//           <h4>
//             See all Case Studies <i className="ri-arrow-right-up-line"></i>
//           </h4>
//         </div>
//         <div id="right-7">
//           <p>
//             We do not take on projects that involve blind conformity or designing out of context. We won't
//             settle for a user interface design that is misaligned with your product and digital strategy.
//             Neither will we launch web development ventures without user testing to validate our design
//             solutions.
//           </p>
//           <p>
//             Instead, we create scalable digital products that meet the ever-evolving demands of our
//             customers, ensuring long-term sustainability.
//           </p>
//         </div>
//       </div>

//       <div id="page7-bottom">
//         <div id="btm7-part1" className="btm7-parts"></div>

//         <div id="btm7-part2" className="btm7-parts">
//           <h5>Product Strategy</h5>
//           <h4><span>1</span>Strategy Workshop</h4>
//           <h4><span>2</span>Idea Validation</h4>
//           <h4><span>3</span>Market Research</h4>
//           <h4><span>4</span>Product Positioning</h4>
//           <h4><span>5</span>UX Research</h4>
//           <h4><span>6</span>Functional Decomposition</h4>
//         </div>

//         <div id="btm7-part3" className="btm7-parts">
//           <h5>UX Design</h5>
//           <h4><span>1</span>Strategy</h4>
//           <h4><span>2</span>Idea</h4>
//         </div>

//         <div id="btm7-part4" className="btm7-parts">
//           <h5>UI Design</h5>
//           <h4><span>1</span>Strategy</h4>
//           <h4><span>2</span>Idea</h4>
//           <h4><span>3</span>Market</h4>
//         </div>

//         <div id="btm7-part5" className="btm7-parts">
//           <h5>Delivery</h5>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page7;
// Page7.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page7 = () => {
  const part2Ref = useRef(null);

  useEffect(() => {
    const elements = part2Ref.current.querySelectorAll("h4");

    elements.forEach((el) => {
      gsap.from(el, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          scroller: "#main", //  required with locomotive
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="page7" ref={part2Ref}>
      <h1>Digital Product Design Process</h1>
      <div id="page7-content">
        <button id="blue-btn">
          See all Case Studies
          <span class="icon">
            <i class="ri-arrow-right-up-line default"></i>
            <i class="ri-arrow-right-down-line hover"></i>
          </span>
        </button>

        <div id="right-7">
          <p>
            We do not take on projects that involve blind conformity or
            designing out of context. We won't settle for a user interface
            design that is misaligned with your product and digital strategy.
            Neither will we launch web development ventures without user testing
            to validate our design solutions.
          </p>
          <p>
            Instead, we create scalable digital products that meet the
            ever-evolving demands of our customers, ensuring long-term
            sustainability.
          </p>
        </div>
      </div>

      <div id="page7-bottom">
        <div id="btm7-part1" className="btm7-parts"></div>

        <div id="btm7-part2" className="btm7-parts">
          <h5>Product Strategy</h5>
          <h4>
            <span>1</span>Strategy Workshop
          </h4>
          <h4>
            <span>2</span>Idea Validation
          </h4>
          <h4>
            <span>3</span>Market Research
          </h4>
          <h4>
            <span>4</span>Product Positioning
          </h4>
          <h4>
            <span>5</span>UX Research
          </h4>
          <h4>
            <span>6</span>Functional Decomposition
          </h4>
        </div>

        <div id="btm7-part3" className="btm7-parts">
          <h5>UX Design</h5>
          <h4>
            <span>1</span>Strategy
          </h4>
          <h4>
            <span>2</span>Idea
          </h4>
        </div>

        <div id="btm7-part4" className="btm7-parts">
          <h5>UI Design</h5>
          <h4>
            <span>1</span>Strategy
          </h4>
          <h4>
            <span>2</span>Idea
          </h4>
          <h4>
            <span>3</span>Market
          </h4>
        </div>

        <div id="btm7-part5" className="btm7-parts">
          <h5>Delivery</h5>
        </div>
      </div>
    </div>
  );
};

export default Page7;
