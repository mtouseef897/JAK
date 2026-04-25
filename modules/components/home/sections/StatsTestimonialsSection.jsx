import React from "react";

import {
  statisticsItems,
  testimonials,
} from "@/modules/components/home/homeData";

const StatsTestimonialsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center mb-7 md-mb-4">
          <div className="col-xl-5 col-lg-6 col-md-12 md-mb-50px sm-mb-40px text-center text-lg-start">
            <h4
              className="fw-700 mb-0 text-dark-gray ls-minus-1px"
              data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
            >
              Amazing accounting statistics showing the power of numbers.
            </h4>
          </div>
          <div className="col-lg-6 offset-xl-1 text-center text-lg-start">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              {statisticsItems.map((item) => (
                <div
                  key={item.title}
                  className="col-sm-6 last-paragraph-no-margin counter-style-04 md-mb-35px"
                >
                  <h2
                    className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px mb-5px"
                    data-text="%"
                    data-to={item.value}
                  >
                    <sup className="text-emerald-green top-minus-5px">
                      <i className="bi bi-arrow-up icon-medium" />
                    </sup>
                  </h2>
                  <span
                    className="fs-19 fw-600 ls-minus-05px mb-5px d-block text-dark-gray"
                    data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
                  >
                    {item.title}
                  </span>
                  <p
                    className="w-90 sm-w-100 md-mx-auto"
                    data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="row m-0 align-items-center justify-content-center border border-color-extra-medium-gray border-radius-100px md-border-radius-6px ps-10px pe-10px box-shadow-quadruple-large"
          data-anime='{ "scale": [1.1, 1], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col-lg-10">
            <div
              className="swiper slider-one-slide testimonials-style-09"
              data-slider-options='{ "slidesPerView": 1, "loop": true, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
            >
              <div className="swiper-wrapper">
                {testimonials.map((item) => (
                  <div key={item.author} className="swiper-slide">
                    <div className="row align-items-center pt-25px pb-25px">
                      <div className="col-lg-8 d-lg-flex align-items-center text-center text-lg-start">
                        <img
                          src="https://via.placeholder.com/200x200"
                          className="rounded-circle w-100px h-100px md-mb-35px"
                          alt=""
                        />
                        <span className="d-block ps-40px md-ps-0 md-mx-auto position-relative">
                          <img
                            src="images/demo-accounting-home-quote-img.png"
                            className="position-absolute left-minus-25px top-minus-15px lg-top-minus-5px md-top-minus-50px w-40px md-left-0px md-right-0px md-mx-auto"
                            alt=""
                          />
                          {item.quote}
                        </span>
                      </div>
                      <div className="col-lg-1 d-none d-lg-inline-block">
                        <div className="separator-line w-1px md-w-100 h-60px md-h-1px bg-extra-medium-gray mx-auto" />
                      </div>
                      <div className="col-lg-3 text-center text-lg-start md-mt-15px">
                        <span className="fs-19 ls-minus-05px fw-600 text-dark-gray d-block lh-28">
                          {item.author}
                        </span>
                        <div>{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-2 md-mb-25px">
            <div className="d-flex justify-content-center">
              <div className="slider-one-slide-prev-1 swiper-button-prev slider-navigation-style-04 bg-very-light-gray">
                <i className="fa-solid fa-arrow-left icon-small text-dark-gray" />
              </div>
              <div className="slider-one-slide-next-1 swiper-button-next slider-navigation-style-04 bg-very-light-gray">
                <i className="fa-solid fa-arrow-right icon-small text-dark-gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsTestimonialsSection;
