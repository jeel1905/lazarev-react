import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const rightElements = [
  {
    title: "How to Design An AI Interface Users will Trust in 2024?",
    img: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
  {
    title:
      "How AI Influences Design And The Reciprocal Of UX On AI-Driven Products",
    img: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
  {
    title: "Lazarev Become A Professional Webflow Partner",
    img: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
  {
    title: "AI-Based Industrial Software Canvass AI Secures $7.5M In Funding",
    img: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
];

const Page2 = () => {
  const rightElemRefs = useRef([]);
  const circleRef = useRef(null);

  // scroll rotation effect
  useEffect(() => {
    const handleScroll = () => {
      const rotation = window.scrollY * 0.2;
      if (circleRef.current) {
        circleRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hover image animation
  useEffect(() => {
    rightElemRefs.current.forEach((elem) => {
      const img = elem.querySelector("img");

      elem.addEventListener("mouseenter", () => {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        });
      });

      elem.addEventListener("mouseleave", () => {
        gsap.to(img, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
        });
      });

      elem.addEventListener("mousemove", (e) => {
        const rect = elem.getBoundingClientRect();
        gsap.to(img, {
          x: e.clientX - rect.left - 90,
          y: e.clientY - rect.top - 215,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div id="page2">
      <div id="page2-left">
        <p>
          Exclusive insights into <br /> UI/UX and product design
        </p>

        {/* Circle Logo */}
        <div className="circle-container">
          {/* Inner star-like shape */}
          {/* <div class="circle-center"></div> */}
          <div class="star-shape"></div>

          {/* Circular text */}
          <svg viewBox="0 0 200 200" className="circle-svg" ref={circleRef}>
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>

            {/* Outer border */}
            <circle
              cx="100"
              cy="100"
              r="95"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />

            {/* Circular text */}
            <text className="circle-text">
              <textPath href="#circlePath" startOffset="0%">
                · LAZAREV AGENCY · LAZAREV AGENCY · LAZAREV AGENCY ·
              </textPath>
            </text>
          </svg>
        </div>

        <h5>
          Being a design studio at the forefront of digital transformation and
          product design, we take it upon ourselves to drop some knowledge,
          share insights, let out insider tips, and put our work on full
          display.
        </h5>
      </div>

      <div id="page2-right">
        {rightElements.map((elem, idx) => (
          <div
            className="right-elem"
            key={idx}
            id={idx === 0 ? "right-elem1" : undefined}
            ref={(el) => (rightElemRefs.current[idx] = el)}
          >
            <h2 dangerouslySetInnerHTML={{ __html: elem.title }} />
            <img
              src={elem.img}
              alt=""
              style={{
                position: "absolute",
                opacity: 0,
                scale: 0,
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
