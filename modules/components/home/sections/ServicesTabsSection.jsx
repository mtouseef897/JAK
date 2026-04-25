import React from "react";

import { serviceTabs } from "@/modules/components/home/homeData";

const ServicesTabsSection = () => {
  return (
    <section className="bg-very-light-gray pb-0" id="services">
      <div className="container">
        <div className="row mb-8 sm-mb-10">
          <div className="col-12 tab-style-08">
            <div className="tab-content">
              {serviceTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade in ${index === 0 ? "active show" : ""}`}
                  id={tab.id}
                >
                  <div className="row align-items-center justify-content-center g-lg-0">
                    <div
                      className="col-md-6 sm-mb-30px position-relative overflow-hidden"
                      data-anime={
                        tab.animateImage
                          ? '{ "effect": "slide", "color": "#005153", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
                          : undefined
                      }
                    >
                      <img
                        src="https://via.placeholder.com/600x505"
                        alt=""
                        className={tab.imageClassName}
                      />
                      <div
                        className="bg-very-light-gray w-250px position-absolute pt-20px pb-20px ps-25px pe-25px border-radius-4px bottom-30px left-35px box-shadow-large d-flex align-items-center"
                        data-anime={
                          index === 0
                            ? '{ "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 800, "staggervalue": 500, "easing": "easeOutQuad" }'
                            : undefined
                        }
                      >
                        <h2
                          className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px md-ls-minus-1px mb-0 text-nowrap border-end border-1 border-color-transparent-dark-very-light pe-20px me-20px"
                          data-to={tab.metric}
                        />
                        <span className="text-dark-gray ls-minus-05px d-inline-block lh-22">
                          Project completed
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-lg-5 offset-lg-1 col-md-6 text-center text-md-start"
                      data-anime={tab.contentAnimate}
                    >
                      <div className="mb-20px">
                        <div className="separator-line-1px w-50px bg-base-color d-inline-block align-middle me-10px opacity-2" />
                        <span className="d-inline-block text-dark-gray align-middle fw-500 fs-20 ls-minus-05px">
                          {tab.title}
                        </span>
                      </div>
                      <h4 className="fw-700 text-dark-gray ls-minus-1px md-mb-20px">
                        {tab.heading}
                      </h4>
                      <p className="mb-35px md-mb-25px">
                        We provide simplified accounting solutions and
                        qualitative business process services to the customers
                        which helps streamline your business and give your
                        company a competitive.{" "}
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="tab-style-08 border-bottom border-color-extra-medium-gray bg-white box-shadow-quadruple-large">
        <div className="container">
          <ul className="nav nav-tabs border-0 fw-500 fs-19 text-center">
            {serviceTabs.map((tab, index) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  data-bs-toggle="tab"
                  href={`#${tab.id}`}
                  data-tab={index > 0 ? "counter" : undefined}
                >
                  {tab.title}
                  <span className="tab-border bg-base-color" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsSection;
