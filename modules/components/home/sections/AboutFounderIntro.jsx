import React from "react";

const AboutFounderIntro = () => {
  return (
    <section className="pt-0 big-section">
      <div className="container">
        <div
          className="row my-5"
          data-anime='{ "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="col-12 text-center">
            <div className="d-inline-block align-middle bg-yellow fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 me-10px lh-30 sm-m-5px">
              Trust
            </div>
            <div className="d-inline-block align-middle text-dark-gray fs-19 fw-600 ls-minus-05px">
              Meet the Founder
            </div>
          </div>
        </div>

        <div
          className="row align-items-center"
          data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="col-lg-6 position-relative md-mb-14 sm-mb-17 xs-mb-23">
            <div
              // className="w-70 md-w-75 xs-w-90"
              data-animation-delay={50}
              data-shadow-animation="true"
            >
              <img
                src="images/jak-profile.jpeg"
                alt=""
                className="border-radius-8px w-100"
              />
            </div>
            <div
              className="w-55 overflow-hidden position-absolute right-15px xs-w-60 bottom-minus-20px"
              data-shadow-animation="true"
              data-animation-delay={250}
              data-bottom-top="transform: translateY(50px)"
              data-top-bottom="transform: translateY(-50px)"
            >
              <img
                src="https://via.placeholder.com/358x408"
                alt=""
                className="border-radius-8px w-100 box-shadow-quadruple-large"
              />
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 text-center text-lg-start">
            <h3 className="fw-700 fs-32 mb-1 text-dark-gray ls-minus-2px">
              Jamal Ahmad Khan 
            </h3>
            <p className="fw-500 text-dark-gray mb-10px d-block ls-minus-05px">
              10+ Years of Accounting & Financial Expertise
            </p>
            <p className="mb-40px xs-mb-30px w-90 lg-w-95 md-w-100">
              I founded JAK with one mission: to bring clarity to your finances.
              With over a decade of hands-on experience acrossPakistan, US, UK, UAE
              and KSA accounting frameworks, I help individuals and businesses
              make confident, well-informed financial decisions —all delivered
              100% remotely with the precision and care you deserve.
            </p>
            <a
              href="/about-us"
              className="btn btn-large btn-rounded with-rounded btn-base-color btn-round-edge btn-box-shadow"
            >
              Read Full Story
              <span className="bg-orient-blue text-white">
                <i className="feather icon-feather-arrow-right icon-small" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderIntro;
