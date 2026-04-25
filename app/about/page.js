import React from 'react'

const About = () => {
  return (
    <>
    
    <>
  {/* start page title */}
  <section
    className="page-title-big-typography bg-dark-gray ipad-top-space-margin cover-background md-py-0"
    style={{ backgroundImage: "url(/images/demo-hosting-about-bg.jpg)" }}
  >
    <div className="container">
      <div className="row align-items-center small-screen">
        <div className="col-lg-5 col-sm-7 position-relative page-title-extra-small">
          <h1 className="mb-15px text-white opacity-7 fw-300 overflow-hidden">
            <span
              className="d-inline-block"
              data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300 }'
            >
              About crafto hosting
            </span>
          </h1>
          <h2 className="m-auto pb-5px pt-5px text-white fw-600 ls-minus-1px overflow-hidden">
            <span
              className="d-inline-block"
              data-anime='{ "translateY": [30, 0], "opacity": [0, 1], "easing": "easeOutCubic", "duration": 500, "staggervalue": 300, "delay": 200 }'
            >
              Empower our community
            </span>
          </h2>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */}
  {/* start section */}
  <section className="pb-0">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 col-md-10 md-mb-50px animation-float"
          data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
        >
          <img
            className="w-100"
            src="/images/demo-hosting-hosting-01.jpg"
            alt=""
          />
        </div>
        <div
          className="col-xl-5 offset-xl-1 col-lg-6"
          data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <span className="text-base-color fw-600 mb-15px text-uppercase d-block">
            Simple and intuitive
          </span>
          <h2 className="fw-700 text-dark-gray ls-minus-1px">
            Secure &amp; reliable hosting company.
          </h2>
          <p className="w-95 lg-w-100 mb-30px">
            Lorem ipsum dolor sit amet consectetur adipiscing do eiusmod tempor
            incididunt ut labore et dolore.
          </p>
          <div className="mb-40px">
            <div className="col icon-with-text-style-08 mb-15px">
              <div className="feature-box feature-box-left-icon-middle bg-very-light-gray border-radius-5px pt-15px pb-15px ps-25px pe-25px">
                <div className="feature-box-icon feature-box-icon-rounded w-25px h-25px rounded-circle bg-base-color box-shadow-large me-10px">
                  <i className="fa-solid fa-check fs-11 text-white" />
                </div>
                <div className="feature-box-content">
                  <span className="d-block fs-17 text-dark-gray fw-500 ls-minus-05px">
                    Easy way to broadcast the content on website.
                  </span>
                </div>
              </div>
            </div>
            <div className="col icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle bg-very-light-gray border-radius-5px pt-15px pb-15px ps-25px pe-25px">
                <div className="feature-box-icon feature-box-icon-rounded w-25px h-25px rounded-circle bg-base-color box-shadow-large me-10px">
                  <i className="fa-solid fa-check fs-11 text-white" />
                </div>
                <div className="feature-box-content">
                  <span className="d-block fs-17 text-dark-gray fw-500 ls-minus-05px">
                    Secure way to keep your data under a account.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            href="demo-hosting-hosting.html"
            className="btn btn-large btn-dark-gray btn-rounded btn-switch-text btn-box-shadow"
          >
            <span>
              <span className="btn-double-text" data-text="Get started now">
                Hosting services
              </span>
              <span>
                <i className="feather icon-feather-arrow-right" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section>
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div
          className="col-12 text-center"
          data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <h2 className="fw-700 text-dark-gray ls-minus-1px mb-25px d-block">
            Business timeline
          </h2>
        </div>
      </div>
      <div
        className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center g-0"
        data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        {/* start process step item */}
        <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box md-mb-50px">
          <h4 className="d-block text-dark-gray mb-0 fw-700 ls-minus-2px">
            2010
          </h4>
          <div className="process-step-icon-box position-relative mt-25px mb-25px">
            <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1" />
            <div className="step-box d-flex align-items-center justify-content-center bg-white box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
              <span className="w-8px h-8px bg-base-color border-radius-100" />
            </div>
          </div>
          <span className="d-inline-block alt-font fw-600 text-dark-gray fs-18 mb-5px ls-minus-05px">
            Business founded
          </span>
          <p className="w-75 sm-w-85 d-inline-block ">
            Lorem ipsum is simply text of the printing typesetting.
          </p>
        </div>
        {/* end process step item */}
        {/* start process step item */}
        <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box md-mb-50px">
          <h4 className="d-block text-dark-gray mb-0 fw-700 ls-minus-2px">
            2014
          </h4>
          <div className="process-step-icon-box position-relative mt-25px mb-25px">
            <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1" />
            <div className="step-box d-flex align-items-center justify-content-center bg-white box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
              <span className="w-8px h-8px bg-base-color border-radius-100" />
            </div>
          </div>
          <span className="d-inline-block alt-font fw-600 text-dark-gray fs-18 mb-5px ls-minus-05px">
            Build new office
          </span>
          <p className="w-75 sm-w-85 d-inline-block ">
            Lorem ipsum is simply text of the printing typesetting.
          </p>
        </div>
        {/* end process step item */}
        {/* start process step item */}
        <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box xs-mb-50px">
          <h4 className="d-block text-dark-gray mb-0 fw-700 ls-minus-2px">
            2016
          </h4>
          <div className="process-step-icon-box position-relative mt-25px mb-25px">
            <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1" />
            <div className="step-box d-flex align-items-center justify-content-center bg-white box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
              <span className="w-8px h-8px bg-base-color border-radius-100" />
            </div>
          </div>
          <span className="d-inline-block alt-font fw-600 text-dark-gray fs-18 mb-5px ls-minus-05px">
            Relocates headquarter
          </span>
          <p className="w-75 sm-w-85 d-inline-block ">
            Lorem ipsum is simply text of the printing typesetting.
          </p>
        </div>
        {/* end process step item */}
        {/* start process step item */}
        <div className="col process-step-style-06 text-center last-paragraph-no-margin hover-box">
          <h4 className="d-block text-dark-gray mb-0 fw-700 ls-minus-2px">
            2020
          </h4>
          <div className="process-step-icon-box position-relative mt-25px mb-25px">
            <span className="progress-step-separator bg-dark-gray w-100 separator-line-1px opacity-1" />
            <div className="step-box d-flex align-items-center justify-content-center bg-white box-shadow-medium-bottom border-radius-100 mx-auto w-30px h-30px">
              <span className="w-8px h-8px bg-base-color border-radius-100" />
            </div>
          </div>
          <span className="d-inline-block alt-font fw-600 text-dark-gray fs-18 mb-5px ls-minus-05px">
            Revenue of millions
          </span>
          <p className="w-75 sm-w-85 d-inline-block ">
            Lorem ipsum is simply text of the printing typesetting.
          </p>
        </div>
        {/* end process step item */}
      </div>
      <div
        className="row justify-content-center mt-6 xs-mt-12"
        data-anime='{ "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <div className="col-xl-8 col-lg-10">
          <div className="row align-items-center justify-content-center bg-yellow border-radius-100px sm-border-radius-6px p-15px sm-p-20px sm-mx-0">
            <div className="col-lg-6 border-end border-color-transparent-dark-very-light text-center ls-minus-05px align-items-center d-flex justify-content-center md-border-end-0 md-mb-10px">
              <i className="fa-regular fa-face-smile text-dark-gray icon-extra-medium me-10px" />
              <span className="text-dark-gray fs-18 fw-600 text-start lh-28">
                Join the <span className="fw-700">10000+</span> clients trusting
                us
              </span>
            </div>
            <div className="col-lg-6 text-center ls-minus-05px align-items-center d-flex justify-content-center">
              <i className="bi bi-star text-dark-gray icon-extra-medium me-10px" />
              <span className="text-dark-gray fs-18 fw-600 text-start lh-28">
                4.9 out of 5 - <span className="fw-700">8549</span> Total
                reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section
    className="cover-background"
    style={{ backgroundImage: 'url("/images/demo-hosting-about-02.jpg")' }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-xl-8 col-lg-10 text-center"
          data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="d-inline-block mb-45px sm-mb-25px">
            <a
              href="https://www.youtube.com/watch?v=cfXHhfNy7tU"
              className="position-relative bg-white d-inline-block text-center rounded-circle video-icon-box video-icon-large popup-youtube"
            >
              <span>
                <span className="video-icon">
                  <i className="fa-solid fa-play text-base-color" />
                  <span className="video-icon-sonar">
                    <span className="video-icon-sonar-bfr bg-white" />
                  </span>
                </span>
              </span>
            </a>
          </div>
          <h2 className="text-white fw-700 ls-minus-1px mb-0">
            Are you ready for better productive business?
          </h2>
          <span className="d-block text-white opacity-5 text-uppercase mt-20px">
            We're a trusted sources of web hosting
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="overflow-hidden pb-0">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div
          className="col-xl-5 col-lg-7 col-md-8 position-relative text-center text-xl-start lg-mb-15px"
          data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <span className="text-base-color fw-600 mb-15px text-uppercase d-block">
            Client feedback
          </span>
          <h3 className="alt-font fw-700 ls-minus-1px text-dark-gray mb-20px mx-auto">
            What do people say about our services?
          </h3>
          <div className="d-block mb-30px fs-18 ls-minus-05px">
            See our 437 reviews on{" "}
            <img
              src="https://via.placeholder.com/112x28"
              className="align-middle position-relative top-minus-2px"
              alt=""
            />
          </div>
          <div className="d-flex justify-content-center justify-content-xl-start">
            {/* start slider navigation */}
            <div
              className="slider-one-slide-prev-1 text-dark-gray swiper-button-prev slider-navigation-style-04 border border-1 border-color-extra-medium-gray"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="fa-solid fa-arrow-left" />
            </div>
            <div
              className="slider-one-slide-next-1 text-dark-gray swiper-button-next slider-navigation-style-04 border border-1 border-color-extra-medium-gray"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="fa-solid fa-arrow-right" />
            </div>
            {/* end slider navigation */}
          </div>
        </div>
        <div
          className="col-xl-7 col-lg-10 overflow-hidden"
          data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="outside-box-right-15 xl-outside-box-right-20 sm-outside-box-right-0">
            <div
              className="swiper slider-one-slide slider-shadow-right sm-slider-shadow-none magic-cursor overflow-visible ps-25px sm-p-0"
              data-slider-options='{ "slidesPerView": 1, "spaceBetween": 40, "loop": true, "pagination": { "el": ".slider-one-slide-pagination", "clickable": true, "dynamicBullets": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 2 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
            >
              <div className="swiper-wrapper pt-30px pb-30px">
                {/* start review item */}
                <div className="swiper-slide review-style-06">
                  <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                    <div className="mb-20px d-flex align-items-center">
                      <img
                        className="rounded-circle w-90px h-90px me-20px"
                        src="https://via.placeholder.com/125x125"
                        alt=""
                      />
                      <div className="d-inline-block align-middle last-paragraph-no-margin">
                        <div className="alt-font text-dark-gray fw-600 fs-18">
                          Herman Miller
                        </div>
                        <p className="lh-24 d-block">Digital marketer</p>
                      </div>
                      <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto sm-position-absolute md-right-15px md-top-15px">
                        <i className="fa-solid fa-star me-5px" />
                        5.0
                      </div>
                    </div>
                    <p>
                      We help our clients succeed by creating brand identities,
                      digital experiences, and print materials that communicate.
                    </p>
                  </div>
                </div>
                {/* end review item */}
                {/* start review item */}
                <div className="swiper-slide review-style-06">
                  <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                    <div className="mb-20px d-flex align-items-center">
                      <img
                        className="rounded-circle w-90px h-90px me-20px"
                        src="https://via.placeholder.com/125x125"
                        alt=""
                      />
                      <div className="d-inline-block align-middle last-paragraph-no-margin">
                        <div className="alt-font text-dark-gray fw-600 fs-18">
                          Alexander Harad
                        </div>
                        <p className="lh-24 d-block">Digital marketer</p>
                      </div>
                      <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                        <i className="fa-solid fa-star me-5px" />
                        4.5
                      </div>
                    </div>
                    <p>
                      They have provided superior quality of content marketing
                      services. Very satisfied by choosing them. Thank you!
                    </p>
                  </div>
                </div>
                {/* end review item */}
                {/* start review item */}
                <div className="swiper-slide review-style-06">
                  <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                    <div className="mb-20px d-flex align-items-center">
                      <img
                        className="rounded-circle w-90px h-90px me-20px"
                        src="https://via.placeholder.com/125x125"
                        alt=""
                      />
                      <div className="d-inline-block align-middle last-paragraph-no-margin">
                        <div className="alt-font text-dark-gray fw-600 fs-18">
                          Shoko Mugikura
                        </div>
                        <p className="lh-24 d-block">Digital marketer</p>
                      </div>
                      <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                        <i className="fa-solid fa-star me-5px" />
                        5.0
                      </div>
                    </div>
                    <p>
                      We help our clients succeed by creating brand identities,
                      digital experiences, and print materials that communicate.
                    </p>
                  </div>
                </div>
                {/* end review item */}
                {/* start review item */}
                <div className="swiper-slide review-style-06">
                  <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                    <div className="mb-20px d-flex align-items-center">
                      <img
                        className="rounded-circle w-90px h-90px me-20px"
                        src="https://via.placeholder.com/125x125"
                        alt=""
                      />
                      <div className="d-inline-block align-middle last-paragraph-no-margin">
                        <div className="alt-font text-dark-gray fw-600 fs-18">
                          Jacob Kalling
                        </div>
                        <p className="lh-24 d-block">Digital marketer</p>
                      </div>
                      <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                        <i className="fa-solid fa-star me-5px" />
                        5.0
                      </div>
                    </div>
                    <p>
                      We help our clients succeed by creating brand identities,
                      digital experiences, and print materials that communicate.
                    </p>
                  </div>
                </div>
                {/* end review item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="pt-4">
    <div className="container">
      <div
        className="row position-relative clients-style-08"
        data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <div
          className="col swiper text-center feather-shadow"
          data-slider-options='{ "slidesPerView": 2, "spaceBetween":0, "speed": 4000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 4 }, "768": { "slidesPerView": 3 } }, "effect": "slide" }'
        >
          <div className="swiper-wrapper marquee-slide">
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-envato.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-pingdom.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-paypal.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-walmart.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-amazon.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-logitech.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-envato.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-pingdom.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
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

export default About