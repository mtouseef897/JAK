import React from "react";

import { serviceCarouselItems } from "@/modules/components/home/homeData";

const WhyChooseUsSection = () => {
  const carouselItems = [
    ...serviceCarouselItems,
    ...serviceCarouselItems,
    serviceCarouselItems[1],
  ];

  return (
    <section className="bg-very-light-gray overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-6 text-center text-lg-start">
          <div
            className="col-xl-5 col-lg-5 md-mb-20px"
            data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <h4 className="text-dark-gray fw-700 mb-0 ls-minus-1px">
              Why choose us as your accountant consultant?
            </h4>
          </div>
          <div
            className="col-xl-5 col-lg-5 last-paragraph-no-margin md-mb-30px"
            data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <p className="w-90 xl-w-100 md-w-80 sm-w-100 md-mx-auto">
              We put a strong focus on the needs of your business to figure out
              solutions that best fits your demand.
            </p>
          </div>
          <div
            className="col-xl-2 col-lg-2 d-flex justify-content-center justify-content-lg-end"
            data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <div className="slider-one-slide-prev-1 icon-small text-dark-gray swiper-button-prev slider-navigation-style-04 bg-white text-dark-gray box-shadow-large">
              <i className="fa-solid fa-arrow-left" />
            </div>
            <div className="slider-one-slide-next-1 icon-small text-dark-gray swiper-button-next slider-navigation-style-04 bg-white text-dark-gray box-shadow-large">
              <i className="fa-solid fa-arrow-right" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 position-relative">
            <div
              className="outside-box-right-40 xs-outside-box-right-0"
              data-anime='{ "translateX": [100, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div
                className="swiper magic-cursor"
                data-slider-options='{ "slidesPerView": 1, "spaceBetween": 28, "loop": true, "autoplay": { "delay": 2000, "disableOnInteraction": false }, "pagination": { "el": ".slider-four-slide-pagination-1", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 5 }, "992": { "slidesPerView": 4 }, "768": { "slidesPerView": 3 }, "576": { "slidesPerView": 2 } }, "effect": "slide" }'
              >
                <div className="swiper-wrapper">
                  {carouselItems.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="swiper-slide"
                    >
                      <div className="interactive-banner-style-08">
                        <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                          <a href="demo-accounting-services.html">
                            <img src={item.image} alt="" />
                          </a>
                          <figcaption
                            className={`d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 ${item.contentPaddingClassName}`}
                          >
                            <a href="demo-accounting-services.html">
                              <i className={item.iconClassName} />
                            </a>
                            <div className="mt-auto d-flex w-100 align-items-center">
                              <div className="col last-paragraph-no-margin">
                                <a
                                  href="demo-accounting-services.html"
                                  className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                                >
                                  {item.title}
                                </a>
                              </div>
                              <a
                                href="demo-accounting-services.html"
                                className="circle-box bg-yellow w-50px h-50px rounded-circle ms-auto position-relative rounded-box"
                              >
                                <i className="bi bi-arrow-right-short absolute-middle-center icon-very-medium lh-0px text-dark-gray" />
                              </a>
                            </div>
                            <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9" />
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
