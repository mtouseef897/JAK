import React from "react";

const ExperienceContactSection = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-11 md-mb-60px sm-mb-40px">
            <div className="row mt-10 align-items-center">
              <div className="col-xl-5 col-lg-6 col-sm-5 xs-mb-25px text-center">
                <div className="position-relative">
                  <span
                    className="w-200px h-200px bg-yellow rounded-circle d-inline-block"
                    data-anime='{ "opacity": [0, 1], "staggervalue": 0, "easing": "easeOutQuad" }'
                  />
                  <span
                    className="fs-160 lg-fs-150 text-dark-gray fw-700 position-absolute left-0px w-100 top-50 ls-minus-5px md-top-40px"
                    data-anime='{ "opacity": [0, 1], "staggervalue": 200, "easing": "easeOutQuad" }'
                  >
                    40
                  </span>
                </div>
              </div>
              <div
                className="col-xl-7 col-lg-6 col-sm-7 ps-45px lg-ps-15px last-paragraph-no-margin text-center text-sm-start"
                data-anime='{  "opacity": [0,1], "delay": 100, "staggervalue": 250, "easing": "easeOutQuad" }'
              >
                <h5 className="fw-600 text-dark-gray ls-minus-1px mb-15px">
                  Years working experience.
                </h5>
                <p>
                  We put a strong focus on the needs of business to figure out
                  solutions that best fits your demand.
                </p>
                <a
                  href="demo-accounting-process.html"
                  className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-transform-none fw-600 mt-15px"
                >
                  <span>
                    <span className="btn-text">Discover now</span>
                    <span className="btn-icon">
                      <i className="feather icon-feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather icon-feather-arrow-right" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-11 contact-form-style-01 position-relative">
            <div className="position-absolute left-minus-25px md-left-minus-5px xs-left-0 top-100px md-top-0px">
              <img
                src="images/demo-accounting-home-left-img.jpg"
                className="w-40px"
                alt=""
              />
            </div>
            <div className="ps-14 pe-14 pt-12 pb-12 lg-p-12 bg-white box-shadow-quadruple-large border-radius-6px">
              <h6
                className="d-inline-block fw-600 text-dark-gray ls-minus-1px mb-35px sm-mb-25px"
                data-anime='{ "translateY": [15, 0], "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                Request a free advice?
              </h6>
              <form
                action="email-templates/contact-form.php"
                method="post"
                data-anime='{ "el": "childs", "translateY": [15, 0], "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <div className="position-relative form-group mb-15px">
                  <span className="form-icon">
                    <i className="bi bi-emoji-smile" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control required"
                    placeholder="Your name*"
                  />
                </div>
                <div className="position-relative form-group mb-15px">
                  <span className="form-icon">
                    <i className="bi bi-envelope" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control required"
                    placeholder="Your email address*"
                  />
                </div>
                <div className="position-relative form-group mb-20px">
                  <span className="form-icon">
                    <i className="bi bi-telephone-outbound" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your phone"
                  />
                </div>
                <div className="position-relative terms-condition-box text-start d-inline-block">
                  <label>
                    <input
                      type="checkbox"
                      name="terms_condition"
                      id="terms_condition"
                      defaultValue={1}
                      className="terms-condition check-box align-middle required"
                    />
                    <span className="box fs-16">
                      I agree to the terms of service.
                    </span>
                  </label>
                </div>
                <div className="position-relative mt-20px">
                  <button
                    className="btn btn-large btn-round-edge btn-base-color btn-box-shadow submit w-100"
                    type="submit"
                  >
                    Get free quote
                  </button>
                  <div className="form-results mt-20px text-center lh-24 d-none" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceContactSection;
