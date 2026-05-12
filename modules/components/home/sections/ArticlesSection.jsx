import React from "react";

import { blogItems } from "@/modules/components/home/homeData";

const ArticlesSection = () => {
  return (
    <section className="pt-0 mb-5 ">
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
          <div className="col-12  ">
            <ul
              className="blog-classic blog-wrapper grid-loading grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
              data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <li className="grid-sizer" />
              {blogItems.map((item) => (
                <li key={item.title} className="grid-item">
                  <div className="card bg-transparent border-0 h-100">
                    <div className="blog-image position-relative overflow-hidden border-radius-4px">
                      <a href="demo-accounting-blog-single-creative.html">
                        <img src={item.thumbnail} alt="" />
                      </a>
                    </div>
                    <div className="card-body px-0 pt-30px pb-30px xs-pb-15px last-paragraph-no-margin">
                      <a
                        href="demo-accounting-blog-single-creative.html"
                        className="card-title mb-5px fw-600 text-dark-gray d-block"
                      >
                        {item.title}
                      </a>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center items-center">
              <a
                href="/blogs"
                className="btn btn-large btn-rounded with-rounded btn-white btn-box-shadow fw-600 border-2 border-red-400"
              >
                View All Articles
                <span className="bg-base-color text-white">
                  <i className="bi bi-arrow-right-short icon-extra-medium" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
