import React from "react";

const BaseCtaSection = () => {
  return (
    <section className="p-0 bg-base-color">
      <div className="container">
        <div className="row align-items-center justify-content-center g-0">
          <div
            className="col-auto d-flex align-items-center"
            data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <img src="https://via.placeholder.com/130x100" alt="" />
            <div className="fs-19 lh-28 last-paragraph-no-margin text-white pt-15px pb-15px">
              <p>
                Save your precious time and effort spent for finding a solution.{" "}
                <a
                  href="demo-accounting-contact.html"
                  className="text-decoration-line-bottom fw-500 text-white"
                >
                  Contact us now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseCtaSection;
