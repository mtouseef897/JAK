import React from "react";

const ExperienceCountSection = () => {
  return (
    <section className="p-0 border-bottom border-color-extra-medium-gray">
      <div className="container">
        <div
          className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center"
          data-anime='{ "el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 500, "easing": "easeOutQuad" }'
        >
          {/* start content box item */}
          <div className="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
              <div className="flex-shrink-0 me-15px md-me-0">
                <h2 className="mb-0 fw-800">
                  10<sup className="fs-18">+</sup>
                </h2>
              </div>
              <div>
                <span className="lh-20 fs-14 fw-600 d-block">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>
          {/* end content box item */}
          {/* start content box item */}
          <div className="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
              <div className="flex-shrink-0 me-15px md-me-0">
                <h2 className="mb-0 fw-800">
                  20<sup className="fs-18">+</sup>
                </h2>
              </div>
              <div>
                <span className="lh-20 fs-14 fw-600 d-block">
                  Clients Served
                </span>
              </div>
            </div>
          </div>
          {/* end content box item */}
          {/* start content box item */}
          <div className="col pt-35px pb-35px md-pb-0 text-dark-gray border-end border-color-extra-medium-gray sm-border-end-0">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
              <div className="flex-shrink-0 me-15px md-me-0">
                <h2 className="mb-0 fw-800 ls-minus-3px">4</h2>
              </div>
              <div>
                {/* <div className="review-star-icon fs-20 d-inline-block text-gradient-orange-sky-blue">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div> */}
                <span className="lh-20 fs-14 fw-600 d-block">Jurisdictions: PK | US | UK | UAE</span>
              </div>
            </div>
          </div>
          {/* end content box item */}
          {/* start content box item */}
          <div className="col pt-35px pb-35px text-dark-gray">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start">
              <div className="flex-shrink-0 me-15px md-me-0">
                <h2 className="mb-0 fw-800">
                  100<sup className="fs-18">%</sup>
                </h2>
              </div>
              <div>
                <span className="lh-20 fs-14 fw-600 d-block">
                  Remote Service —
                  Available Worldwide
                </span>
              </div>
            </div>
          </div>
          {/* end content box item */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCountSection;
