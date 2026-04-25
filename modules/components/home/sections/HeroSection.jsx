import React from "react";

const HeroSection = () => {
  return (
    <section
      className="top-space-margin p-0 full-screen md-h-600px sm-h-500px section-dark"
      data-parallax-background-ratio="0.8"
      style={{
        backgroundImage: 'url("images/demo-accounting-bg.jpg")',
      }}
    >
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div
            className="col-xl-7 col-md-9 col-sm-9 position-relative text-white"
            data-anime='{ "el": "childs", "opacity": [0, 1], "translateY": [30, 0], "staggervalue": 200, "easing": "easeInOutSine" }'
          >
            <div className="fs-80 lh-75 sm-fs-65 fw-600 mb-20px text-shadow-large ls-minus-2px">
             Trusted Accounting & Financial Experts for Pakistan, US, UK & UAE
            </div>
            <div>
              <span className="opacity-5 fs-20 w-70 md-w-85 mb-25px fw-300 d-inline-block">
                JAK Associates delivers end-to-end accounting, tax compliance, audit, and financial advisory — 100% remote, serving clients across four jurisdictions.
              </span>
            </div>
       <div  style={{
        display:"flex",
        gap:"32px"
       }}>
             <div className="icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon feature-box-icon-rounded w-65px h-65px rounded-circle bg-yellow me-15px rounded-box">
                  <i className="feather icon-feather-arrow-right text-dark-gray icon-extra-medium" />
                </div>
                <div className="feature-box-content">
                  <a
                    href="/services"
                    className="d-inline-block fs-19 text-white text-shadow-double-large"
                  >
                    Explore services
                  </a>
                </div>
              </div>
            </div>
            <div className="icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon feature-box-icon-rounded w-65px h-65px rounded-circle bg-yellow me-15px rounded-box">
                  <i className="feather icon-feather-arrow-right text-dark-gray icon-extra-medium" />
                </div>
                <div className="feature-box-content">
                  <a
                    href="/contact"
                    className="d-inline-block fs-19 text-white text-shadow-double-large"
                  >
                    Book a Free Consultation 
                  </a>
                </div>
              </div>
            </div>
       </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
