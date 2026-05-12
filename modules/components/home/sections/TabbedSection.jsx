import React from "react";

const TabbedSection = () => {
  return (
    <section className="bg-very-light-gray pb-0" id="services">
      <div className="container">
        <div className="row mb-8 sm-mb-10">
          <div className="col-12 tab-style-08">
            <div className="tab-content">
              {/* start tab content */}
              <div className="tab-pane fade in active show" id="tab_eight1">
                <div className="row align-items-center justify-content-center g-lg-0">
                  <div
                    className="col-md-6 sm-mb-30px position-relative overflow-hidden"
                    data-anime='{ "effect": "slide", "color": "#005153", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
                  >
                    <img
                      src="https://via.placeholder.com/600x505"
                      alt=""
                      className="w-100 border-radius-6px"
                    />
                    <div
                      className="bg-very-light-gray w-250px position-absolute pt-20px pb-20px ps-25px pe-25px border-radius-4px bottom-30px left-35px box-shadow-large d-flex align-items-center"
                      data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 800, "staggervalue": 500, "easing": "easeOutQuad" }'
                    >
                      <h2
                        className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px md-ls-minus-1px mb-0 text-nowrap border-end border-1 border-color-transparent-dark-very-light pe-20px me-20px"
                        data-to={85}
                      />
                      <span className="text-dark-gray ls-minus-05px d-inline-block lh-22">
                        Project completed
                      </span>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-5 offset-lg-1 col-md-6 text-center text-md-start"
                    data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                  >
                    <div className="mb-20px">
                      <div className="separator-line-1px w-50px bg-base-color d-inline-block align-middle me-10px opacity-2" />
                      <span className="d-inline-block text-dark-gray align-middle fw-500 fs-20 ls-minus-05px">
                        Accounting & Bookkeeping
                      </span>
                    </div>
                    {/* <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                      Organization's process of defining strategy.
                    </h4> */}
                    <p className="mb-35px md-mb-25px">
                      Organised, accurate, and timely bookkeeping using leading
                      software. Monthly reconciliation, financial statements,
                      and reporting tailored for your business.
                    </p>
                    <a
                      href="demo-accounting-services.html"
                      className="btn btn-large btn-rounded with-rounded btn-white btn-box-shadow fw-600"
                    >
                      Learn more
                      <span className="bg-base-color text-white">
                        <i className="bi bi-arrow-right-short icon-extra-medium" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* end tab content */}
              {/* start tab content */}
              <div className="tab-pane fade in" id="tab_eight2">
                <div className="row align-items-center justify-content-center g-lg-0">
                  <div className="col-md-6 sm-mb-30px position-relative overflow-hidden">
                    <img
                      src="https://via.placeholder.com/600x505"
                      alt=""
                      className="w-100 border-radius-4px"
                    />
                    <div className="bg-very-light-gray w-250px position-absolute pt-20px pb-20px ps-25px pe-25px border-radius-4px bottom-30px left-35px box-shadow-large d-flex align-items-center">
                      <h2
                        className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px md-ls-minus-1px mb-0 text-nowrap border-end border-1 border-color-transparent-dark-very-light pe-20px me-20px"
                        data-to={80}
                      />
                      <span className="text-dark-gray ls-minus-05px d-inline-block lh-22">
                        Project completed
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 offset-lg-1 col-md-6 text-center text-md-start">
                    <div className="mb-20px">
                      <div className="separator-line-1px w-50px bg-base-color d-inline-block align-middle me-10px opacity-2" />
                      <span className="d-inline-block text-dark-gray align-middle fw-500 fs-20 ls-minus-05px">
                        Tax Compliance
                      </span>
                    </div>
                    {/* <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                      An excellent audit service for company.
                    </h4> */}
                    <p className="mb-35px md-mb-25px">
                      Expert tax filing and compliance for Pakistan, US, UK &
                      UAE. We handle individual and corporate tax returns,
                      ensuring full regulatory compliance on time.
                    </p>
                    <a
                      href=""
                      className="btn btn-large btn-rounded with-rounded btn-white btn-box-shadow fw-600"
                    >
                      Learn more
                      <span className="bg-base-color text-white">
                        <i className="bi bi-arrow-right-short icon-extra-medium" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* end tab content */}
              {/* start tab content */}
              <div className="tab-pane fade in" id="tab_eight3">
                <div className="row align-items-center justify-content-center g-lg-0">
                  <div className="col-md-6 sm-mb-30px position-relative overflow-hidden">
                    <img
                      src="https://via.placeholder.com/600x505"
                      alt=""
                      className="w-100 border-radius-4px"
                    />
                    <div className="bg-very-light-gray w-250px position-absolute pt-20px pb-20px ps-25px pe-25px border-radius-4px bottom-30px left-35px box-shadow-large d-flex align-items-center">
                      <h2
                        className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px md-ls-minus-1px mb-0 text-nowrap border-end border-1 border-color-transparent-dark-very-light pe-20px me-20px"
                        data-to={85}
                      />
                      <span className="text-dark-gray ls-minus-05px d-inline-block lh-22">
                        Project completed
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 offset-lg-1 col-md-6 text-center text-md-start">
                    <div className="mb-20px">
                      <div className="separator-line-1px w-50px bg-base-color d-inline-block align-middle me-10px opacity-2" />
                      <span className="d-inline-block text-dark-gray align-middle fw-500 fs-20 ls-minus-05px">
                        Audit & Assurance
                      </span>
                    </div>
                    {/* <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                      We are leader in tax advisor and financial.
                    </h4> */}
                    <p className="mb-35px md-mb-25px">
                      Independent and thorough audit services tovalidate your
                      financial statements and satisfy regulatory requirements
                      —with integrity at every step.
                    </p>
                    <a
                      href="demo-accounting-services.html"
                      className="btn btn-large btn-rounded with-rounded btn-white btn-box-shadow fw-600"
                    >
                      Learn more
                      <span className="bg-base-color text-white">
                        <i className="bi bi-arrow-right-short icon-extra-medium" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* end tab content */}
              {/* start tab content */}
              <div className="tab-pane fade in" id="tab_eight4">
                <div className="row align-items-center justify-content-center g-lg-0">
                  <div className="col-md-6 sm-mb-30px position-relative overflow-hidden">
                    <img
                      src="https://via.placeholder.com/600x505"
                      alt=""
                      className="w-100 border-radius-4px"
                    />
                    <div className="bg-very-light-gray w-250px position-absolute pt-20px pb-20px ps-25px pe-25px border-radius-4px bottom-30px left-35px box-shadow-large d-flex align-items-center">
                      <h2
                        className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px md-ls-minus-1px mb-0 text-nowrap border-end border-1 border-color-transparent-dark-very-light pe-20px me-20px"
                        data-to={80}
                      />
                      <span className="text-dark-gray ls-minus-05px d-inline-block lh-22">
                        Project completed
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 offset-lg-1 col-md-6 text-center text-md-start">
                    <div className="mb-20px">
                      <div className="separator-line-1px w-50px bg-base-color d-inline-block align-middle me-10px opacity-2" />
                      <span className="d-inline-block text-dark-gray align-middle fw-500 fs-20 ls-minus-05px">
                        Financial Advisory
                      </span>
                    </div>
                    {/* <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                      We creating specific business strategies.
                    </h4> */}
                    <p className="mb-35px md-mb-25px">
                      Strategic financial planning, investment guidance, and
                      forecasting —designed to help you grow your wealth and
                      business with confidence.
                    </p>
                    <a
                      href=""
                      className="btn btn-large btn-rounded with-rounded btn-white btn-box-shadow fw-600"
                    >
                      Learn more
                      <span className="bg-base-color text-white">
                        <i className="bi bi-arrow-right-short icon-extra-medium" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* end tab content */}
            </div>
          </div>
        </div>
      </div>
      <div className="tab-style-08 border-bottom border-color-extra-medium-gray bg-white box-shadow-quadruple-large">
        <div className="container">
          {/* start tab navigation */}
          <ul className="nav nav-tabs border-0 fw-500 fs-19 text-center">
            <li className="nav-item">
              <a
                data-bs-toggle="tab"
                href="#tab_eight1"
                className="nav-link active"
              >
                Accounting & Bookkeeping
                <span className="tab-border bg-base-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab_eight2"
                data-tab="counter"
              >
                Tax Compliance
                <span className="tab-border bg-base-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab_eight3"
                data-tab="counter"
              >
                Audit & Assurance
                <span className="tab-border bg-base-color" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#tab_eight4"
                data-tab="counter"
              >
                Financial Advisory
                <span className="tab-border bg-base-color" />
              </a>
            </li>
          </ul>
          {/* end tab navigation */}
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
