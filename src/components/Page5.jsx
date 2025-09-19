import { useEffect, useRef } from "react";
import blockbeatImg from "/assets/Blockbeat.png";
import payoneerImg from "/assets/payoneer.png";

const Page5 = () => {
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);

  useEffect(() => {
    const right1 = right1Ref.current;
    const right2 = right2Ref.current;

    const img1 = right1.querySelector("img");
    const img2 = right2.querySelector("img");

    const handleEnter1 = () => (img1.style.height = "100%");
    const handleLeave1 = () => (img1.style.height = "75%");
    const handleEnter2 = () => (img2.style.height = "100%");
    const handleLeave2 = () => (img2.style.height = "75%");

    right1.addEventListener("mouseenter", handleEnter1);
    right1.addEventListener("mouseleave", handleLeave1);
    right2.addEventListener("mouseenter", handleEnter2);
    right2.addEventListener("mouseleave", handleLeave2);

    return () => {
      right1.removeEventListener("mouseenter", handleEnter1);
      right1.removeEventListener("mouseleave", handleLeave1);
      right2.removeEventListener("mouseenter", handleEnter2);
      right2.removeEventListener("mouseleave", handleLeave2);
    };
  }, []);

  return (
    <div id="page5">
      <div className="section">
        <div className="leftblank"></div>

        <div className="right1" ref={right1Ref}>
          <h2>Blockbeat</h2>
          <p>
            &nbsp;Ai-powered crypto trading terminal that  <br />
            &nbsp;provides trades with continuously updated,  <br />
            &nbsp;streamlined,anddistilled data throughout the day.
          </p>
          <img src={blockbeatImg} alt="Blockbeat" className="hover-img" />
        </div>

        <div className="right2" ref={right2Ref}>
          <h2>Payoneer</h2>
          <p>
            Rethinking user experience and interface design <br />
            for the top financial service firm listed on the Financial <br />
            Times FT1000
          </p>
          <img src={payoneerImg} alt="Payoneer" className="hover-img" />
        </div>
      </div>
    </div>
  );
};

export default Page5;
