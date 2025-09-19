import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return; // ✅ Prevent error if ref is not ready

    const handleMouseEnter = () => {
      const tl = gsap.timeline();
      tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.5,
      });
      tl.to(".nav-part2 h5", {
        display: "block",
        duration: 0.1,
      });
      tl.to(".nav-part2 h5 span", {
        y: 0,
        stagger: {
          amount: 0.5,
        },
      });
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();
      tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
          amount: 0.2,
        },
      });
      tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1,
      });
      tl.to("#nav-bottom", {
        height: 0,
        duration: 0.2,
      });
    };

    nav.addEventListener("mouseenter", handleMouseEnter);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mouseenter", handleMouseEnter);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <nav>
      <h1>LAZAREV.</h1>
      <div className="nav-part2">
        <div className="nav-elem">
          <h4>CASE STUDIES</h4>
          <h5><span>Case Studies</span></h5>
        </div>
        <div className="nav-elem">
          <h4>AREAS OF EXPERTISE</h4>
          <h5><span>AI & ML</span></h5>
          <h5><span>FinTech</span></h5>
          <h5><span>Real Estate</span></h5>
          <h5><span>E-commerse</span></h5>
          <h5><span>Web3</span></h5>
        </div>
        <div className="nav-elem">
          <h4>UI UX DESIGN</h4>
          <h5><span>UX Audit</span></h5>
          <h5><span>UI Design</span></h5>
          <h5><span>UX Design</span></h5>
          <h5><span>UX Research</span></h5>
        </div>
        <div className="nav-elem">
          <h4>PRODUCT DESIGN</h4>
          <h5><span>SaaS</span></h5>
          <h5><span>Web App</span></h5>
          <h5><span>Mobile App</span></h5>
          <h5><span>Website Design</span></h5>
        </div>
        <div className="nav-elem">
          <h4>DESIGN PROCESS</h4>
          <h5><span>MVP</span></h5>
          <h5><span>Relaunch</span></h5>
        </div>
        <div className="nav-elem">
          <h4>ABOUT AGENCY</h4>
          <h5><span>Our Story</span></h5>
          <h5><span>Clients Feedback</span></h5>
          <h5><span>Careers</span></h5>
          <h5><span>News & Articles</span></h5>
        </div>
      </div>

      <button>
        Let's Talk
        <svg fill="none" viewBox="0 0 20 20">
          <path
            fill="#fff"
            d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
          />
        </svg>
      </button>

      <div id="nav-bottom"></div>
    </nav>
  );
};

export default Navbar;
