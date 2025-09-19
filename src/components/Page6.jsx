import React, { useState } from "react";

const Page6 = () => {
  const [uiuxOpen, setUiuxOpen] = useState(true);
  const [productOpen, setProductOpen] = useState(true); 

  return (
    <div id="page6">
      <button id="clientBtn">Become a Client</button>

      <div id="page6-right">
        <p>
          <span></span>
          We lead your startup at every step of its
          <span></span>
          growth, providing unparalleled personal service at every interaction.
          Whether it's launching an MVP, revamping an existing product,
          securing funding with UI prototypes, increasing customer engagement,
          or boosting conversions, we develop a suite of custom-tailored
          design services to fulfill your expectations.
        </p>

        <div id="page6-content">
          {/* UI/UX Section */}
          <div className="uiux">
            <details open={uiuxOpen} onToggle={(e) => setUiuxOpen(e.target.open)}>
              <summary>
                <h1>
                  UI/UX Design{" "}
                  <i
                    id="toggleicon"
                    className={uiuxOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
                  ></i>
                </h1>
                <div id="flex">
                  <h4>UX Audit</h4>
                  <h4>UI Design</h4>
                  <h4>UX Design</h4>
                  <h4>UX Research</h4>
                </div>
              </summary>
              <div id="page-container">
                {["UX Research", "UX Design", "UI Design", "UX Audit"].map((title, idx) => (
                  <div className="page6-elem" key={idx}>
                    <div className="over"></div>
                    <h3>{title}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus consequatur error, enim in iure distinctio,
                      pariatur quibusdam nobis dolor laborum nulla animi
                      mollitia voluptas odit, praesentium magni. Exercitationem,
                      tenetur? Illum, ducimus.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* Product Design Section */}
          <div className="product">
            <details open={productOpen} onToggle={(e) => setProductOpen(e.target.open)}>
              <summary>
                <h1>
                  Product Design{" "}
                  <i
                    id="toggleicon"
                    className={productOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}
                  ></i>
                </h1>
                <div id="flex">
                  <h4>UX Audit</h4>
                  <h4>UI Design</h4>
                  <h4>UX Design</h4>
                  <h4>UX Research</h4>
                </div>
              </summary>
              <div id="page-container">
                {["UX Research", "UX Design", "UI Design", "UX Audit"].map((title, idx) => (
                  <div className="page6-elem" key={idx}>
                    <div className="over"></div>
                    <h3>{title}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus consequatur error, enim in iure distinctio,
                      pariatur quibusdam nobis dolor laborum nulla animi
                      mollitia voluptas odit, praesentium magni. Exercitationem,
                      tenetur? Illum, ducimus.
                    </p>
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
