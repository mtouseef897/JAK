import React from 'react'

const Pricing = () => {
  return (
    <>
    <>
  {/* start page title */}
  <section
    className="page-title-big-typography bg-dark-gray ipad-top-space-margin cover-background md-py-0"
    style={{ backgroundImage: "url(/images/demo-hosting-pricing-bg.jpg)" }}
  >
    <div className="container">
      <div className="row align-items-center small-screen">
        <div className="col-lg-5 col-sm-7 position-relative page-title-extra-small">
          <h1 className="mb-15px text-white opacity-7 fw-300 overflow-hidden">
            <span
              className="d-inline-block"
              data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300 }'
            >
              Reliable pricing plans
            </span>
          </h1>
          <h2 className="m-auto pb-5px pt-5px text-white fw-600 ls-minus-1px overflow-hidden">
            <span
              className="d-inline-block"
              data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300, "delay": 300 }'
            >
              Simple plans for everyone
            </span>
          </h2>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */}
  {/* start section */}
  <section>
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-xl-7 col-lg-6 md-mb-30px animation-float"
          data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
        >
          <img src="/images/demo-hosting-home-01.webp" alt="" />
        </div>
        <div
          className="col-xl-5 col-lg-6"
          data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <h2 className="fw-700 text-dark-gray ls-minus-2px">
            Have a hosting question?
          </h2>
          <div
            className="accordion accordion-style-02"
            id="accordion-style-02"
            data-active-icon="icon-feather-chevron-up"
            data-inactive-icon="icon-feather-chevron-down"
          >
            {/* start accordion item */}
            <div className="accordion-item active-accordion">
              <div className="accordion-header border-bottom border-color-extra-medium-gray">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-style-02-01"
                  aria-expanded="true"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                    <i className="feather icon-feather-chevron-up icon-extra-medium" />
                    <span className="fw-600 fs-18">
                      How long is this site live?
                    </span>
                  </div>
                </a>
              </div>
              <div
                id="accordion-style-02-01"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordion-style-02"
              >
                <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry dummy text unknown printer.
                  </p>
                </div>
              </div>
            </div>
            {/* end accordion item */}
            {/* start accordion item */}
            <div className="accordion-item">
              <div className="accordion-header border-bottom border-color-extra-medium-gray">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-style-02-02"
                  aria-expanded="false"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                    <i className="feather icon-feather-chevron-down icon-extra-medium" />
                    <span className="fw-600 fs-18">
                      Can i install/upload anything is want on there?
                    </span>
                  </div>
                </a>
              </div>
              <div
                id="accordion-style-02-02"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-style-02"
              >
                <div className="accordion-body last-paragraph-no-margin border-bottom border-color-light-medium-gray">
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry dummy text unknown printer.
                  </p>
                </div>
              </div>
            </div>
            {/* end accordion item */}
            {/* start accordion item */}
            <div className="accordion-item">
              <div className="accordion-header border-bottom border-color-transparent">
                <a
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-style-02-04"
                  aria-expanded="false"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                    <i className="feather icon-feather-chevron-down icon-extra-medium" />
                    <span className="fw-600 fs-18">
                      Can i change the domain you give me?
                    </span>
                  </div>
                </a>
              </div>
              <div
                id="accordion-style-02-04"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion-style-02"
              >
                <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent">
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry dummy text unknown printer.
                  </p>
                </div>
              </div>
            </div>
            {/* end accordion item */}
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div
          className="col-auto icon-with-text-style-08 sm-mb-10px"
          data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="feature-box feature-box-left-icon-middle">
            <div className="feature-box-icon me-10px">
              <i className="bi bi-envelope icon-small text-dark-gray" />
            </div>
            <div className="feature-box-content">
              <span className="alt-font text-dark-gray fw-500 fs-18">
                Looking for help?{" "}
                <a
                  href="#"
                  className="text-decoration-line-bottom text-base-color fw-600"
                >
                  Submit a ticket
                </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-auto icon-with-text-style-08"
          data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="feature-box feature-box-left-icon-middle">
            <div className="feature-box-icon me-10px">
              <i className="bi bi-chat-dots icon-small text-dark-gray" />
            </div>
            <div className="feature-box-content">
              <span className="alt-font text-dark-gray fw-500 fs-18">
                Keep in Touch.{" "}
                <a
                  href="#"
                  className="text-decoration-line-bottom text-base-color fw-600"
                >
                  Like us on Facebook
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="bg-very-light-gray">
    <div className="container">
      <div className="row justify-content-center mb-2">
        <div
          className="col-md-10 text-center"
          data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <span className="text-base-color fw-600 mb-5px text-uppercase d-block">
            Simple pricing plans
          </span>
          <h2 className="fw-700 mb-15px text-dark-gray ls-minus-2px">
            Plans for everyone
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col pricing-table-style-08">
          <div
            className="d-flex justify-content-center mb-5 xs-mb-10"
            data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <ul className="nav nav-tabs nav-swich-tabs alt-font justify-content-center border-0 text-center alt-font fw-500">
              <li className="nav-item w-auto">
                <a
                  className="nav-link active text-dark-gray d-flex align-items-center"
                  data-bs-toggle="tab"
                  href="#tab_six3"
                >
                  <span className="tab-nav-text">Monthly</span>
                </a>
              </li>
              <li className="nav-item w-auto">
                <a
                  className="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  href="#tab_six4"
                >
                  <span className="tab-nav-text">Annualy - Save 50%</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {/* start tab content */}
            <div className="tab-pane fade in active show" id="tab_six3">
              <div className="row align-items-center justify-content-center">
                {/* start pricing item */}
                <div
                  className="col-lg-4 col-md-8 pricing-table-style-08 md-mb-30px"
                  data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  {/* start pricing table */}
                  <div className="pricing-table text-center pt-16 pb-35px bg-white box-shadow-quadruple-large border-radius-6px">
                    <div className="pricing-header ps-18 pe-18 md-ps-12 md-pe-12">
                      <div className="d-inline-block fs-12 text-uppercase bg-white ps-20px pe-20px fw-600 text-dark-gray mb-30px border-radius-100px box-shadow-large border border-1 border-color-extra-medium-gray">
                        Standard
                      </div>
                      <h2 className="text-dark-gray fw-600 mb-10px ls-minus-3px">
                        <sup className="fs-30">$</sup>500
                      </h2>
                      <p className="mb-25px lh-28">
                        All the basics for businesses that are just getting
                        started.
                      </p>
                      <a
                        href="#"
                        className="btn btn-large btn-dark-gray btn-round-edge btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Choose package"
                          >
                            Choose package
                          </span>
                        </span>
                      </a>
                      <span className="fs-13 w-100 d-block mt-5px">
                        Monthly billing
                      </span>
                    </div>
                    <div className="pricing-body pt-15px pb-25px">
                      <ul className="list-style-01 ps-0 mb-0">
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Unlimited bandwidth
                        </li>
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          <span className="opacity-6">Full backup systems</span>
                        </li>
                        <li className="border-color-transparent-dark-very-light border-bottom pt-10px pb-10px">
                          <span className="opacity-6">Unlimited database</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        href="#"
                        className="text-decoration-line-bottom d-inline-block text-dark-gray fw-500 ls-minus-05px"
                      >
                        Get your 30 day free trial
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
                {/* start pricing item */}
                <div
                  className="col-lg-4 col-md-8 pricing-table-style-08 md-mb-30px"
                  data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  {/* start pricing table */}
                  <div className="pricing-table text-center pt-16 pb-35px bg-white box-shadow-quadruple-large border-radius-6px">
                    <div className="pricing-header ps-18 pe-18 md-ps-12 md-pe-12">
                      <div className="d-inline-block fs-12 text-uppercase bg-white ps-20px pe-20px fw-600 text-dark-gray mb-30px border-radius-100px box-shadow-large border border-1 border-color-extra-medium-gray">
                        Business
                      </div>
                      <h2 className="text-dark-gray fw-600 mb-10px ls-minus-3px">
                        <sup className="fs-30">$</sup>850
                      </h2>
                      <p className="mb-25px lh-28">
                        All the basics for businesses that are just getting
                        started.
                      </p>
                      <a
                        href="#"
                        className="btn btn-large btn-yellow btn-round-edge btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Choose package"
                          >
                            Choose package
                          </span>
                        </span>
                      </a>
                      <span className="fs-13 w-100 d-block mt-5px">
                        Monthly billing
                      </span>
                    </div>
                    <div className="pricing-body pt-15px pb-25px">
                      <ul className="list-style-01 ps-0 mb-0">
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Unlimited bandwidth
                        </li>
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Full backup systems
                        </li>
                        <li className="border-color-transparent-dark-very-light border-bottom pt-10px pb-10px">
                          <span className="opacity-6">Unlimited database</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        href="#"
                        className="text-decoration-line-bottom d-inline-block text-dark-gray fw-500 ls-minus-05px"
                      >
                        Get your 30 day free trial
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
                {/* start pricing item */}
                <div
                  className="col-lg-4 col-md-8 pricing-table-style-08"
                  data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  {/* start pricing table */}
                  <div className="pricing-table text-center pt-16 pb-35px bg-white box-shadow-quadruple-large border-radius-6px">
                    <div className="pricing-header ps-18 pe-18 md-ps-12 md-pe-12">
                      <div className="d-inline-block fs-12 text-uppercase bg-white ps-20px pe-20px fw-600 text-dark-gray mb-30px border-radius-100px box-shadow-large border border-1 border-color-extra-medium-gray">
                        Ultimate
                      </div>
                      <h2 className="text-dark-gray fw-600 mb-10px ls-minus-3px">
                        <sup className="fs-30">$</sup>950
                      </h2>
                      <p className="mb-25px lh-28">
                        All the basics for businesses that are just getting
                        started.
                      </p>
                      <a
                        href="#"
                        className="btn btn-large btn-dark-gray btn-round-edge btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Choose package"
                          >
                            Choose package
                          </span>
                        </span>
                      </a>
                      <span className="fs-13 w-100 d-block mt-5px">
                        Monthly billing
                      </span>
                    </div>
                    <div className="pricing-body pt-15px pb-25px">
                      <ul className="list-style-01 ps-0 mb-0">
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Unlimited bandwidth
                        </li>
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Full backup systems
                        </li>
                        <li className="border-color-transparent-dark-very-light border-bottom pt-10px pb-10px">
                          Unlimited database
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        href="#"
                        className="text-decoration-line-bottom d-inline-block text-dark-gray fw-500 ls-minus-05px"
                      >
                        Get your 30 day free trial
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
              </div>
            </div>
            {/* end tab content */}
            {/* start tab content */}
            <div className="tab-pane fade in" id="tab_six4">
              <div className="row align-items-center justify-content-center">
                {/* start pricing item */}
                <div className="col-lg-4 col-md-8 pricing-table-style-08 md-mb-30px">
                  {/* start pricing table */}
                  <div className="pricing-table text-center pt-16 pb-35px bg-white box-shadow-quadruple-large border-radius-6px">
                    <div className="pricing-header ps-18 pe-18 md-ps-12 md-pe-12">
                      <div className="d-inline-block fs-12 text-uppercase bg-white ps-20px pe-20px fw-600 text-dark-gray mb-30px border-radius-100px box-shadow-large border border-1 border-color-extra-medium-gray">
                        Standard
                      </div>
                      <h2 className="text-dark-gray fw-600 mb-10px ls-minus-3px">
                        <sup className="fs-30">$</sup>250
                      </h2>
                      <p className="mb-25px lh-28">
                        All the basics for businesses that are just getting
                        started.
                      </p>
                      <a
                        href="#"
                        className="btn btn-large btn-dark-gray btn-round-edge btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Choose package"
                          >
                            Choose package
                          </span>
                        </span>
                      </a>
                      <span className="fs-13 w-100 d-block mt-5px">
                        Monthly billing
                      </span>
                    </div>
                    <div className="pricing-body pt-15px pb-25px">
                      <ul className="list-style-01 ps-0 mb-0">
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Unlimited bandwidth
                        </li>
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          <span className="opacity-6">Full backup systems</span>
                        </li>
                        <li className="border-color-transparent-dark-very-light border-bottom pt-10px pb-10px">
                          <span className="opacity-6">Unlimited database</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        href="#"
                        className="text-decoration-line-bottom d-inline-block text-dark-gray fw-500 ls-minus-05px"
                      >
                        Get your 30 day free trial
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
                {/* start pricing item */}
                <div className="col-lg-4 col-md-8 pricing-table-style-08 md-mb-30px">
                  {/* start pricing table */}
                  <div className="pricing-table text-center pt-16 pb-35px bg-white box-shadow-quadruple-large border-radius-6px">
                    <div className="pricing-header ps-18 pe-18 md-ps-12 md-pe-12">
                      <div className="d-inline-block fs-12 text-uppercase bg-white ps-20px pe-20px fw-600 text-dark-gray mb-30px border-radius-100px box-shadow-large border border-1 border-color-extra-medium-gray">
                        Business
                      </div>
                      <h2 className="text-dark-gray fw-600 mb-10px ls-minus-3px">
                        <sup className="fs-30">$</sup>350
                      </h2>
                      <p className="mb-25px lh-28">
                        All the basics for businesses that are just getting
                        started.
                      </p>
                      <a
                        href="#"
                        className="btn btn-large btn-yellow btn-round-edge btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Choose package"
                          >
                            Choose package
                          </span>
                        </span>
                      </a>
                      <span className="fs-13 w-100 d-block mt-5px">
                        Monthly billing
                      </span>
                    </div>
                    <div className="pricing-body pt-15px pb-25px">
                      <ul className="list-style-01 ps-0 mb-0">
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Unlimited bandwidth
                        </li>
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Full backup systems
                        </li>
                        <li className="border-color-transparent-dark-very-light border-bottom pt-10px pb-10px">
                          <span className="opacity-6">Unlimited database</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        href="#"
                        className="text-decoration-line-bottom d-inline-block text-dark-gray fw-500 ls-minus-05px"
                      >
                        Get your 30 day free trial
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
                {/* start pricing item */}
                <div className="col-lg-4 col-md-8 pricing-table-style-08">
                  {/* start pricing table */}
                  <div className="pricing-table text-center pt-16 pb-35px bg-white box-shadow-quadruple-large border-radius-6px">
                    <div className="pricing-header ps-18 pe-18 md-ps-12 md-pe-12">
                      <div className="d-inline-block fs-12 text-uppercase bg-white ps-20px pe-20px fw-600 text-dark-gray mb-30px border-radius-100px box-shadow-large border border-1 border-color-extra-medium-gray">
                        Ultimate
                      </div>
                      <h2 className="text-dark-gray fw-600 mb-10px ls-minus-3px">
                        <sup className="fs-30">$</sup>450
                      </h2>
                      <p className="mb-25px lh-28">
                        All the basics for businesses that are just getting
                        started.
                      </p>
                      <a
                        href="#"
                        className="btn btn-large btn-dark-gray btn-round-edge btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Choose package"
                          >
                            Choose package
                          </span>
                        </span>
                      </a>
                      <span className="fs-13 w-100 d-block mt-5px">
                        Monthly billing
                      </span>
                    </div>
                    <div className="pricing-body pt-15px pb-25px">
                      <ul className="list-style-01 ps-0 mb-0">
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Unlimited bandwidth
                        </li>
                        <li className="border-color-transparent-dark-very-light pt-10px pb-10px">
                          Full backup systems
                        </li>
                        <li className="border-color-transparent-dark-very-light border-bottom pt-10px pb-10px">
                          Unlimited database
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        href="#"
                        className="text-decoration-line-bottom d-inline-block text-dark-gray fw-500 ls-minus-05px"
                      >
                        Get your 30 day free trial
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
              </div>
            </div>
            {/* end tab content */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
</>

    
    </>
  )
}

export default Pricing