import React from "react";

const ComingSoonRoute = ({ title, description, children, compact = false }) => {
  const sectionClassName = compact ? "py-2" : "top-space-margin h-screen";

  return (
    <section className={sectionClassName}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 text-center">
            <span className="text-uppercase fs-12 fw-700 text-base-color d-inline-block mb-10px">
              Coming Soon
            </span>
            <h2 className="fw-700 text-dark-gray ls-minus-1px mb-15px">
              {title}
            </h2>
            <p className="mb-30px">
              {description ||
                "We are building this page right now. Please check back soon for detailed content."}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonRoute;
