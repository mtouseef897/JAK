import StickyElements from "@/modules/components/layout/StickyElements";


export default function Home() {
  return (
    <>
    
    <>
  {/* start banner */}
  <section
    className="top-space-margin p-0 full-screen md-h-600px sm-h-500px section-dark"
    data-parallax-background-ratio="0.8"
    style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1100")' }}
  >
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div
          className="col-xl-7 col-md-9 col-sm-9 position-relative text-white"
          data-anime='{ "el": "childs", "opacity": [0, 1], "translateY": [30, 0], "staggervalue": 200, "easing": "easeInOutSine" }'
        >
          <div className="fs-80 lh-75 sm-fs-65 fw-600 mb-20px text-shadow-large ls-minus-2px">
            Crafto expand business values.
          </div>
          <div>
            <span className="opacity-5 fs-20 w-70 md-w-85 mb-25px fw-300 d-inline-block">
              We are dedicated to providing amazing business accounting services
              and client service.
            </span>
          </div>
          <div className="icon-with-text-style-08">
            <div className="feature-box feature-box-left-icon-middle">
              <div className="feature-box-icon feature-box-icon-rounded w-65px h-65px rounded-circle bg-yellow me-15px rounded-box">
                <i className="feather icon-feather-arrow-right text-dark-gray icon-extra-medium" />
              </div>
              <div className="feature-box-content">
                <a
                  href="#services"
                  className="d-inline-block fs-19 text-white text-shadow-double-large"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end banner */}
  {/* start section */}
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
            {/* start contact form */}
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
            {/* end contact form */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
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
          {/* start slider navigation */}
          <div className="slider-one-slide-prev-1 icon-small text-dark-gray swiper-button-prev slider-navigation-style-04 bg-white text-dark-gray box-shadow-large">
            <i className="fa-solid fa-arrow-left" />
          </div>
          <div className="slider-one-slide-next-1 icon-small text-dark-gray swiper-button-next slider-navigation-style-04 bg-white text-dark-gray box-shadow-large">
            <i className="fa-solid fa-arrow-right" />
          </div>
          {/* end slider navigation */}
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
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/600x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-12">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Medal-2 text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Targeted growth
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/598x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Financial text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Conversion strategy
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/600x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Archery-2 text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Competitor research
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/600x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Money-Bag text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Marketing strategy
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/598x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Financial text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Conversion strategy
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/600x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-12">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Medal-2 text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Targeted growth
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/598x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Financial text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Conversion strategy
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/600x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Archery-2 text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Competitor research
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/600x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Money-Bag text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Marketing strategy
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
                {/* end content carousal item */}
                {/* start content carousal item */}
                <div className="swiper-slide">
                  <div className="interactive-banner-style-08">
                    <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                      <a href="demo-accounting-services.html">
                        <img src="https://via.placeholder.com/598x690" alt="" />
                      </a>
                      <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-14 lg-p-10">
                        <a href="demo-accounting-services.html">
                          <i className="line-icon-Financial text-white icon-extra-large" />
                        </a>
                        <div className="mt-auto d-flex w-100 align-items-center">
                          <div className="col last-paragraph-no-margin">
                            <a
                              href="demo-accounting-services.html"
                              className="text-white fs-24 lh-28 w-65 xl-w-75 d-block"
                            >
                              Conversion strategy
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
                {/* end content carousal item */}
              </div>
            </div>
          </div>
          {/* start slider pagination */}
          {/*<div class="swiper-pagination slider-four-slide-pagination-1 swiper-pagination-style-2 swiper-pagination-clickable swiper-pagination-bullets"></div>*/}
          {/* end slider pagination */}
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="p-0 bg-base-color">
    <div className="container">
      <div className="row align-items-center justify-content-center g-0">
        <div
          className="col-auto d-flex align-items-center"
          data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <img src="https://via.placeholder.com/130x100" alt="" />
          <div className="fs-19 lh-28 last-paragraph-no-margin text-white pt-15px pb-15px">
            <p>
              Save your precious time and effort spent for finding a solution.{" "}
              <a
                href="demo-accounting-contact.html"
                className="text-decoration-line-bottom fw-500 text-white"
              >
                Contact us now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
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
        <div className="col sm-mb-30px">
          <div className="bg-white h-100 border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
            <div className="pt-10 pb-10">
              <img
                src="images/logo-monday-dark-green.svg"
                className="h-40px md-h-35px sm-h-40px"
                alt=""
              />
            </div>
            <div className="border-top border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin">
              <p>
                Project management -{" "}
                <span className="fw-600 text-dark-gray ls-minus-05px">
                  275% Growth
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col sm-mb-30px">
          <div className="bg-white h-100 border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
            <div className="pt-10 pb-10">
              <img
                src="images/logo-dropbox-dark-green.svg"
                className="h-40px md-h-35px sm-h-40px"
                alt=""
              />
            </div>
            <div className="border-top border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin">
              <p>
                Secure storage -{" "}
                <span className="fw-600 text-dark-gray ls-minus-05px">
                  235% Growth
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="bg-white h-100 border border-color-extra-medium-gray border-radius-6px text-center box-shadow-quadruple-large">
            <div className="pt-10 pb-10">
              <img
                src="images/logo-slack-dark-green.svg"
                className="h-40px md-h-35px sm-h-40px"
                alt=""
              />
            </div>
            <div className="border-top border-1 border-color-extra-medium-gray p-15px last-paragraph-no-margin">
              <p>
                Team management -{" "}
                <span className="fw-600 text-dark-gray ls-minus-05px">
                  195% Growth
                </span>
              </p>
            </div>
          </div>
        </div>
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
            {/* start client item */}
            <div className="swiper-slide">
              <a href="#">
                <img
                  src="images/logo-netflix-oxford-blue.svg"
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
                  src="images/logo-invision-oxford-blue.svg"
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
                  src="images/logo-yahoo-oxford-blue.svg"
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
                  src="images/logo-walmart-oxford-blue.svg"
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
                  src="images/logo-monday-oxford-blue.svg"
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
                  src="images/logo-logitech-oxford-blue.svg"
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
                  src="images/logo-netflix-oxford-blue.svg"
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
                  src="images/logo-invision-oxford-blue.svg"
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
                  src="images/logo-yahoo-oxford-blue.svg"
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
                  src="images/logo-walmart-oxford-blue.svg"
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
                  src="images/logo-monday-oxford-blue.svg"
                  className="h-40px xs-h-30px"
                  alt=""
                />
              </a>
            </div>
            {/* end client item */}
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
  {/* end section */}
  {/* start section */}
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
                      Strategic planning
                    </span>
                  </div>
                  <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                    Organization's process of defining strategy.
                  </h4>
                  <p className="mb-35px md-mb-25px">
                    We provide simplified accounting solutions and qualitative
                    business process services to the customers which helps
                    streamline your business and give your company a
                    competitive.{" "}
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
                      Audit assurance
                    </span>
                  </div>
                  <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                    An excellent audit service for company.
                  </h4>
                  <p className="mb-35px md-mb-25px">
                    We provide simplified accounting solutions and qualitative
                    business process services to the customers which helps
                    streamline your business and give your company a
                    competitive.{" "}
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
                      Financial projections
                    </span>
                  </div>
                  <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                    We are leader in tax advisor and financial.
                  </h4>
                  <p className="mb-35px md-mb-25px">
                    We provide simplified accounting solutions and qualitative
                    business process services to the customers which helps
                    streamline your business and give your company a
                    competitive.{" "}
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
                      Business planning
                    </span>
                  </div>
                  <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                    We creating specific business strategies.
                  </h4>
                  <p className="mb-35px md-mb-25px">
                    We provide simplified accounting solutions and qualitative
                    business process services to the customers which helps
                    streamline your business and give your company a
                    competitive.{" "}
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
              Strategic planning
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
              Audit assurance
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
              Financial projections
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
              Business planning
              <span className="tab-border bg-base-color" />
            </a>
          </li>
        </ul>
        {/* end tab navigation */}
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
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
            {/* start counter item */}
            <div className="col-sm-6 last-paragraph-no-margin counter-style-04 md-mb-35px">
              <h2
                className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px mb-5px"
                data-text="%"
                data-to={96}
              >
                <sup className="text-emerald-green top-minus-5px">
                  <i className="bi bi-arrow-up icon-medium" />
                </sup>
              </h2>
              <span
                className="fs-19 fw-600 ls-minus-05px mb-5px d-block text-dark-gray"
                data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
              >
                Prefer cloud accounting
              </span>
              <p
                className="w-90 sm-w-100 md-mx-auto"
                data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
              >
                Lorem ipsum simply dummy text printing typesetting.
              </p>
            </div>
            {/* end counter item */}
            {/* start counter item */}
            <div className="col-sm-6 last-paragraph-no-margin counter-style-04 md-mb-35px">
              <h2
                className="vertical-counter d-inline-flex alt-font text-dark-gray fw-700 ls-minus-2px mb-5px"
                data-text="%"
                data-to={98}
              >
                <sup className="text-emerald-green top-minus-5px">
                  <i className="bi bi-arrow-up icon-medium" />
                </sup>
              </h2>
              <span
                className="fs-19 fw-600 ls-minus-05px mb-5px d-block text-dark-gray"
                data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
              >
                Most outsourced tasks
              </span>
              <p
                className="w-90 sm-w-100 md-mx-auto"
                data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 0, "staggervalue": 250, "easing": "easeOutQuad" }'
              >
                Lorem ipsum simply dummy text printing typesetting.
              </p>
            </div>
            {/* end counter item */}
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
              {/* start text slider item */}
              <div className="swiper-slide">
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
                      This is one of the best templates I've came across. Very
                      organized, great design style and easy around.
                    </span>
                  </div>
                  <div className="col-lg-1 d-none d-lg-inline-block">
                    <div className="separator-line w-1px md-w-100 h-60px md-h-1px bg-extra-medium-gray mx-auto" />
                  </div>
                  <div className="col-lg-3 text-center text-lg-start md-mt-15px">
                    <span className="fs-19 ls-minus-05px fw-600 text-dark-gray d-block lh-28">
                      Shoko mugikura
                    </span>
                    <div>Financial manager</div>
                  </div>
                </div>
              </div>
              {/* end text slider item */}
              {/* start text slider item */}
              <div className="swiper-slide">
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
                      This is one of the best templates I've came across. Very
                      organized, great design style and easy around.
                    </span>
                  </div>
                  <div className="col-lg-1 d-none d-lg-inline-block">
                    <div className="separator-line w-1px md-w-100 h-60px md-h-1px bg-extra-medium-gray mx-auto" />
                  </div>
                  <div className="col-lg-3 text-center text-lg-start md-mt-15px">
                    <span className="fs-19 ls-minus-05px fw-600 text-dark-gray d-block lh-28">
                      Matthew taylor
                    </span>
                    <div>Financial manager</div>
                  </div>
                </div>
              </div>
              {/* end text slider item */}
              {/* start text slider item */}
              <div className="swiper-slide">
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
                      This is one of the best templates I've came across. Very
                      organized, great design style and easy around.
                    </span>
                  </div>
                  <div className="col-lg-1 d-none d-lg-inline-block">
                    <div className="separator-line w-1px md-w-100 h-60px md-h-1px bg-extra-medium-gray mx-auto" />
                  </div>
                  <div className="col-lg-3 text-center text-lg-start md-mt-15px">
                    <span className="fs-19 ls-minus-05px fw-600 text-dark-gray d-block lh-28">
                      Herman miller
                    </span>
                    <div>Chief financial</div>
                  </div>
                </div>
              </div>
              {/* end text slider item */}
            </div>
          </div>
        </div>
        <div className="col-lg-2 md-mb-25px">
          <div className="d-flex justify-content-center">
            {/* start slider navigation */}
            <div className="slider-one-slide-prev-1 swiper-button-prev slider-navigation-style-04 bg-very-light-gray">
              <i className="fa-solid fa-arrow-left icon-small text-dark-gray" />
            </div>
            <div className="slider-one-slide-next-1 swiper-button-next slider-navigation-style-04 bg-very-light-gray">
              <i className="fa-solid fa-arrow-right icon-small text-dark-gray" />
            </div>
            {/* end slider navigation */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="pt-0">
    <div className="container">
      <div className="row justify-content-center mb-2">
        <div
          className="col-xxl-5 col-lg-7 col-md-8 text-center"
          data-anime='{ "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
        >
          <h4 className="text-dark-gray fw-700 ls-minus-1px">
            Attractive accounting articles updated daily basis
          </h4>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-12">
          <ul
            className="blog-classic blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
            data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            <li className="grid-sizer" />
            {/* start blog item */}
            <li className="grid-item">
              <div className="card bg-transparent border-0 h-100">
                <div className="blog-image position-relative overflow-hidden border-radius-4px">
                  <a href="demo-accounting-blog-single-creative.html">
                    <img src="https://via.placeholder.com/600x430" alt="" />
                  </a>
                </div>
                <div className="card-body px-0 pt-30px pb-30px xs-pb-15px last-paragraph-no-margin">
                  <a
                    href="demo-accounting-blog-single-creative.html"
                    className="card-title mb-5px fw-600 text-dark-gray d-block"
                  >
                    High returns on investment
                  </a>
                  <p>Lorem ipsum simply dummy printing setting industry...</p>
                </div>
              </div>
            </li>
            {/* end blog item */}
            {/* start blog item */}
            <li className="grid-item">
              <div className="card bg-transparent border-0 h-100">
                <div className="blog-image position-relative overflow-hidden border-radius-4px">
                  <a href="demo-accounting-blog-single-creative.html">
                    <img src="https://via.placeholder.com/600x430" alt="" />
                  </a>
                </div>
                <div className="card-body px-0 pt-30px pb-30px xs-pb-15px last-paragraph-no-margin">
                  <a
                    href="demo-accounting-blog-single-creative.html"
                    className="card-title mb-5px fw-600 text-dark-gray d-block"
                  >
                    Made businesses efficient
                  </a>
                  <p>Lorem ipsum simply dummy printing setting industry...</p>
                </div>
              </div>
            </li>
            {/* end blog item */}
            {/* start blog item */}
            <li className="grid-item">
              <div className="card bg-transparent border-0 h-100">
                <div className="blog-image position-relative overflow-hidden border-radius-4px">
                  <a href="demo-accounting-blog-single-creative.html">
                    <img src="https://via.placeholder.com/600x430" alt="" />
                  </a>
                </div>
                <div className="card-body px-0 pt-30px pb-30px xs-pb-15px last-paragraph-no-margin">
                  <a
                    href="demo-accounting-blog-single-creative.html"
                    className="card-title mb-5px fw-600 text-dark-gray d-block"
                  >
                    Business meeting 2021
                  </a>
                  <p>Lorem ipsum simply dummy printing setting industry...</p>
                </div>
              </div>
            </li>
            {/* end blog item */}
            {/* start blog item */}
            <li className="grid-item">
              <div className="card bg-transparent border-0 h-100">
                <div className="blog-image position-relative overflow-hidden border-radius-4px">
                  <a href="demo-accounting-blog-single-creative.html">
                    <img src="https://via.placeholder.com/600x430" alt="" />
                  </a>
                </div>
                <div className="card-body px-0 pt-30px pb-30px xs-pb-15px last-paragraph-no-margin">
                  <a
                    href="demo-accounting-blog-single-creative.html"
                    className="card-title mb-5px fw-600 text-dark-gray d-block"
                  >
                    Corporate workplace ethics
                  </a>
                  <p>Lorem ipsum simply dummy printing setting industry...</p>
                </div>
              </div>
            </li>
            {/* end blog item */}
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
</>

    </>
  );
}
