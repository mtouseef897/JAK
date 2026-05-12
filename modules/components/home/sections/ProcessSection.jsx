import React from "react";

const ProcessSection = () => {
  return (
    <section>
      <div className="container position-relative">
        <div className="row align-items-center mb-7">
          <div className="col-xxl-4 col-lg-5 md-mb-15 sm-mb-20 text-center text-lg-start">
            {/* <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
              Simple process
            </span> */}
            <h4 className="text-dark-gray fw-700 ls-minus-2px mb-40px">
              Simple. Transparent. Effective.
            </h4>
            <div
              className="row row-cols-1"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              {/* start process step item */}
              <div className="col-12 process-step-style-05 position-relative hover-box">
                <div className="process-step-item d-flex">
                  <div className="process-step-icon-wrap position-relative">
                    <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative">
                      <span className="number position-relative z-index-1 text-dark-gray">
                        01
                      </span>
                      <div className="box-overlay bg-base-color rounded-circle" />
                    </div>
                    <span className="progress-step-separator bg-dark-gray opacity-1" />
                  </div>
                  <div className="process-content ps-30px last-paragraph-no-margin mb-30px">
                    <span className="d-block fw-700 text-dark-gray mb-5px fs-18">
                      Initial Consultation
                    </span>
                    <p className="w-90 lg-w-100 lh-32">
                     Tell us about your business, goals, and jurisdiction. We listen, assess, and understand your unique situation.
                    </p>
                  </div>
                </div>
              </div>
              {/* end process step item */}
              {/* start process step item */}
              <div className="col-12 process-step-style-05 position-relative hover-box">
                <div className="process-step-item d-flex">
                  <div className="process-step-icon-wrap position-relative">
                    <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative">
                      <span className="number position-relative z-index-1 text-dark-gray">
                        02
                      </span>
                      <div className="box-overlay bg-base-color rounded-circle" />
                    </div>
                    <span className="progress-step-separator bg-dark-gray opacity-1" />
                  </div>
                  <div className="process-content ps-30px last-paragraph-no-margin mb-30px">
                    <span className="d-block fw-700 text-dark-gray mb-5px fs-18">
                      Customised Plan
                    </span>
                    <p className="w-90 lg-w-100 lh-32">
                     We design a tailored accounting or financial strategy that fits your needs, budget, and compliance requirements.
                    </p>
                  </div>
                </div>
              </div>
              {/* end process step item */}
              {/* start process step item */}
              <div className="col-12 process-step-style-05 position-relative hover-box xs-mb-30px">
                <div className="process-step-item d-flex">
                  <div className="process-step-icon-wrap position-relative">
                    <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px fs-14 bg-light-red fw-700 position-relative">
                      <span className="number position-relative z-index-1 text-dark-gray">
                        03
                      </span>
                      <div className="box-overlay bg-base-color rounded-circle" />
                    </div>
                  </div>
                  <div className="process-content ps-30px last-paragraph-no-margin">
                    <span className="d-block fw-700 text-dark-gray mb-5px fs-18">
                      Execution & Delivery
                    </span>
                    <p className="w-90 lg-w-100 lh-32">
                     We handle everything remotely —filings, reports, advisory —and deliver on time, every time.
                    </p>
                  </div>
                </div>
              </div>
              {/* end process step item */}
            </div>
          </div>
          <div
            className="col-lg-7 offset-xxl-1 position-relative md-mb-30px sm-mb-15"
            data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <img
              src="/images/demo-corporate-10.png"
              className="position-relative z-index-9 top-40px"
              alt=""
            />
            <img
              src="images/demo-corporate-03.png"
              className="absolute-middle-center xs-w-95"
              alt=""
            />
            <img
              src="images/demo-corporate-05.png"
              className="position-absolute top-50px left-0px xs-left-15px"
              data-bottom-top="transform: translateY(-50px)"
              data-top-bottom="transform: translateY(50px)"
              alt=""
            />
            <img
              src="images/demo-corporate-06.webp"
              className="position-absolute top-150px left-30"
              data-bottom-top="transform: translateY(30px)"
              data-top-bottom="transform: translateY(-30px)"
              alt=""
            />
            <img
              src="images/demo-corporate-06.webp"
              className="position-absolute top-50px right-30"
              data-bottom-top="transform: translateY(-50px)"
              data-top-bottom="transform: translateY(50px)"
              alt=""
            />
            <img
              src="images/demo-corporate-08.webp"
              className="position-absolute top-100px right-0px xs-right-15px"
              data-bottom-top="transform: translateY(30px)"
              data-top-bottom="transform: translateY(-30px)"
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-12 text-center align-items-center"
            data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="bg-base-color fw-700 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 me-10px sm-m-5px d-inline-block align-middle">
              hurray
            </div>
            <div className="fs-18 fw-500 text-dark-gray d-inline-block align-middle">
              Let's make something great work together.{" "}
              <a
                href="demo-corporate-contact.html"
                className="text-dark-gray text-decoration-line-bottom fw-700"
              >
                Got a project in mind?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
