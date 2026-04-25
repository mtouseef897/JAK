import React from "react";

import {
  growthCards,
  trustedClientLogos,
} from "@/modules/components/home/homeData";

const TrustedCompaniesSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center mb-6">
          <div
            className="col-xl-6 col-md-8 col-sm-10 text-center"
            data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <h4 className="mb-0 text-dark-gray fw-700 ls-minus-1px w-85 xl-w-100 mx-auto">
              Trusted by the world's fastest growing companies
            </h4>
          </div>
        </div>
        <div
          className="row row-cols-1 row-cols-md-3 justify-content-center mb-7 sm-mb-45px"
          data-anime='{ "el": "childs", "translateY": [50, 0], "rotateX":[30, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          {growthCards.map((card) => (
            <div key={card.label} className="col sm-mb-30px">
              <div className="bg-white h-100 border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
                <div className="pt-10 pb-10">
                  <img
                    src={card.logo}
                    className="h-40px md-h-35px sm-h-40px"
                    alt=""
                  />
                </div>
                <div className="border-top border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin">
                  <p>
                    {card.label} -{" "}
                    <span className="fw-600 text-dark-gray ls-minus-05px">
                      {card.growth}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="row position-relative clients-style-08 mb-6 sm-mb-40px"
          data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div
            className="col swiper text-center feather-shadow"
            data-slider-options='{ "slidesPerView": 2, "spaceBetween":0, "speed": 6000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 4 }, "768": { "slidesPerView": 3 } }, "effect": "slide" }'
          >
            <div className="swiper-wrapper marquee-slide">
              {trustedClientLogos.map((logo, index) => (
                <div key={`${logo}-${index}`} className="swiper-slide">
                  <a href="#">
                    <img src={logo} className="h-40px xs-h-30px" alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center align-items-center"
          data-anime='{ "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <div className="col-12 text-center">
            <div className="d-inline-block align-middle bg-yellow fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12 me-10px lh-30 sm-m-5px">
              Trust
            </div>
            <div className="d-inline-block align-middle text-dark-gray fs-19 fw-600 ls-minus-05px">
              Join the{" "}
              <span className="text-decoration-line-bottom text-dark-gray">
                10000+ companies
              </span>{" "}
              trusting crafto accounting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
